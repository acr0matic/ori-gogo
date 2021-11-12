const categories = new Swiper('.slider-categories', {
  loop: true,
  slidesPerView: 8,
  navigation: {
    nextEl: '.slider-categories__next',
    prevEl: '.slider-categories__prev',
  },
});

const promotion = new Swiper('.slider-promotion', {
  slidesPerView: 2,
  spaceBetween: 35,

  navigation: {
    nextEl: '.slider-promotion__next',
    prevEl: '.slider-promotion__prev',
  },
});

const recommended = new Swiper('.slider-recommended', {
  slidesPerView: 5,
  spaceBetween: 15,

  // navigation: {
  //   nextEl: '.slider-promotion__next',
  //   prevEl: '.slider-promotion__prev',
  // },
});