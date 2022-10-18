/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-10-12 17:24:34
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-10-12 17:29:23
 */
import login from "../views/login";

export const routes = [
  {
    path: '/',
    name: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: '登陆',
    component: login
  }
]