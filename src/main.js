import './main.css';
import './saved/saved.css';

import { Popup } from './popup';

const lPopup = new Popup('.popup', 'popup_is-opened', '.popup__close');

function tempOpen() {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('result').style.display = 'flex';
}

document.querySelector('.search__input').addEventListener('input', () => {
  document.getElementById('result').style.display = 'none';
  document.getElementById('preloader').style.display = 'block';
});

document.querySelector('.search__button').addEventListener('click', () => {
  document.getElementById('result').style.display = 'none';
  document.getElementById('preloader').style.display = 'block';
  setTimeout(tempOpen, 3000);
});

document
  .querySelector('.header__nav-mobile')
  .addEventListener('click', () => {
    lPopup.open();
    // document.getElementById('regtxt').style.marginLeft = '80px';
  });

document
  .querySelector('.header__authorization')
  .addEventListener('click', () => {
    lPopup.open();
    // document.getElementById('regtxt').style.marginLeft = '80px';
  });

document
  .querySelector('.popup__switch_signin')
  .addEventListener('click', () => {
    document.querySelector('.popup__title').textContent = 'Регистрация';
    document
      .querySelector('.popup__content')
      .classList.add('popup__content_reg');
    document.getElementById('field').style.display = 'block';
    document.getElementById('sw_reg').style.display = 'none';
    document.getElementById('sw_login').style.display = 'block';
    document.querySelector('.popup__button').classList.add('popup__button_reg');
    document.querySelector('.popup__button').textContent = 'Зарегистрироваться';
    // document.getElementById('logintxt').style.marginLeft = '135px';
  });

document.querySelector('.popup__switch_reg').addEventListener('click', () => {
  document.querySelector('.popup__title').textContent = 'Вход';
  document
    .querySelector('.popup__content')
    .classList.remove('popup__content_reg');
  document.getElementById('field').style.display = 'none';
  document.querySelector('.popup__button').textContent = 'Войти';
  document
    .querySelector('.popup__button')
    .classList.remove('popup__button_reg');
  document.getElementById('sw_reg').style.display = 'block';
  document.getElementById('sw_login').style.display = 'none';
});

document.querySelector('.content').addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    lPopup.close();
  }
});

document.querySelector('.header__usr').addEventListener('click', () => {
  document.querySelector('.header__nav').classList.remove('header__nav_login');
  document.querySelector('.header__article').classList.remove('header__article_visible');
  document.querySelector('.header__usr').classList.remove('header__usr_main');
  document.querySelector('.header__authorization').classList.add('header__authorization_visible');
});


document.querySelector('.header__main_visible').addEventListener('click', () => {
  document.querySelector('.header__nav').classList.add('header__nav_login');
  document.querySelector('.header__article').classList.add('header__article_visible');
  document.querySelector('.header__usr').classList.add('header__usr_main');
  document.querySelector('.header__authorization').classList.remove('header__authorization_visible');
});
