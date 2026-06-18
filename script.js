/* ============================================================
   TrollRunner Garden Log — content data + interactivity
   ------------------------------------------------------------
   HOW TO ADD A NEW PHOTO/PLANT:
   1. Drop the image in /images (and a smaller copy in /images/thumbs).
   2. Add an object to the PLANTS array below. Done — it shows up in
      the Plant Gallery automatically and can be reused in timelines,
      journal entries and the garden map.
   ============================================================ */

/* ---- 1. PLANT GALLERY DATA ---------------------------------- */
const PLANTS = [
  {
    id: "aloe",
    name: "Aloe / Agave Patrol",
    category: "Succulents",
    date: "2026-06-14",
    stage: "Established",
    img: "images/aloe.jpeg",
    thumb: "images/thumbs/aloe.jpeg",
    caption: "The spiky bodyguard of the garden bed.",
    notes: "Lives by the wall, gets full sun, basically ignores me. Thrives on neglect — the dream tenant.",
    tags: ["succulent", "full-sun", "low-water", "outdoor"]
  },
  {
    id: "roses",
    name: "Rose Patch",
    category: "Flowers",
    date: "2026-06-12",
    stage: "Flowering",
    img: "images/roses.jpeg",
    thumb: "images/thumbs/roses.jpeg",
    caption: "Pink chaos in full bloom.",
    notes: "Big magenta blooms going off all at once. A few spent heads to deadhead, otherwise loving the heat.",
    tags: ["flowers", "blooming", "pollinators", "outdoor"]
  },
  {
    id: "pomegranate",
    name: "Pomegranate #1",
    category: "Fruit plants",
    date: "2026-06-15",
    stage: "Fruiting",
    img: "images/pomegranate.jpeg",
    thumb: "images/thumbs/pomegranate.jpeg",
    caption: "First tiny pom forming!",
    notes: "Spotted the first little red fruit set behind the leaves. Glove cam for scale. We are officially a pomegranate farm now.",
    tags: ["fruit", "fruiting", "first-fruit", "outdoor"]
  },
  {
    id: "apricots",
    name: "Apricot Tree",
    category: "Fruit plants",
    date: "2026-06-13",
    stage: "Fruiting",
    img: "images/apricots.jpeg",
    thumb: "images/thumbs/apricots.jpeg",
    caption: "Green apricots loading...",
    notes: "Clusters of unripe apricots all over the branches. Now begins the daily 'are they ready yet' patrol.",
    tags: ["fruit", "tree", "fruiting", "stone-fruit"]
  },
  {
    id: "mystery-tree",
    name: "Mystery Sapling",
    category: "Mystery plants",
    date: "2026-06-11",
    stage: "Vegetative",
    img: "images/mystery-tree.jpeg",
    thumb: "images/thumbs/mystery-tree.jpeg",
    caption: "Tall, leafy, gloriously unidentified.",
    notes: "Standing tall in the corner bed against the brick. Honestly not 100% sure what it is yet — that's why it's in Mystery Plants. ID help welcome.",
    tags: ["mystery", "tree", "vegetative", "outdoor"]
  },
  {
    id: "transplant",
    name: "Repot Day",
    category: "Garden setup",
    date: "2026-06-10",
    stage: "Transplanting",
    img: "images/transplant.jpeg",
    thumb: "images/thumbs/transplant.jpeg",
    caption: "Rootball out, new home incoming.",
    notes: "Slid this one out of its nursery pot — roots looked healthy, not too pot-bound. Loosened them up before moving to a bigger container.",
    tags: ["transplanting", "roots", "container", "setup"]
  },
  {
    id: "garden-setup",
    name: "The Starting Lineup",
    category: "Garden setup",
    date: "2026-06-09",
    stage: "Setup",
    img: "images/garden-setup.jpeg",
    thumb: "images/thumbs/garden-setup.jpeg",
    caption: "Pots, seedlings & a drip line down the bed.",
    notes: "Whole row of containers staged along the raised brick bed with the drip hose run out. This is base camp for the 2026 season.",
    tags: ["setup", "containers", "irrigation", "seedlings"]
  }
];

