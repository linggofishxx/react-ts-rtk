/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-16 17:10:24
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-11-15 19:58:36
 */
import { useSelector } from "react-redux";
import { Menu, MenuProps } from 'antd';
import { useLocation, useNavigate } from "react-router-dom";

export default function SliderBar() {
  const routes = useSelector((state: any) => state.permission.sliderRoutes);

  const location = useLocation();
  const navigate = useNavigate();

  const generateSiderRoutes = (routes: any[]) => {
    return routes.map((route: any) => {
      let children: any[] = [];
      if (route.children && route.children.length > 0) {
        children = generateSiderRoutes(route.children);
      }
      return children && children.length > 0 ? {
        key: route.realPath,
        label: route.name,
        children
      } : {
        key: route.realPath,
        label: route.name
      }
    })
  }

  const items = useMemo(() => {
    return generateSiderRoutes(routes);
  }, [routes])

  const gotoPage: MenuProps['onClick'] = (e: any) => {
    navigate(e.key);
  }
  return (
    <div style={{ paddingTop: '50px' }}>
      <Menu
        defaultSelectedKeys={[]}
        defaultOpenKeys={[]}
        mode="inline"
        theme="dark"
        items={items}
        onClick={gotoPage}
      />
    </div>
  )
}