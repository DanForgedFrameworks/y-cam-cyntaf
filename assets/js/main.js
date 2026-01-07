(function () {
  function initCarousel(root) {
    const track = root.querySelector("[data-carousel-track]");
    const cards = Array.from(root.querySelectorAll("[data-carousel-card]"));
    const prevBtn = root.querySelector("[data-carousel-prev]");
    const nextBtn = root.querySelector("[data-carousel-next]");
    const chips = Array.from(root.querySelectorAll("[data-stepchip]"));

    if (!track || cards.length === 0) return;

    let index = 0;

    function normalise(i) {
      const n = cards.length;
      return ((i % n) + n) % n;
    }

    function render() {
      const n = cards.length;
      const active = normalise(index);
      const left = normalise(index - 1);
      const right = normalise(index + 1);

      cards.forEach((card, i) => {
        card.classList.remove("is-active", "is-left", "is-right", "is-hidden");
        if (i === active) card.classList.add("is-active");
        else if (i === left) card.classList.add("is-left");
        else if (i === right) card.classList.add("is-right");
        else card.classList.add("is-hidden");
      });

      chips.forEach((chip, i) => {
        chip.classList.toggle("is-active", i === active);
        chip.setAttribute("aria-current", i === active ? "step" : "false");
      });

      const activeCard = cards[active];
      if (activeCard) {
        const label = activeCard.getAttribute("data-step-label") || `Step ${active + 1}`;
        root.setAttribute("aria-label", `Session steps carousel. Current: ${label}`);
      }
    }

    function goTo(i) {
      index = normalise(i);
      render();
    }

    function next() {
      goTo(index + 1);
    }

    function prev() {
      goTo(index - 1);
    }

    if (prevBtn) prevBtn.addEventListener("click", prev);
    if (nextBtn) nextBtn.addEventListener("click", next);

    chips.forEach((chip, i) => {
      chip.addEventListener("click", () => goTo(i));
    });

    // Keyboard support
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    });

    // Initial paint
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

  // Re-init when layout.js injects the shell
  window.addEventListener("layout:ready", initAll);
})();
