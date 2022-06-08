const swiperEvents = new Swiper('.events-slider', {

  direction: 'horizontal',
  pagination: {
    el: '.events__pagination',
    type: 'bullets',
    clickable: true
  },
  loop: false,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1366: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    },

    976: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 27
    },

    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34
    },

    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    }
  }
});

const nextBtn = document.querySelector('.slider-button-next');
const prevBtn = document.querySelector('.slider-button-prev');
nextBtn.ariaLabel = 'Следующий слайд';
prevBtn.ariaLabel = 'Предыдущий слайд';
