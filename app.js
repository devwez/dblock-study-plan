/* D Block study dashboard — vanilla JS, no build step. */

const KEY = "dblock-nov-2026-v1";
const DAY_MS = 86400000;
const GAUGE_C = 402.12;

const parse = (s) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const iso = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MONTHS_SHORT = MONTHS.map((m) => m.slice(0, 3));
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const SUBJECT_KEYS = Object.keys(SUBJECTS);
const TOTAL_SECTIONS = SUBJECT_KEYS.reduce((n, k) => n + SUBJECTS[k].sections.length, 0);
const TOTAL_PRACTICE = Object.keys(PRACTICE).length;
const WEIGHT = SUBJECT_KEYS.reduce((n, k) => n + SUBJECTS[k].weight, 0);

/* ---------- state ---------- */

let store = { done: [], notes: {} };
try {
  const raw = localStorage.getItem(KEY);
  if (raw) store = JSON.parse(raw);
} catch (e) {
  /* private mode */
}
const done = new Set(store.done || []);
let selected = null;

const save = () => {
  store.done = [...done];
  store.notes = store.notes || {};
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch (e) {
    /* ignore */
  }
};

/* ---------- helpers ---------- */

const has = (id) => done.has(id);
const setDone = (id, on) => (on ? done.add(id) : done.delete(id));

function blockItems(b) {
  const s = SUBJECTS[b.subject];
  const out = b.sections.map((i) => ({ id: `${b.subject}:s${i}`, label: s.sections[i] }));
  (b.practice || []).forEach((p) => {
    out.push({ id: `${b.subject}:${p}`, label: PRACTICE[`${b.subject}:${p}`] || p });
  });
  return out;
}

function dayItems(date) {
  const day = DAYS[date];
  if (!day || !day.blocks) return [];
  return day.blocks.flatMap(blockItems);
}

function dayStats(date) {
  const items = dayItems(date);
  const n = items.filter((i) => has(i.id)).length;
  return { n, total: items.length, pct: items.length ? (n / items.length) * 100 : 0 };
}

function subjectStats(key) {
  const s = SUBJECTS[key];
  let n = 0;
  s.sections.forEach((_, i) => {
    if (has(`${key}:s${i}`)) n++;
  });
  return { n, total: s.sections.length, pct: (n / s.sections.length) * 100 };
}

function prepScore() {
  let sum = 0;
  SUBJECT_KEYS.forEach((k) => {
    sum += SUBJECTS[k].weight * (subjectStats(k).n / SUBJECTS[k].sections.length);
  });
  return (sum / WEIGHT) * 100;
}

function practiceDone() {
  return Object.keys(PRACTICE).filter((k) => has(k)).length;
}

function daysUntil(dateStr) {
  return Math.round((parse(dateStr) - TODAY) / DAY_MS);
}

function daysLabel(n) {
  if (n < 0) return "done";
  if (n === 0) return "today";
  if (n === 1) return "tomorrow";
  return `in ${n} days`;
}

