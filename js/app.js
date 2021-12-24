const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
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

const workObject = [{
  id: 1,
  workCardTitle: 'Tonic',
  imagesMobile: ['./images/popup-tonic-mobile.png', './images/mps1.png'],
  imagesDesk: ['./images/desk-snap-4.png', './images/desk-snap-1.png'],
  imageAlt: 'Tonic Project',
  cardTitleMo: ['Tonic', 'Multi-Post Stories'],
  cardTitleDesk: ['Tonic', 'Multi-Post Stories'],
  titleElementsMo: ['CANOPY', 'Back End Dev', '2015'],
  titleElementsDesk: ['CANOPY', 'Back End Dev', '2015', 'FACEBOOK', 'Full Stack Dev', '2015'],
  cardDescriptionMo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  cardDescriptionDesk: ['A daily selection of privately personalized reads; no accounts or sign-ups required.','Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.'],
  languagesMo: ['html', 'css', 'javaScript'],
  languagesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
 {
  id: 2,
  workCardTitle: 'Multi-Post Stories',
  imagesMobile: ['./images/Tonic2.png', './images/mps2.png'],
  imagesDesk: ['./images/desk-snap-2.png', './images/desk-snap-3.png'],
  imageAlt: 'Multi-Post Project 1',
  cardTitleMo: ['Tonic', 'Multi-Post Stories'],
  cardTitleDesk: ['Facebook 360', 'Uber Navigation'],
  titleElementsMo: ['CANOPY', 'Back End Dev', '2015'],
  titleElementsDesk: ['FACEBOOK', 'Full Stack Dev', '2015', 'UBER', 'Lead Developer', '2018'],
  cardDescriptionMo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  cardDescriptionDesk: ['Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'],
  languagesMo: ['html', 'css', 'javaScript'],
  languagesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
];

for (let i= 0;  i < 1; i += 1) {
  for (let j= 0;  j < workObject.length; j += 1) {
    const allWork = workObject[j];
    const section = document.createElement('section');
    section.setAttribute('class', 'card');

    worksSection.innerHTML += `
  
  <section class="card">
  <img class="desk-card-img" src=${allWork.imagesDesk[i]} alt="Desktop Tonic Project">
  <img class="card-img" src="${allWork.imagesMobile[i]}" alt="Tonic Project 1">
  <div class="text-cont">
    <h2 class="card-title">${allWork.cardTitleMo[i]}</h2>
    <h2 class="card-desk-title">${allWork.cardTitleDesk[i]}</h2>
    <ul class="title-elements">
      <li>
        <p class="pr-name">${allWork.titleElementsMo[0]}</p>
        <p class="pr-desk-name">${allWork.titleElementsDesk[i]}</p>
      </li>
      <li><img class="dot" src="./images/dot.png" alt="stylistic text divider dot"></li>
      <li>
        <p class="art-name">${allWork.titleElementsMo[1]}</p>
        <p class="art-desk-name">${allWork.titleElementsDesk[i + 1]}</p>
      </li>
      <li><img class="dot" src="./images/dot.png" alt="stylistic text divider dot"></li>
      <li>
        <p class="year">${allWork.titleElementsMo[2]}</p>
        <p class="desk-year">${allWork.titleElementsDesk[i + 2]}</p>
      </li>
    </ul>

    <p class="card-description">${allWork.cardDescriptionMo}</p>
    <p class="card-description desk-card-des">${allWork.cardDescriptionDesk[i]}</p>
  
    <ul class="card-subtitles card-desk-sub">
      <li class="languages">${allWork.languagesDesk[i]}</li>
      <li class="languages">${allWork.languagesDesk[i + 2]}</li>
      <li class="languages">${allWork.languagesDesk[i + 3]}</li>
    
      
      
    </ul>

    <a class="card-button data-popup-ref" href="#">See Project</a>
  </div>
</section>

<section class="card">
  
  <img class="card-img" src="${allWork.imagesMobile[i + 1]}" alt="Tonic Project 1">
  <div class="text-cont">
    <h2 class="card-title">${allWork.cardTitleMo[i + 1]}</h2>
    <h2 class="card-desk-title">${allWork.cardTitleDesk[i + 1]}</h2>
    <ul class="title-elements">
      <li>
        <p class="pr-name">${allWork.titleElementsMo[0]}</p>
        <p class="pr-desk-name">${allWork.titleElementsDesk[i + 3]}</p>
      </li>
      <li><img class="dot" src="./images/dot.png" alt="stylistic text divider dot"></li>
      <li>
        <p class="art-name">${allWork.titleElementsMo[1]}</p>
        <p class="art-desk-name">${allWork.titleElementsDesk[i + 4]}</p>
      </li>
      <li><img class="dot" src="./images/dot.png" alt="stylistic text divider dot"></li>
      <li>
        <p class="year">${allWork.titleElementsMo[2]}</p>
        <p class="desk-year">${allWork.titleElementsDesk[i + 5]}</p>
      </li>
    </ul>

    <p class="card-description">${allWork.cardDescriptionMo}</p>
    <p class="card-description desk-card-des">${allWork.cardDescriptionDesk[i + 1]}</p>
    <ul class="card-subtitles card-desk-sub lang-width">
    <li class="languages">${allWork.languagesDesk[i]}</li>
    <li class="languages hideMe">${allWork.languagesDesk[i + 1]}</li>
    <li class="languages">${allWork.languagesDesk[i + 2]}</li>
    <li class="languages">${allWork.languagesDesk[i + 3]}</li>
    
  </ul>

    <a class="card-button data-popup-ref" href="#">See Project</a>
  </div>
  <img class="desk-card-img" src="${allWork.imagesDesk[i + 1]}" alt="Desktop Tonic Project">
</section>
  `;
  }
}

const appbtn = document.querySelectorAll('.data-popup-ref');
const wrapper = document.querySelector('.wrapper');
const popClose = document.querySelector('.popup-close');

function openModal() {
  wrapper.style.display = 'none';
  popWindow.style.display = 'inherit';
}
appbtn.forEach((appbtn) => {
  appbtn.addEventListener('click', openModal);
});

function closeModal() {
  wrapper.style.display = 'inherit';
  popWindow.style.display = 'none';
}
popClose.addEventListener('click', closeModal);
