import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router';

class View2 extends Component {
  render() {
    const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
    const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';
    return (
      <Breadcrumb style={{ margin: '12px 0px'}}>
       <Breadcrumb.Item><Link to={'/Home'}>首页</Link></Breadcrumb.Item>
       {first}
       {second}
     </Breadcrumb>
    );
  }
} 
export default View2
