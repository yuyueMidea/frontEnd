import React from 'react';
import '../App.css';
// import store from './store'
import { Redirect } from 'react-router';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        name:'',
        pwd:'',
      };
      this.getName = this.getName.bind(this);
      this.getPwd = this.getPwd.bind(this);
      this.loginOut = this.loginOut.bind(this);
      this.loginIn = this.loginIn.bind(this);
    }
    componentDidMount() {
      // console.log('login---------->Component DID MOUNT!')
      let userObj = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
      if(userObj) {
        this.setState({
          name: userObj.name,
          pwd: userObj.pwd,
        })
      }
 }
    getName(event) {
      this.setState({name: event.target.value});
    }
    getPwd(event) {
      this.setState({pwd: event.target.value});
    }
    loginOut(){     //登录退出
      localStorage.removeItem('userInfo');
    }
    loginIn(event) {
      if(!this.state.name || !this.state.pwd) {
        return;
      }
      console.log('提交的名字: ' + this.state.name,'  ====你的密码是: ' + this.state.pwd);
      let userObj = {
        name: this.state.name,
        pwd: this.state.pwd,
      }
      localStorage.setItem('userInfo',JSON.stringify(userObj));
      return (<Redirect to="/index" />);
    }
    render() {
      return (
        <div className="the_login">
          <h2>{this.state.name ?'欢迎你：'+this.state.name :'请登录'}</h2>
          <div  className="the_login_Form">
          <label>
            名字:<input type="text" className="form-control" value={this.state.name} onChange={this.getName} />
          </label>
          <br/>
          <label>
            密码: <input type="password" className="form-control" value={this.state.pwd} onChange={this.getPwd} />
          </label>
          <br/>
          <button className='btn btn-success loginin' onClick={this.loginIn}>登录</button>
          <button className='btn btn-danger loginout' onClick={this.loginOut}>退出</button>
        </div>
          
        </div>
      );
    }
  }
  export default Login;
