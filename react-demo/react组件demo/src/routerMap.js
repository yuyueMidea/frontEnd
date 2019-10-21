/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 19:52:42
 * @LastEditTime: 2019-10-21 21:24:10
 * @LastEditors: Please set LastEditors
 */
// 引入组件----------NotFound---
import Login from './components/Login';
import User from './components/User';
import Home from './components/Home';
import Xiaojiejie from './components/Xiaojiejie';
import Boss from './components/Boss';
import TodoList from './components/TodoList';


export default [
  {path: "/home",component: Home,name:'主页'},
  {path: "/login",component: Login,name:'登录页'},
  { path: "/user",component: User,name:'用户一览页'},
  {path: "/xiaojie", component: Xiaojiejie,name:'Xiaojiejie'},
  {path: "/boss", component: Boss,name:'Boss'},
  {path: "/todoList", component: TodoList,name:'TodoList'},
];