/* ---- 2. GROWTH TIMELINES ----------------------------------- */
const TIMELINES = [
  {
    title: "Pomegranate Plant #1",
    sub: "From a stick in the dirt to the first red fruit.",
    nodes: [
      { wk: "Wk 1", lbl: "Planted",       state: "done", ico: "🌱" },
      { wk: "Wk 3", lbl: "New leaves",     state: "done", ico: "🍃" },
      { wk: "Wk 6", lbl: "Bushing out",    state: "done", ico: "🌿" },
      { wk: "Wk 9", lbl: "First flowers",  state: "done", ico: "🌺" },
      { wk: "Now",  lbl: "First fruit set", state: "now",  img: "pomegranate" },
      { wk: "Soon", lbl: "Ripe pom",       state: "todo", ico: "🍎" }
    ]
  },
  {
    title: "Apricot Tree",
    sub: "Spring blossoms turning into a summer fruit haul.",
    nodes: [
      { wk: "Early", lbl: "Bare branches", state: "done", ico: "🌳" },
      { wk: "Spring",lbl: "Blossoms",      state: "done", ico: "🌸" },
      { wk: "Set",   lbl: "Fruit set",     state: "done", ico: "🟢" },
      { wk: "Now",   lbl: "Green apricots", state: "now",  img: "apricots" },
      { wk: "Soon",  lbl: "Ripe & golden", state: "todo", ico: "🍑" },
      { wk: "Goal",  lbl: "Harvest basket", state: "todo", ico: "🧺" }
    ]
  },
  {
    title: "Container Bed Build-Out",
    sub: "Turning a row of empty pots into a working garden.",
    nodes: [
      { wk: "Day 1", lbl: "Pots staged",    state: "now",  img: "garden-setup" },
      { wk: "Day 2", lbl: "Repotting",      state: "done", img: "transplant" },
      { wk: "Day 3", lbl: "Drip line run",  state: "done", ico: "💧" },
      { wk: "Wk 2",  lbl: "Seedlings in",   state: "todo", ico: "🌱" },
      { wk: "Wk 6",  lbl: "Filling in",     state: "todo", ico: "🌿" }
    ]
  }
];

/* ---- 3. GARDEN JOURNAL ------------------------------------- */
const JOURNAL = [
  {
    title: "First Pomegranate Is Forming!",
    date: "2026-06-15",
    cat: "Pomegranate",
    img: "pomegranate",
    body: "Was doing the usual leaf-flip inspection and BAM — a tiny red pomegranate hiding behind the foliage. Put a gloved hand in for scale. One fruit and suddenly I'm planning the harvest festival.",
    lesson: "Check UNDER and BEHIND the leaves. The good stuff hides where you don't look.",
    stage: "Fruiting"
  },
  {
    title: "Apricot Watch Has Begun",
    date: "2026-06-13",
    cat: "Apricots",
    img: "apricots",
    body: "The apricot tree is absolutely loaded with little green fruit. Resisting the urge to pick one early to 'test' it (they're rock hard and sour right now — learned that lesson on a different tree).",
    lesson: "Green stone fruit is not 'almost ready', it's 'leave it alone'. Patience = sweetness.",
    stage: "Fruiting"
  },
  {
    title: "Repot Day: Don't Fear the Rootball",
    date: "2026-06-10",
    cat: "Transplanting",
    img: "transplant",
    body: "Moved a plant up to a bigger pot. Tipped it sideways, supported the base, and it slid right out. Roots were white and healthy, circling just slightly, so I teased the outer ones loose before settling it into fresh mix.",
    lesson: "Water the plant a few hours BEFORE transplanting — a hydrated rootball holds together and slides out clean.",
    stage: "Transplanting"
  },
  {
    title: "My First Garden Setup",
    date: "2026-06-09",
    cat: "Garden setup",
    img: "garden-setup",
    body: "Day one of the 2026 season. Lined up every container along the raised brick bed, ran the drip hose down the row, and stood back feeling like a genius. The dirt doesn't know yet what it's in for.",
    lesson: "Lay out your pots and irrigation BEFORE planting. Way easier to redesign a bed when nothing's in the ground.",
    stage: "Setup"
  },
  {
    title: "The Aloe That Refuses To Die",
    date: "2026-06-14",
    cat: "Succulents",
    img: "aloe",
    body: "Meanwhile, by the wall, the aloe/agave just keeps vibing. Full sun, almost no water, zero attention from me, and it looks better than half the stuff I baby daily. Humbling, honestly.",
    lesson: "Right plant, right spot. A tough plant in the correct location beats a fussy plant you fight with daily.",
    stage: "Established"
  }
];

