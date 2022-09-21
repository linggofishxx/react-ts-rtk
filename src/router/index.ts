/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-14 19:50:57
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-16 17:09:17
 */
import login from "../views/login";
import Default from "../layouts/Default";
import Home from "../views/home";
import WorkPlace from "../views/work-place";
import TodoMatters from "../views/work-place/todo-matters";
import Movies from "../views/work-place/movies";

export interface RouteProp {
  path: string;
  name: string;
  redirect?: string;
  component?: any,
  children?: RouteProp[]
}

const routes: RouteProp[] = [
  {
    path: '/',
    name: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: '登陆',
    component: login
  },
  {
    path: '/default',
    name: '主页',
    component: Default,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'work-place',
        name: 'workPlace',
        component: WorkPlace,
        children: [
          {
            path: 'todo-matters',
            name: '代办事宜',
            component: TodoMatters
          },
          {
            path: 'movies',
            name: '电影',
            component: Movies
          }
        ]
      }
    ]
  }
]

export default routes;