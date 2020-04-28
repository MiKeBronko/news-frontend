import NewsCard from './NewsCard';

export default class NewsCardList {
  constructor(arr,container, createCard) {
    this._arr = arr;
    this._container = container;
    this._createCard = createCard;

  }

   addCard(name, link) {
     const { cardElement }= this._createCard(name, link);
    this._container.appendChild(cardElement);
  }

  renderCard() {
     this._arr.forEach((item) => {
    //this._arr.forEach(element => this._createCard({ element }));
    return this.addCard(item.name, item.link);
     });
  }
}

// export default class NewsCardList {
//   constructor(arr, container) {
//     // super({ arr, container, createCard });

//     this._arr = arr || [];
//     this.container = container ;
//     // this._createCard = createCard;
//      this.renderCard();
//   }


//   renderCard() {
//     // this._arr.forEach(articles => this._createCard({ articles }));
//     this._arr.forEach(item => {
//       return this.addCard(item.name, item.link);
//     });
//   }
//     // addCard(source, title, dateEl, text, image) {
//     addCard(name, link) {
//       const { cardElement } = new NewsCard(name, link);
//       this.container.appendChild(cardElement);
//     }
//  //принимает экземпляр карточки и добавляет её в список.
//     // }

//     // render() {
//     //   this._arr.forEach((item) => {
//     //   return this.addCard(item.source, item.title, item.dateEl, item.text, item.image);
//     //  // принимает массив экземпляров карточек и отрисовывает их;
//     //   });
//     // }
// }

