import './main.css';

// import { Api } from './js/api/MainApi';

import { News } from './js/api/NewsApi';

import  NewsCard from './js/components/NewsCard';

import  NewsCardList from './js/components/NewsCardList';

import { searchInput } from './js/utils/searchInput';

import { date } from './js/utils/date';


const news = new News();
const templateOfCard = document.querySelector('.card-template');
const findUser = document.querySelector('.search__input');

// const source = document.querySelector('.card__resource');
// const title = document.querySelector('.card__title');
// const dateEl = document.querySelector('.card__date');
// const text = document.querySelector('.card__text');
// const image = document.querySelector('.card__image');


//const createCard = ( source, title, dateEl, text, image ) => {
  // const card = new NewsCard(source, title, dateEl, text, image);
//   const createCard = ({articles}) => {
//         const card = new NewsCard({ articles });
//         card.createCard(templateOfCard);
// };
//   const ccardList = new NewsCardList({ createCard });
// const ccardList = new NewsCardList( initialArticles, document.querySelector('.card-list'), { createCard });

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
]

document.querySelector('.search__button').addEventListener('click', (e) => {
  // let dateStart = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  // let dateEnd = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  // if (!searchInput) {
  //   e.preventDefault();
  //   document.getElementById('preloader').style.display = 'block';
  // } else {
    // news.getNews(findUser.value, dateStart, dateEnd, '100')
    // .then(data => { });
      const createCard = (name, link) => {
        const card = new NewsCard(name, link);
        console.log(card);
       // card.createCard();
    }
    const ccardList = new NewsCardList(initialCards, document.querySelector('.card-list'),{ createCard });
      ccardList.renderCard();
      //}
        // let ccardList = new NewsCardList({ createArticle });
      //const createCard = ({ data }) => {
        // card.create(templateOfCard);
         // console.log(data.articles[0].source.name);
      //}

    // document.getElementById('result').style.display = 'none';
    // document.getElementById('preloader').style.display = 'block';
    // setTimeout(tempOpen, 1000);
  // }
});


document
  .querySelector('.header__authorization')
  // .querySelector('.header__auth-mobile')
  .addEventListener('click', () => {
    lPopup.open();
  });
