const userElement = document.querySelector('.header__usr_main');
import { checkExist } from '../utils/get-reg';
import { logOnHeader } from '../utils/header-login';

export const serverUrl = [
  'https://api.newsviewer.ml/api/signup',
  'https://newsviewer.ml/api',
  'https://newsviewer.ml/api/users/me',
];

export class Api {
  constructor(baseURL, options) {
    this.baseURL = serverUrl;
    this.headers = options.headers;
  }

  signup() {
    return fetch(this.baseURL[0], {
      // headers: this.headers,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formReg.elements.email.value,
        password: formReg.elements.sample.value,
        name: formReg.elements.name.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          checkExist(true)
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .catch((err) => {
        // console.log(err);
        console.log("Ошибка. Запрос не выполнен - signup");
      })
      .finally(checkExist(false));
  }

  signin() {
    return fetch(`${this.baseURL[1]}/signin`, {
      // headers: this.headers,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.elements.email.value,
        password: form.elements.sample.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          logOnHeader(true)
          // console.log(res.status);
          return res.json();
        }
        return Promise.reject(
          new Error(`Ошибка запроса signin: ${res.status}`),
        );
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
      })
      .catch((err) => {
        console.log(err);
        console.log('Ошибка. Запрос не выполнен - login');
      })
      .finally(logOnHeader(false));
  }

  getUser() {
    return fetch(`${this.baseURL[1]}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .then((data) => {
        userElement.textContent = data.name;
      })
      .catch((err) => {
        console.log(`'Запрос не выполнен: ${err}`);
        console.log();
      });
  }

  getArticles() {
    return fetch(`${this.baseURL}/articles`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
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
        console.log('Ошибка. Запрос не выполнен - статья');
      });
  }
}


export default Api;
