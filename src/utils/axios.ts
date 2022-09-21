/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-14 20:01:25
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-14 20:16:49
 */
import axios from 'axios';
import { message } from 'antd';
import urlConfig from '../config/url.config';

const service = axios.create({
  baseURL: urlConfig.API_DOMAIN,
  timeout: 60*1000
});

service.interceptors.request.use(
  /* config => {
    if (store.getState().user.data.token) {
      config.headers['Authorization'] = store.getState().user.data.token;
    }
    return config;
  } */
)