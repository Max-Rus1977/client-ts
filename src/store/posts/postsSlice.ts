import { createSlice } from '@reduxjs/toolkit';
import { IPostsResponse } from '../../@types/post';
import { fetchPosts, fetchOnePost } from './thunks';

const initialState: IPostsResponse = {
  isLoading: true,
  posts: [],
  selectedPost: null,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Получение всех постов
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Получение одного поста
      .addCase(fetchOnePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOnePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedPost = action.payload;
      })
      .addCase(fetchOnePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      
  },
});

export default postsSlice.reducer;