/* ---- 4. GARDENING TIPS ------------------------------------- */
const TIPS = [
  { topic: "Watering",      ico: "💧", title: "Water deep, not often", body: "A long soak a couple times a week beats a daily sprinkle. Deep watering pushes roots down where it's cooler and wetter. Shallow daily splashes train lazy surface roots." },
  { topic: "Overwatering",  ico: "🌊", title: "Soggy soil drowns roots", body: "Roots need air too. If the topsoil is still wet, wait. Yellow droopy leaves on wet soil usually means too much water, not too little. Stick a finger 2 inches down before reaching for the can." },
  { topic: "Underwatering", ico: "🥵", title: "Crispy = thirsty", body: "Wilting in the morning, dry soil, crispy leaf edges = give it a drink. Containers dry out way faster than the ground, especially in heat." },
  { topic: "Sunlight",      ico: "☀️", title: "Know your hours", body: "'Full sun' means 6+ hours of direct light. Watch where the shadows fall across your space over a day before committing a plant to a spot." },
  { topic: "Soil",          ico: "🪴", title: "Drainage is everything", body: "Most beginner plant deaths trace back to soil that holds too much water. Use a fluffy mix and make sure every container has drainage holes." },
  { topic: "Fertilizer",    ico: "🧪", title: "Less is more", body: "Follow the label, then use half. Burning a plant with too much fertilizer is easier (and faster) than starving it. Feed during active growth, ease off in dormancy." },
  { topic: "Transplanting", ico: "🤲", title: "Hydrate, then move", body: "Water a plant a few hours before repotting so the rootball stays together. Loosen circling roots, plant at the same depth, water in well." },
  { topic: "Pest Control",  ico: "🐛", title: "Catch it early", body: "Scout often. A blast of water knocks off aphids; insecticidal soap handles the stubborn ones. The bug you squish today is 200 you don't fight next week." },
  { topic: "Seed Starting", ico: "🌱", title: "Warmth then light", body: "Seeds need warmth and moisture to germinate — but the SECOND they sprout, they need bright light or they stretch into sad leggy noodles." },
  { topic: "Heat Stress",   ico: "🔥", title: "Shade the afternoon", body: "In a heat wave, plants wilt to protect themselves. Water early morning and toss some shade cloth over the most sensitive ones during peak afternoon sun." },
  { topic: "Pruning",       ico: "✂️", title: "Cut with a plan", body: "Remove dead, damaged, and crossing branches first. Good airflow means fewer diseases. Don't take more than about a third of a plant at once." },
  { topic: "Harvesting",    ico: "🧺", title: "Pick to keep picking", body: "Many plants (herbs, beans, peppers) produce MORE the more you harvest. Regular picking tells the plant to keep going." }
];

/* ---- 5. MEME GARDEN CORNER --------------------------------- */
const MEMES = [
  { cat: "Sprout memes",   face: "😈", cap: "When the seed finally sprouts after 3 weeks of you assuming it was dead." },
  { cat: "Beginner memes", face: "😏", cap: "Me checking the garden 14 times a day like the plants moved." },
  { cat: "Harvest memes",  face: "😈", cap: "One tomato grows and now I'm basically a fourth-generation farmer." },
  { cat: "Plant drama",    face: "🥲", cap: "When you overwater ONCE and the plant acts like you betrayed the bloodline." },
  { cat: "Plant drama",    face: "😵", cap: "When the basil starts wilting for absolutely no reason and refuses to explain itself." },
  { cat: "Pest memes",     face: "⚔️", cap: "Me fighting aphids like it's the final boss of the season." },
  { cat: "Beginner memes", face: "😎", cap: "When the plant survives even though I had no idea what I was doing." },
  { cat: "Plant drama",    face: "🙃", cap: "That one plant that grows better the more I completely ignore it." },
  { cat: "Watering memes", face: "💧", cap: "'Just water it when the soil is dry' — me, staring at the soil, unable to read its emotions." },
  { cat: "Harvest memes",  face: "🤑", cap: "Spent $80 on supplies to grow $4 of tomatoes. Worth it." }
];

