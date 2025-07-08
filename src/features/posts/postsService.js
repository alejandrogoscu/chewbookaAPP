import axios from 'axios';

const API_URL = 'http://localhost:8080/posts/';

const getAll = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error('Error al obtener posts', error);
  }
};

const getById = async (_id) => {
  const res = await axios.get(API_URL + 'id/' + _id);
  console.log(res.data);
  return res.data;
};

const searchByTitle = async (postTitle) => {
  const res = await axios.get(API_URL + 'title/' + postTitle);
  return res.data;
};

const createPost = async (formData) => {
  let token = localStorage.getItem('token');
  if (token?.startsWith('"') && token?.endsWith('"')) {
    token = token.slice(1, -1);
  }
  if (!token) throw new Error('No token found');
  const res = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    },
  });
  return res.data;
};

const postService = {
  getAll,
  getById,
  searchByTitle,
  createPost,
};

export default postService;
