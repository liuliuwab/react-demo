import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //应用的全局样式文件
import App from './App';//根组件

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //18版本 严格模式节点需要的去掉
  // useEffect的执行时机
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