/* sarcastic one-liners the mascot rotates through */
const MASCOT_LINES = [
  "Pro tip: the plant can't hear you, but talk to it anyway. It helps YOU.",
  "You don't have a black thumb. You have an overwatering problem. We all do.",
  "Stop poking the seed to 'check on it.' It's working. Probably.",
  "The weeds are thriving because YOU planted those, deep down.",
  "Real gardeners kill plants. Lots of them. Welcome to the club.",
  "Water in the morning, not at noon. The sun is undefeated.",
  "If you can't ID it, it's a 'feature plant' now. Confidence is key."
];

/* ---- 6. INTERACTIVE GARDEN MAP ----------------------------- */
const MAP_PLOTS = [
  { ico: "🍅", label: "Tomato Bed",   cls: "",       plant: null,           note: "Reserved for the 2026 tomato squad. Currently dirt with big dreams." },
  { ico: "🌶️", label: "Pepper Bed",   cls: "",       plant: null,           note: "Pepper seedlings going in here next. Boss battle: heat stress." },
  { ico: "🌿", label: "Herb Corner",  cls: "",       plant: null,           note: "Future home of basil (dramatic) and friends." },
  { ico: "🌹", label: "Flower Patch", cls: "flower", plant: "roses",        note: "The rose patch — pink chaos, fully blooming." },
  { ico: "🍎", label: "Fruit Row",    cls: "",       plant: "pomegranate",  note: "Pomegranate and apricot living their best fruiting life." },
  { ico: "❓", label: "Mystery Sprouts", cls: "",    plant: "mystery-tree", note: "The unidentified leafy tower in the corner." },
  { ico: "🛠️", label: "Tool / Repot Zone", cls: "soil", plant: "transplant", note: "Where repotting and dirty-glove business happens." },
  { ico: "🧺", label: "Setup Basecamp", cls: "soil", plant: "garden-setup", note: "Container staging area + drip line HQ." }
];

/* ---- 7. SEASONAL ARCHIVE ----------------------------------- */
const SEASONS = {
  "Spring 2026": {
    blurb: "Setup season. Beds built, pots staged, blossoms turning to fruit.",
    items: ["Built out the container bed and ran drip irrigation", "Apricot tree blossomed and set fruit", "First repotting of the year", "Roses started waking up"]
  },
  "Summer 2026": {
    blurb: "Current season. Fruit swelling, sun cranked, daily patrols.",
    items: ["First pomegranate fruit set 🎉", "Rose patch in full bloom", "Aloe thriving on total neglect", "Boss battle in progress: Heat Stress"]
  },
  "Fall 2026": {
    blurb: "Coming up. Harvests, recaps, and cooling things down.",
    items: ["TBD — apricot & pomegranate harvest goals", "End-of-summer recap", "Plan cool-season planting"]
  },
  "Winter 2026": {
    blurb: "The slow season. Planning, dreaming, seed catalogs.",
    items: ["TBD — protect tender plants", "Plan the 2027 layout", "Rest (the gardener, not the garden)"]
  }
};

/* ---- 8. HARVEST TRACKER ------------------------------------ */
const STATS = [
  { label: "Tomatoes Harvested",  val: "0" },
  { label: "Peppers Harvested",   val: "0" },
  { label: "Pomegranates Forming", val: "1" },
  { label: "Apricots On Tree",    val: "Many" },
  { label: "Flowers Blooming",    val: "Lots" },
  { label: "Plants Started",      val: "9" },
  { label: "Plants Survived",     val: "7" },
  { label: "Plants Lost",         val: "2" },
  { label: "Biggest Win",         val: "1st Pom!" },
  { label: "Biggest L",           val: "Overwatering" }
];

