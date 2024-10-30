import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {IObjPost} from '../../@types/post';

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