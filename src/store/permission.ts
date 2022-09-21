/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 10:18:20
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-16 20:11:27
 */
import { createSlice } from "@reduxjs/toolkit";
import { RouteProp } from '../router/index';

export interface PermissionState {
  sliderRoutes: RouteProp[];
}

const initialState: PermissionState = {
  sliderRoutes: [],
}
export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setSliderRoutes: (state, actions) => {
      state.sliderRoutes = actions.payload
    }
  }
});

export const { setSliderRoutes } = permissionSlice.actions;

export default permissionSlice.reducer;