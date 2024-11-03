import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDataRegister } from '../../@types/auth';

export const registerUser = createAsyncThunk(
  'auth/authRegister',
  async (newUser,{ rejectWithValue}) => {
    try {
      const response = await axios.post<IDataRegister>('api/auth/register', newUser)
      return response.data
    } catch (error) {
      console.error(error);
      return rejectWithValue('Ошибка авторизации');
    }
  }
);