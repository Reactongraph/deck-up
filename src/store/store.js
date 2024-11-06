import { configureStore, combineReducers } from '@reduxjs/toolkit';
import apiSlice from './ApiSlice';
import authReducer from './auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),
});

setupListeners(store.dispatch);
