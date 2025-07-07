import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import posts from '../features/posts/postsSlice';
import user from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    auth,
    user,
    posts,
  },
});

export default store;
