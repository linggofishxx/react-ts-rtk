/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 17:21:49
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-21 20:04:06
 */
import { NavLink, useNavigate, useParams, useRoutes, Router, useLocation } from 'react-router-dom';
import './NavItem.scss'
import { setSliderRoutes } from '../../store/permission';
import { useDispatch } from 'react-redux';
import { RouteProp } from '../../router';

export default function NavItem(props: any) {
  const navigate = useNavigate();
  const localtion = useLocation();
  const dispatch = useDispatch();
  console.log('==================Route======================', localtion)
  const navItemClick = () => {
    /* if (props.to === localtion.pathname) {
      return;
    } */
    navigate(props.to);
    dispatch(setSliderRoutes(props.children as RouteProp))
  };
  return (
    <div className='nav_item' onClick={navItemClick}>
      <span className="nav_span">{props.name}</span>
      {/* <NavLink key={props.key} to={props.to} >{props.name}</NavLink> */}
    </div>
  )
}