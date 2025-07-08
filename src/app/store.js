import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import user from '../features/users/userSlice';
import posts from '../features/posts/postsSlice';
import comments from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    auth,
    user,
    posts,
    comments,
  },
});

export default store;
