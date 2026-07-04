# DSA Interview Prep Tracker

6-month interview preparation tracker covering DSA, HLD, LLD, Code Review, Machine Coding, and Behavioral rounds. Targets: Airbnb & DoorDash.

## How to open

Double-click `index.html` — opens directly in Chrome, Firefox, or any browser. No server needed.

> **Note:** Progress is saved in your browser's `localStorage`. It persists across sessions as long as you open the same file from the same path.

---

## Project structure

```
tracker/
├── index.html          ← HTML skeleton (rarely needs editing)
├── css/
│   └── styles.css      ← All colors, fonts, layout — edit to retheme
├── js/
│   └── app.js          ← Rendering & state logic (rarely needs editing)
├── data/
│   └── plan.js         ← ALL CONTENT LIVES HERE — edit this to update the tracker
└── README.md
```

---

## How to edit content (`data/plan.js`)

### Add a new task to a week
Find the week, add an object to its `tasks` array:
```js
{
  text: "[DSA] Your new task description",
  links: [
    { t: "lc",  label: "LC #1 Two Sum", url: "https://leetcode.com/problems/two-sum/" },
    { t: "ref", label: "Article name",  url: "https://example.com" }
  ]
}
```

### Add a new week to a month
Find the month, add an object to its `weeks` array:
```js
{
  label:  "Week X",
  title:  "Your week title",
  badges: ["dsa", "lld"],   // see badge keys below
  tasks:  [ /* task objects */ ],
  resources: [
    { label: "Resource name", url: "https://example.com" }
  ]
}
```

### Add a new month
Append a new object to the `PLAN` array following the existing month structure.

---

## Badge keys

| Key    | Label         | Color  |
|--------|---------------|--------|
| `dsa`  | DSA           | Blue   |
| `sd`   | HLD           | Green  |
| `lld`  | LLD           | Pink   |
| `cr`   | Code Review   | Orange |
| `mc`   | Machine Coding| Sky    |
| `beh`  | Behavioral    | Amber  |
| `mock` | Mock          | Purple |

---

## Link types (`t` field)

| Type  | Style       | Use for             |
|-------|-------------|---------------------|
| `lc`  | Blue pill   | LeetCode problems   |
| `nc`  | Light blue  | Neetcode problems   |
| `gh`  | Gray pill   | GitHub repos        |
| `ref` | Subtle gray | Articles, docs, books|
| `yt`  | Red pill    | YouTube videos      |

---

## Retheme (colors)

All colors are in `css/styles.css`. The key variables to change:

| Selector        | What it controls         |
|-----------------|--------------------------|
| `body`          | Page background (`#0f1117`) |
| `.week-card`    | Card background          |
| `.tab.active`   | Active tab color         |
| `.check.done`   | Checked checkbox color   |
| `.pbar-fill`    | Progress bar fill        |
| `.b-dsa`, etc.  | Badge colors per track   |
