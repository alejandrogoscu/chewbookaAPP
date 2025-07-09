import axios from 'axios';

const API_URL = 'http://localhost:8080/comments';

const getCommentsByPost = async (postId) => {
  const res = await axios.get(`${API_URL}/post/${postId}`);
  return res.data;
};

const addCommentToPost = async ({ postId, comment }) => {
  const token = localStorage.getItem('token');
  const res = await axios.post(
    `${API_URL}/post/${postId}`,
    { comment },
    { headers: { Authorization: token } } // Solo el token, sin 'Bearer '
  );
  return res.data;
};

export default { getCommentsByPost, addCommentToPost };