import { formReg } from './valid_reg';

export const serverUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://newsviewer.ml';

export class Api {
  constructor({ baseURL }, options) {
    this.baseURL = serverUrl;
    this.headers = options.headers;
  }

  newUser() {
    return fetch(`${this.baseURL}/signup`, {
      // headers: this.headers,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: document.formReg.elements.email.value,
        password: document.formReg.elements.sample.value,
        name: document.formReg.elements.name.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .catch((err) => {
        console.log(err);
        console.log('Ошибка. Запрос не выполнен');
      });
  }
}




export const api = new Api(
  serverUrl,
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);
