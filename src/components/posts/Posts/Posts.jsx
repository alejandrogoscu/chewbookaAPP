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
      <Post />
    </div>
  );
};

export default Posts;
