import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

const register = async (userData) => {
  const res = await axios.post(API_URL, userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + '/login', userData);
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data.user));
    localStorage.setItem('token', JSON.stringify(res.data.token));
    localStorage.setItem('posts', JSON.stringify(res.data.posts));
    localStorage.setItem('comments', JSON.stringify(res.data.comments));
  }
  return res.data;
};

const logout = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.delete(API_URL + '/logout', {
    headers: { Authorization: `Bearer ${token}` }, // O token segun backend.
  });

  if (res.data) {
    localStorage.clear();
  }

  return res.data;
};

const getUserConnected = async  (token) => {
    const config =  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    };
    const res = await axios.get(`${API_URL}/me`, config);
    return res.data
};



const authService = {
  register,
  login,
  logout,
  getUserConnected,
};

export default authService;
