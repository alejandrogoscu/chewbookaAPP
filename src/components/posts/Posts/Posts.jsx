import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../../features/posts/postsSlice';
import Post from '../Post/Post';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  console.log('posts desde redux', posts) //PERO SI LLEGAN KULIAO PORK NO SE PINTAN WA A LLORAR
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  return (
    <div>
        <h3>Posts</h3>
        <Post posts={posts} />
    </div>
  )
}

export default Posts