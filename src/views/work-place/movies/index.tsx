/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-16 17:02:25
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-17 20:39:28
 */
import { getMovieData } from '@/store/movieSlice';
import { useSelector, useDispatch } from 'react-redux';
import { movieSelectors } from '@/store/movieSlice';
import store from '@/store';
import { Button } from 'antd';

export default function Movies() {
  const { selectById } = movieSelectors;
  const [realMovies, setRealMovies] = useState<any[]>([])
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movie.list);
  useEffect(() => {
    dispatch(getMovieData());
  }, []);
  useEffect(() => {
    setRealMovies(movies)
  }, [movies])

  const changeMovie = () => {
    let movie = selectById(store.getState(), '794088300');
    console.log('=fadsfasdfsd==================', movie)
    setRealMovies([movie])
  }
  return (
    <div>
      <Button type="primary" onClick={() => changeMovie()}>点击</Button>
      <ul>
        {
          realMovies.map((movie: any) => (
            <li key={movie.name}>{movie.name}</li>
          ))
        }
      </ul>
    </div>
  )
}