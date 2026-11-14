// Shared helpers for index.html and project.html
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const pad = (n) => String(n).padStart(2, "0");

// Any <img data-fallback> that fails to load is swapped for a placeholder frame.
function wireFallbacks(root = document) {
  root.querySelectorAll("img[data-fallback]").forEach((img) => {
    const swap = () => {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.innerHTML = `<span>${esc(img.dataset.fallback)}</span>`;
      img.replaceWith(ph);
    };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap, { once: true });
  });
}

function linkChips(links = []) {
  return links
    .map(
      (l) =>
        `<a class="chip chip--${esc(l.kind || "link")}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}<i aria-hidden="true">↗</i></a>`
    )
    .join("");
}
