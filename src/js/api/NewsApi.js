const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('someKey');

const API_KEY = 'some_key';


const q = newsapi.v2.everything({
  q: 'bitcoin',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
})

export class News {
  constructor(qq) {
    this.qq = q;
    console.log(this.qq);
  }
  getNews() {
    return fetch(`https://newsapi.org/v2/everything?${this.qq}&apiKey=API_KEY`,{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .catch((err) => {
        console.log(err);
        console.log("Ошибка. Запрос не выполнен - user");
      });
    }
}

export default News;

 