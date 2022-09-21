/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-16 19:01:50
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-16 20:06:01
 */
import { Routes, Route } from "react-router-dom";
import routes from './index';

export default function AllRoutes() {
  const generateRoutes = (routeList: any[]) => {
    return routeList.map((_route: any) => (
      <Route
        key={_route.name}
        path={_route.path}
        element={_route.redirect ? <Navigate to={_route.redirect} replace /> : <_route.component />}>
        {
          (_route.children && _route.children.length > 0) && generateRoutes(_route.children)
        }
      </Route>
    ))
  }
  const allRoutes = useMemo(() => generateRoutes(routes), [routes]);

  console.log('======================allRoutes===================', allRoutes);
  return (
    <Routes>
      {allRoutes}
    </Routes>
  )
}