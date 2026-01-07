// Simple carousel + step button logic for session pages

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-carousel]").forEach(setupCarousel);
});

function setupCarousel(root) {
  const cards = Array.from(root.querySelectorAll("[data-carousel-card]"));
  const prevBtn = root.querySelector("[data-carousel-prev]");
  const nextBtn = root.querySelector("[data-carousel-next]");

  if (!cards.length) return;

  const sessionRoot = root.closest("[data-session-page]");
  const stepButtons = sessionRoot
    ? Array.from(sessionRoot.querySelectorAll("[data-step-btn]"))
    : [];

  let index = 0;

  function update() {
    cards.forEach((card, i) => {
      card.classList.toggle("is-active", i === index);
    });
    stepButtons.forEach((btn, i) => {
      btn.classList.toggle("is-active", i === index);
    });
  }

  function go(delta) {
    index = (index + delta + cards.length) % cards.length;
    update();
  }

  prevBtn && prevBtn.addEventListener("click", () => go(-1));
  nextBtn && nextBtn.addEventListener("click", () => go(1));

  stepButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      index = i;
      update();
    });
  });

  update();
}
