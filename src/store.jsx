// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './features/windowSlice';

export const store = configureStore({
  reducer: {
    widgets: widgetsReducer,
  },
});
