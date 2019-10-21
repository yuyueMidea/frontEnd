/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 19:59:09
 * @LastEditTime: 2019-10-21 19:19:16
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import '../App.css';
import XiaojiejieItem from './XiaojiejieItem.js';

class Xiaojiejie extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            btnmsg:'增加服务',
            inputValue:'' , // input中的值
            list1:['头部按摩','精油推背',"121",'waht?']
        }
    }
    componentWillMount(){
        console.log('componentWillMount----组件将要挂载到页面的时刻111')
    }
    componentDidMount(){
        console.log('componentDidMount----组件挂载完成的时刻执行222')
    }
    componentWillUpdate(){
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }
    
    addInfo(){
        if(!this.state.inputValue) return;
        this.setState({
            list1:[...this.state.list1, this.state.inputValue],
            inputValue:''
        })
    }
    getInput(e){
        this.setState({
            inputValue:  e.target.value
        })
    }
    deleteInfo(index){
        // console.log('tag', index)
        let list = this.state.list1;
        list.splice(index, 1);
        this.setState({
            list1: list
        })
    }
    render(){
        return(
            <div style={{margin: "11px"}}>
                <div>
                    <label >加入服务：
                        <input id="jspang" className="form-control" value={this.state.inputValue} onChange={this.getInput.bind(this)} />
                    </label>
                    <button className="btn btn-success" onClick={this.addInfo.bind(this)}>{this.state.btnmsg}</button>
                    <p>{this.state.inputValue}</p>
                    {
                        //正确注释的写法
                    }
                </div>
                <ul className="hasBorder">
                    {
                        this.state.list1.map((v,i)=>{
                            // return <li key={i}>
                            //     <p>{v}<button className="btn btn-danger" onClick={this.deleteInfo.bind(this,i)}>删除</button></p>
                            // </li>
                            return <XiaojiejieItem key={i} content={v} id={i}  deleteItem={this.deleteInfo.bind(this)} />
                        })
                    }
                </ul>
                {/* <XiaojiejieItem content={item} /> */}
            </div>
        )
       
    }
}

export default Xiaojiejie