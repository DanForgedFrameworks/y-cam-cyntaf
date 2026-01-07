// Y Cam Cyntaf: lightweight carousel for session pages/
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const prevBtn = carousel.querySelector("[data-prev]");
    const nextBtn = carousel.querySelector("[data-next]");
    const previews = Array.from(carousel.querySelectorAll(".preview"));

    if (!track || slides.length === 0) return;

    let index = 0;

    const render = () => {
      track.style.transform = `translateX(${index * -100}%)`;

      previews.forEach((p, i) => {
        p.setAttribute("aria-current", i === index ? "true" : "false");
      });

      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === slides.length - 1;
    };

    const goTo = (i) => {
      index = Math.max(0, Math.min(slides.length - 1, i));
      render();
    };

    if (prevBtn) prevBtn.addEventListener("click", () => goTo(index - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goTo(index + 1));

    previews.forEach((p, i) => {
      p.addEventListener("click", () => goTo(i));
      p.setAttribute("role", "button");
      p.setAttribute("tabindex", "0");
      p.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goTo(i);
        }
      });
    });

    render();
  });
});
