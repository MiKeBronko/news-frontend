export default class Article {
  constructor(name, link) {
    this.articleElement = this.create(name, link);
  }

  static like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  static save(event) {
    const card = event.target.closest('.card');
    card.parentNode.appendChild(card);
  }

  static remove(event) {
    const card = event.target.closest('.card');
    card.parentNode.removeChild(card);
  }

  create() {
    const cardItem = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardImage = document.createElement('img');
    const cardIcon = document.createElement('button');
    const cardTooltip = document.createElement('p');
    const cardDate = document.createElement('span');
    const cardArticle = document.createElement('span');
    const cardText = document.createElement('p');
    const cardSource = document.createElement('span');

    cardItem.classList.add('card');
    cardTitle.classList.add('title card__title');
    cardImage.classList.add('card__image');
    cardIcon.classList.add('card__icon-bookmark');
    cardTooltip.classList.add('card__tooltip');
    cardDate.classList.add('card__date');
    cardArticle.classList.add('card__article');
    cardText.classList.add('card__text');
    cardSource.classList.add('card__resource');

    cardItem.appendChild(cardImage);
    cardItem.appendChild(cardTitle);
    cardItem.appendChild(cardImage);
    cardItem.appendChild(cardIcon);
    cardItem.appendChild(cardTooltip);
    cardItem.appendChild(cardDate);
    cardItem.appendChild(cardArticle);
    cardItem.appendChild(cardText);
    cardItem.appendChild(cardSource);

    cardName.textContent = this.nameValue;
    cardBackground.style.backgroundImage = `url(${linkValue})`;
    return cardItem;
  }
}
