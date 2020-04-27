import './main.css';

import { Popup } from './js/components/Popup';

import {
  form, handleValidate,
} from './valid_login';

import {
  formReg, handleValidateReg,
} from './valid_reg';

import api from './js/utils/request';

import { News } from './js/api/NewsApi';



const findUser = document.querySelector('.search__input');

// const date = new Date();

const lPopup = new Popup('.popup', 'popup_is-opened', '.popup__close');
document.querySelector('.content').addEventListener('click', (event) => {
  if (event.target.classList.contains('popup_is-opened')) {
    lPopup.close();
  }
});

const news = new News();

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

function tempOpen() {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('result').style.display = 'flex';
}

function search() {
  if (document.querySelector('.search__input').value.length === 0) {
    document.querySelector('.search__button').setAttribute('disabled', true);
    return false;
  } if (document.querySelector('.search__input').value.length !== 0) {
    document.querySelector('.search__button').removeAttribute('disabled', true);
    return true;
  }
  return search();
}

document.querySelector('.search__button').addEventListener('click', () => {
  if (!search) {
    document.getElementById('preloader').style.display = 'block';
  } else {
    news.getNews();
    document.getElementById('result').style.display = 'none';
    document.getElementById('preloader').style.display = 'block';
    setTimeout(tempOpen, 1000);
  }
});


document
  .querySelector('.header__nav-mobile')
  .addEventListener('click', () => {
    // lPopup.open();
    // document.getElementById('regtxt').style.marginLeft = '80px';
    document.querySelector('.panel-mobile').classList.add('panel-mobile_visible');
  });

document.querySelector('.panel-mobile__close').addEventListener('click', () => {
  document.querySelector('.panel-mobile').classList.remove('panel-mobile_visible');
});

document
  .querySelector('.header__authorization')
  .addEventListener('click', () => {
    lPopup.open();
    // document.querySelector('.popup__form-login').classList.add('popup_form-login_visible');
    // document.getElementById('regtxt').style.marginLeft = '80px';
  });

document
  .querySelector('.header__auth-mobile')
  .addEventListener('click', () => {
    lPopup.open();
    // document.querySelector('.popup__form-login').classList.add('popup_form-login_visible');
    // document.getElementById('regtxt').style.marginLeft = '80px';
  });

document
  .querySelector('.popup__switch_signin')
  .addEventListener('click', () => {
    document.querySelector('.popup__title').textContent = 'Регистрация';
    document
      .querySelector('.popup__content')
      .classList.add('popup__content_reg');
    // document.getElementById('field').style.display = 'block';
    document.querySelector('.popup__form-login').classList.remove('popup__form-login_visible');
    document.querySelector('.popup__form-reg').classList.add('popup__form-reg_visible');
    document.getElementById('sw_reg').style.display = 'none';
    document.getElementById('sw_login').style.display = 'block';
    // document
    //   .querySelector('.popup__button')
    //   .classList.add('popup__button_reg');
    // document.querySelector('.popup__button').textContent = 'Зарегистрироваться';
    // document.getElementById('logintxt').style.marginLeft = '135px';
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
    // document
    //   .querySelector('.popup__button')
    //   .classList.remove('popup__button_reg');
    // document.querySelector('.popup__button').textContent = 'Войти';
    document.getElementById('sw_reg').style.display = 'block';
    document.getElementById('sw_login').style.display = 'none';
  });

// document.querySelector('.header__usr').addEventListener('click', () => {
//   document.querySelector('.header__nav').classList.remove('header__nav_login');
//   document.querySelector('.header__article').classList.remove('header__article_visible');
//   document.querySelector('.header__usr').classList.remove('header__usr_main');
//   document.querySelector('.header__authorization').classList.add('header__authorization_visible');
// });

document.querySelector('.header__usr_mobile').addEventListener('click', () => {
  document.querySelector('.header__auth-mobile').classList.add('header__auth-mobile_visible');
  document.querySelector('.header__usr_mobile').classList.remove('header__usr_mobile');
  document.querySelector('.header__article_mobile').classList.remove('header__article_mobile');
});

// document.querySelector('.header__main_visible').addEventListener('click', () => {
//   document.querySelector('.header__nav').classList.add('header__nav_login');
//   document.querySelector('.header__article').classList.add('header__article_visible');
//   document.querySelector('.header__usr').classList.add('header__usr_main');
//   document.querySelector('.header__authorization').classList.remove('header__authorization_visible');
// });
