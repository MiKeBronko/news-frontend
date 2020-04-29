import './main.css';

// import { Api } from './js/api/MainApi';

import { News } from './js/api/NewsApi';

import NewsCard from './js/components/NewsCard';

import NewsCardList from './js/components/NewsCardList';

import { searchInput } from './js/utils/searchInput';

import { dateStart, dateEnd } from './js/utils/date';

import api from './js/utils/request';

import { Popup } from './js/components/Popup';

import {
  form, handleValidate,
} from './js/utils/valid_login';

import {
  formReg, handleValidateReg,
} from './js/utils/valid_reg';

const news = new News();

const findUser = document.querySelector('.search__input');



// const keyw = document.querySelector('.search__input');

// keyw.value = 'слово';

const initialCards = [];
const createCard = data => new NewsCard({ data });

document.querySelector('.search__button').addEventListener('click', (e) => {
  if (!searchInput) {
    e.preventDefault();
    document.getElementById('preloader').style.display = 'block';
  } else {
    // document.getElementById('preloader').style.display = 'block';
    news.getNews(findUser.value, dateStart, dateEnd, '100')
      .then((data) => {
      // console.log(data.articles);
        if (data.totalResults > 3) {
          document.querySelector('.result__button-more').classList.remove('result__button-more_hidden');

          for (let i = 0; i < 3; i++) {
            initialCards.push(data.articles[i]);

          // const resultsList = Array.from(data.articles);
          const [source, title, text,  datePublished,  image] = initialCards;

          // art = {
          //   title: data.articles[i].title,
          //   source: data.articles[i].source.name, =
          //   datePublished: data.articles[i].publishedAt,
          //   text: data.articles[i].description,
          //   image: data.articles[i].urlToImage,
          //   keyword: keyw,
          // };
          // console.log(art);
        }
        }
          // const source = data.articles[i].source.name;
          // const title = data.articles[i].title;
          // const datePublished = data.articles[i].publishedAt;
          // const text = data.articles[i].description;
          // const image = data.articles[i].urlToImage;
          // const keyword = keyw;

        // console.log(source);
        // console.log(title);
        // console.log(datePublished);
        // console.log(text);
        // console.log(image);
        // console.log(keyword);


        // const resultsList = Array.from(data.articles);
        // resultsList.forEach(elem => {
        //   initialCards.push(elem);
        // });
        // console.log(initialCards);
        console.log(data.totalResults);
        const ccardList = new NewsCardList(initialCards, document.querySelector('.card-list'), createCard);
        // const ccardList =
        // new NewsCardList(initialCards.slice(0, 3)
        // ,document.querySelector('.card-list'), createCard);
        ccardList.renderCard();
        // }
      });
    // document.getElementById('result').style.display = 'none';
    // document.getElementById('preloader').style.display = 'block';
    // setTimeout(tempOpen, 1000);
  }
});

document
.querySelector('.result__button-more')
.addEventListener('click', () => {
  const qcardList = new NewsCardList(initialCards.slice(3, 6), document.querySelector('.card-list'), createCard);
  qcardList.renderCard();
});

document
  .querySelector('.popup__switch_signin')
  .addEventListener('click', () => {
    document.querySelector('.popup__title').textContent = 'Регистрация';
    document
      .querySelector('.popup__content')
      .classList.add('popup__content_reg');
    document.querySelector('.popup__form-login').classList.remove('popup__form-login_visible');
    document.querySelector('.popup__form-reg').classList.add('popup__form-reg_visible');
    document.getElementById('sw_reg').style.display = 'none';
    document.getElementById('sw_login').style.display = 'block';
  });

document
  .querySelector('.popup__switch_reg')
  .addEventListener('click', () => {
    document.querySelector('.popup__title').textContent = 'Вход';
    document
      .querySelector('.popup__content')
      .classList.remove('popup__content_reg');
    // document.getElementById('field').style.display = 'none';
    document.querySelector('.popup__form-reg').classList.remove('popup__form-reg_visible');
    document.querySelector('.popup__form-login').classList.add('popup__form-login_visible');
    document.getElementById('sw_reg').style.display = 'block';
    document.getElementById('sw_login').style.display = 'none';
  });

  document
  .querySelector('#logintxt')
  .addEventListener('click', () => {
    document.querySelector('.popup__title').textContent = 'Вход';
    document
      .querySelector('.popup__content')
      .classList.remove('popup__content_ok');
    // document.getElementById('field').style.display = 'none';
    document.querySelector('.popup__form-ok').classList.remove('popup__form-ok_visible');
    document.querySelector('.popup__form-login').classList.add('popup__form-login_visible');
    document.getElementById('sw_reg').style.display = 'block';
    document.getElementById('sw_login').style.display = 'none';
  });

document
.querySelector('.header__usr')
.addEventListener('click', () => {
  document.querySelector('.header__nav').classList.remove('header__nav_login');
  document.querySelector('.header__article').classList.remove('header__article_visible');
  document.querySelector('.header__usr').classList.remove('header__usr_main');
  document.querySelector('.header__authorization').classList.add('header__authorization_visible');
});

document
.querySelector('.header__usr_mobile')
.addEventListener('click', () => {
  document.querySelector('.header__auth-mobile').classList.add('header__auth-mobile_visible');
  document.querySelector('.header__usr_mobile').classList.remove('header__usr_mobile');
  document.querySelector('.header__article_mobile').classList.remove('header__article_mobile');
});


export const lPopup = new Popup('.popup', 'popup_is-opened', '.popup__close');
document.querySelector('.content').addEventListener('click', (event) => {
  if (event.target.classList.contains('popup_is-opened')) {
    lPopup.close();
  }
});

document
  .querySelector('.header__authorization')
  .addEventListener('click', () => {
    lPopup.open();
  });


document.querySelector('.popup__button_reg').addEventListener('click', (event) => {
  event.preventDefault();
  api.signup();
});

document.querySelector('.popup__button_login').addEventListener('click', (event) => {
  event.preventDefault();
  api.signin();
});


form.addEventListener('keyup', (event) => {
  handleValidate(event.target);
});

formReg.addEventListener('focusout', (event) => {
  const evn = event || window.event;
  evn.target.style.borderBottom = '1px solid rgba(0, 0, 0, .2)';
});
formReg.addEventListener('keyup', (event) => {
  const evt = event || window.event;
  evt.target.style.borderBottom = '1px solid #000';
  handleValidateReg(evt.target);
});

document
  .querySelector('.header__nav-mobile')
  .addEventListener('click', () => {
    document.querySelector('.panel-mobile').classList.add('panel-mobile_visible');
  });

document.querySelector('.panel-mobile__close').addEventListener('click', () => {
  document.querySelector('.panel-mobile').classList.remove('panel-mobile_visible');
});

document
  .querySelector('.header__authorization')
  .addEventListener('click', () => {
    lPopup.open();
  });

document
  .querySelector('.header__auth-mobile')
  .addEventListener('click', () => {
    lPopup.open();
  });


