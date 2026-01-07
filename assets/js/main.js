// Optional helper: makes external links open in a new tab safely
// (Only applied to links that start with https://www.tidybutt.co.uk)
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="https://www.tidybutt.co.uk"]');
  links.forEach(a => {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });
});
