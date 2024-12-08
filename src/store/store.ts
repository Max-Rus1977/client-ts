import {configureStore} from '@reduxjs/toolkit';
import postSlice from './posts/postsSlice';
import registerSlice from './auth/registerSlice';
import loginSlice from './auth/loginSlice';

/**
 * Отдельное подключение слайсов для большей наглядности
 * Альтернативный подход: объединить login, register и auth в объект authReducers,
 * а затем использовать state.auth.login, state.auth.register и т.д.
 **/

export const store = configureStore({
  reducer: {
    postReducer: postSlice,
    registerReducer: registerSlice,
    loginReducer: loginSlice,
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