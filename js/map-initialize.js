ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758463, 37.601079],
    zoom: 15,
  });

  myMap.controls.remove('mediumMapDefaultSet');
  var myPlacemark = new ymaps.Placemark([55.758463,37.601079], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/map-mark.svg',
    iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');

}
