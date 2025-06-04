// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
// import other reducers if any

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers go here
  },
});

// RootState type is the return type of store.getState()
export type RootState = ReturnType<typeof store.getState>;

// Optionally export AppDispatch for dispatch typing
export type AppDispatch = typeof store.dispatch;
