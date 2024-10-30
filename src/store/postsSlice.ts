import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IPost {
  _id: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
  user: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  };
}

interface IObjPost {
  success: boolean;
  posts: IPost[];
}

interface IPostsResponse {
  isLoading: boolean;
  posts: IPost[];
  error: string | null | undefined;
}

const API_URL = process.env.REACT_APP_API_URL;
if (!API_URL) {
  throw new Error('REACT_APP_API_URL не определена');
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IObjPost>(`${API_URL}`);
      if (response.data.success) {
        return response.data.posts;
      } else {
        return rejectWithValue('Не удалось загрузить посты');
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue('Ошибка загрузки постов');
    }
  }
);

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
