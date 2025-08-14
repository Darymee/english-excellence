import { animate } from 'motion';

export function animateOnScroll(selector, options = {}) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(
            entry.target,
            {
              opacity: [0, 1],
              transform: ['translateY(50px)', 'translateY(0px)'],
            },
            { duration: 0.8, easing: 'ease-out', ...options }
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
