import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDataLogin  } from '../../@types/auth';

export const loginUser = createAsyncThunk(
  'auth/authLogin',
  async (dataLoginUser: IDataLogin, {rejectWithValue}) => {
    try {
      const response = await axios.post<IDataLogin>('/api/auth/login', dataLoginUser);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        return rejectWithValue(error.response?.data || 'Ошибка регистрации')
      }

      console.error('Неизвестная ошибка:', error)
      return rejectWithValue('Ошибка регистрации')
    }
  }
);
