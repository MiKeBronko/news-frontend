const API_KEY = '41ea6e720ebb4607a8f5e1bf3877e329';

export class News {
  constructor() {
    this.apiLink = 'https://newsapi.org/v2/everything?';
  }

  getNews(queryVal, dateFromVal, dateToVal, pageSizeVal) {
    return fetch(
      `${this.apiLink}q=${queryVal}&from=${dateFromVal}&to=${dateToVal}&pageSize=${pageSizeVal}&apiKey=${API_KEY}`,
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .catch((err) => {
        console.log(err);
        console.log('Ошибка. Запрос не выполнен ');
      });
  }
}

export default News;

// from Haz(R)
// getNews(query) {
//   const { sortBy, pageSize, apiKey } = this._apiParams;
//   const { formatCurrentDate, formatWeekBeforeDate } = this._apiDependecies;
//   const dateTo = formatCurrentDate();
//   const dateFrom = formatWeekBeforeDate();
//   return fetch(
//
// `${this._apiLink}q=${query}&from=
// ${dateFrom}&to=${dateTo}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${apiKey}`,
//   )
//     .then((resp) => resp.json())
//     .catch((err) => new Error(err.message));
// }
