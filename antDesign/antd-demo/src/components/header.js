import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Icon, Button } from 'antd';
import SiderView from './SiderView'
const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

class HeaderV extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
       <Layout style={{height:'100vh'}}>
        <SiderView path={this.props.location.pathname} collapsed={this.state.collapsed}></SiderView>
        <Layout>
          <Header style={{ background: 'pink', padding: 0 }}>
            <Icon
              className="trigger custom-trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            Header
          </Header>
          <Content style={{ margin: '0 16px', overflow: 'initial' }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default HeaderV
