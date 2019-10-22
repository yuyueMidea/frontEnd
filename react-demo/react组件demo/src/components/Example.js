/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 16:33:56
 * @LastEditTime: 2019-09-29 16:33:56
 * @LastEditors: your name
 */
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

export default Example;