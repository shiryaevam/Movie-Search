import Swiper from 'swiper';
import './styles/scss.scss';
import container from './components/container';
import { swiperWrapper } from './components/swiper/swiperHTML';
import './styles/loaders/loader.css';

document.body.append(container);

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const searchInput = document.querySelector('#input2');
let page = 1;

async function loaders() {
  document.querySelector('.cssload-loader').removeAttribute('hidden');
  const response = await fetch(
    `https://www.omdbapi.com/?s=${searchInput.value}&page=${page}&apikey=db2619b7&`,
  );

  const reader = response.body.getReader();

  while (true) {
    // eslint-disable-next-line no-await-in-loop
    const { done } = await reader.read();

    if (done) {
      break;
    }
  }
}

const DEFAULT_PLACEHOLDER_IMAGE = './assets/icons/NI.png';

async function Movies() {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${searchInput.value}&page=${page}&apikey=db2619b7&`,
  );
  const massive = response.json();
  document.querySelector('.cssload-loader').removeAttribute('hidden');
  massive.then(
    (script) => {
      swiperWrapper.innerHTML = script.Search.reduce(
        (acc, Search) => `${acc}<div class="swiper-slide" >
          <img src="${
  Search.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : Search.Poster
}">
          <p><a href="https://www.imdb.com/title/${
  Search.imdbID
}/videogallery/?ref_=tt_pv_vi_sm">${Search.Title}</a> ${
  Search.Year
}</p>
          </div>`,
        '',
      );
      mySwiper.update();
      setTimeout(mySwiper.slideTo(0), 1000);
      document.querySelector('.cssload-loader').setAttribute('hidden', '');
    },
    (error) => error(`Ошибка: ${error.message}`),
  );
  return massive;
}

mySwiper.on('reachEnd', () => {
  page += 1;
  mySwiper.removeAllSlides();
  Movies();
});

document.querySelector('#loop').addEventListener('click', () => {
  loaders(searchInput, page);
  Movies(searchInput, page);
});

searchInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();

    document.querySelector('#loop').click();
  }
});

document.querySelector('#input2').setAttribute('autofocus', '');
