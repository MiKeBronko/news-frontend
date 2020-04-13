import { MainApi, serverUrl } from '../api/MainApi';

import { ArticleList, initialArticles } from '../components/articleList';

// mport { Popup } from './js/components/popup';

import { formReg } from '../../valid_reg';

// const regPopup = new Popup('.popup', 'popup_is-opened', '.popup__close');

const mainApi = new MainApi(
  serverUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

export default mainApi;

// mainApi.getInitialCards()
//   .then((articles) => {
//     if (articles && articles.lenght > 0) {
//       new ArticleList(articles, document.querySelector('.card-list'));
//     }
// });
