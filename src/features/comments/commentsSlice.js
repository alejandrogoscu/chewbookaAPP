
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentsService from './commentsService';


export const fetchCommentsByPost = createAsyncThunk(
  'comments/fetchByPost',
  async (postId) => await commentsService.getCommentsByPost(postId)
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    items: [], // todos los comentarios cargados
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCommentsByPost.fulfilled, (state, action) => {
        // Reemplaza los comentarios de ese post
        state.items = [
          ...state.items.filter(c => c.post !== action.meta.arg),
          ...action.payload
        ];
        state.loading = false;
      })
      .addCase(fetchCommentsByPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;