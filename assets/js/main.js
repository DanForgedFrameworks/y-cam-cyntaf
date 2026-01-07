(function () {
  function initCarousel(root) {
    const track = root.querySelector("[data-track]");
    const prev = root.querySelector("[data-prev]");
    const next = root.querySelector("[data-next]");
    const status = root.querySelector("[data-status]");
    const cards = Array.from(root.querySelectorAll("[data-card]"));

    if (!track || !prev || !next || cards.length === 0) return;

    let index = 0;

    function cardStepWidth() {
      const first = cards[0];
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "14") || 14;
      return first.getBoundingClientRect().width + gap;
    }

    function render() {
      const step = cardStepWidth();
      track.style.transform = `translateX(${-index * step}px)`;

      prev.disabled = index === 0;
      next.disabled = index === cards.length - 1;

      if (status) status.textContent = `Step ${index + 1} of ${cards.length}`;
    }

    prev.addEventListener("click", () => {
      if (index > 0) index -= 1;
      render();
    });

    next.addEventListener("click", () => {
      if (index < cards.length - 1) index += 1;
      render();
    });

    window.addEventListener("resize", render);

    render();
  }

  function initAll() {
    document.querySelectorAll("[data-carousel]").forEach(initCarousel);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }

  window.addEventListener("layout:ready", initAll);
})();
