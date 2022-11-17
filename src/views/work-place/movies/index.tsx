/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-16 17:02:25
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-16 17:29:08
 */
import { getMovieData } from '@/store/movieSlice';
import { useSelector } from 'react-redux';
import { Button } from 'antd';

export default function Movies() {
  useEffect(() => getMovieData())
  function getDaft() {
    console.log('==============getMovieData=============', getMovieData)
    getMovieData();
  }
  const movies = useSelector((state: any) => state.movie.list);
  return (
    <div>
      <Button onClick={() => getDaft()}  >click</Button>
      <ul>
        {
          movies.map((movie: any) => (
            <li>{movie.name}</li>
          ))
        }
      </ul>
    </div>
  )
}