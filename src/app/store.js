import { configureStore } from '@reduxjs/toolkit';
import widgetSlice from './widget';

export const store = configureStore({
  reducer: {
    widget: widgetSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
});
