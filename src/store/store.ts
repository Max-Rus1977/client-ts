import {configureStore} from '@reduxjs/toolkit';
import postSlice from './posts/postsSlice';
import authSlice from './auth/authSlice';

export const store = configureStore({
  reducer: {
    postReducer: postSlice,
    authReducer: authSlice,
  }
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

/** 
 * @see {@link AppStore} тип для `store`, созданного через `configureStore`, 
 * включающий в себя настройки всех `reducer`. 
 * 
 * @see {@link RootState} тип состояния приложения, представляющий все
 * под-состояния, возвращаемые store.getState`.
 * 
 *  @see {@link AppDispatch} тип для `dispatch`, который корректно 
 * поддерживает все действия, включая thunks` и middleware.
**/ 