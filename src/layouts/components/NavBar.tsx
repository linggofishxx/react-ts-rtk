/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 17:02:09
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-16 17:08:30
 */
import './NavBar.scss';
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams, useRoutes, Router, useLocation } from 'react-router-dom';
import { setSliderRoutes } from '../../store/permission';
import { useDispatch } from 'react-redux';
import { RouteProp } from '../../router';

export default function NavBar() {
  const routes = useSelector((state: any) => state.permission.routes);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const localtion = useLocation();
  console.log('==============localtion==========================', localtion)
  const [curPath, setPath] = useState('');
  const navItemClick = (route: any) => {
    console.log('=============route===============', route.realPath);
    setPath(route.realPath);
    if (curPath === route.realPath) {
      return;
    }
    navigate(route.to);
    dispatch(setSliderRoutes(route.children as RouteProp))
  };
  return (
    <div className="nav_list">
      {
        routes.map((route: any) => (
          <div
            className='nav_item'
            style={{ backgroundColor: curPath === route.realPath ? '#525f7e' : '' }}
            key={route.path}
            onClick={() => navItemClick(route)}>
            <span className="nav_span">{route.name}</span>
          </div>
        ))
      }
    </div>
  )
}