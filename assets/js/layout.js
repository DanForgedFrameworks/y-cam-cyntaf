(function () {
  function getPrefixFromCurrentPage() {
    const parts = location.pathname.split("/").filter(Boolean);
    const afterRepo = parts.slice(1);
    const depth = afterRepo.length;
    return "../".repeat(depth);
  }

  const prefix = getPrefixFromCurrentPage();
  const path = location.pathname;

  // Sidebar on these pages (NOT home)
  const showSidebar =
    path.includes("/sessions/") ||
    path.includes("/downloads/") ||
    path.includes("/support/") ||
    path.includes("/orientation/");

  function getActiveKey() {
    const p = path;
    if (p.includes("/orientation/")) return "orientation";
    if (p.includes("/downloads/")) return "downloads";
    if (p.includes("/support/")) return "support";
    if (p.includes("/sessions/session-1/")) return "session-1";
    if (p.includes("/sessions/session-2/")) return "session-2";
    if (p.includes("/sessions/session-3/")) return "session-3";
    if (p.includes("/sessions/session-4/")) return "session-4";
    if (p.includes("/sessions/session-5/")) return "session-5";
    if (p.includes("/sessions/session-6/")) return "session-6";
    return "home";
  }

  const activeKey = getActiveKey();

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
      <div class="container topbar-inner">
        <span class="topbar-label">Course support</span>
        <span aria-hidden="true" class="topbar-dot">•</span>
        <a class="topbar-link" href="${prefix}support/">Support and contact</a>
      </div>
    </div>

    <header class="site-header" aria-label="Site header">
      <div class="container header-inner">
        <div class="brand">
          <img src="${prefix}assets/img/tidybutt-logo.png" alt="Tidy Butt logo" />
          <div class="brand-text">
            <p class="brand-title">Y Cam Cyntaf</p>
            <p class="brand-subtitle">First steps in Welsh</p>
          </div>
        </div>
      </div>
    </header>

    ${showSidebar ? `
      <div class="container layout-shell">
        <aside class="sidebar" aria-label="Course navigation">
          <nav aria-label="Primary">
            <ul class="side-nav">
              ${navHtml}
            </ul>
          </nav>
        </aside>

        <main id="main" class="main main--with-sidebar">
          <div id="page-content"></div>
        </main>
      </div>
    ` : `
      <main id="main" class="main">
        <div id="page-content"></div>
      </main>
    `}

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${prefix}assets/img/tidybutt-logo.png" alt="Tidy Butt logo" class="footer-logo" />
            <p class="small">Registered Charity 1195392</p>
          </div>

          <div>
            <p class="footer-heading">Navigation</p>
            <ul class="footer-links">
              <li><a href="${prefix}orientation/">Orientation</a></li>
              <li><a href="${prefix}downloads/">Downloads</a></li>
              <li><a href="${prefix}support/">Support and contact</a></li>
            </ul>
          </div>

          <div>
            <p class="footer-heading">Socials</p>
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

  const existing = document.querySelector("[data-page-content]");
  const target = document.getElementById("page-content");
  if (existing && target) target.appendChild(existing);

  window.dispatchEvent(new Event("layout:ready"));
})();
