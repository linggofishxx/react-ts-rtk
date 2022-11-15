/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-14 19:50:57
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-15 20:32:18
 */

/* import login from "../views/login";
import Default from "../layouts/Default";
import Home from "../views/home";
import WorkPlace from "../views/work-place";
import TodoMatters from "../views/work-place/todo-matters";
import Movies from "../views/work-place/movies"; */

export interface RouteProp {
  path: string;
  name: string;
  realPath?: string;
  redirect?: string;
  component?: any,
  element?: any;
  children?: RouteProp[]
}

const routes: RouteProp[] = [
  {
    path: '/home',
    name: 'home',
    component: '@Default',
    redirect: 'home/home',
    children: [
      {
        path: 'home',
        name: 'home-home',
        component: 'home/home'
      }
    ]
  },
  {
    path: '/work-place',
    name: '工作台',
    component: '@Default',
    children: [
      {
        path: 'todo-matters',
        name: '代办事宜',
        component: 'work-place/todo-matters'
      },
      {
        path: 'movies',
        name: '电影',
        component: 'work-place/movies'
      }
    ]
  },
  {
    path: '/statistic-analysis',
    name: '统计分析',
    component: '@Default',
    children: [
      {
        path: 'table-finance',
        name: '财务报表',
        component: 'statistic-analysis/table-finance',
        children: [
         {
            path: 'table-finance-salary',
            name: '工资报表',
            component: 'statistic-analysis/table-finance/table-finance-salary',
         },
          {
            path: 'table-finance-tax',
            name: '工资税额报表',
            component: 'statistic-analysis/table-finance/table-finance-tax',
          }
        ]
      }
    ]
  }
]
export default routes;