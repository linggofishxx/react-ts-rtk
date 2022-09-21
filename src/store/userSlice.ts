/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 10:19:26
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-15 10:26:12
 */
import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  token: string;
  userInfo: any;
}

const initialState: StateProps = {
  token: '',
  userInfo: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    }
  }
});

export const { setUserInfo, setToken } = userSlice.actions;

export const getToken = (state: any) => state.user.token;
export const getUserInfo = (state: any) => state.user.userInfo;

export default userSlice.reducer;