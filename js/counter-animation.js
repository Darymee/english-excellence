function animateCounter(selector, start, end, duration) {
  let obj = document.querySelector(selector);
  let startTimestamp = null;

  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    let progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

let hasAnimated = false;

let observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        animateCounter('.counter', 1, 1000, 2000);
        hasAnimated = true;
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.querySelector('#application-form'));
