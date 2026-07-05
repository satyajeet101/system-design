/**
 * app.js — Tracker logic: rendering, state management, localStorage.
 *
 * This file reads from PLAN (defined in data/plan.js) and renders
 * the full UI. You should not need to edit this file when updating
 * tracker content — edit data/plan.js instead.
 */

// ─── Badge config ───────────────────────────────────────────
const BADGE_CFG = {
  dsa:  { cls: "b-dsa",  lbl: "DSA"          },
  sd:   { cls: "b-sd",   lbl: "HLD"          },
  beh:  { cls: "b-beh",  lbl: "Behavioral"   },
  mock: { cls: "b-mock", lbl: "Mock"         },
  lld:  { cls: "b-lld",  lbl: "LLD"          },
  cr:   { cls: "b-cr",   lbl: "Code Review"  },
  mc:   { cls: "b-mc",   lbl: "Machine Coding"},
};

// Link type → CSS class
const LINK_CLS = {
  lc:  "tlink-lc",
  nc:  "tlink-nc",
  gh:  "tlink-gh",
  ref: "tlink-ref",
  yt:  "tlink-yt",
  hi:  "tlink-hi",
};

// ─── State ──────────────────────────────────────────────────
let currentMonth = 0;
let checked = {};

(function loadState() {
  try {
    const saved = localStorage.getItem("dsa_tracker_v5");
    if (saved) checked = JSON.parse(saved);
  } catch (e) { /* ignore */ }
})();

function saveState() {
  try { localStorage.setItem("dsa_tracker_v5", JSON.stringify(checked)); }
  catch (e) { /* ignore */ }
}

// ─── Helpers ────────────────────────────────────────────────
function totalAll() {
  return PLAN.reduce((a, m) => a + m.weeks.reduce((b, w) => b + w.tasks.length, 0), 0);
}

function doneAll() {
  return Object.values(checked).filter(Boolean).length;
}

function monthStats(mi) {
  let total = 0, done = 0;
  PLAN[mi].weeks.forEach((w, wi) => {
    w.tasks.forEach((_, ti) => {
      total++;
      if (checked[`${mi}_${wi}_${ti}`]) done++;
    });
  });
  return { total, done };
}

// ─── Interactions ────────────────────────────────────────────
function toggle(key) {
  checked[key] = !checked[key];
  saveState();
  render();
}

function goMonth(i) {
  if (i < 0 || i >= PLAN.length) return;
  currentMonth = i;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ─── Render helpers ──────────────────────────────────────────
function renderLinks(links) {
  if (!links || !links.length) return "";
  const pills = links.map(l => {
    const cls = LINK_CLS[l.t] || "tlink-ref";
    return `<a class="tlink ${cls}" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`;
  }).join("");
  return `<div class="task-links">${pills}</div>`;
}

function renderResources(resources) {
  if (!resources || !resources.length) return "";
  const links = resources.map(r =>
    `<a class="res-link" href="${r.url}" target="_blank" rel="noopener noreferrer">${r.label}</a>`
  ).join("");
  return `<div class="resources"><span class="res-label">References</span>${links}</div>`;
}

function renderWeek(w, wi) {
  const badges = w.badges.map(b => {
    const cfg = BADGE_CFG[b] || { cls: "b-dsa", lbl: b };
    return `<span class="badge ${cfg.cls}">${cfg.lbl}</span>`;
  }).join("");

  const tasks = w.tasks.map((task, ti) => {
    const key    = `${currentMonth}_${wi}_${ti}`;
    const isDone = !!checked[key];
    return `
      <div class="task">
        <div class="check${isDone ? " done" : ""}" onclick="toggle('${key}')">${isDone ? "✓" : ""}</div>
        <div class="task-content">
          <div class="task-text${isDone ? " done" : ""}" onclick="toggle('${key}')">${task.text}</div>
          ${renderLinks(task.links)}
        </div>
      </div>`;
  }).join("");

  return `
    <div class="week-card">
      <div class="week-top">
        <span class="week-label">${w.label}</span>
        <span class="week-title">${w.title}</span>
        <span class="badges">${badges}</span>
      </div>
      <div class="tasks">${tasks}</div>
      ${renderResources(w.resources)}
    </div>`;
}

// ─── Main render ─────────────────────────────────────────────
function render() {
  const ta = totalAll(), da = doneAll();
  const { total: mt, done: md } = monthStats(currentMonth);
  const weeksLeft = PLAN.length * 4 - currentMonth * 4;

  // Stats
  document.getElementById("stats").innerHTML = `
    <div class="stat"><div class="stat-num">${md}/${mt}</div><div class="stat-lbl">This month</div></div>
    <div class="stat"><div class="stat-num">${da}/${ta}</div><div class="stat-lbl">All tasks</div></div>
    <div class="stat"><div class="stat-num">${Math.round(da / ta * 100)}%</div><div class="stat-lbl">Overall %</div></div>
    <div class="stat"><div class="stat-num">${weeksLeft}</div><div class="stat-lbl">Weeks left</div></div>
    <div class="stat"><div class="stat-num">${ta - da}</div><div class="stat-lbl">Remaining</div></div>`;

  // Tabs
  document.getElementById("tabs").innerHTML = PLAN.map((_, i) => {
    const { total, done } = monthStats(i);
    const full = done === total && total > 0;
    let cls = "tab";
    if (i === currentMonth) cls += " active";
    if (full) cls += " done-tab";
    return `<button class="${cls}" onclick="goMonth(${i})">Month ${i + 1}${full ? " ✓" : ""}</button>`;
  }).join("");

  // Month header
  const m = PLAN[currentMonth];
  const pct = mt ? Math.round(md / mt * 100) : 0;
  document.getElementById("month-title").textContent = m.title;
  document.getElementById("month-goal").textContent  = m.goal;
  document.getElementById("pct-label").textContent   = `${pct}% complete`;
  document.getElementById("pbar-fill").style.width   = pct + "%";

  // Complete banner
  const banner = document.getElementById("complete-banner");
  banner.style.display = (pct === 100 && currentMonth < PLAN.length - 1) ? "block" : "none";

  // Weeks
  document.getElementById("weeks").innerHTML = m.weeks.map((w, wi) => renderWeek(w, wi)).join("");

  // Nav buttons
  document.getElementById("prev-btn").disabled = currentMonth === 0;
  document.getElementById("next-btn").disabled = currentMonth === PLAN.length - 1;
}

// ─── Boot ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", render);
