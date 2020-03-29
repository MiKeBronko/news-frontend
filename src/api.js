import { form } from './valid';

export const serverUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:3000';

export class Api {
  constructor({ baseURL }, options) {
    this.baseURL = serverUrl;
    this.headers = options.headers;
  }

  newUser() {
    return fetch(`${this.baseURL}/signup`, {
      method: 'POST',
      // headers: this.headers,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: document.forms.form.elements.email.value,
        password: document.forms.form.elements.sample.value,
        name: document.forms.form.elements.name.value,
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
