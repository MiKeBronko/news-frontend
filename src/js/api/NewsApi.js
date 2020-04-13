const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('41ea6e720ebb4607a8f5e1bf3877e329');

newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'ru',
  sortBy: 'relevancy',
  page: 100,
}).then((response) => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});

const url = 'http://newsapi.org/v2/everything?'
          + 'q=Apple&'
          + 'from=2020-04-13&'
          + 'sortBy=popularity&'
          + 'apiKey=41ea6e720ebb4607a8f5e1bf3877e329';

const req = new Request(url);

fetch(req)
  .then((response) => {
    console.log(response.json());
  });
