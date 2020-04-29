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



const keyw = document.querySelector('.search__input').value = 'слово';

let initialCards = []; 
const createCard = (data) => new NewsCard({ data });
document.querySelector('.search__button').addEventListener('click', (e) => {
  let dateStart = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  let dateEnd = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  if (!searchInput) {
    e.preventDefault();
    document.getElementById('preloader').style.display = 'block';
  } else {
    // document.getElementById('preloader').style.display = 'block';
    news.getNews(findUser.value, dateStart, dateEnd, '100')
    .then(data => {
      // console.log(data.articles);
       if (data.totalResults > 3 ) {
        document.querySelector('.result__button-more').classList.remove('result__button-more_hidden');
       }
       for (let i=0; i < 1; i++ ) {
        const resultsList = Array.from(data.articles);
        
        initialCards.push(data.articles[i]);
        const art = {
          title : data.articles[i].title,
          source : data.articles[i].source.name,
          datePublished : data.articles[i].publishedAt,
          text : data.articles[i].description,
          image : data.articles[i].urlToImage,
          keyword : keyw,
        }
        // const source = data.articles[i].source.name;
        // const title = data.articles[i].title;
        // const datePublished = data.articles[i].publishedAt;
        // const text = data.articles[i].description;
        // const image = data.articles[i].urlToImage;
        // const keyword = keyw;

         console.log(art);
        // console.log(source);
        // console.log(title);
        // console.log(datePublished);
        // console.log(text);
        // console.log(image);
        // console.log(keyword);
      }
      
      // const resultsList = Array.from(data.articles);
      // resultsList.forEach(elem => {
      //   initialCards.push(elem);
      // });
      console.log(initialCards);
      console.log(data.totalResults);
    const ccardList = new NewsCardList({art}, document.querySelector('.card-list'), createCard);
      // const ccardList = new NewsCardList(initialCards.slice(0, 3), document.querySelector('.card-list'), createCard);  
      ccardList.renderCard();
     // }
    });
    // document.getElementById('result').style.display = 'none';
    // document.getElementById('preloader').style.display = 'block';
    // setTimeout(tempOpen, 1000);
  }
});

 document.querySelector('.result__button-more').addEventListener('click', (evt) => {
  const qcardList = new NewsCardList(initialCards.slice(3,6), document.querySelector('.card-list'), createCard);
  qcardList.renderCard();
  // console.log(initialCards);
});

document
  .querySelector('.header__authorization')
  // .querySelector('.header__auth-mobile')
  .addEventListener('click', () => {
    lPopup.open();
  });
