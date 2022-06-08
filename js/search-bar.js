const searchButton = document.getElementById('searchButton');
const searchBar = document.querySelector('.search-bar');
const burgerButton = document.getElementById('burgerButton');

searchButton.addEventListener('click', event => {
  event._isOpen = true;
  searchSwitcher(true);
});

searchBar.addEventListener('click', event => {
  if(event.target === searchCloseButton) {
    searchSwitcher(false);
    return;
  }
  event._isOpen = true;
  searchSwitcher(true);
});


document.addEventListener('click', event => {
  if(!event._isOpen) {
    searchSwitcher(false);
  }
});

function searchSwitcher (isOpen) {
  searchButton.classList.toggle('search-bar__search-button--active', isOpen);
  searchBar.classList.toggle('search-bar--active', isOpen);
  searchInput.value = '';
  if(isOpen && window.innerWidth < 977) {
    burgerButton.style.opacity = 0;
  } else {
    burgerButton.style.opacity = 1;
  }
}
