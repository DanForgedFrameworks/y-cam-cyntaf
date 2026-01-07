(function () {
  function initCarousels() {
    const carousels = document.querySelectorAll("[data-carousel]");
    if (!carousels.length) return false;

    carousels.forEach((carousel) => {
      if (carousel.dataset.initialised === "true") return;

      const track = carousel.querySelector(".carousel-track");
      const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
      const prevBtn = carousel.querySelector("[data-prev]");
      const nextBtn = carousel.querySelector("[data-next]");
      const previews = Array.from(carousel.querySelectorAll(".preview"));

      if (!track || slides.length === 0) return;

      carousel.dataset.initialised = "true";

      let index = 0;

      const render = () => {
        track.style.transform = `translateX(${index * -100}%)`;
        previews.forEach((p, i) => {
          p.setAttribute("aria-current", i === index ? "true" : "false");
        });
      };

      const normalise = (i) => {
        const n = slides.length;
        return ((i % n) + n) % n;
      };

      const goTo = (i) => {
        index = normalise(i);
        render();
      };

      if (prevBtn) prevBtn.addEventListener("click", () => goTo(index - 1));
      if (nextBtn) nextBtn.addEventListener("click", () => goTo(index + 1));

      previews.forEach((p, i) => {
        p.setAttribute("role", "button");
        p.setAttribute("tabindex", "0");

        p.addEventListener("click", () => goTo(i));
        p.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            goTo(i);
          }
        });
      });

      carousel.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") goTo(index - 1);
        if (e.key === "ArrowRight") goTo(index + 1);
      });

      render();
    });

    return true;
  }

  function attemptInit() {
    const ok = initCarousels();
    if (!ok) {
      // One retry in case the DOM moved after we ran
      requestAnimationFrame(() => initCarousels());
    }
  }

  window.addEventListener("layout:ready", attemptInit);
  document.addEventListener("DOMContentLoaded", attemptInit);
})();
