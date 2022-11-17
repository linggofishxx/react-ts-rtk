/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 13:31:13
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-17 20:03:33
 */
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

interface Movie {
  name: string;
  tvId: string | number;
}
export interface MovieState {
  list: Movie[];
  totals: number;
}

const movieAdapter = createEntityAdapter<Movie>({
  selectId: movie => movie.tvId
});

export const movieSelectors = movieAdapter.getSelectors((state: any) => state.movie)

const initialState = movieAdapter.getInitialState<MovieState>({
  list: [],
  totals: 0
})

const getMovieListApi = () =>
  fetch(
    'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48'
  ).then(res => res.json())

export const getMovieData: any = createAsyncThunk('movie/getMovie',
  async () => {
    console.log('=====================getMovie========================')
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
        const { list } = action.payload.data;
        movieAdapter.setAll(state, action.payload.data.list)
        state.totals = list?.length ?? 0;
        state.list = list ?? [];
      })
      .addCase(getMovieData.rejected, (state, err) => {
        console.log("🚀 ~ rejected", err)
      })
  }
})

export const { loadDataEnd } = movieSlice.actions;

export default movieSlice.reducer;