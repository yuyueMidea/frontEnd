import React from 'react';
import '../App.css';
import store from './store'

function Welcome(props) {
    return <h3>Hello, {props.name}</h3>;
  }

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'yuyue',
        
        }
        this.changeName = this.changeName.bind(this)
    }
    componentWillMount(){

    }
    componentDidMount(){
        console.log('tag', 'componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。')
    }
    changeName(){
        debugger
        this.setState({
            name: Math.random()
        })
    }
    render(){
        return <div className="the_user">
            <h2>hi---user!---这里时用户名信息<button className='btn btn-info' onClick={this.changeName}>点击变化名字</button></h2>
            <hr/>
            <Welcome name={this.state.name} />
            <hr/><br/>
            <p>展示count----》{store.getState()}</p>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    }
}
export default User;