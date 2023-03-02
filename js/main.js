const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__mobile');

const toggleMenu = () => {
  menuMobile.classList.toggle('menu--open');
  menuBtn.classList.toggle('active');
};
const closeOnClick = () => {
  popup.classList.remove('open');
  hamb.classList.remove('active');
  body.classList.remove('noscroll');
};

menuBtn.addEventListener('click', toggleMenu);

const swiper = new Swiper('.swiper', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
});

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 53.554228025637485, lng: 49.2800289406898 },
    zoom: 14,
    styles: [
      {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [
          {
            saturation: '-100',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 65,
          },
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: '50',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: '-100',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [
          {
            lightness: '30',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [
          {
            lightness: '40',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            hue: '#ffff00',
          },
          {
            lightness: -25,
          },
          {
            saturation: -97,
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels',
        stylers: [
          {
            lightness: -25,
          },
          {
            saturation: -100,
          },
        ],
      },
    ],
  });
}

window.initMap = initMap;
