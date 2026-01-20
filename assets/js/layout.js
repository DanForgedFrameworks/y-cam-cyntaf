(function () {
  const SITE_ROOT = "/y-cam-cyntaf/";

  function normalisePath(p) {
    return (p || "/").replace(/\/index\.html$/i, "/").replace(/\/+$/, "/");
  }

  const path = normalisePath(window.location.pathname);

  const isHome =
    path === SITE_ROOT ||
    path === "/y-cam-cyntaf/" ||
    path === "/y-cam-cyntaf/index.html";

  const navItems = [
    { href: SITE_ROOT, label: "Home", key: "home" },
    { href: SITE_ROOT + "orientation/", label: "Orientation", key: "orientation" },
    { href: SITE_ROOT + "sessions/session-1/", label: "Session 1", key: "s1" },
    { href: SITE_ROOT + "sessions/session-2/", label: "Session 2", key: "s2" },
    { href: SITE_ROOT + "sessions/session-3/", label: "Session 3", key: "s3" },
    { href: SITE_ROOT + "sessions/session-4/", label: "Session 4", key: "s4" },
    { href: SITE_ROOT + "sessions/session-5/", label: "Session 5", key: "s5" },
    { href: SITE_ROOT + "sessions/session-6/", label: "Session 6", key: "s6" },
    { href: SITE_ROOT + "benchmark/", label: "Distance travelled", key: "benchmark" },
    { href: SITE_ROOT + "downloads/", label: "Downloads", key: "downloads" },
    { href: SITE_ROOT + "support/", label: "Support and contact", key: "support" },
  ];

  function getActiveKey() {
    if (path.includes("/orientation/")) return "orientation";
    if (path.includes("/downloads/")) return "downloads";
    if (path.includes("/support/")) return "support";
    if (path.includes("/benchmark/")) return "benchmark";
    if (path.includes("/sessions/session-1/")) return "s1";
    if (path.includes("/sessions/session-2/")) return "s2";
    if (path.includes("/sessions/session-3/")) return "s3";
    if (path.includes("/sessions/session-4/")) return "s4";
    if (path.includes("/sessions/session-5/")) return "s5";
    if (path.includes("/sessions/session-6/")) return "s6";
    return "home";
  }

  const activeKey = getActiveKey();

  const pageContentEl = document.querySelector("[data-page-content]");
  if (!pageContentEl) return;

  const wantsSidebar = pageContentEl.getAttribute("data-sidebar") === "true";

  const sidebarHtml = wantsSidebar
    ? `
      <aside class="coursehub" aria-label="Course hub navigation">
        <div class="coursehub-inner">
          <p class="coursehub-title">Course hub</p>
          <nav aria-label="Primary">
            <ul class="coursehub-list">
              ${navItems
                .filter((n) => n.key !== "home")
                .map((n) => {
                  const isActive = n.key === activeKey;
                  return `<li>
                    <a class="coursehub-link ${isActive ? "is-active" : ""}" href="${n.href}" ${
                      isActive ? 'aria-current="page"' : ""
                    }>
                      ${n.label}
                    </a>
                  </li>`;
                })
                .join("")}
            </ul>
          </nav>
        </div>
      </aside>
    `
    : "";

  const headerHtml = `
    <a class="skip-link" href="#main">Skip to main content</a>

    <div class="topstrip" role="region" aria-label="Course support strip">
      <div class="topstrip-inner">
        <span>Course support</span>
        <span aria-hidden="true">•</span>
        <a href="${SITE_ROOT}support/">Support and contact</a>
      </div>
    </div>

    <header class="siteheader" aria-label="Site header">
      <div class="siteheader-inner">
        <a class="brand" href="${SITE_ROOT}">
          <img class="brand-logo" src="${SITE_ROOT}assets/img/tidybutt-logo.png" alt="Tidy Butt logo" />
          <div class="brand-text">
            <div class="brand-title">Y Cam Cyntaf</div>
            <div class="brand-subtitle">First steps in Welsh</div>
          </div>
        </a>

        ${
          isHome
            ? ""
            : `
          <nav class="topnav" aria-label="Top navigation">
            <a class="topnav-pill ${activeKey === "home" ? "is-active" : ""}" href="${SITE_ROOT}">Home</a>
            <a class="topnav-pill ${activeKey === "downloads" ? "is-active" : ""}" href="${SITE_ROOT}downloads/">Downloads</a>
            <a class="topnav-pill ${activeKey === "benchmark" ? "is-active" : ""}" href="${SITE_ROOT}benchmark/">Distance travelled</a>
            <a class="topnav-pill ${activeKey === "support" ? "is-active" : ""}" href="${SITE_ROOT}support/">Support and contact</a>
          </nav>
        `
        }
      </div>
    </header>
  `;

  const footerHtml = `
    <footer class="sitefooter" aria-label="Site footer">
      <div class="sitefooter-inner">
        <div class="footergrid">
          <div class="footercol">
            <img class="footerlogo" src="${SITE_ROOT}assets/img/tidybutt-logo.png" alt="Tidy Butt logo" />
            <p class="small">Registered Charity 1195392</p>
          </div>

          <div class="footercol">
            <p><strong>Navigation</strong></p>
            <ul class="footerlinks">
              <li><a href="${SITE_ROOT}orientation/">Orientation</a></li>
              <li><a href="${SITE_ROOT}benchmark/">Distance travelled</a></li>
              <li><a href="${SITE_ROOT}downloads/">Downloads</a></li>
              <li><a href="${SITE_ROOT}support/">Support and contact</a></li>
            </ul>
          </div>

          <div class="footercol">
            <p><strong>Socials</strong></p>
            <ul class="footerlinks">
              <li><a href="https://www.facebook.com/tidybuttmat">Facebook</a></li>
              <li><a href="https://www.instagram.com/tidy_butt">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div class="footerfineprint">
          <p class="small">© Tidy Butt. If you notice anything incorrect, please contact Tidy Butt.</p>
        </div>
      </div>
    </footer>
  `;

  const shell = document.createElement("div");
  shell.className = "pageshell";
  shell.setAttribute("data-page-key", activeKey);
  shell.setAttribute("data-is-home", isHome ? "true" : "false");

  shell.innerHTML = `
    ${headerHtml}
    <main id="main" class="pagemain">
      <div class="pagelayout ${wantsSidebar ? "has-sidebar" : "no-sidebar"}">
        ${sidebarHtml}
        <section class="pagepanel" aria-label="Page content">
          <div class="pagepanel-inner" id="pagepanel-inner"></div>
        </section>
      </div>
    </main>
    ${footerHtml}
  `;

  const target = shell.querySelector("#pagepanel-inner");
  target.appendChild(pageContentEl);

  document.body.innerHTML = "";
  document.body.appendChild(shell);

  window.__yccLayoutReady = true;
  window.dispatchEvent(new Event("layout:ready"));
})();
