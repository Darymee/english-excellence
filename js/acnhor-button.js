const btn = document.querySelector('.anchor-button');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;

  btn.style.background = `
    conic-gradient(var(--green-100) ${scrolled}%, transparent ${scrolled}% 100%) padding-box,
    var(--green-50)
  `;
});

const header = document.querySelector('.header');

if (header && btn) {
  const io = new IntersectionObserver(
    entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        btn.classList.remove('is-visible');
        btn.setAttribute('aria-hidden', 'true');
      } else {
        btn.classList.add('is-visible');
        btn.setAttribute('aria-hidden', 'false');
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -1px 0px',
    }
  );

  io.observe(header);
}
