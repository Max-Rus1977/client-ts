import { createSlice } from '@reduxjs/toolkit';
import { IPostsResponse } from '../../@types/post';
import { fetchPosts } from './thunks';

const initialState: IPostsResponse = {
  isLoading: true,
  posts: [],
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
      });
  },
});

export default postsSlice.reducer;
