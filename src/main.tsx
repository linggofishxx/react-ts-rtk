/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-14 14:18:45
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-16 20:14:34
 */
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.css';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import routes, { RouteProp } from './router';
import { Route, Navigate } from 'react-router-dom'
import AllRoutes from './router/AllRoutes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <AllRoutes />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)