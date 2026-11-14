/*
  PROJECT LIST — the only file you need to edit to add or change content.

  Each project:
    slug      url id → project.html?p=<slug>
    theme     css file in themes/ (e.g. "marathon" → themes/marathon.css). Use "plain" for a neutral look.
    status    "planned" | "wip" | omit when done — shown as a badge on the home page
    cover     image shown on the home page
    links     project-level links (models, videos, repo…) shown in the header
    gallery   pictures; each can have its own caption + links

  Images go in assets/<slug>/. A missing image shows a placeholder frame, so you can
  list shots before you've taken them.
*/
window.PROJECTS = [
  {
    slug: "datawall",
    title: "Data Wall",
    subtitle: "Modular rat tunnel after the Perimeter Data Wall",
    code: "DW-07",
    year: "2026",
    theme: "marathon",
    cover: "assets/datawall/cover.jpg",
    specs: [
      ["Printer", "Bambu A1 mini"],
      ["Material", "PETG"],
      ["Parts", "19"],
      ["Length", "477 mm"],
    ],
    links: [
      { label: "STL files", url: "#", kind: "model" },
      { label: "Build video", url: "#", kind: "video" },
    ],
    gallery: [
      // Fusion 360 local renders of design v4, the 9-pill curved wall (not photos yet)
      { src: "assets/datawall/cover.jpg", caption: "Render · curved 9-pill wall, gate end" },
      { src: "assets/datawall/01.jpg", caption: "Render · far gate, door at both ends" },
      { src: "assets/datawall/02.jpg", caption: "Top view · curved roof deck, pipes + clamps" },
      { src: "assets/datawall/03.jpg", caption: "Side elevation · nine pills, \"03\" recess" },
      { src: "assets/datawall/04.jpg", caption: "Gate + lime door trim", links: [{ label: "Gate STL", url: "#", kind: "model" }] },
      { src: "assets/datawall/05.jpg", caption: "Close-up · recessed \"03\" numerals + hazard stripes" },
      { src: "assets/datawall/06.jpg", caption: "Roof deck detail · pipes, clamps, panel seams", links: [{ label: "Watch", url: "#", kind: "video" }] },
    ],
  },

  // ── Planned ─────────────────────────────────────────────
  {
    slug: "pinwheel-wing",
    title: "Pinwheel Wing",
    subtitle: "Planned build",
    code: "PW-01",
    year: "TBD",
    status: "planned",
    theme: "marathon",
    gallery: [],
  },
  {
    slug: "dire-marsh",
    title: "Dire Marsh",
    subtitle: "Algae pond after the Dire Marsh",
    code: "DM-01",
    year: "TBD",
    status: "planned",
    theme: "marathon",
    gallery: [],
  },
  {
    slug: "expanse",
    title: "Expanse Builds",
    subtitle: "Pieces inspired by The Expanse",
    code: "EX-01",
    year: "TBD",
    status: "planned",
    theme: "expanse",
    gallery: [],
  },
  {
    slug: "tree-stand",
    title: "Tree Stand",
    subtitle: "A climbing tree with a hunting-stand platform where the rats find treats",
    code: "TS-01",
    year: "TBD",
    status: "planned",
    theme: "field",
    gallery: [],
  },
];
