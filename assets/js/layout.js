(function () {
  const base = window.__BASE_PATH__ || "";
  const path = (location.pathname || "/").replace(/\/+$/, "") || "/";

  function href(p) {
    return `${base}${p}`;
  }

  const showSidebar =
    path.includes("/sessions/") || path.includes("/support") || path.includes("/downloads");

  function getActiveKey() {
    if (path.includes("/orientation")) return "orientation";
    if (path.includes("/downloads")) return "downloads";
    if (path.includes("/support")) return "support";
    if (path.includes("/sessions/session-1")) return "session-1";
    if (path.includes("/sessions/session-2")) return "session-2";
    if (path.includes("/sessions/session-3")) return "session-3";
    if (path.includes("/sessions/session-4")) return "session-4";
    if (path.includes("/sessions/session-5")) return "session-5";
    if (path.includes("/sessions/session-6")) return "session-6";
    return "home";
  }

  const activeKey = getActiveKey();

  const navItems = [
    { href: href("/"), label: "Home", key: "home" },
    { href: href("/orientation/"), label: "Orientation", key: "orientation" },
    { href: href("/downloads/"), label: "Downloads", key: "downloads" },
    { href: href("/sessions/session-1/"), label: "Session 1", key: "session-1" },
    { href: href("/sessions/session-2/"), label: "Session 2", key: "session-2" },
    { href: href("/sessions/session-3/"), label: "Session 3", key: "session-3" },
    { href: href("/sessions/session-4/"), label: "Session 4", key: "session-4" },
    { href: href("/sessions/session-5/"), label: "Session 5", key: "session-5" },
    { href: href("/sessions/session-6/"), label: "Session 6", key: "session-6" },
    { href: href("/support/"), label: "Support and contact", key: "support" },
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
      <div class="container">
        <span>Course support</span>
        <span aria-hidden="true">•</span>
        <a href="${href("/support/")}">Support and contact</a>
      </div>
    </div>

    <header class="site-header" aria-label="Site header">
      <div class="container" style="padding: 0.85rem 0;">
        <div class="brand">
          <img src="${href("/assets/img/tidybutt-logo.png")}" alt="Tidy Butt logo" />
          <div>
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
            <ul class="side-nav">${navHtml}</ul>
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
          <div>
            <img src="${href("/assets/img/tidybutt-logo.png")}" alt="Tidy Butt logo" style="width:140px;height:auto;border-radius:14px;" />
            <p class="small">Registered Charity 1195392</p>
          </div>

          <div>
            <p><strong>Navigation</strong></p>
            <ul class="footer-links">
              <li><a href="${href("/orientation/")}">Orientation</a></li>
              <li><a href="${href("/downloads/")}">Downloads</a></li>
              <li><a href="${href("/support/")}">Support and contact</a></li>
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

  const existing = document.querySelector("[data-page-content]");
  const target = document.getElementById("page-content");
  if (existing && target) target.appendChild(existing);

  window.dispatchEvent(new Event("layout:ready"));
})();
