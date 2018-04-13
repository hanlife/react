import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BreadcrumbView from '../Breadcrumb'

class View1 extends Component {
  render() {
    return (
      <div>
      <BreadcrumbView first="只有一级" second=""></BreadcrumbView>
        View1View1View1
      </div>
    );
  }
}
export default View1
