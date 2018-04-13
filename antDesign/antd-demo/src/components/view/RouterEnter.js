import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BreadcrumbView from '../Breadcrumb'
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;


class RouterEnter extends Component {
  LogOut = (e) => {
    let _t = this;
    confirm({
      title: '确认',
      content: '是否退出？',
      onOk() {
        localStorage.removeItem("name");
        _t.props.router.push("/404")
      },
      onCancel() {
      },
    });
  };
  render() {
    return (
      <div>
        <BreadcrumbView first="权限" second=""></BreadcrumbView>
        权限页面
        <p>登录后才可见</p>
        <button onClick={this.LogOut}>退出</button>
      </div>
    );
  }
}
export default RouterEnter
