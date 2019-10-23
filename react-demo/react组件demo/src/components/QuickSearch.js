/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-22 20:20:15
 * @LastEditTime: 2019-10-23 11:09:38
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Modal,Input,Icon, Button, Table, Divider, Tag } from 'antd';
const { Search } = Input;

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
  for (let i = 0; i < 33; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: i,
      address: `London, Park Lane no. ${i}`,
    });
  }
  const rowSelection = {
    onChange(selectedRowKeys, selectedRows) {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect(record, selected, selectedRows) {
      console.log(record, selected, selectedRows);
    },
    onSelectAll(selected, selectedRows, changeRows) {
      console.log(selected, selectedRows, changeRows);
    },
  };

class QuickSearch extends Component {
    constructor(props){
        super(props)
        this.state ={
            visible: false,
            showInput: props.showInt,
            products:[
                {code:11, name:'itemName1'},
                {code:22, name:'itemName2'},
            ],
            tableData: data
        }
        this.openDialog = this.openDialog.bind(this)
        this.getVal = this.getVal.bind(this)
        this.setInput = this.setInput.bind(this)
    }
    openDialog(){
        // if(!this.state.showInput) return
        // debugger
        this.setState({
            // tableData: data.filter(v=>v.age==this.state.showInput),
            visible: true
        })
    }
    handleOk = e => {
        this.setState({
          visible: false,
        });
      };
      handleCancel = e => {
        this.setState({
          visible: false,
        });
      };
      getRow(val){
        console.log('tag', val)
        // debugger
    }
    ClickTest(val){
        // console.log('tag--ClickTest--', val)
        this.setState({
            visible: false,
          });
        //   this.setInput(val)
        // debugger
          this.props.getClickedVal(val)
    }
    setInput(val){
        this.setState({
            showInput: val.name
          });
    }
    getVal(e){
        this.setState({
            showInput: e.target.value
        })
    }
   
    render() { 
        return ( 
            <div className="the_QuickSearch">
                <Search enterButton
                value={this.state.showInput}
                onChange={this.getVal}
                placeholder="input search text"
                onSearch={this.openDialog }
                style={{ width: 200 }}
                />
                    <Modal
                    title="快速查询" width={800} wrapClassName="the_wrapper_1"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    maskClosable={false} keyboard={false}
                    >
                        <p>双击行选择数据</p>
                        <Table dataSource={this.state.tableData} columns={columns} 
                        // rowSelection={rowSelection}
                        onRow={record => {
                            return {
                            //   onClick: this.getRow.bind(this, record), // 点击行
                              onDoubleClick: this.ClickTest.bind(this, record), // 双击行
                              onContextMenu: event => {},
                              onMouseEnter: event => {}, // 鼠标移入行
                              onMouseLeave: event => {},
                            };
                          }}
                        size="small" bordered />
                    </Modal>
            </div>
         );
    }
}
 
export default QuickSearch;