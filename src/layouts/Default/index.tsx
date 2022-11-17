/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-14 19:47:37
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-16 15:37:02
 */
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar'
import SliderBar from '../components/SliderBar'

const { Header, Sider, Content } = Layout;

export default function Default() {
  return (
    <Layout>
      <Sider><SliderBar /></Sider>
      <Layout>
        <Header style={{ backgroundColor: '#34393e' }}><NavBar /></Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}