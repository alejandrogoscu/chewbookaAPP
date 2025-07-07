import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user') || null);
const token = JSON.parse(localStorage.getItem('token') || null);
const posts = JSON.parse(localStorage.getItem('posts') || null);
const comments = JSON.parse(localStorage.getItem('comments') || null);

const initialState = {
  user: user,
  token: token,
  posts: posts,
  comments: comments,
  isError: false,
  isSuccess: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.posts = action.payload.posts;
        state.comments = action.payload.comments;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('token', JSON.stringify(action.payload.token));
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.posts = [];
        state.comments = [];
      })
      .addCase(getUserConnected.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.user = action.payload.user;
        state.posts = action.payload.posts;
      })
      .addCase(getUserConnected.pending, (state) => {
        state.isSuccess = false;
      })

      .addCase(getUserConnected.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error) {
    const message = error.response.data.error[0].message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message = error.response?.data?.message || 'Error al iniciar sesión';
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.log(error);
  }
});

export const getUserConnected = createAsyncThunk('auth/getUserConnected', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    return await authService.getUserConnected(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
