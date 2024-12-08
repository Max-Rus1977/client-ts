import { createSlice } from "@reduxjs/toolkit";
import { IDataRegister } from "../../@types/auth";
import {registerUser} from './registerThunks';

interface IAuthState {
  user: IDataRegister | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean; 
}

const initialState: IAuthState = {
  user: null,          // Сначала нет авторизованного пользователя
  isLoading: false,    // Индикатор процесса загрузки
  error: null,         // Ошибки будут добавляться при их наличии
  isAuthenticated: false, // Флаг, показывающий, авторизован пользователь или нет
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(registerUser.pending, (state)=> {
      state.isLoading = true;
    })
    .addCase(registerUser.fulfilled, (state, action)=> {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    .addCase(registerUser.rejected, (state, action)=> {
      state.isLoading = false;
      state.error = action.payload as string || action.error.message || null;;
    })
  }
});

export default registerSlice.reducer