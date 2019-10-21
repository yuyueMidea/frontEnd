/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 16:33:56
 * @LastEditTime: 2019-10-21 20:17:54
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
// import '../App.css';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
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
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
      return (
        <div className="the_clock">
          <span>当前时间：{this.state.date.toLocaleTimeString()}.</span>
        </div>
      );
    }
  }
  export default Header;
