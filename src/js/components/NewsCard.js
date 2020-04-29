//  import { Base } from './Base';

export default class NewsCard {
  // constructor(source, title, dateEl, text, image) {
  constructor({ art }) {
    //  super();
    this.name = name;
    // this.link = link;
    this.cardElement=this.createCard(name);

    //  this.source = source;
    //  this.title = title;
    //  this.dateEl = dateEl;
    //  this.text = text;
    //  this.image = image;
      // this.cardElement = this.create(source, title, dateEl, text, image);
  }

  createCard({ art }) {
    const cardItem = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardImage = document.createElement('img');
    const cardIcon = document.createElement('button');
    const cardTooltip = document.createElement('p');
    const cardDate = document.createElement('span');
    const cardArticle = document.createElement('span');
    const cardText = document.createElement('p');
    const cardSource = document.createElement('span');

    cardItem.classList.add('card');
    cardName.classList.add('title card__title');
    cardImage.classList.add('card__image');
    cardIcon.classList.add('card__icon-bookmark');
    cardTooltip.classList.add('card__tooltip');
    cardDate.classList.add('card__date');
    cardArticle.classList.add('card__article');
    cardText.classList.add('card__text');
    cardSource.classList.add('card__resource');

    cardItem.appendChild(cardImage);
    cardItem.appendChild(cardName);
    cardItem.appendChild(cardImage);
    cardItem.appendChild(cardIcon);
    cardItem.appendChild(cardTooltip);
    cardItem.appendChild(cardDate);
    cardItem.appendChild(cardArticle);
    cardItem.appendChild(cardText);
    cardItem.appendChild(cardSource);

    // cardName.textContent = this.title;
    // cardText.textContent = this.description;
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

