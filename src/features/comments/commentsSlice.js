
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentsService from './commentsService';

export const fetchCommentsByPost = createAsyncThunk(
  'comments/fetchByPost',
  async (postId) => await commentsService.getCommentsByPost(postId)
);

export const addCommentToPost = createAsyncThunk(
  'comments/addToPost',
  async ({ postId, comment }) => await commentsService.addCommentToPost({ postId, comment })
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    items: [],
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
        state.items = [
          ...state.items.filter(c => c.post !== action.meta.arg),
          ...action.payload
        ];
        state.loading = false;
      })
      .addCase(fetchCommentsByPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCommentToPost.fulfilled, (state, action) => {
        // Opcional: podrías añadir el comentario directamente
        state.items.push(action.payload);
      });
  },
});

export default commentsSlice.reducer;