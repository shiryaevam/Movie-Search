import form from './formSearch/formSearch';
import { swiperContainer } from './swiper/swiperHTML';

const container = document.createElement('div');
container.className = 'container';

const main = document.createElement('div');
main.className = 'container__main';

const header = document.createElement('header');
header.className = 'container__header';
header.innerHTML = '<p>Movie Search</p>';

const footer = document.createElement('footer');
footer.className = 'container__footer';

const textLeft = document.createElement('p');
textLeft.innerText = 'RS School 2020 q1';

const blockRight = document.createElement('div');
blockRight.className = 'footer__github';

const iconImage = document.createElement('img');
iconImage.setAttribute('src', './assets/icons/github.png');

const githubAdress = document.createElement('a');
githubAdress.setAttribute('href', 'https://github.com/shiryaevam');
githubAdress.innerText = 'ShiryaevAM';

const githubAdress2 = document.createElement('a');
githubAdress2.setAttribute('href', 'https://github.com/shiryaevam');

const divError = document.createElement('div');
divError.setAttribute('id', 'error');

const loaderContainer = document.createElement('div');
loaderContainer.className = 'cssload-loader';
loaderContainer.setAttribute('hidden', '');

container.append(header, main, footer);
main.append(form, swiperContainer, loaderContainer);
blockRight.append(githubAdress2, githubAdress);
githubAdress2.append(iconImage);
footer.append(textLeft, blockRight);

export default container;
