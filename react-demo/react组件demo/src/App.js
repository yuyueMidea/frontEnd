/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 16:33:56
 * @LastEditTime: 2019-10-21 21:22:43
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react';

import './bootstrap.min.css'
import './App.css';

import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from "react-router-dom";

import Login from './components/Login';
// 公共头部组件
import Header from './components/Header'
 // 404页面
 import NotFound from './components/NotFound'
// 引入路由
import routes from './routerMap';


const isLogined = localStorage.getItem('userInfo');
//如果已经登录，不拦截，否则跳转登录页面
// console.log('是否登录---------->',isLogined )
class Routers extends Component {
  constructor(props){
    super(props)
    this.state ={
      navList:[]
    }
  
  }
  
  render() { 
    return ( 
      <div className="App">
      {
      <Router>
        <div className="left">     {/* 左边路由区域 */}
          <header className="App-header">      
              <ul className="nav el-menu">
                {routes.map((v,i)=>
                      <li key={i} className="el-menu-item"><NavLink to={v.path} >{v.name}</NavLink></li>
                )}
                </ul>
          </header>
        </div>
        <div className="right">    {/* 右边context */}
          <div className="navbar">
            <Header/>
          </div>
          <div className="content">
          <Switch>
              {
                routes.map((v,i)=>
                    <Route key={i} path={v.path} component={v.component} />
                    
                )
                // <Route path='/login' component={Login} />
              }
              <Redirect from="/*" to="/404" />
              </Switch>
          </div>
        </div>
      </Router>
      }
      
    </div>
     );
  }
}
 
export default Routers;

