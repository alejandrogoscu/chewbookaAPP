import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getById } from '../../../features/posts/postsSlice';

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);

  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  return (
    <div>
      <h1>PostDetail</h1>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <img src={post.image} style={{ maxWidth: '400px' }} />
    </div>
  );
};

export default PostDetail;
