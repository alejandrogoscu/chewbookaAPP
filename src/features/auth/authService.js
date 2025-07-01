import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

const register = async (userData) => {
  const res = await axios.post(API_URL, userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + '/login', userData);
  console.log('RESPUESTA LOGIN:', res.data);
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data.user));
    localStorage.setItem('token', JSON.stringify(res.data.token));
  }
  return res.data;
};

const authService = {
  register,
  login,
};

export default authService;
