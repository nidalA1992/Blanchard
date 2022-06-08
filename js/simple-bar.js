document.querySelectorAll('.artists-menu__select-list').forEach(item => {
  new SimpleBar(item, { autoHide: false, scrollbarMaxSize: 100 });
});

document.querySelectorAll('.simplebar-content-wrapper').forEach(item => item.setAttribute('tabindex', '1'));

setTextButton();
window.addEventListener('resize', setTextButton);

document.querySelectorAll('.simplebar-content-wrapper').forEach((item) => {
  item.removeAttribute('tabindex');
  item.removeAttribute('aria-label');
});

function setTextButton() {
  const callButton = document.querySelector('.callback-button');
  const width = window.innerWidth;
  if(width < 1600 && width > 1366) {
    callButton.innerHTML = 'Заказать';
  }
  else if(width <= 1025) {
    callButton.innerHTML = 'Заказать&nbsp;обратный&nbsp;звонок';
  }
  else {
    callButton.innerHTML = 'Заказать&nbsp;обратный&nbsp;звонок';
  }
}
