/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-16 17:02:25
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-15 20:23:57
 */
import { getMovieData } from '../../../store/movieSlice';
import { useSelector } from 'react-redux';

export default function Movies() {
  useEffect(() => getMovieData())
  const movies = useSelector((state: any) => state.movie.list);
  return (
    <ul>
      {
        movies.map((movie: any) => (
          <li>{movie.name}</li>
        ))
      }
    </ul>
  )
}