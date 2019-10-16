/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 16:33:56
 * @LastEditTime: 2019-09-29 16:33:56
 * @LastEditors: your name
 */
import React from 'react';
import '../App.css';
import store from './store'
import store_0 from './state-subscriber'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import axios from 'axios';

function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }

  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            home:'河南省信阳市平桥区',
            resData: '',
            initCount: store.getState(),
            id:'',
            description:'',
            itemArr: store_0.getState().items
        }
        this.getNews = this.getNews.bind(this);
        this.plus = this.plus.bind(this);
        this.submitInfo = this.submitInfo.bind(this);

        this.getID = this.getID.bind(this);
        this.getDES = this.getDES.bind(this);
    }
   
    plus(){
        store.dispatch({ type: 'INCREMENT' });
        this.setState({
            initCount: store.getState()
        })
    }
    getID(event) {
        this.setState({id: event.target.value});
      }
      getDES(event) {
        this.setState({description: event.target.value});
      }
      submitInfo(){
        if(!this.state.id || !this.state.description) return;
        //新增一个条目--描述
        store_0.dispatch({ type: 'ADD_ITEM', 
            item:{
                id: this.state.id,
                description: this.state.description
            } 
        })
        this.setState({itemArr: store_0.getState().items});
    }
    getNews(){
        axios.get('https://www.apiopen.top/journalismApi').then(v=>{
		  		console.log(v.data.data);
                this.setState({
                    resData: v.data.data
                })
                // debugger
		  	}).catch(function (error) {
				console.log(error);
			  })
			  .then(function () {
				// always executed
			  });
    }
    
    render(){
        return <div className="the_home">
            <h2>welcome---home!</h2>
            <p>我家的地址是---{this.state.home}</p>
            <div className='inputUser'>
                <div className='row'>
                    <div className='col-sm-4'>
                        id: <input type="text" className="form-control" value={this.state.id} onChange={this.getID} />
                    </div>
                    <div className='col-sm-4'>
                        描述: <input type="text" className="form-control" value={this.state.description} onChange={this.getDES} />
                    </div>
                    <div className='col-sm-4'>
                        <button className="btn btn-primary" onClick={this.submitInfo}>提交</button>
                    </div>
                </div>
                
            </div>
            <hr/><br/>
            <BootstrapTable data={ this.state.itemArr } striped={ true } hover={ true } condensed={ true }>
                <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='description'>Product description</TableHeaderColumn>
            </BootstrapTable>
            <hr/><br/>
            
            <div>
                <button className="btn btn-primary" onClick={this.plus}>count++</button>
                <p>{this.state.initCount}</p>
              
            </div>
            <br/><hr/>
            <Blog posts={posts} />
            <br/><hr/>
            <p><button className="btn btn-info" onClick={this.getNews}>获取新闻</button></p>
            <hr/>

            <ul className="newsList">
                {
                    this.state.resData['tech'] && this.state.resData['tech'].map((v,i)=>
                        <li key={i}><p>
                            <span>{i}</span>
                            <img src={(v.picInfo && v.picInfo[0]) ?v.picInfo[0].url :''} alt="" />
                            <a href={v.link ?v.link:''} target="_blank" rel="noopener noreferrer"><span>{v.title}</span></a>
                            </p>
                        </li>
                    )
                }
            </ul>
            <p>
           React 组件生命周期
在本章节中我们将讨论 React 组件的生命周期。
<br/>
组件的生命周期可分成三个状态：
<br/>
Mounting：已插入真实 DOM<br/>
Updating：正在被重新渲染<br/>
Unmounting：已移出真实 DOM<br/>
<br/>
生命周期的方法有：
<br/>
componentWillMount 在渲染前调用,在客户端也在服务端。<br/>

componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
<br/>
 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
 <br/>
componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
<br/>
shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。<br/> 
可以在你确认不需要更新组件时使用。<br/>

componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。<br/>

componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。<br/>

componentWillUnmount在组件从 DOM 中移除之前立刻被调用<br/>
           </p>
        </div>
    }
}
export default Home;