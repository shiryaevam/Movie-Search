const swiperContainer = document.createElement('div');
swiperContainer.className = 'swiper-container';

const slide1 = document.createElement('div');
slide1.className = 'swiper-slide';
slide1.innerHTML = ' <img src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"><p><a href="https://www.imdb.com/title/tt0076759/videogallery/?ref_=tt_pv_vi_sm">Star Wars: Episode IV - A New Hope 1977</a></p>';

const slide2 = document.createElement('div');
slide2.className = 'swiper-slide';
slide2.innerHTML = ' <img src="https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"> <p><a href="https://www.imdb.com/title/tt0080684/videogallery/?ref_=tt_pv_vi_sm">Star Wars: Episode V - The Empire Strikes Back</a></p>';

const slide3 = document.createElement('div');
slide3.className = 'swiper-slide';
slide3.innerHTML = ' <img src="https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"> <p><a href="https://www.imdb.com/title/tt0086190/videogallery/?ref_=tt_pv_vi_sm">Star Wars: Episode VI - Return of the Jedi</a></p>';

const slide4 = document.createElement('div');
slide4.className = 'swiper-slide';
slide4.innerHTML = ' <img src="https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"> <p><a href="https://www.imdb.com/title/tt2488496/videogallery/?ref_=tt_pv_vi_sm">Star Wars: Episode VII - The Force Awakens</a></p>';

const swiperWrapper = document.createElement('div');
swiperWrapper.className = 'swiper-wrapper';

swiperWrapper.append(slide1, slide2, slide3, slide4);

const swiperButtonPrev = document.createElement('div');
swiperButtonPrev.className = 'swiper-button-prev';

const swiperButtonNext = document.createElement('div');
swiperButtonNext.className = 'swiper-button-next';

const swiperScrollbar = document.createElement('div');
swiperScrollbar.className = 'swiper-scrollbar';

swiperContainer.append(swiperWrapper, swiperButtonPrev, swiperButtonNext,
  swiperScrollbar);

export { swiperContainer, swiperWrapper };
