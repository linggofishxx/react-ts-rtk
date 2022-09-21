/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-14 14:18:45
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-15 16:12:25
 */
import './App.css'

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App



// import { useState } from 'react';
// // 引入相关的hooks
// import { useSelector, useDispatch } from 'react-redux';
// // 引入对应的方法
// import { getMovieData } from './store/movieSlice';
// import { Button } from 'antd';
// import './App.css';
// function App() {
//   // 通过useSelector直接拿到store中定义的value
//   // 通过useSelector直接拿到store中定义的list
//   const { list } = useSelector((store: any) => store.movie)
//   // 通过useDispatch 派发事件
//   const dispatch = useDispatch()
//   // 变量
//   const [amount, setAmount] = useState(1);
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* 页面中应用的代码 */}
//         <Button type="primary" onClick={() => { dispatch(getMovieData()) }}>获取数据</Button>
//         <ul>
//           {
//             list.map((item: any) => { return <li key={item.tvId}> {item.name}</li> })
//           }
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;
