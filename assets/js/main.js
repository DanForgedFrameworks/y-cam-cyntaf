(function () {
  function initCarousels() {
    const carousels = document.querySelectorAll("[data-carousel]");
    if (!carousels.length) return false;

    carousels.forEach((carousel) => {
      if (carousel.dataset.initialised === "true") return;

      const viewport = carousel.querySelector(".carousel-viewport");
      const track = carousel.querySelector(".carousel-track");
      const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
      const prevBtn = carousel.querySelector("[data-prev]");
      const nextBtn = carousel.querySelector("[data-next]");
      const steps = Array.from(carousel.querySelectorAll("[data-step]"));

      if (!viewport || !track || slides.length === 0) return;

      carousel.dataset.initialised = "true";

      let index = 0;
      const GAP = 18;
      const SLIDE_RATIO = 0.88;

      function normalise(i) {
        const n = slides.length;
        return ((i % n) + n) % n;
      }

      function sizeSlides() {
        const vw = viewport.clientWidth;
        const slideW = Math.round(vw * SLIDE_RATIO);

        track.style.gap = `${GAP}px`;
        slides.forEach((s) => {
          s.style.flex = `0 0 ${slideW}px`;
        });

        render();
      }

      function render() {
        const vw = viewport.clientWidth;
        const slideW = Math.round(vw * SLIDE_RATIO);
        const offset = index * (slideW + GAP);

        track.style.transform = `translateX(${-offset}px)`;

        slides.forEach((s, i) => {
          s.classList.toggle("is-active", i === index);
          s.classList.toggle("is-prev", i === normalise(index - 1));
          s.classList.toggle("is-next", i === normalise(index + 1));
        });

        steps.forEach((b, i) => {
          b.setAttribute("aria-current", i === index ? "true" : "false");
        });
      }

      function goTo(i) {
        index = normalise(i);
        render();
      }

      prevBtn?.addEventListener("click", () => goTo(index - 1));
      nextBtn?.addEventListener("click", () => goTo(index + 1));

      steps.forEach((b, i) => {
        b.addEventListener("click", () => goTo(i));
        b.addEventListener("keydown", (e) => {
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

      window.addEventListener("resize", sizeSlides);

      track.style.display = "flex";
      track.style.willChange = "transform";
      sizeSlides();
    });

    return true;
  }

  function attemptInit() {
    const ok = initCarousels();
    if (!ok) requestAnimationFrame(() => initCarousels());
  }

  window.addEventListener("layout:ready", attemptInit);
  document.addEventListener("DOMContentLoaded", attemptInit);
})();