function examList() {
  return SUBJECT_KEYS.filter((k) => SUBJECTS[k].exam).sort(
    (a, b) => parse(SUBJECTS[a].exam.date) - parse(SUBJECTS[b].exam.date)
  );
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ---------- render: top ---------- */

function renderTop() {
  const nextKey = examList().find((k) => daysUntil(SUBJECTS[k].exam.date) >= 0);
  const el = document.getElementById("nextExam");
  if (!nextKey) {
    el.innerHTML = "<span>Next paper</span><b>All papers written</b>";
    return;
  }
  const e = SUBJECTS[nextKey].exam;
  el.innerHTML = `<span>Next paper</span><b>${SUBJECTS[nextKey].short} · ${daysLabel(daysUntil(e.date))}</b>`;
}

/* ---------- render: KPIs ---------- */

function renderKPIs() {
  const m1 = SUBJECTS.maths1.exam.date;
  const d = daysUntil(m1);
  const score = prepScore();
  const sectionsDone = SUBJECT_KEYS.reduce((n, k) => n + subjectStats(k).n, 0);

  document.getElementById("kpis").innerHTML = `
    <div class="kpi"><span>First paper</span><b>${d < 0 ? "—" : d}<em>${d < 0 ? "" : d === 1 ? "day" : "days"}</em></b></div>
    <div class="kpi"><span>Prep score</span><b>${Math.round(score)}<em>%</em></b></div>
    <div class="kpi"><span>Sections</span><b>${sectionsDone}<em>/ ${TOTAL_SECTIONS}</em></b></div>
    <div class="kpi"><span>Practice papers</span><b>${practiceDone()}<em>/ ${TOTAL_PRACTICE}</em></b></div>
  `;
}

/* ---------- render: calendar ---------- */

function renderCalendar() {
  const cal = document.getElementById("calendar");
  const start = parse(START);
  const end = parse(END);
  const cells = [];

  for (let d = new Date(start); d <= end; d = addDays(d, 1)) {
    const date = iso(d);
    const day = DAYS[date] || {};
    const st = dayStats(date);
    const examKey = day.exam;
    const isRest = !!day.rest;
    const subjects = [...new Set((day.blocks || []).map((b) => b.subject))];
    const classes = ["day"];
    if (examKey) classes.push("exam");
    if (isRest) classes.push("rest");
    if (st.total && st.n === st.total) classes.push("done");
    if (date === iso(TODAY)) classes.push("today");
    if (parse(date) < TODAY) classes.push("past");
    if (selected === date) classes.push("selected");

    const label = examKey
      ? `${SUBJECTS[examKey].short} exam`
      : isRest
      ? "Rest day"
      : subjects.map((s) => SUBJECTS[s].short).join(" + ");

    cells.push(`
      <button class="${classes.join(" ")}" type="button" data-date="${date}"
        aria-label="${WEEKDAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}: ${esc(label)}">
        <span class="dnum">${d.getDate()}</span>
        <span class="mon">${MONTHS_SHORT[d.getMonth()]}</span>
        <span class="dots">${subjects.map((s) => `<i style="--c:${SUBJECTS[s].colour}"></i>`).join("")}</span>
        ${examKey ? `<span class="chip">${SUBJECTS[examKey].short}</span>` : isRest ? `<span class="chip rest">rest</span>` : ""}
        <span class="bar"><i style="width:${st.pct}%"></i></span>
      </button>
    `);
  }

  // pad the last week so the grid stays rectangular
  const endDow = end.getDay() === 0 ? 7 : end.getDay();
  for (let i = endDow; i < 7; i++) cells.push(`<span class="pad" aria-hidden="true"></span>`);

  cal.innerHTML = cells.join("");
}

function updateCell(date) {
  const btn = document.querySelector(`.day[data-date="${date}"]`);
  if (!btn) return;
  const st = dayStats(date);
  const bar = btn.querySelector(".bar i");
  if (bar) bar.style.width = `${st.pct}%`;
  btn.classList.toggle("done", st.total > 0 && st.n === st.total);
}

/* ---------- render: day panel ---------- */

function renderDay(date) {
  const panel = document.getElementById("dayPanel");
  const day = DAYS[date];
  if (!day) {
    panel.innerHTML = `<div class="empty">Pick a day in the calendar.</div>`;
    return;
  }

  const d = parse(date);
  const examKey = day.exam;
  const st = dayStats(date);
  const notes = (store.notes && store.notes[date]) || "";

  if (day.rest) {
    panel.innerHTML = `
      <div class="day-head">
        <div>
          <p class="eyebrow">${WEEKDAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}</p>
          <h2>Rest</h2>
        </div>
      </div>
      <p class="empty">No blocks. Spend <b>30 minutes</b> on the error log only, then stop. Rest is part of the plan, not a gap in it.</p>
      <div class="day-foot">
        <label class="notes"><span>Error log</span><textarea data-note="${date}" placeholder="One mistake from the week, and the fix.">${esc(notes)}</textarea></label>
      </div>
    `;
    return;
  }

  const title = examKey
    ? `${SUBJECTS[examKey].short} paper${day.blocks && day.blocks.length ? " + recovery" : ""}`
    : [...new Set(day.blocks.map((b) => SUBJECTS[b.subject].short))].join(" + ");

  const examBanner = examKey
    ? `<div class="exam-banner">
         <b>${SUBJECTS[examKey].name} · ${SUBJECTS[examKey].exam.duration}</b>
         <span>${SUBJECTS[examKey].exam.time} · ${daysLabel(daysUntil(date))}</span>
       </div>`
    : "";

  const blocks = day.blocks
    .map((b) => {
      const s = SUBJECTS[b.subject];
      const items = blockItems(b);
      const kindLabel = b.kind === "practice" ? "practice" : b.kind === "revision" ? "revision" : b.kind === "recall" ? "light" : "study";
      const dur = b.kind === "recall" ? "30 min" : "50 min";
      return `
        <article class="block" style="--c:${s.colour}">
          <div class="block-head">
            <span class="dot"></span>
            <h3>${s.name}</h3>
            <span class="dur">${dur}</span>
          </div>
          <p class="kind">${kindLabel}</p>
          <ul class="items">
            ${items
              .map(
                (it) => `<li><label><input type="checkbox" data-id="${it.id}" ${has(it.id) ? "checked" : ""}><span>${esc(it.label)}</span></label></li>`
              )
              .join("")}
          </ul>
        </article>`;
    })
    .join("");

  const frame =
    day.blocks.length > 1
      ? `<div class="frame"><span>5 min recall</span><span>2 × 50 min</span><span>10 min break</span><span>5 min error log</span></div>`
      : `<div class="frame"><span>${day.light ? "Light day" : "Exam day"}</span><span>One short session</span><span>Sleep early</span></div>`;

  panel.innerHTML = `
    <div class="day-head">
      <div>
        <p class="eyebrow">${WEEKDAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}</p>
        <h2>${esc(title)}</h2>
      </div>
      <span class="day-score" id="dayScore">${st.n} / ${st.total} done</span>
    </div>
    ${examBanner}
    ${frame}
    <div class="blocks">${blocks}</div>
    <div class="day-foot">
      <label class="notes"><span>Error log — 3 mistakes and the fix</span>
        <textarea data-note="${date}" placeholder="What went wrong, and the rule that fixes it.">${esc(notes)}</textarea>
      </label>
      <button class="btn primary" type="button" id="markAll">${st.total && st.n === st.total ? "Unmark day" : "Mark day done"}</button>
    </div>
  `;
}

/* ---------- render: aside ---------- */

function renderGauge() {
  const score = prepScore();
  const fg = document.getElementById("gaugeFg");
  fg.style.strokeDashoffset = String(GAUGE_C * (1 - score / 100));
  document.getElementById("scoreNum").textContent = String(Math.round(score));
}

function renderSubjects() {
  const wrap = document.getElementById("subjects");
  const list = examList();

  wrap.innerHTML = list
    .map((k) => {
      const s = SUBJECTS[k];
      const st = subjectStats(k);
      const left = st.total - st.n;
      const d = daysUntil(s.exam.date);
      return `
        <div class="subj" style="--c:${s.colour}">
          <div class="subj-top">
            <span class="dot"></span>
            <b>${s.short}</b>
            <span>${st.n}/${st.total}</span>
          </div>
          <div class="track"><i style="width:${st.pct}%"></i><em></em></div>
          <div class="subj-meta">
            <span class="due">exam ${d < 0 ? "done" : daysLabel(d)}</span>
            <span>${left} left</span>
          </div>
        </div>`;
    })
    .join("");

  const doneAll = SUBJECT_KEYS.reduce((n, k) => n + subjectStats(k).n, 0);
  document.getElementById("sectionCount").textContent = `${doneAll} / ${TOTAL_SECTIONS}`;
}

function renderExams() {
  const list = examList();
  document.getElementById("exams").innerHTML = list
    .map((k) => {
      const s = SUBJECTS[k];
      const d = parse(s.exam.date);
      const left = daysUntil(s.exam.date);
      return `
        <li class="${left < 0 ? "done" : ""}">
          <span class="d">${d.getDate()} ${MONTHS_SHORT[d.getMonth()]}</span>
          <span class="n">${s.short}<small>${s.name}</small></span>
          <span class="t">${s.exam.time}</span>
        </li>`;
    })
    .join("");
}

function renderPace() {
  const score = prepScore();
  const start = parse(START);
  const end = parse(END);
  const totalDays = Math.round((end - start) / DAY_MS) + 1;
  const elapsed = Math.min(totalDays, Math.max(0, Math.round((TODAY - start) / DAY_MS) + 1));
  const expected = (elapsed / totalDays) * 100;
  const diff = score - expected;

  let status = "On track";
  let cls = "good";
  if (diff < -7) {
    status = "Behind";
    cls = "warn";
  } else if (diff > 7) {
    status = "Ahead";
    cls = "good";
  } else if (diff < -2) {
    status = "Slightly behind";
    cls = "warn";
  }

  const sectionsDone = SUBJECT_KEYS.reduce((n, k) => n + subjectStats(k).n, 0);
  const left = TOTAL_SECTIONS - sectionsDone;
  const daysLeft = Math.max(1, Math.round((parse(END) - TODAY) / DAY_MS) + 1);
  const perDay = (left / daysLeft).toFixed(1);

  document.getElementById("pacePill").textContent = status;
  document.getElementById("pacePill").className = `pill ${cls}`;

  document.getElementById("pacePanel").innerHTML = `
    <div class="panel-head tight"><h2>Pace</h2></div>
    <p><strong>${status}.</strong> ${diff >= 0 ? "You are" : "You are"} ${Math.abs(Math.round(diff))} points
    ${diff >= 0 ? "ahead of" : "behind"} the straight-line plan${score < 1 ? ". Tick the first section to start the clock." : "."}</p>
    <div class="pace-grid">
      <div><span>Days left</span><b>${daysLeft}</b></div>
      <div><span>Sections left</span><b>${left}</b></div>
      <div><span>Needed / day</span><b>${perDay}</b></div>
      <div><span>Practice left</span><b>${TOTAL_PRACTICE - practiceDone()}</b></div>
    </div>
  `;
}

/* ---------- render all ---------- */

function renderAll() {
  renderTop();
  renderKPIs();
  renderCalendar();
  renderGauge();
  renderSubjects();
  renderExams();
  renderPace();
  renderDay(selected);
}

/* ---------- events ---------- */

document.getElementById("calendar").addEventListener("click", (e) => {
  const btn = e.target.closest(".day");
  if (!btn) return;
  selected = btn.dataset.date;
  document.querySelectorAll(".day.selected").forEach((el) => el.classList.remove("selected"));
  btn.classList.add("selected");
  renderDay(selected);
  if (window.innerWidth < 760) {
    document.getElementById("dayPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

document.getElementById("dayPanel").addEventListener("change", (e) => {
  const input = e.target.closest("input[type=checkbox]");
  if (!input) return;
  setDone(input.dataset.id, input.checked);
  save();

  const date = selected;
  const st = dayStats(date);
  const score = document.getElementById("dayScore");
  if (score) score.textContent = `${st.n} / ${st.total} done`;
  updateCell(date);

  const mark = document.getElementById("markAll");
  if (mark) mark.textContent = st.total && st.n === st.total ? "Unmark day" : "Mark day done";

  renderKPIs();
  renderGauge();
  renderSubjects();
  renderPace();
});

document.getElementById("dayPanel").addEventListener("input", (e) => {
  const ta = e.target.closest("textarea[data-note]");
  if (!ta) return;
  store.notes = store.notes || {};
  store.notes[ta.dataset.note] = ta.value;
  save();
});

document.getElementById("dayPanel").addEventListener("click", (e) => {
  const btn = e.target.closest("#markAll");
  if (!btn) return;
  const items = dayItems(selected);
  const all = items.length && items.every((i) => has(i.id));
  items.forEach((i) => setDone(i.id, !all));
  save();
  renderDay(selected);
  renderKPIs();
  renderGauge();
  renderSubjects();
  renderPace();
  updateCell(selected);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Clear every tick and every note? This cannot be undone.")) return;
  done.clear();
  store = { done: [], notes: {} };
  save();
  renderAll();
});

/* ---------- boot ---------- */

(function boot() {
  const today = iso(TODAY);
  if (DAYS[today]) selected = today;
  else if (parse(START) > TODAY) selected = START;
  else selected = END;

  renderAll();

  if (parse(START) <= TODAY && parse(END) >= TODAY) {
    const cell = document.querySelector(`.day[data-date="${selected}"]`);
    if (cell) cell.classList.add("selected");
  }
})();
