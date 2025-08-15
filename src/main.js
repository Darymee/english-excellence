// вантажимо одразу
import '../js/burger.js';
import '../js/acnhor-button.js';
import '../js/animation.js';

// вантажимо ліниво після завантаження DOM
document.addEventListener('DOMContentLoaded', async () => {
  await import('../js/counter-animation.js');
  await import('../js/slider.js');
});
