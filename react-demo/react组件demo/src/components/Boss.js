/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 12:09:32
 * @LastEditTime: 2019-10-18 16:48:52
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    constructor(props){
        super(props)
        this.state ={
            isShow:true,
            itemList:['张撒','李四','阿杰','王五']
        }
        this.toToggole = this.toToggole.bind(this)
    }
    toToggole(){
        this.setState({
            isShow: this.state.isShow ? false :true
        })
    }
    render() { 
        return ( 
            <div className="boss">
                {/* <h2 className={this.state.isShow ?'show' :'hide'}>BOSS级人物-孙悟空</h2> */}
                <CSSTransition 
                    in={this.state.isShow}   //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    classNames="boss-text"   //className值，防止重复
                    unmountOnExit
                >
                    <h2>BOSS级人物-孙悟空</h2>
                </CSSTransition>
                <div><button className="btn btn-info" onClick={this.toToggole}>召唤Boss</button></div>
                <ul>
                    {
                        this.state.itemList.map((v,i)=>{
                            return <li key={i}>{v}</li>
                        })
                    }
                </ul>
            </div>
         );
    }
}
 
export default Boss;