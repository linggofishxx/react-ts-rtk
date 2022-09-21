/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 13:31:13
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-15 14:07:10
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface MovieState {
  list: any[];
  totals: number;
}

const initialState: MovieState = {
  list: [],
  totals: 0
}

/* const getMovieListApi = () => {
  fetch('https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48').then((res: any) => res.json());
} */

const getMovieListApi = () =>
  fetch(
    'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48'
  ).then(res => res.json())

export const getMovieData: any = createAsyncThunk('movie/getMovie',
  async () => {
    const res: any = await getMovieListApi();
    return res;
  });

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadDataEnd: (state, action) => {
      state.list = action.payload;
      state.totals = action.payload?.length ?? 0;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getMovieData.pending, (state) => {
        console.log("🚀 ~ 进行中！");
      })
      .addCase(getMovieData.fulfilled, (state, action) => {
        console.log("🚀 ~ fulfilled");
        state.list = action.payload.data.list;
        state.totals = action.payload.data.list?.length ?? 0;
      })
      .addCase(getMovieData.rejected, (state, err) => {
        console.log("🚀 ~ rejected", err)
      })
  }
})

export const { loadDataEnd } = movieSlice.actions;

export default movieSlice.reducer;