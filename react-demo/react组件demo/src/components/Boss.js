/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 12:09:32
 * @LastEditTime: 2019-10-18 15:19:36
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import axios from 'axios';

class Boss extends Component {
    constructor(props){
        super(props)
        this.state ={
            isShow:true,
            itemList:['张撒','李四','阿杰','王五']
        }
        this.toToggole = this.toToggole.bind(this)
    }
    componentDidMount(){
        // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        //     .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
        //     .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    toToggole(){
        this.setState({
            isShow: this.state.isShow ? false :true
        })
    }
    render() { 
        return ( 
            <div className="boss">
                <h2 className={this.state.isShow ?'show' :'hide'}>BOSS级人物-孙悟空</h2>
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