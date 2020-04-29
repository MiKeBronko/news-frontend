import { Api, serverUrl } from '../api/MainApi';

import { Hedears } from '../components/Headers';

const isLogIn = new Headers();

const api = new Api(serverUrl, 
  {
    headers: {
      'Content-Type': 'application/json',
    },  
  });

  // api.signin()
  // .then((res) => {
  //   if (res.ok) {

  //   }
  // })

export default api;