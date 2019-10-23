/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 16:33:57
 * @LastEditTime: 2019-10-23 11:23:07
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import QuickSearch from './QuickSearch'
import { Modal,Input,Icon, Button, Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: i,
    address: `London, Park Lane no. ${i}`,
  });
}

class List extends Component {
  constructor(props) {
    super(props)
    this.state ={
      tableData: data,
      showInt:''
    }
    this.getQuickVal = this.getQuickVal.bind(this)
  }
 
  getQuickVal(val){
    this.setState({
      tableData: [...this.state.tableData, val]
    })
    // debugger
  }
  render() { 
    return ( 
      <div className="the_table">
        <QuickSearch name={this.state.showInt} getClickedVal={this.getQuickVal} />
            <hr/><br/>
            <Table dataSource={this.state.tableData} columns={columns} 
                        size="small" bordered />
            
            <hr/><br/>
      </div>
     );
  }
}
 
export default List;