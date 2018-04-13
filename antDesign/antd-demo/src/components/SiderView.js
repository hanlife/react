import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const { Header, Sider, Content } = Layout;


class SiderView extends React.Component {
  state = {
    collapsed: false,
    selectedKey: ''
  };
  componentWillMount() {
    this.setMenuOpen(this.props);
  };
  componentWillReceiveProps(nextProps) {
    this.setMenuOpen(nextProps)
  }
  setMenuOpen = props => {
    this.setState({
      collapsed: props.collapsed,
      selectedKey: props.path
    });
  };
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
  };
  render() {

    return (
      <Sider
        trigger={null}
        collapsible
        breakpoint="sm"
        onCollapse={(collapsed, type) => { this.setState({ collapsed: collapsed }); }}
        collapsed={this.state.collapsed}
      >
        <div className="logo">logo</div>
        <Menu theme="dark" mode="inline"
          onClick={this.menuClick}
          selectedKeys={[this.state.selectedKey]}>
          <Menu.Item key="/Home">
            <Link to={'/Home'}><Icon type="user" /><span className="nav-text">Home</span></Link>
          </Menu.Item>
          <Menu.Item key="/View1">
            <Link to={'/View1'}><Icon type="video-camera" /><span className="nav-text">View1</span></Link>
          </Menu.Item>
          <Menu.Item key="/View2">
            <Link to={'/View2'}><Icon type="upload" /><span className="nav-text">View2</span></Link>
          </Menu.Item>
          <Menu.Item key="/RouterEnter">
            <Link to={'/RouterEnter'}><Icon type="upload" /><span className="nav-text">路由拦截</span></Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SiderView;
