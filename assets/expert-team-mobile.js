(function() {
  var root = document.getElementById('expert-team');
  if (!root) return;

  var container = root.querySelector('.js-experts-slider');
  var prevBtn = root.querySelector('.experts-slider-btn.prev');
  var nextBtn = root.querySelector('.experts-slider-btn.next');
  if (!container || !prevBtn || !nextBtn) return;

  var mq = window.matchMedia('(max-width: 749px)');
  var isMobile = function() { return mq.matches; };

  function cardSize() {
    var first = container.querySelector('.expert-card');
    if (!first) return 0;
    var rect = first.getBoundingClientRect();
    var styles = window.getComputedStyle(first);
    var ml = parseFloat(styles.marginLeft || '0');
    var mr = parseFloat(styles.marginRight || '0');
    return rect.width + ml + mr;
  }

  function updateButtons() {
    if (!isMobile()) { prevBtn.disabled = true; nextBtn.disabled = true; return; }
    var maxScroll = container.scrollWidth - container.clientWidth - 1;
    var sl = container.scrollLeft;
    prevBtn.disabled = sl <= 0;
    nextBtn.disabled = sl >= maxScroll;
  }

  function scrollByCard(dir) {
    var cw = cardSize() || container.clientWidth * 0.82 + 16;
    container.scrollBy({ left: (dir || 1) * cw, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', function(){ scrollByCard(-1); });
  nextBtn.addEventListener('click', function(){ scrollByCard(1); });

  container.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  document.addEventListener('visibilitychange', updateButtons);

  // کیبورد (فقط موبایل، در صورت فوکوس)
  container.addEventListener('keydown', function(e) {
    if (!isMobile()) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollByCard(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); scrollByCard(-1); }
  });

  updateButtons();
})();
