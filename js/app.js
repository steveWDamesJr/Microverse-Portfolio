const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const portfolioJs = document.querySelector('#portfolioJs');

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
  images: './images/popup-tonic-mobile.png',
  imageAlt: 'Tonic Project',
  titleElements: ['CANOPY', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
{
  id: 2,
  workCardTitle: 'Multi-Post Stories',
  images: './images/mps1.png',
  imageAlt: 'Multi-Post Project 1',
  titleElements: ['CANOPY', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
{
  id: 3,
  workCardTitle: 'Tonic',
  images: './images/Tonic2.png',
  imageAlt: 'Tonic Project 2',
  titleElements: ['CANOPY', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
{
  id: 4,
  workCardTitle: 'Multi-Post Stories',
  images: './images/mps2.png',
  imageAlt: 'Multi-Post Project 2',
  titleElements: ['CANOPY', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javaScript'],
  liveBtn: '#',
  sourceBtn: '#'
},
];

for (let i = 0; i < workObject.length; i += 1) {
  const allWork = workObject[i];

  portfolioJs.innerHTML += `
      <div class="card-img card-1" id="btn-${allWork.id}">
        <img src="${allWork.images}" alt="${allWork.imageAlt}">
        <div class="details">
            <h2>${allWork.workCardTitle}</h2>
            <div class="popup-pr-name">
                <h4>${allWork.languages[0]}</h4>
                <ul>
                    <li>${allWork.languages[1]}</li>
                    <li>${allWork.languages[2]}</li>
                </ul>
            </div>
            <p class="card-descript">${allWork.cardDescription}</p>
            <ul class="languages">
                <li>${allWork.languages[0]}</li>
                <li>${allWork.languages[1]}</li>
                <li>${allWork.languages[2]}</li>
            </ul>
            <button data-popup-ref="myPopup">See project</button>
      </div>
  `;
}