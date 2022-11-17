/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-16 19:01:50
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-16 10:45:32
 */
import React from 'react';
import { Routes, Route } from "react-router-dom";
import routes from './index';
import { generateRoutes as generateRoutesFun } from '../permission';
import { setAddRoutes, setRoutes } from '../store/permission';
import { useDispatch } from "react-redux";
import home from '../views/home/home';
import Default from '../layouts/Default';

const getView = (url: string) => React.lazy(() => import(`../views/${url}`));

export default function GetAllRoutes() {
  const dispatch = useDispatch();
  const cloneRoutes = JSON.parse(JSON.stringify(routes));
  let { newRoutes, addRoutes } = generateRoutesFun(cloneRoutes);
  dispatch(setAddRoutes(addRoutes));
  dispatch(setRoutes(newRoutes));
  console.log('==========newRoutes==========', newRoutes)
  return (<Routes>
    {
      addRoutes.map((_route: any) => {
        let elements: any = [];
        if (_route.children && _route.children.length > 0) {
          elements = _route.children.map((item: any) => {
            let Component = getView(item.component);
            console.log('==================item.component===================', item.component)
            console.log('==================item.component===================', Component)
            return (
              <Route key={item.name} path={item.realPath} element={
                <React.Suspense fallback={<>...</>}>
                  <Component />
                </React.Suspense>
              }></Route>
            )
          })
        }
        return (
          <Route
            key={_route.name}
            path={_route.path}
            element={<Default />}>
            {
              elements
            }
          </Route>
        )
      })
    }
  </Routes>);
  // return elements;
}