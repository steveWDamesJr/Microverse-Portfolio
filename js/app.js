const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const portfolioJs = document.querySelector('#portfolioJs');
const popWindow = document.querySelector('.works-section-popup');
const worksSection = document.querySelector('#works-section');

popWindow.style.display = 'none';

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

//Dynamic Work-card Information

const workObject = [{
  id: 1,
  workCardTitle: 'Tonic',
  imagesMobile: './images/popup-tonic-mobile.png',
  imagesDesk: './images/desk-snap-4.png',
  imageAlt: 'Tonic Project',
  cardTitleMo: 'Tonic',
  cardTitleDesk: 'Tonic',
  titleElementsMo: ['CANOPY', 'Back End Dev', '2015'],
  titleElementsDesk: ['CANOPY', 'Back End Dev', '2015'],
  cardDescriptionMo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  cardDescriptionDesk: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languagesMo: ['html', 'css', 'javaScript'],
  languagesDesk: ['html', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
{
  id: 2,
  workCardTitle: 'Multi-Post Stories',
  imagesMobile: './images/mps1.png',
  imagesDesk: './images/desk-snap-1.png',
  imageAlt: 'Multi-Post Project 1',
  cardTitleMo: 'Multi-Post Stories',
  cardTitleDesk: 'Multi-Post Stories',
  titleElementsMo: ['CANOPY', 'Back End Dev', '2015'],
  titleElementsDesk: ['FACEBOOK', 'Full Stack Dev', '2015'],
  cardDescriptionMo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  cardDescriptionDesk: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  languagesMo: ['html', 'css', 'javaScript'],
  languagesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
{
  id: 3,
  workCardTitle: 'Tonic',
  imagesMobile: './images/Tonic2.png',
  imagesDesk: './images/desk-snap-2.png',
  imageAlt: 'Tonic Project 2',
  cardTitleMo: 'Tonic',
  cardTitleDesk: 'Facebook 360',
  titleElementsMo: ['CANOPY', 'Back End Dev', '2015'],
  titleElementsDesk: ['FACEBOOK', 'Full Stack Dev', '2015'],
  cardDescriptionMo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  cardDescriptionDesk: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  languagesMo: ['html', 'css', 'javaScript'],
  languagesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
{
  id: 4,
  workCardTitle: 'Multi-Post Stories',
  imagesMobile: './images/mps2.png',
  imagesDesk: '/images/desk-snap-3.png',
  imageAlt: 'Multi-Post Project 2',
  cardTitleMo: 'Multi-Post Stories',
  cardTitleDesk: 'Uber Navigation',
  titleElementsMo: ['CANOPY', 'Back End Dev', '2015'],
  titleElementsDesk: ['UBER', 'Lead Developer', '2018'],
  cardDescriptionMo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  cardDescriptionDesk: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  languagesMo: ['html', 'css', 'javaScript'],
  languagesDesk: ['html', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
];

for (let i = 0; i < workObject.length; i += 1) {
  const allWork = workObject[i];
  const section = document.createElement('section');
  section.setAttribute('class', 'card');

  worksSection.innerHTML += `
  
  
  <section class="card">
  <img class="desk-card-img" src="${allWork.imagesDesk}" alt="Desktop Tonic Project">
  <img class="card-img" src="${allWork.imagesMobile}" alt="Tonic Project 1">
  <div class="text-cont">
    <h2 class="card-title">${allWork.cardTitleMo}</h2>
    <h2 class="card-desk-title">${allWork.cardTitleDesk}</h2>
    <ul class="title-elements">
      <li>
        <p class="pr-name">${allWork.titleElementsMo[0]}</p>
        <p class="pr-desk-name">${allWork.titleElementsDesk[0]}</p>
      </li>
      <li><img class="dot" src="./images/dot.png" alt="stylistic text divider dot"></li>
      <li>
        <p class="art-name">${allWork.titleElementsMo[1]}</p>
        <p class="art-desk-name">${allWork.titleElementsDesk[1]}</p>
      </li>
      <li><img class="dot" src="./images/dot.png" alt="stylistic text divider dot"></li>
      <li>
        <p class="year">${allWork.titleElementsMo[2]}</p>
        <p class="desk-year">${allWork.titleElementsDesk[2]}</p>
      </li>
    </ul>

    <p class="card-description">A daily selection of privately personalized reads; no accounts or sign-ups
      required.</p>
    <p class="card-description desk-card-des">A daily selection of privately personalized reads; no accounts or
      sign-ups required.</p>
    <ul class="card-subtitles card-desk-sub">
      <li class="languages">html</li>
      <li class="languages">css</li>
      <li class="languages">javaScript</li>
    </ul>

    <a class="card-button data-popup-ref" href="#">See Project</a>
  </div>
</section>

  `;
  console.log('hello-world');
  // worksSection.appendChild('section');
}

const appbtn = document.querySelectorAll('.data-popup-ref');
const wrapper = document.querySelector('.wrapper');
const popClose = document.querySelector('.popup-close');


function openModal(){
  wrapper.style.display ='none';
  popWindow.style.display ='inherit';
}
appbtn.forEach((appbtn) => {
  appbtn.addEventListener('click', openModal);
});

function closeModal(){
  wrapper.style.display ='inherit';
  popWindow.style.display ='none';
}
popClose.addEventListener('click', closeModal);
