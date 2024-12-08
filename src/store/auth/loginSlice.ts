import { createSlice } from "@reduxjs/toolkit";
import { IDataLogin } from "../../@types/auth";
import {loginUser} from './loginThunks';

interface ILoginState {
  user: IDataLogin | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ILoginState = {
  user: null,
  isLoading: false,
  error: null,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(loginUser.pending, (state)=> {
      state.isLoading = true;
    })
    .addCase(loginUser.fulfilled, (state, action)=> {
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(loginUser.rejected, (state, action)=> {
      state.isLoading = false;
      state.error = action.payload as string || action.error.message || null;;
    })
  }
});

export default loginSlice.reducer