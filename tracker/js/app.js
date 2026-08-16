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
  // Backend Interview badges
  java:   { cls: "b-java",   lbl: "Java"        },
  spring: { cls: "b-spring", lbl: "Spring Boot" },
  kafka:  { cls: "b-kafka",  lbl: "Kafka"       },
  aws:    { cls: "b-aws",    lbl: "AWS"         },
  sql:    { cls: "b-sql",    lbl: "SQL"         },
  redis:  { cls: "b-redis",  lbl: "Redis"       },
  cicd:   { cls: "b-cicd",   lbl: "CI/CD"       },
  msa:    { cls: "b-msa",    lbl: "Microservices"},
};

// Link type → CSS class
const LINK_CLS = {
  lc:  "tlink-lc",
  nc:  "tlink-nc",
  gh:  "tlink-gh",
  ref: "tlink-ref",
  yt:  "tlink-yt",
  hi:  "tlink-hi",
  doc: "tlink-doc",
};

const LEGENDS = {
  tech: `
    <span class="leg"><span class="leg-dot" style="background:#1d4ed8"></span>DSA</span>
    <span class="leg"><span class="leg-dot" style="background:#166534"></span>HLD System Design</span>
    <span class="leg"><span class="leg-dot" style="background:#9f1239"></span>LLD</span>
    <span class="leg"><span class="leg-dot" style="background:#9a3412"></span>Code Review</span>
    <span class="leg"><span class="leg-dot" style="background:#0369a1"></span>Machine Coding</span>
    <span class="leg"><span class="leg-dot" style="background:#92400e"></span>Behavioral</span>
    <span class="leg"><span class="leg-dot" style="background:#6b21a8"></span>Mock Interview</span>
    <span class="leg"><span class="leg-dot" style="background:#78716c"></span>Java</span>
    <span class="leg"><span class="leg-dot" style="background:#0f766e"></span>Spring Boot</span>
    <span class="leg"><span class="leg-dot" style="background:#4338ca"></span>Kafka</span>
    <span class="leg"><span class="leg-dot" style="background:#a16207"></span>AWS</span>
    <span class="leg"><span class="leg-dot" style="background:#0e7490"></span>SQL</span>
    <span class="leg"><span class="leg-dot" style="background:#b91c1c"></span>Redis</span>
    <span class="leg"><span class="leg-dot" style="background:#7c3aed"></span>CI/CD</span>
    <span class="leg"><span class="leg-dot" style="background:#be185d"></span>Microservices</span>
  `,
  ai: `
    <span class="leg"><span class="leg-dot" style="background:#166534"></span>HLD System Design</span>
  `,
  backend: `
    <span class="leg"><span class="leg-dot" style="background:#78716c"></span>Java</span>
    <span class="leg"><span class="leg-dot" style="background:#0f766e"></span>Spring Boot</span>
    <span class="leg"><span class="leg-dot" style="background:#4338ca"></span>Kafka</span>
    <span class="leg"><span class="leg-dot" style="background:#a16207"></span>AWS</span>
    <span class="leg"><span class="leg-dot" style="background:#0e7490"></span>SQL</span>
    <span class="leg"><span class="leg-dot" style="background:#b91c1c"></span>Redis</span>
    <span class="leg"><span class="leg-dot" style="background:#7c3aed"></span>CI/CD</span>
    <span class="leg"><span class="leg-dot" style="background:#be185d"></span>Microservices</span>
  `
};

// ─── State ──────────────────────────────────────────────────
const CATEGORIES = [
  { id: "tech",    label: "Tech Prep" },
  { id: "ai",      label: "AI Prep" },
  { id: "backend", label: "Backend Interview" }
];

let currentCategory = "tech";
let currentMonth = 0;
let checked = {};

(function loadState() {
  try {
    const saved = localStorage.getItem("prep_tracker_v2") || localStorage.getItem("dsa_tracker_v5");
    if (saved) {
      const parsed = JSON.parse(saved);
      checked = {};
      for (const key in parsed) {
        if (!Object.prototype.hasOwnProperty.call(parsed, key)) continue;
        const parts = key.split("_");
        if (parts.length === 3) {
          checked[`tech_${key}`] = parsed[key];
        } else {
          checked[key] = parsed[key];
        }
      }
    }
  } catch (e) { /* ignore */ }
})();

function saveState() {
  try { localStorage.setItem("prep_tracker_v2", JSON.stringify(checked)); }
  catch (e) { /* ignore */ }
}

