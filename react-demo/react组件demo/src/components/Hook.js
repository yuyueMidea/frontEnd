import React, { useState } from 'react';
import '../App.css';

function Example() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
  // debugger
    return (
      <div className="the_example">
        <p>You clicked {count} times</p>
        <button className='btn btn-success' onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

class Hook extends React.Component{
    constructor(props){
        super(props);
        this.state={
            home:'河南省信阳市平桥区',
        }
    }
    componentWillMount(){

    }
    
    render(){
        return <div className="the_hook">
            <Example/>
            <Example/>
        </div>
    }
}
export default Hook;