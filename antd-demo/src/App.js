import React, { Component } from 'react';
import { Router,Route,Link,browserHistory } from "react-router";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Navigation from './components/Navigation';
import Table from './components/Table';

import './App.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class App extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (

        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            breakpoint="sm"
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <Link to="/Navigation" className="nav-item">Navigation</Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
              >
                <Menu.Item key="3"><Link to='/itme1' className="nav-item">itme1</Link></Menu.Item>
                <Menu.Item key="4"><Link to='/itme2' className="nav-item">itme2</Link></Menu.Item>
                <Menu.Item key="5"><Link to='/itme3' className="nav-item">itme3</Link></Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <Link to='/Table' className="nav-item">table</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Router history={browserHistory}>
                <Route path="/Navigation" component={Navigation}/>
                <Route path="/Table" component={Table}/>
              </Router>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
    );
  }
}

export default App;
