/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 19:52:42
 * @LastEditTime: 2019-10-22 16:22:00
 * @LastEditors: Please set LastEditors
 */
// 引入组件----------NotFound---
import Login from './components/Login';
import User from './components/User';
import Home from './components/Home';
import TodoList from './components/TodoList';



export default [
  {path: "/home",component: Home,name:'主页', auth:true},
  {path: "/login",component: Login,name:'登录页', auth:true},
  {path: "/user",component: User,name:'用户一览页',auth:true},
  {path: "/todoList/", component: TodoList,name:'TodoList',auth:true,
    // children:[
    //   {path: "/todoList/123", component: Todo1,name:'Todo1',auth:true},
    //   {path: "/todoList/456", component: Todo2,name:'Todo2',auth:true},
    // ]
  },
];
