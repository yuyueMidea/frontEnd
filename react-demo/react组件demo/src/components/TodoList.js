/*
 * @Description: In User Settings Edit
 * @Author: yuyue
 * @Date: 2019-10-19 16:17:01
 * @LastEditTime: 2019-10-22 14:52:38
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {itemTodo} from './store'
import { CSSTransition } from 'react-transition-group'
import { Link } from "react-router-dom";

// const data=[
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemArr: itemTodo.getState(),
            inputValue:'请输入',
            isShow: true,
            id:'',
            list:[
                {cid:123,title:'技术胖的个人博客-1'},
                {cid:456,title:'技术胖的个人博客-2'},
                {cid:789,title:'技术胖的个人博客-3'},
            ]
        }
        this.addInfo = this.addInfo.bind(this)
        this.delInfo = this.delInfo.bind(this)
        this.getVal = this.getVal.bind(this)
        this.toToggole = this.toToggole.bind(this)
    }
    componentDidMount(){
        let tempId=this.props.match.params.id
        this.setState({id:tempId })
    }
    getVal(e){
        this.setState({
            inputValue:  e.target.value
        })
    }
    addInfo() {
        if(!this.state.inputValue) return
        itemTodo.dispatch({type: 'ADD', value:this.state.inputValue})
        this.setState({
            itemArr: itemTodo.getState(),
            inputValue:''
        })
    }
    delInfo(v) {
        itemTodo.dispatch({type: 'MINUS', value: v})
        this.setState({
            itemArr: itemTodo.getState()
        })
    }
    toToggole(){
        this.setState({
            isShow: this.state.isShow ? false :true
        })
    }
    // 
    render() {
       
        return ( 
            <div className="todo-list">
                <p>{this.state.id}</p>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}> 
                                        <Link to={'/todoList/'+item.cid}> {item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <br/><hr/>
                <span>{this.state.inputValue}</span>
                <p>
                <input type="text" className="form-control" value={this.state.inputValue} placeholder="jspang" style={{width:'250px'}} onChange={this.getVal} />
                <button className="btn btn-primary" onClick={this.addInfo}>增加</button>
                </p>
                <hr/>
                <ul>
                    {
                        this.state.itemArr.map((v,i)=>{
                            return <li key={i}><span>{v}</span><button className="btn btn-danger" onClick={this.delInfo.bind(this,v)}>减少</button></li>
                        })
                    }
                </ul>
                <br/><hr/>
                <CSSTransition 
                    in={this.state.isShow}   //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    classNames="boss-text"   //className值，防止重复
                    unmountOnExit
                >
                    <h2>BOSS级人物-孙悟空</h2>
                </CSSTransition>
                <div><button className="btn btn-info" onClick={this.toToggole}>召唤Boss</button></div>
                <br/><hr/>

            </div>
         );
    }
}
 
export default TodoList;