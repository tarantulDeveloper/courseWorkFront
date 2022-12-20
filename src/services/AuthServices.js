import axios from 'axios';

const URL = process.env.REACT_APP_URL;

export const instance = axios.create({
  withCredentials: true,
  baseURL: URL
})

class AuthServices {
  login(signinRequest) {
    return instance.post('/auth/signing', signinRequest);
  }

  logout() {
    return instance.post('/auth/signout')
  }
}

export default new AuthServices();
