import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
