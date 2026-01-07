(function () {
  function pathPrefix() {
    // Figures out how deep we are, so paths work from /, /support/, /sessions/session-1/, etc.
    const parts = location.pathname.split("/").filter(Boolean);
    // If your repo name is in the path, we ignore it because GitHub Pages hosts as /<repo>/
    // Example: /y-cam-cyntaf/sessions/session-1/ -> ignore first segment as repo root
    // If you ever move to a custom domain, this still behaves fine.
    const repo = parts[0]; 
    const depth = Math.max(0, parts.length - 1); 
    return "../".repeat(depth);
  }

  const prefix = pathPrefix();

  // Page detection for active nav
  const path = location.pathname.replace(/\/$/, "");
  const isHome = path.endsWith("/y-cam-cyntaf") || path.endsWith("/y-cam-cyntaf/index.html") || path === "" || path.endsWith("/");

  const navItems = [
    { href: `${prefix}`, label: "Home", match: /\/(index\.html)?$/ },
    { href: `${prefix}orientation/`, label: "Orientation", match: /\/orientation(\/|$)/ },
    { href: `${prefix}sessions/session-1/`, label: "Session 1", match: /\/sessions\/session-1(\/|$)/ },
    { href: `${prefix}sessions/session-2/`, label: "Session 2", match: /\/sessions\/session-2(\/|$)/ },
    { href: `${prefix}sessions/session-3/`, label: "Session 3", match: /\/sessions\/session-3(\/|$)/ },
    { href: `${prefix}sessions/session-4/`, label: "Session 4", match: /\/sessions\/session-4(\/|$)/ },
    { href: `${prefix}sessions/session-5/`, label: "Session 5", match: /\/sessions\/session-5(\/|$)/ },
    { href: `${prefix}sessions/session-6/`, label: "Session 6", match: /\/sessions\/session-6(\/|$)/ },
    { href: `${prefix}downloads/`, label: "Downloads", match: /\/downloads(\/|$)/ },
    { href: `${prefix}support/`, label: "Support and contact", match: /\/support(\/|$)/ },
  ];

  const activeIndex = navItems.findIndex(n => n.match.test(path));
  const navHtml = navItems.map((n, i) => {
    const current = i === activeIndex ? ` aria-current="page"` : "";
    return `<li><a href="${n.href}"${current}>${n.label}</a></li>`;
  }).join("");

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

    <div class="container layout">
      <aside class="sidebar" aria-label="Course navigation">
        <div class="sidebar-inner">
          <nav aria-label="Primary">
            <ul class="side-nav">
              ${navHtml}
            </ul>
          </nav>

          <a class="button" href="${prefix}support/">Course support</a>
        </div>
      </aside>

      <main id="main" class="main">
        <div id="page-content"></div>
      </main>
    </div>

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

  // Move the page's inline content into #page-content if it exists
  const existing = document.querySelector("[data-page-content]");
  const target = document.getElementById("page-content");
  if (existing && target) {
    target.appendChild(existing);
  }
})();