// ─── Helpers ────────────────────────────────────────────────
function getPlan() {
  if (currentCategory === "ai") return AI_PLAN;
  if (currentCategory === "backend") return BACKEND_PLAN;
  return PLAN;
}

function totalAll(plan) {
  return plan.reduce((a, m) => a + m.weeks.reduce((b, w) => b + w.tasks.length, 0), 0);
}

function doneAll(plan) {
  let done = 0;
  plan.forEach((m, mi) => {
    m.weeks.forEach((w, wi) => {
      w.tasks.forEach((_, ti) => {
        if (checked[`${currentCategory}_${mi}_${wi}_${ti}`]) done++;
      });
    });
  });
  return done;
}

function monthStats(plan, mi) {
  let total = 0, done = 0;
  plan[mi].weeks.forEach((w, wi) => {
    w.tasks.forEach((_, ti) => {
      total++;
      if (checked[`${currentCategory}_${mi}_${wi}_${ti}`]) done++;
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

function switchCategory(category) {
  if (currentCategory === category) return;
  currentCategory = category;
  currentMonth = 0;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goMonth(i) {
  const plan = getPlan();
  if (i < 0 || i >= plan.length) return;
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
    const key    = `${currentCategory}_${currentMonth}_${wi}_${ti}`;
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
  const plan = getPlan();
  const ta = totalAll(plan);
  const da = doneAll(plan);
  const { total: mt, done: md } = monthStats(plan, currentMonth);
  const weeksLeft = plan.length * 4 - currentMonth * 4;

  // Stats
  document.getElementById("stats").innerHTML = `
    <div class="stat"><div class="stat-num">${md}/${mt}</div><div class="stat-lbl">This month</div></div>
    <div class="stat"><div class="stat-num">${da}/${ta}</div><div class="stat-lbl">All tasks</div></div>
    <div class="stat"><div class="stat-num">${Math.round(da / ta * 100)}%</div><div class="stat-lbl">Overall %</div></div>
    <div class="stat"><div class="stat-num">${weeksLeft}</div><div class="stat-lbl">Weeks left</div></div>
    <div class="stat"><div class="stat-num">${ta - da}</div><div class="stat-lbl">Remaining</div></div>`;

  // Category tabs
  document.getElementById("category-tabs").innerHTML = CATEGORIES.map(c => {
    let cls = "tab";
    if (c.id === currentCategory) cls += " active";
    return `<button class="${cls}" onclick="switchCategory('${c.id}')">${c.label}</button>`;
  }).join("");

  // Month tabs
  document.getElementById("tabs").innerHTML = plan.map((_, i) => {
    const { total, done } = monthStats(plan, i);
    const full = done === total && total > 0;
    let cls = "tab";
    if (i === currentMonth) cls += " active";
    if (full) cls += " done-tab";
    return `<button class="${cls}" onclick="goMonth(${i})">Month ${i + 1}${full ? " ✓" : ""}</button>`;
  }).join("");

  // Month header
  const m = plan[currentMonth];
  const pct = mt ? Math.round(md / mt * 100) : 0;
  document.getElementById("month-title").textContent = m.title;
  document.getElementById("month-goal").textContent  = m.goal;
  document.getElementById("pct-label").textContent   = `${pct}% complete`;
  document.getElementById("pbar-fill").style.width   = pct + "%";

  // Complete banner
  const banner = document.getElementById("complete-banner");
  banner.style.display = (pct === 100 && currentMonth < plan.length - 1) ? "block" : "none";

  // Weeks
  document.getElementById("weeks").innerHTML = m.weeks.map((w, wi) => renderWeek(w, wi)).join("");

  const legendEl = document.getElementById("legend");
  if (legendEl) {
    if (currentCategory === "tech") {
      legendEl.innerHTML = LEGENDS.tech;
      legendEl.style.display = "flex";
    } else if (currentCategory === "ai") {
      legendEl.innerHTML = LEGENDS.ai;
      legendEl.style.display = "flex";
    } else if (currentCategory === "backend") {
      legendEl.innerHTML = LEGENDS.backend;
      legendEl.style.display = "flex";
    } else {
      legendEl.style.display = "none";
    }
  }

  // Nav buttons
  document.getElementById("prev-btn").disabled = currentMonth === 0;
  document.getElementById("next-btn").disabled = currentMonth === plan.length - 1;
}

// ─── Boot ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", render);
