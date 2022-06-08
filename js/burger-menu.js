const mainNav = document.getElementById('mainNav');
const burgerButton = document.getElementById('burgerButton');

burgerButton.addEventListener('click', event => {
  event._clickOnMenu = true;
  mainNav.classList.toggle('header__main-nav--drowpdown');
  burgerButton.classList.toggle('header__burger--close');
});

mainNav.addEventListener('click', event => {
  if(event.target.classList.contains('main-nav__link')) {
    event._clickOnMenu = false;
    return;
  }
  event._clickOnMenu = true;
});

document.addEventListener('click', event => {
  if(event._clickOnMenu) return;

  mainNav.classList.remove('header__main-nav--drowpdown');
  burgerButton.classList.remove('header__burger--close');
});
