(function () {
  function initCarousel(root) {
    const track = root.querySelector("[data-carousel-track]");
    const cards = Array.from(root.querySelectorAll("[data-carousel-card]"));
    const btnPrev = root.querySelector("[data-carousel-prev]");
    const btnNext = root.querySelector("[data-carousel-next]");
    const stepButtons = Array.from(root.querySelectorAll("[data-carousel-step]"));

    if (!track || cards.length === 0 || !btnPrev || !btnNext) return;

    let index = 0;

    function render() {
      cards.forEach((c, i) => {
        c.classList.toggle("is-active", i === index);
        c.classList.toggle("is-left", i === index - 1);
        c.classList.toggle("is-right", i === index + 1);
        c.classList.toggle("is-hidden", Math.abs(i - index) > 1);
      });

      stepButtons.forEach((b) => {
        const k = Number(b.getAttribute("data-carousel-step"));
        b.classList.toggle("is-active", k === index);
        b.setAttribute("aria-current", k === index ? "true" : "false");
      });

      btnPrev.disabled = index === 0;
      btnNext.disabled = index === cards.length - 1;
    }

    function goTo(i) {
      index = Math.max(0, Math.min(cards.length - 1, i));
      render();
    }

    btnPrev.addEventListener("click", () => goTo(index - 1));
    btnNext.addEventListener("click", () => goTo(index + 1));

    stepButtons.forEach((b) => {
      b.addEventListener("click", () => goTo(Number(b.getAttribute("data-carousel-step"))));
    });

    render();
  }

  function initAll() {
    document.querySelectorAll("[data-carousel]").forEach(initCarousel);
  }

  // Run once now, and again after layout has injected
  initAll();
  window.addEventListener("layout:ready", initAll);
})();
