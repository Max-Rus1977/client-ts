import { createSlice } from "@reduxjs/toolkit";
import { IDataRegister } from "../../@types/auth";
import {registerUser} from './authThunks';

interface IAuthState {
  user: IDataRegister | null;
  isLoading: boolean;
  error: string | undefined | null;
  isAuthenticated: boolean; 
}

const initialState: IAuthState = {
  user: null,          // Сначала нет авторизованного пользователя
  isLoading: false,    // Индикатор процесса загрузки
  error: null,         // Ошибки будут добавляться при их наличии
  isAuthenticated: false, // Флаг, показывающий, авторизован пользователь или нет
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(registerUser.pending, (state)=> {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, action)=> {
      state.isLoading = false;
    })
    .addCase(registerUser.rejected, (state, action)=> {
      state.isLoading = false;
      state.error = action.error.message;
    })
  }
});

export default authSlice.reducer