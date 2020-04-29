import './saved.css';

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
