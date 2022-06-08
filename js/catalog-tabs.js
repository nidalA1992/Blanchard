document.querySelectorAll('.artists-list__item-btn').forEach(function(tabsBtn) {

  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.artists-list__item-btn').forEach(function(btn) {
      btn.classList.remove('artists-list__item-btn--active')
    });

    e.currentTarget.classList.add('artists-list__item-btn--active')

    document.querySelectorAll('.tabs__item').forEach(function(item) {
      item.classList.remove('tabs__item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});
