//  import { Base } from './Base';

export default class NewsCard {
  // constructor(source, title, dateEl, text, image) {
  constructor(name, link) {
    //  super();
    this.name = name;
    this.link = link;
    this.cardElement=this.createCard(name, link);

    //  this.source = source;
    //  this.title = title;
    //  this.dateEl = dateEl;
    //  this.text = text;
    //  this.image = image;
      // this.cardElement = this.create(source, title, dateEl, text, image);
  }

  createCard(nameValue, linkValue) {
    const cardItem = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardText = document.createElement('p');


    cardItem.classList.add('card');
    cardName.classList.add('card__title');
    cardText.classList.add('card__image');

    cardItem.appendChild(cardName);
    cardItem.appendChild(cardText);

    // cardName.textContent = this.nameValue;
    // cardText.textContent = this.linkValue;
    return cardItem;
  }
  //static save(event) {
    // const card = event.target.closest('.card');
    // card.parentNode.appendChild(card);
  //}

 //static remove(event) {
   // this._removeListeners();
    // const card = event.target.closest('.card');
    // card.parentNode.removeChild(card);
 // }

}

