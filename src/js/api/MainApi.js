import { formReg } from "../../valid_reg";
import { form } from "../../valid_login";
import { formData } from "../const/formInputs";

// export const serverUrl = process.env.NODE_ENV === 'development' ? 'https://api.newsviewer.ml/api/signup' : 'https://newsviewer.ml';

// export const serverUrl = 'http://localhost:3000/signup';
export const serverUrl = [
  "https://api.newsviewer.ml/api/signup",
  "https://newsviewer.ml/api",
];

export class Api {
  constructor(baseURL, options) {
    this.baseURL = serverUrl;
    this.headers = options.headers;

  }

  signup() {
    return fetch(this.baseURL[0], {
      // headers: this.headers,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   email: formReg.elements.email.value,
      //   password: formReg.elements.sample.value,
      //   name: formReg.elements.name.value,
      // }),
    })
  //     .then((res) => {
  //       if (res.ok) {
  //         // console.log(res.json());
  //         return res.json();
  //       }
  //       return Promise.reject(new Error(`Ошибка: ${res.status}`));
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //       console.log("Ошибка. Запрос не выполнен - signup");
  //     });
   }

  signin() {
    return fetch(`${this.baseURL[1]}/signin`, {
      // headers: this.headers,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.parse(formData),
      body: JSON.stringify({
        email: form.elements.email.value,
        password: form.elements.sample.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        }
        return Promise.reject(
          new Error(`Ошибка запроса signin: ${res.status}`)
        );
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .catch((err) => {
        console.log(err);
        console.log("Ошибка. Запрос не выполнен - login");
      });
  }

  getUser() {
    return fetch(`${this.baseURL[1]}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
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

  getArticles() {
    return fetch(`${this.baseURL}/articles`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
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
        console.log("Ошибка. Запрос не выполнен - статья");
      });
  }
}


export default Api;
