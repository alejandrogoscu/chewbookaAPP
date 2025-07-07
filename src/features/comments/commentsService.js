import axios from 'axios';

const API_URL = 'http://localhost:8080/comments';

const getCommentsByPost = async (postId) => {
  const res = await axios.get(`${API_URL}/post/${postId}`);
  return res.data;
};

export default { getCommentsByPost };