// select
const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  shouldSort: false,
  searchEnabled: false,
  itemSelectText: '',
  placeholder: false,
  position: 'bottom',
});

// swiper
const swiperGalery = new Swiper('.galery-slider', {

  direction: 'horizontal',
  loop: false,

  pagination: {
    type: 'fraction',
    el: '.galery-pagination',
  },

  navigation: {
    nextEl: '.galery-button-next',
    prevEl: '.galery-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1366: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
    },
    577: {
      slidesPerGroup: 2,

      slidesPerView: 2,
      spaceBetween: 35
    },
    320: {
      slidesPerGroup: 1 ,
      spaceBetween: 0,

      slidesPerView: 1,
    },
  }
});

const prevButton = document.querySelector('.galery-button-prev');
const nextButton = document.querySelector('.galery-button-next');
prevButton.ariaLabel = 'Предыдущий слайд';
nextButton.ariaLabel = 'Следующий слайд';

initializeSlides ();
window.addEventListener(`resize`, initializeSlides);
element.addEventListener('change', initializeSlides);

function initializeSlides () {
  const swiperSlides = document.querySelectorAll('.slide-js');
  const screenWidth = getScreenWidth();
  const type = element.value;

  // let counter = 1;

  swiperSlides.forEach((slide, i) => {
    slide.style.backgroundImage =
      `url(img/galery/swiper/${screenWidth}/${type}/galery-slide-${i+1}.jpg)`;
    slide.ariaLabel = `Слайд ${i+1}`;
  });
}

function getScreenWidth() {
  const windowWidth = window.innerWidth;
  const screenWidth  = windowWidth > 1366 ? '1920'
                      : windowWidth > 976  ? '1024'
                      : windowWidth > 765  ? '768'
                      : '320';
  return screenWidth;
}

