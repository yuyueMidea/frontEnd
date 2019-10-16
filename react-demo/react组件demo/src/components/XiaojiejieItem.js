/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 20:59:16
 * @LastEditTime: 2019-10-16 10:04:48
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    state = {  }
    handleClick(i){
        this.props.deleteItem(i)
    }
    componentWillReceiveProps(){
        console.log('child-->componentWillReceiveProps---xiaojiejieItem')
    }
    componentWillUnmount(){
        //当组件从页面中删除的时候执行
        console.log('child - componentWillUnmount---删除')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState)
        if(nextProps.content !== this.props.content){
            return true
        }else {
            return false
        }
    }
    render() { 
        // console.log('render---组件挂载中.......')
        console.log('child-render')
        return ( 
            <div className="xiaoItem">
                <p>{this.props.content}
                <button className="btn btn-danger" onClick={this.handleClick.bind(this, this.props.id)}>删除</button>
                </p>
            </div>
         );
    }
}

XiaojiejieItem.propTypes ={
    content: PropTypes.string.isRequired,
    id: PropTypes.number,
    deleteItem: PropTypes.func
}
 
export default XiaojiejieItem;