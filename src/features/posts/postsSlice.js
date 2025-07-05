import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postService from './postsService';

const initialState = {
  posts: [],
  post: {},
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      /* console.log('Payload que llega:', action.payload);
      state.posts = Array.isArray(action.payload) ? action.payload : Object.values(action.payload) || []; */
      state.posts = action.payload;
    });
  },
});

export const getAll = createAsyncThunk('posts/getAll', async () => {
  try {
    return await postService.getAll();
  } catch (error) {
    console.error('Erros al sacar los posts', error);
  }
});

export default postSlice.reducer;
