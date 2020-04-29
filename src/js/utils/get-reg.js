const formOK = document.querySelector('.popup__form-ok');
const userAlredyExist = document.querySelector('#success-message');
const formReg = document.querySelector('.popup__form-reg');
const popupContent = document.querySelector('.popup__content');
const nameForm = document.querySelector('.popup__title');
const switchForm = document.querySelector('.popup__switch_reg');
const swithLoginOk = document.querySelector('#logintxt');


export function checkExist(isReg) {
  if (isReg) {
    popupContent.classList.remove('popup__content_reg');
    formReg.classList.remove('popup__form-reg_visible');
    nameForm.textContent='';
    switchForm.style.display= 'none';

    popupContent.classList.add('popup__content_ok');
    formOK.classList.add('popup__form-ok_visible');
  } else {
    userAlredyExist.classList.remove('popup__err-message_hidden');
  }
}
