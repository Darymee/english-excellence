const swiper = new Swiper('.reviews-swiper', {
  loop: true,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1280: { slidesPerView: 3 },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});
