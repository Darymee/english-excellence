(function () {
  function initScrollAnim(options = {}) {
    const selector = options.selector || '[data-anim]';
    const threshold = options.threshold || 0.2;
    const once = options.once !== false;

    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add('_show'), delay);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('_show');
          }
        });
      },
      { threshold }
    );

    elements.forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnim({ threshold: 0.2, once: true });
  });
})();

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.proposal-stack');
    if (!el) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('is-inview');
            io.unobserve(el); 
          }
        });
      },
      { threshold: 0.2 }
    );

    io.observe(el);
  });
})();
