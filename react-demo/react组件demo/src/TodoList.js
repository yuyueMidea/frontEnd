/*
 * @Description: In User Settings Edit
 * @Author: yuyue
 * @Date: 2019-10-19 16:17:01
 * @LastEditTime: 2019-10-19 17:45:57
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {itemTodo} from './store'

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
        }
        this.addInfo = this.addInfo.bind(this)
        this.delInfo = this.delInfo.bind(this)
        this.getVal = this.getVal.bind(this)
        
    }
    getVal(e){
        this.setState({
            inputValue:  e.target.value
        })
    }
    addInfo() {
        itemTodo.dispatch({type: 'ADD', value:this.state.inputValue})
        this.setState({
            itemArr: itemTodo.getState()
        })
    }
    delInfo(v) {
        itemTodo.dispatch({type: 'MINUS', value: v})
        this.setState({
            itemArr: itemTodo.getState()
        })
    }
    // 
    render() {
       
        return ( 
            <div className="todo-list">
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
            </div>
         );
    }
}
 
export default TodoList;