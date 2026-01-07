// =========================================================
// layout.js (FULL FILE)
// Injects shared topbar + header + sidebar nav + footer into #site-shell
// Moves page content from [data-page-content] into the injected layout
// Adds aria-current="page" to the active nav link automatically
// =========================================================

(function () {
  function stripTrailingSlash(s) {
    return s.endsWith("/") && s.length > 1 ? s.slice(0, -1) : s;
  }

  function getPrefixFromCurrentPage() {
    // Works for /, /support/, /downloads/, /sessions/session-1/, etc.
    // Assumes the site is hosted from a repo root on GitHub Pages.
    const parts = location.pathname.split("/").filter(Boolean);

    // If hosted at https://<user>.github.io/<repo>/..., then parts[0] is repo
    // Example: /y-cam-cyntaf/sessions/session-1/ => parts = ["y-cam-cyntaf","sessions","session-1"]
    // The "page depth" is parts.length - 1 (excluding repo segment)
    const depth = Math.max(0, parts.length - 1);

    return "../".repeat(depth);
  }

  function normalisedPathname() {
    // Normalise for matching (remove trailing slash)
    return stripTrailingSlash(location.pathname);
  }

  const prefix = getPrefixFromCurrentPage();
  const path = normalisedPathname();

  const navItems = [
    { href: `${prefix}`, label: "Home", key: "home" },
    { href: `${prefix}orientation/`, label: "Orientation", key: "orientation" },
    { href: `${prefix}sessions/session-1/`, label: "Session 1", key: "session-1" },
    { href: `${prefix}sessions/session-2/`, label: "Session 2", key: "session-2" },
    { href: `${prefix}sessions/session-3/`, label: "Session 3", key: "session-3" },
    { href: `${prefix}sessions/session-4/`, label: "Session 4", key: "session-4" },
    { href: `${prefix}sessions/session-5/`, label: "Session 5", key: "session-5" },
    { href: `${prefix}sessions/session-6/`, label: "Session 6", key: "session-6" },
    { href: `${prefix}downloads/`, label: "Downloads", key: "downloads" },
    { href: `${prefix}support/`, label: "Support and contact", key: "support" },
  ];

  // Determine active key by pathname contents (robust on GitHub Pages)
  function getActiveKey() {
    // Home: repo root (usually /<repo>) or /<repo>/index.html
    // We treat anything that doesn't match other keys as home.
    const p = path;

    if (p.includes("/orientation")) return "orientation";
    if (p.includes("/sessions/session-1")) return "session-1";
    if (p.includes("/sessions/session-2")) return "session-2";
    if (p.includes("/sessions/session-3")) return "session-3";
    if (p.includes("/sessions/session-4")) return "session-4";
    if (p.includes("/sessions/session-5")) return "session-5";
    if (p.includes("/sessions/session-6")) return "session-6";
    if (p.includes("/downloads")) return "downloads";
    if (p.includes("/support")) return "support";

    return "home";
  }

  const activeKey = getActiveKey();

  const navHtml = navItems
    .map((n) => {
      const current = n.key === activeKey ? ` aria-current="page"` : "";
      return `<li><a href="${n.href}"${current}>${n.label}</a></li>`;
    })
    .join("");

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

  // Move the page content into the injected layout
  const existing = document.querySelector("[data-page-content]");
  const target = document.getElementById("page-content");
  if (existing && target) {
    target.appendChild(existing);
  }
})();
