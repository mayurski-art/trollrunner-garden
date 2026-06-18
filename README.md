# 🌱 TrollRunner Garden Log

A colorful, interactive, nostalgic **8-bit / pixel-art** gardening website for
**[garden.trollrunner.net](https://garden.trollrunner.net)** — a cozy pixel
garden world and personal garden diary. Part of the broader TrollRunner.net
ecosystem.

It's a static site (plain HTML/CSS/JS, no build step) hosted on GitHub Pages.

## Sections

- **Home** – retro "Press Start" start screen + dashboard
- **Garden Journal** – chronological, personal, funny entries with lessons learned
- **Plant Gallery** – labelled photos, filterable by plant type
- **Growth Timelines** – seed → harvest "evolution screens"
- **Tips** – beginner-friendly gardening tips
- **Meme Garden Corner** – original Trollface-farmer garden memes
- **Interactive Garden Map** – click plots to explore
- **Seasonal Archive** – content organized by season
- **Harvest Tracker** – retro game stats screen

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure + all sections |
| `styles.css` | Pixel-art theme, animations, responsive layout |
| `script.js` | All content data + interactivity (nav, gallery, lightbox, map) |
| `mascot.svg` / `favicon.svg` | Original pixel troll-farmer art |
| `images/` | Optimized plant photos (`images/thumbs/` = gallery thumbnails) |

## ➕ Adding a new plant photo

1. Add the full image to `images/` and a smaller copy to `images/thumbs/`
   (longest side ~1280px for full, ~600px for thumb keeps the site fast).
2. Add an entry to the `PLANTS` array near the top of `script.js`:

   ```js
   {
     id: "basil",
     name: "Dramatic Basil",
     category: "Herbs",
     date: "2026-06-20",
     stage: "Vegetative",
     img: "images/basil.jpeg",
     thumb: "images/thumbs/basil.jpeg",
     caption: "Wilts for attention.",
     notes: "...",
     tags: ["herb", "container"]
   }
   ```

   It appears in the gallery automatically and can be referenced by `id` in
   `JOURNAL`, `TIMELINES`, and `MAP_PLOTS`.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
