(function () {
  const parts = location.pathname.split("/").filter(Boolean);
  const repo = parts.length ? `/${parts[0]}` : "";
  window.__BASE_PATH__ = repo;
})();
