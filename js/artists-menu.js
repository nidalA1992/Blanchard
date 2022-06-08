const dropdownButtons = document.querySelectorAll('.artists-menu__dropdown-button');
const artistsSelectMenus = document.querySelectorAll('.artists-menu__select-list');
const mainMenu = document.querySelector('.artists-menu__list');

mainMenu.addEventListener('click', event => {
  if(event._clickOnArtistsSelect || event.target === mainMenu) return;

  const currentMenu = event.target.nextElementSibling;
  currentMenu.classList.toggle('artists-menu__select-list--dropdown');
  event.target.classList.toggle('artists-menu__dropdown-button--active');
  closeMenusExept(currentMenu, event.target);
  event._clickOnButton = true;
});

artistsSelectMenus.forEach(item => {
  item.addEventListener('click', event => {
    event._clickOnArtistsSelect = true;
  });
})

document.addEventListener('click', event => {
  if(event._clickOnArtistsSelect || event._clickOnButton) return;

  closeMenusExept();
});

function closeMenusExept(currentMenu = null, button = null) {
  artistsSelectMenus.forEach(menu => {
    if(menu !== currentMenu) menu.classList.remove('artists-menu__select-list--dropdown');
  })
  dropdownButtons.forEach(btn => {
    if(btn !== button) btn.classList.remove('artists-menu__dropdown-button--active');
  });
}
