/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 10:18:20
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-10-13 19:14:26
 */
import { createSlice } from "@reduxjs/toolkit";
import { RouteProp } from '../router/index';

export interface PermissionState {
  sliderRoutes: RouteProp[];
  routes: RouteProp[],
  addRoutes: RouteProp[]
}

const initialState: PermissionState = {
  sliderRoutes: [],
  routes: [],
  addRoutes: [],
}
export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setSliderRoutes: (state, actions) => {
      state.sliderRoutes = actions.payload
    },
    setRoutes: (state, actions) => {
      state.routes = actions.payload
    },
    setAddRoutes: (state, actions) => {
      state.addRoutes = actions.payload
    },
  }
});

export const { setSliderRoutes, setRoutes, setAddRoutes } = permissionSlice.actions;

export default permissionSlice.reducer;