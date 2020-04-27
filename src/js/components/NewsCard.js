export default class NewsCard {
  constructor(name, img, content, link, date) {
    this.newsCardElement = this.create(name, img, content, link, date);
  }

  static save(event) {
    const card = event.target.closest('.card');
    card.parentNode.appendChild(card);
  }

  static remove(event) {
    const card = event.target.closest('.card');
    card.parentNode.removeChild(card);
  }

  create(nameValue, imgValue, contentValue, linkValue, dateValue) {
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

    cardName.textContent = this.nameValue;
    cardDate.textContent = this.dateValue;
    cardText.textContent = this.contentValue;
    cardSource.textContent = this.linkValue
    cardBackground.style.backgroundImage = `url(${imgValue})`;
    return cardItem;
  }
}
