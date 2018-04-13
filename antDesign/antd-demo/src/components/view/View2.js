import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BreadcrumbView from '../Breadcrumb'
import { Row, Col } from 'antd';

class View2 extends Component {
  render() {
    return (
      <div>
        <BreadcrumbView first="一级" second="二级"></BreadcrumbView>
        <Row gutter={40}>
          <Col span={6} >1</Col>
          <Col span={6} >2</Col>
          <Col span={6} >3</Col>
          <Col span={6} ></Col>
        </Row>
      </div>
    );
  }
}
export default View2