/* ============================================================
   RENDERING
   ============================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const plantById = (id) => PLANTS.find(p => p.id === id);

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

/* ----- Gallery ----- */
function renderGallery(filter = "All") {
  const grid = $("#gallery-grid");
  const list = filter === "All" ? PLANTS : PLANTS.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => `
    <article class="card panel">
      <div class="ph" data-img="${esc(p.img)}" data-cap="${esc(p.name + " — " + p.caption)}">
        <span class="badge">${esc(p.category)}</span>
        <span class="stage">${esc(p.stage)}</span>
        <img loading="lazy" src="${esc(p.thumb)}" alt="${esc(p.name)}">
      </div>
      <div class="body">
        <h3>${esc(p.name)}</h3>
        <p class="caption">${esc(p.caption)}</p>
        <p class="meta">📅 ${fmtDate(p.date)}</p>
        <p class="notes">${esc(p.notes)}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">#${esc(t)}</span>`).join("")}</div>
      </div>
    </article>`).join("");
}

function renderFilters() {
  const cats = ["All", ...new Set(PLANTS.map(p => p.category))];
  $("#gallery-filters").innerHTML = cats.map((c, i) =>
    `<button class="btn small ${i === 0 ? "green" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`
  ).join("");
}

/* ----- Timelines ----- */
function renderTimelines() {
  $("#timeline-list").innerHTML = TIMELINES.map(t => `
    <div class="timeline panel">
      <h3>${esc(t.title)}</h3>
      <p class="sub">${esc(t.sub)}</p>
      <div class="track">
        ${t.nodes.map(n => {
          const cls = n.state === "now" ? "now" : (n.state === "done" ? "done" : "");
          const p = n.img ? plantById(n.img) : null;
          const visual = p
            ? `<img class="thumb" loading="lazy" src="${esc(p.thumb)}" alt="${esc(p.name)}" data-img="${esc(p.img)}" data-cap="${esc(p.name + " — " + n.lbl)}">`
            : `<div class="placeholder">${n.ico || "🌱"}</div>`;
          return `<div class="node ${cls}">
            <span class="dot"></span>${visual}
            <span class="wk">${esc(n.wk)}</span>
            <span class="lbl">${esc(n.lbl)}</span>
          </div>`;
        }).join("")}
      </div>
    </div>`).join("");
}

/* ----- Journal ----- */
function renderJournal() {
  $("#journal-list").innerHTML = JOURNAL.map(e => {
    const p = e.img ? plantById(e.img) : null;
    const pic = p ? `<div class="ph"><img loading="lazy" src="${esc(p.thumb)}" alt="${esc(p.name)}" data-img="${esc(p.img)}" data-cap="${esc(e.title)}"></div>` : "";
    return `<article class="entry panel">
      ${pic}
      <div class="head">
        <h3>${esc(e.title)}</h3>
        <span class="date">${fmtDate(e.date)}</span>
        <span class="pcat">${esc(e.cat)}</span>
        <span class="pcat">🌿 ${esc(e.stage)}</span>
      </div>
      <p class="entry-body">${esc(e.body)}</p>
      <p class="lesson"><strong>Lesson learned:</strong> ${esc(e.lesson)}</p>
    </article>`;
  }).join("");
}

/* ----- Tips ----- */
function renderTips() {
  $("#tips-grid").innerHTML = TIPS.map(t => `
    <div class="tip panel">
      <h3><span>${t.ico}</span> ${esc(t.title)}</h3>
      <span class="topic">${esc(t.topic)}</span>
      <p class="tip-body">${esc(t.body)}</p>
    </div>`).join("");
}

/* ----- Memes ----- */
function renderMemes() {
  $("#meme-grid").innerHTML = MEMES.map(m => `
    <figure class="meme panel">
      <div class="pic"><span class="face">${m.face}</span><span class="cat">${esc(m.cat)}</span></div>
      <figcaption class="meme-cap">"${esc(m.cap)}"</figcaption>
    </figure>`).join("");
}

/* ----- Map ----- */
function renderMap() {
  $("#garden-map").innerHTML = MAP_PLOTS.map((m, i) => `
    <div class="plot ${m.cls}" data-idx="${i}">
      <span class="ico">${m.ico}</span>
      <span>${esc(m.label)}</span>
    </div>`).join("");
}

