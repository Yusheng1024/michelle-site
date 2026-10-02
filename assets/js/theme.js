// 淺色／深色切換：記住選擇；第一次使用時依系統設定（初始值在 head.html 內決定）
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  function label() {
    var dark = root.getAttribute('data-theme') === 'dark';
    btn.setAttribute('aria-pressed', String(dark));
    btn.textContent = dark ? '切換為淺色' : '切換為深色';
  }
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });
  label();
})();
