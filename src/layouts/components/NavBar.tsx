/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 17:02:09
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-15 19:39:56
 */
import routes from "../../router";
import NavItem from './NavItem';
import './NavBar.scss';
import { useSelector } from "react-redux";

export default function NavBar() {
  const routes = useSelector((state: any) => state.permission.routes);
  return (
    <div className="nav_list">
      {
        routes.map((route: any) => (
          <NavItem key={route.path} to={route.realPath} name={route.name} children={route.children}></NavItem>
        ))
      }
    </div>
  )
}