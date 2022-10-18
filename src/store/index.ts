/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-14 20:07:28
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-10-13 18:52:43
 */
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import permissionReducer from './permission';
import logger from 'redux-logger';
import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    permission: permissionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat([logger, apiSlice.middleware])
});

export default store;

console.log('===============store type=============', store.getState);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch