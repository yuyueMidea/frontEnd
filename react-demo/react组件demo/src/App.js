/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 16:33:56
 * @LastEditTime: 2019-10-22 15:31:34
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react';

import './bootstrap.min.css'
import './App.css';

import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from "react-router-dom";

import Login from './components/Login';
 // 404页面
 import NotFound from './components/NotFound'
// 引入路由
import routes from './routerMap';

// 引入store状态--->toggleSideBar
import {toggleSideBar} from './components/store'

const isLogined = localStorage.getItem('userInfo');
//如果已经登录，不拦截，否则跳转登录页面
// console.log('是否登录---------->',isLogined )
class Routers extends Component {
  constructor(props){
    super(props)
    this.state ={
      navList:[],
      date: new Date(),
      toggleState: toggleSideBar.getState()
    }
    this.toggleSide =this.toggleSide.bind(this)
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  //   我们会在 componentWillUnmount() 生命周期方法中清除计时器
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  toggleSide(){
    if(toggleSideBar.getState()){
      toggleSideBar.dispatch({type: 'hide'})
    }else {
      toggleSideBar.dispatch({type: 'open'})
    }
    this.setState({
      toggleState: toggleSideBar.getState()
    })
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() { 
    return ( 
      <div className="App app-wrapper">
        <div className={this.state.toggleState ?'openSideBar' : 'hideSideBar'}>
          {
          <Router>
            <div className="left">     {/* 左边路由区域 */}
              <header className="App-header">      
                  <ul className="nav el-menu">
                    {routes.map((v,i)=>
                      <li key={i}>
                        {
                          v.children ? v.children.map((item,index)=>
                            <NavLink className="el-menu2" key={index} to={item.path} >{item.name}</NavLink>
                          ) 
                          : <NavLink className="el-menu1" to={v.path} >{v.name}</NavLink>
                        }
                      </li>
                    )}
                    </ul>
              </header>
            </div>
            <div className="right">    {/* 右边context */}
              <div className="navbar">
                <div className="the_header">
                  <button className="btn btn-primary" onClick={this.toggleSide}>切换</button>
                  <span className="the_clock">当前时间：{this.state.date.toLocaleTimeString()}.</span>
                </div>
              </div>
              <div className="content">
                <Switch>
                  {
                    routes.map((v,i)=>
                        <Route key={i} exact path={v.path}
                          render={
                            props=>v.auth ? (<v.component {...props}/>) : (<Redirect to="/login" />)
                          }
                        />
                        
                    )
                  }
                  {/* <Redirect from="/*" to="/home" /> */}
                  {/* // 所有错误路由跳转页面 */}
                <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
          }
      
      </div>
    </div>
     );
  }
}
 
export default Routers;

