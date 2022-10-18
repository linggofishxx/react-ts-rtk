/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-16 19:01:50
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-10-14 19:02:32
 */
import { Routes, Route, useRoutes } from "react-router-dom";
import routes, { RouteProp } from './index';
import { generateRoutes as generateRoutesFun } from '../permission';
import { setRoutes } from '../store/permission';
import { useDispatch, useSelector } from "react-redux";

export default function AllRoutes() {
  const dispatch = useDispatch();
  const cloneRoutes = JSON.parse(JSON.stringify(routes));
  let { newRoutes, addRoutes } = generateRoutesFun(cloneRoutes);
  console.log('==========addRoutes >>>>>>>=============', addRoutes)

  const elements = useRoutes(addRoutes);
  /* const generateRoutes = (routeList: any[]) => {
    return routeList.map((_route: any) => {
      let component1 = _route.component;
      console.log('====================component type======================', _route, typeof component1);
      let elements: any = [];
      if (_route.children && _route.children.length > 0) {
        elements = _route.children.map((item: any) => (
          <Route key={item.name} path={item.path} element={(item.component)()}></Route>
        ))
      }
      return elements && elements.length > 0 ? (
        <Route
          key={_route.name}
          path={_route.path}
          element={component1()}>
          {
            elements
          }
        </Route>
      ) :
        (<Route
          key={_route.name}
          path={_route.path}
          element={component1()}>
        </Route>)
    })
  }
  const allRoutes = useMemo(() => generateRoutes(addRoutes), [addRoutes]);

  console.log('======================allRoutes===================', allRoutes); */
  return elements;
}