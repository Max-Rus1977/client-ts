import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from '../store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: ()=> AppStore = useStore;

/**
 * Custom hook для отправки экшенов с типизацией `AppDispatch`, который
 * включает в себя все middleware. Этот хук позволяет типизировать
 * вызов `dispatch`, сохраняя корректность типов.
 * @see {@link useAppDispatch}

 * Custom hook для выбора состояния с типом `RootState`. Использует
 * `TypedUseSelectorHook`, чтобы получить доступ к структуре store.
 * @see {@link useRootState}

 * Custom hook для доступа к экземпляру store с типом `AppStore`. Предоставляет
 * полный доступ к конфигурации store.
 * @see {@link useAppStore}
 */