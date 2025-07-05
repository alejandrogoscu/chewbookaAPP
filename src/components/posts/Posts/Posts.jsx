import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAll } from '../../../features/posts/postsSlice';
import Post from '../Post/Post';

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div>
      <h3>Posts</h3>
      <Post />
    </div>
  );
};

export default Posts;
