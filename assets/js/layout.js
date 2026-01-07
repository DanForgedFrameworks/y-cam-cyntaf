(function () {
  function stripTrailingSlash(s) {
    return s.endsWith("/") && s.length > 1 ? s.slice(0, -1) : s;
  }

  function getPrefixFromCurrentPage() {
    const parts = location.pathname.split("/").filter(Boolean);
    const depth = Math.max(0, parts.length - 1);
    return "../".repeat(depth);
  }

  const prefix = getPrefixFromCurrentPage();
  const path = stripTrailingSlash(location.pathname);

  const shell = document.getElementById("site-shell");
  if (!shell) return;

  shell.innerHTML = `
    <a class="skip-link" href="#main">Skip to main content</a>

    <div class="topbar" role="region" aria-label="Course support strip">
      <div class="container">
        <span>Course support</span>
        <span aria-hidden="true">•</span>
        <a href="${prefix}support/">Support and contact</a>
      </div>
    </div>

    <header class="site-header" aria-label="Site header">
      <div class="container" style="padding: 0.75rem 0;">
        <div class="brand">
          <img src="${prefix}assets/img/tidybutt-logo.png" alt="Tidy Butt logo" />
          <div>
            <p class="brand-title">Y Cam Cyntaf</p>
            <p class="brand-subtitle">First steps in Welsh</p>
          </div>
        </div>
      </div>
    </header>

    <main id="main" class="main">
      <div class="container">
        <div id="page-content"></div>
      </div>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-grid">
          <div>
            <img src="${prefix}assets/img/tidybutt-logo.png" alt="Tidy Butt logo" style="width:140px;height:auto;" />
            <p class="small">Registered Charity 1195392</p>
          </div>

          <div>
            <p><strong>Navigation</strong></p>
            <ul class="footer-links">
              <li><a href="${prefix}orientation/">Orientation</a></li>
              <li><a href="${prefix}downloads/">Downloads</a></li>
              <li><a href="${prefix}support/">Support and contact</a></li>
            </ul>
          </div>

          <div>
            <p><strong>Socials</strong></p>
            <ul class="footer-links">
              <li><a href="https://www.facebook.com/tidybuttmat">Facebook</a></li>
              <li><a href="https://www.instagram.com/tidy_butt">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-divider">
          <p class="small">© Tidy Butt. If you notice anything incorrect, please contact Tidy Butt.</p>
        </div>
      </div>
    </footer>
  `;

  // Move page content into the injected layout
  const existing = document.querySelector("[data-page-content]");
  const target = document.getElementById("page-content");
  if (existing && target) {
    target.appendChild(existing);
  }

  // Signal that injection is complete (used for carousels etc.)
  window.dispatchEvent(new Event("layout:ready"));
})();
