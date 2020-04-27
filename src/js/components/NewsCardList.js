import NewsCard from './NewsCard';

// export let articles;

export const initialArticles = [];

class NewsCardList {
  constructor(arr, container) {
    this.arr = arr;
    this.container = container;
    this.render();
  }

  addCard(name, img, content, link, date) {
    const { cardElement } = new NewsCard(name, img, content, link, date);
    this.container.appendChild(cardElement);
  }

  render() {
    this.arr.forEach(item => this.addCard(item.name, item.img, item.content, item.link, item.date));
  }
}


export default NewsCardList;