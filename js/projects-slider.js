// swiper
const swiperGalery = new Swiper('.partners-slider__slider', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.partners-slider__btn--next',
    prevEl: '.partners-slider__btn--prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },

    976: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 75
    }
  }
});

document.querySelectorAll('.partners-slider__slide').forEach((item, i) => {
  item.ariaLabel = `Слайд ${i+1}`;
});

const projectNextBtn = document.querySelector('.partners-slider__btn--next');
const projectPrevBtn = document.querySelector('.partners-slider__btn--prev');
projectNextBtn.ariaLabel = 'Следующий слайд';
projectPrevBtn.ariaLabel = 'Предыдущий слайд';

