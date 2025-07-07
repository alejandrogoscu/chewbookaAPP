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
      state.posts = action.payload;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
    })
  },
});

export const getAll = createAsyncThunk('posts/getAll', async () => {
  try {
    return await postService.getAll();
  } catch (error) {
    console.error('Erros al sacar los posts', error);
  }
});

export const getById = createAsyncThunk('posts/getById', async (_id) => {
    try {
        return await postService.getById(_id)
    } catch (error) {
        console.error('No se ha encontrado post', error)
    }
})

export default postSlice.reducer;
