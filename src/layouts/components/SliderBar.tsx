/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-16 17:10:24
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-21 20:03:40
 */
import { useSelector } from "react-redux";
import { Menu, MenuProps } from 'antd';
import { useLocation, useNavigate } from "react-router-dom";

export default function SliderBar() {
  const routes = useSelector((state: any) => state.permission.sliderRoutes);

  const location = useLocation();
  const navigate = useNavigate();

  const items = useMemo(() => {
    return routes.map((route: any) => ({
      key: route.realPath,
      label: route.name,
    }))
  }, [routes])

  const gotoPage: MenuProps['onClick'] = (e: any) => {
    navigate(e.key);
  }
  return (
    <div style={{paddingTop: '50px'}}>
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