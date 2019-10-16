/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 16:33:56
 * @LastEditTime: 2019-09-29 16:33:56
 * @LastEditors: your name
 */
import React from 'react';

import './bootstrap.min.css'
import './App.css';
// import store from './components/store'


// 引入组件----------NotFound---
import Login from './components/Login';
import Table from './components/Table';
import Clock from './components/Clock';
import User from './components/User';
import Home from './components/Home';
import Hook from './components/Hook';
import NameForm from './components/NameForm';
import NotFound from './components/NotFound';
import Xiaojiejie from './components/Xiaojiejie';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {path: "/home",component: Home,name:'主页'},
  {path: "/login",component: Login,name:'登录页'},
  { path: "/user",component: User,name:'用户一览页'},
  {path: "/nameForm", component: NameForm,name:'表单展示页'},
  {path: "/table", component: Table,name:'表格展示页'},
  {path: "/hook", component: Hook,name:'HOOk'},
  {path: "/404", component: NotFound,name:'404NotFound'},
  {path: "/xiaojie", component: Xiaojiejie,name:'Xiaojiejie'},
];

const isLogined = localStorage.getItem('userInfo');
//如果已经登录，不拦截，否则跳转登录页面
console.log('是否登录---------->',isLogined )

function App() {
  return (
    <div className="App">
      {
      <Router>
        <div className="left">     {/* 左边路由区域 */}
          <header className="App-header">      
              <ul className="nav">
                {routes.map((v,i)=>
                      <li key={i}><Link to={v.path}>{v.name}</Link></li>
                )}
                </ul>
          </header>
        </div>
        <div className="right">    {/* 右边context */}
          <div className="navbar">
            <Clock/>
          </div>
          <div className="content">
              {
                isLogined ? 
                routes.map((v,i)=>
                    <Route key={i} path={v.path} component={v.component} />
                ) : 
                // <Route path='/login' component={Login} />
                <Login/>
              }
          </div>
        </div>
      </Router>
      }
      
    </div>
  );
}

export default App;
