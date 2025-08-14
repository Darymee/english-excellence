export function animateOnScroll(selector, options = {}) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.animate(
            [
              { opacity: 0, transform: 'translateY(50px)' },
              { opacity: 1, transform: 'translateY(0px)' },
            ],
            {
              duration: 800,
              easing: 'ease-out',
              fill: 'forwards',
              ...options,
            }
          );

          entry.target.classList.remove('hidden');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
}
