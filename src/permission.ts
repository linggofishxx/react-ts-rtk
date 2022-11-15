/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-10-13 19:04:17
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-15 19:25:20
 */

import { RouteProp } from './router/index';
import React from 'react';

const ErrorPage404 = React.lazy(() => import('./views/error-pages/404/index'))
const getView = (url: string) => React.lazy(() => import(`"./views/${url}/index"`));
const getLayout = (url: string) => React.lazy(() => import(`"./layouts/${url}/index"`));


export function generateRoutes(routes: RouteProp[]) {
  const newRoutes = generateAsyncRoutes(routes);
  const addRoutes = generateLevel2Routes(newRoutes);
  console.log('==============newRoutes================', newRoutes);
  console.log('==============addRoutes================', addRoutes);
  return { newRoutes, addRoutes }
}

function generateAsyncRoutes(accessRoutes: RouteProp[], parentUrl?: string) {
  for (let i = 0; i < accessRoutes.length; i++) {
    let _route = accessRoutes[i];
    if ((/^@.+/).test(_route.component)) {
      const _layout = _route.component.slice(1);
      const layout = getLayout(_layout);
      if (!layout) {
        _route.element = ErrorPage404;
      } else {
        _route.element = layout;
      }
    } else if (!_route.component) {
      _route.element = ErrorPage404;
    } else {
      const view = getView(_route.component);
      _route.element = !!view ? view : ErrorPage404;
    }
    _route.realPath = parentUrl ? parentUrl + '/' + _route.path : _route.path;
    if (_route.children && _route.children.length) {
      let childRoutes = generateAsyncRoutes(_route.children, _route.realPath);
      _route.children = childRoutes;
    }
  }
  return accessRoutes;
}


// generateRoutes(routes);


function generateLevel2Routes(routes: RouteProp[]) {
  let addRoutes: RouteProp[] = [];
  for (let i = 0; i < routes.length; i++) {
    let _route = { ...routes[i] };
    let _children: RouteProp[] = [];
    if (_route.children && _route.children.length) {
      _children = expandLevel2Routes(_route.children);
    }
    _route.children = _children;
    addRoutes.push(_route);
  }
  return addRoutes;
}

function expandLevel2Routes(routes: RouteProp[]): RouteProp[] {
  let children: RouteProp[] = [];
  for (let i = 0; i < routes.length; i++) {
    if (routes[i]?.children?.length) {
      children = children.concat(expandLevel2Routes(routes[i].children ?? []));
    } else {
      children.push(routes[i]);
    }
  }
  return children;
}