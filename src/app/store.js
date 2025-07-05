import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import user from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    auth,
    user,
  },
});

export default store;