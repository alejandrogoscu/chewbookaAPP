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
    const res = await axios.get(API_URL +'id/'+  _id);
    console.log(res.data)
    return res.data
    
};

const searchByTitle = async (postTitle) => {
  const res = await axios.get(API_URL + 'title/' + postTitle)
  return res.data;
};



const postService = {
  getAll,
  getById,
  searchByTitle,
};

export default postService;
