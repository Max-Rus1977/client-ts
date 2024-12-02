import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDataRegister } from '../../@types/auth';

const uploadImage = createAsyncThunk(
  'auth/uploadImage',
  async (file: File, {rejectWithValue}) => {
    try {
      console.log(file);
      
      const formData = new FormData();
      formData.append('image', file)

      const response = await axios.post('/api/upload', formData)
      return response.data
    } catch (error) {
      console.error(error);
      return rejectWithValue('Ошибка загрузки аватара');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/authRegister',
  async (newUser: IDataRegister, {dispatch, rejectWithValue}) => {
    try {
      console.log(newUser.avatar);
      
      if (newUser.avatar) {
        const file = newUser.avatar;
        const avatarResponse = await dispatch(uploadImage(file)).unwrap();

        if (avatarResponse.success) { // Проверяем, успешна ли загрузка
          newUser.avatar = avatarResponse.imageUrl; // Сохраняем imageUrl в newUser
        }
      }
      const response = await axios.post<IDataRegister>('/api/auth/register', newUser)
      return response.data
    } catch (error) {
      console.error(error);
      return rejectWithValue('Ошибка регистрации');
    }
  }
);