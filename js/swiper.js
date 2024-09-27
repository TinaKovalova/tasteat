const swiper = new Swiper(".swiper", {
  //   direction: "horizontal",
  speed: 2000,
  loop: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  mousewheel: true,
  keyboard: true,
  // autoplay: {
  //   delay: 3000,
  // },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    460: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 1.8,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    1050: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
});
