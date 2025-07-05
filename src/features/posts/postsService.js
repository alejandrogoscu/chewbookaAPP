import axios from 'axios';

const API_URL = 'http://localhost:8080/posts';
const getAll = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error('Error al obtener posts', error);
  }
};

const postService = {
  getAll,
};

export default postService;
