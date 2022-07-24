const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 4000
  },
  speed: 500,
  direction: 'horizontal',
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