/* ----- Seasons ----- */
function renderSeasons() {
  const names = Object.keys(SEASONS);
  $("#season-tabs").innerHTML = names.map((n, i) =>
    `<button class="btn small ${i === 1 ? "green" : ""}" data-season="${esc(n)}">${esc(n)}</button>`
  ).join("");
  showSeason("Summer 2026");
}
function showSeason(name) {
  const s = SEASONS[name];
  $("#season-panel").innerHTML = `
    <h3>${esc(name)}</h3>
    <p>${esc(s.blurb)}</p>
    <ul>${s.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;
  $$("#season-tabs .btn").forEach(b =>
    b.classList.toggle("green", b.dataset.season === name));
}

/* ----- Harvest ----- */
function renderStats() {
  $("#stats-list").innerHTML = STATS.map(s =>
    `<div class="stat-row"><span>${esc(s.label)}</span><span class="val">${esc(s.val)}</span></div>`
  ).join("") + `<div class="stat-row boss"><span>⚔️ Current Boss Battle</span><span class="val">Heat Stress</span></div>`;
}

/* ----- Home dashboard counts ----- */
function renderDash() {
  $("#dash-plants").textContent = PLANTS.length;
  $("#dash-entries").textContent = JOURNAL.length;
  $("#dash-tips").textContent = TIPS.length;
  $("#dash-memes").textContent = MEMES.length;
}

/* ============================================================
   NAVIGATION (single-page view switching)
   ============================================================ */
function showView(id) {
  $$(".view").forEach(v => v.classList.toggle("active", v.id === id));
  $$(".navlink").forEach(n => n.classList.toggle("active", n.dataset.view === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (history.replaceState) history.replaceState(null, "", "#" + id.replace("view-", ""));
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function openLightbox(src, cap) {
  $("#lb-img").src = src;
  $("#lb-cap").textContent = cap || "";
  $("#lightbox").classList.add("open");
}
function closeLightbox() {
  $("#lightbox").classList.remove("open");
  $("#lb-img").src = "";
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderGallery();
  renderTimelines();
  renderJournal();
  renderTips();
  renderMemes();
  renderMap();
  renderSeasons();
  renderStats();
  renderDash();

  /* start screen */
  $("#start-btn").addEventListener("click", () => {
    $("#start-screen").classList.add("hidden");
    showView("view-home");
  });

  /* nav + quick links (event delegation) */
  document.body.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-view]");
    if (nav) { e.preventDefault(); showView(nav.dataset.view); return; }

    /* gallery filter buttons */
    const cat = e.target.closest("#gallery-filters [data-cat]");
    if (cat) {
      $$("#gallery-filters .btn").forEach(b => b.classList.remove("green"));
      cat.classList.add("green");
      renderGallery(cat.dataset.cat);
      return;
    }

    /* season tabs */
    const seas = e.target.closest("#season-tabs [data-season]");
    if (seas) { showSeason(seas.dataset.season); return; }

    /* map plots */
    const plot = e.target.closest("#garden-map .plot");
    if (plot) {
      const m = MAP_PLOTS[+plot.dataset.idx];
      const p = m.plant ? plantById(m.plant) : null;
      if (p) openLightbox(p.img, `${m.label}: ${p.name} — ${p.caption}`);
      else openLightbox("", m.note);
      // if no image, just show note as a caption over dark bg
      if (!p) { $("#lb-img").style.display = "none"; $("#lb-cap").textContent = `${m.label} — ${m.note}`; }
      else { $("#lb-img").style.display = ""; }
      return;
    }

    /* any image flagged for lightbox */
    const ph = e.target.closest("[data-img]");
    if (ph && ph.dataset.img) { openLightbox(ph.dataset.img, ph.dataset.cap); return; }

    /* lightbox close */
    if (e.target.closest("#lightbox") && !e.target.closest("#lb-img")) closeLightbox();
  });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

  /* mascot rotating tip */
  let mi = 0;
  const bubble = $("#mascot-line");
  if (bubble) {
    bubble.textContent = MASCOT_LINES[0];
    setInterval(() => {
      mi = (mi + 1) % MASCOT_LINES.length;
      bubble.textContent = MASCOT_LINES[mi];
    }, 6000);
  }

  /* deep-link support (#journal etc) */
  const hash = location.hash.replace("#", "");
  if (hash && $("#view-" + hash)) {
    $("#start-screen").classList.add("hidden");
    showView("view-" + hash);
  }
});
