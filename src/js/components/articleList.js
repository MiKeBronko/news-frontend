import Article from './article';

// export let articles;

export const initialArticles = [];

export default class ArticleList {
  constructor(arr, container) {
    this.arr = arr;
    this.container = container;
    this.render();
  }

  addCard(name, link) {
    const { articleElement } = new Article(name, link);
    this.container.appendChild(articleElement);
  }

  render() {
    this.arr.forEach(item => this.addCard(item.name, item.link));
  }
}
