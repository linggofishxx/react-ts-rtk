/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 17:02:09
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-21 19:58:42
 */
import routes from "../../router";
import NavItem from './NavItem';
import './NavBar.scss';

export default function NavBar() {
  const navRouteList = routes.find((route: any) => /^\/default/.test(route.path))?.children ?? [];
  generateRealRouteList(navRouteList, '/default');
  function generateRealRouteList(routes: any[], parentPath?: string) {
    routes.forEach((route: any) => {
      route.realPath = parentPath ? parentPath + '/' + route.path : route.path;
      if (route.children && route.children.length > 0) {
        generateRealRouteList(route.children, route.realPath)
      }
    })
  }
  console.log('===============realRoutes=========================', navRouteList)
  return (
    <div className="nav_list">
      {
        navRouteList.map((route: any) => (
          <NavItem key={route.path} to={route.realPath} name={route.name} children={route.children}></NavItem>
        ))
      }
    </div>
  )
}