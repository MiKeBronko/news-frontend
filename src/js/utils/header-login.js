import  { lPopup }  from '../../main';
import api from './request';
const logOn = document.querySelector('.header__nav');
const menuSavedArticle = document.querySelector('.header__article');
const menuUser = document.querySelector('.header__usr');
const menuOpenPopup = document.querySelector('.header__authorization');
const nameUser = document.querySelector('.header__usr');


export function logOnHeader(isLogOn) {
  if (isLogOn) {
    logOn.classList.add('header__nav_login');
    menuSavedArticle.classList.add('header__article_visible');
    menuUser.classList.add('header__usr_main');
    menuOpenPopup.classList.remove('header__authorization_visible');
    // nameUser.textContent = nameLogOnUser;
    lPopup.close();
  }
}
