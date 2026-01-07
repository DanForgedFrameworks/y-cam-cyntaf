(function () {
  function initCarousel(root) {
    const track = root.querySelector("[data-carousel-track]");
    const slides = Array.from(root.querySelectorAll("[data-slide]"));
    const prev = root.querySelector("[data-prev]");
    const next = root.querySelector("[data-next]");

    if (!track || slides.length === 0 || !prev || !next) return;

    let index = 0;

    function render() {
      slides.forEach((s, i) => {
        s.hidden = i !== index;
      });
      prev.disabled = index === 0;
      next.disabled = index === slides.length - 1;
    }

    prev.addEventListener("click", () => {
      if (index > 0) index -= 1;
      render();
    });

    next.addEventListener("click", () => {
      if (index < slides.length - 1) index += 1;
      render();
    });

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
