import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

const register = async (userData) => {
  const res = await axios.post(API_URL, userData);
  return res.data;
};

const authService = {
  register,
};

export default authService;
