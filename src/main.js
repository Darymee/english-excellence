// вантажимо одразу
import './burger.js';
import './acnhor-button.js';
import './animation.js';

// вантажимо ліниво після завантаження DOM
document.addEventListener('DOMContentLoaded', async () => {
  await import('./counter-animation.js');
  await import('./slider.js');
});
