//= ============= Popup Window, Dynamic Rendering==============>

let html = '';
const popupArr = [
  {
    id: 0,
    mobileTitle: 'Tailoring',
    desktopTitle: 'Tailoring',
    detail: ['Men Suit', 'Female Gown', 'Sewing Tools'],
    description: ['This is a Tailor website that Produce Custom-made (bespoke) Suits, Jackets And Coats For Men And Women and other sewing tools.', 'This is a Tailor website that Produce Custom-made (bespoke) Suits, Jackets And Coats For Men And Women and other sewing tools.'],
    stack: ['html', 'css', 'javaScript'],
    mobileImage: 'images/snipp-mob.PNG',
    desktopImage: 'images/snipp2.PNG',
    live: 'https://yayaismaail.github.io/capstone1/',
    source: 'https://github.com/yayaismaail/capstone1',
  },
  {
    id: 1,
    mobileTitle: 'Movies Stories',
    desktopTitle: 'Movies Stories',
    detail: ['Scenes', 'Series', 'Zombies'],
    description: ['This is an immersive web application designed for movie enthusiasts to explore and engage with their favorite films and series.', 'This is an immersive web application designed for movie enthusiasts to explore and engage with their favorite films and series.'],
    stack: ['html', 'css', 'javaScript'],
    mobileImage: 'images/MovieMob.PNG',
    desktopImage: 'images/Movies.PNG',
    live: 'https://capstone-2-e2t7.onrender.com/',
    source: 'https://github.com/yayaismaail/capstone-2',
  },
  {
    id: 2,
    mobileTitle: 'Math Magicians',
    desktopTitle: 'Math Magicians',
    detail: ['Mathematics', '1x1', 'Magic Numbers'],
    description: ['Math magicians is a website for all fans of mathematics.', 'Math magicians is a website for all fans of mathematics.'],
    stack: ['html', 'css', 'javaScript'],
    mobileImage: 'images/calculatorMob.PNG',
    desktopImage: 'images/calculator.PNG',
    live: 'https://math-magicians-app-52pm.onrender.com',
    source: 'https://github.com/yayaismaail/math-magicians',
  },
  {
    id: 3,
    mobileTitle: 'SpaceX',
    desktopTitle: 'SpaceX',
    detail: ['Rocket', 'Missions', 'Dragons'],
    description: ['The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.', 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.'],
    stack: ['html', 'css', 'javaScript'],
    mobileImage: 'images/SpaceXMob.PNG',
    desktopImage: 'images/SpaceX.PNG',
    live: 'https://spacex-hujd.onrender.com/',
    source: 'https://github.com/yayaismaail/react-group-project/tree/space-travellers-hub',
  },
];

popupArr.forEach((card) => {
  html += `
  <div class="work">
  <div class="img-card">
      <img src="${card.mobileImage}" alt="" class="mobile">
      <img src="${card.desktopImage}" alt="" class="desktop">
  </div>
  <div class="card-contents">
      <h2 class="card-title mobile">${card.mobileTitle}</h2>
      <h2 class="card-title desktop">${card.desktopTitle}</h2>
      <div class="counter">
        <span>${card.detail[0]}</span>
        <span class="counters"></span>
        <span>${card.detail[1]}</span>
        <span class="counters"></span>
        <span>${card.detail[2]}</span>
      </div>
      <p class="card-desc mobile">${card.description[0]}</p>
      <p class="card-desc desktop">${card.description[1]}</p>
      <ul class="techs">
          <li class="techs-item"><a href="" class="techs-link">${card.stack[0]}</a></li>
          <li class="techs-item"><a href="" class="techs-link">${card.stack[1]}</a></li>
          <li class="techs-item"><a href="" class="techs-link">${card.stack[2]}</a></li>
      </ul>
      <button type="button" class="work-btn">see project</button>
  </div>
</div>`;
});

const workSection = document.querySelector('.work-section');
workSection.innerHTML = html;

//= ========== Popup Window Section =================>

const workBtn = document.querySelectorAll('.work-btn');
const popupContainer = document.querySelector('.popup-container');

for (let index = 0; index < workBtn.length; index += 1) {
  workBtn[index].addEventListener('click', () => {
    const mobileTitle = popupContainer.querySelector('.mobile-popup-title');
    const desktopPopupTitle = popupContainer.querySelector('.desktop-popup-title');

    const canopyA = popupContainer.querySelector('.canopy');
    const backEndDevA = popupContainer.querySelector('.back-end-dev');
    const dateA = popupContainer.querySelector('.date');

    const mobilePopupDescA = popupContainer.querySelector('.mobile-popup-desc');
    const desktopPopupDescA = popupContainer.querySelector('.desktop-popup-desc');

    const liveButton = popupContainer.querySelector('.live');
    const sourceButton = popupContainer.querySelector('.source');

    const mobilepopupImg = popupContainer.querySelector('.mobile-popup-img');
    const desktoppopupImg = popupContainer.querySelector('.desktop-popup-img');

    mobileTitle.textContent = popupArr[index].mobileTitle;
    desktopPopupTitle.textContent = popupArr[index].desktopTitle;

    //= =============== Using Array Destructuring=================>

    const [canopyB, backEndDevB, dateB] = popupArr[index].detail;

    const [mobilePopupDescB, desktopPopupDescB] = popupArr[index].description;

    mobilePopupDescA.textContent = mobilePopupDescB;
    desktopPopupDescA.textContent = desktopPopupDescB;

    canopyA.textContent = canopyB;
    backEndDevA.textContent = backEndDevB;
    dateA.textContent = dateB;

    liveButton.setAttribute('href', popupArr[index].live);
    sourceButton.setAttribute('href', popupArr[index].source);

    mobilepopupImg.setAttribute('src', popupArr[index].mobileImage);
    desktoppopupImg.setAttribute('src', popupArr[index].desktopImage);

    popupContainer.classList.remove('d-none');
  });
}

//= ============== Popup Close Button ==============>

const closeBtn = document.querySelector('.close-popup');
closeBtn.addEventListener('click', () => {
  popupContainer.classList.add('d-none');
});

const angle1 = document.querySelector('.angle1');
const angle2 = document.querySelector('.angle2');
const angle3 = document.querySelector('.angle3');
const languages = document.querySelector('.languages');
const frameworks = document.querySelector('.frameworks');
const skills = document.querySelector('.skills');

angle1.addEventListener('click', () => {
  languages.classList.toggle('d-none');
  angle1.classList.toggle('rotate');
});

angle2.addEventListener('click', () => {
  frameworks.classList.toggle('d-none');
  angle2.classList.toggle('rotate');
});

angle3.addEventListener('click', () => {
  skills.classList.toggle('d-none');
  angle3.classList.toggle('rotate');
});
