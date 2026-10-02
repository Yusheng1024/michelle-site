// 捲動到區塊時輕輕淡入（只用在首頁的區塊）。使用者設定減少動態時直接顯示。
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
