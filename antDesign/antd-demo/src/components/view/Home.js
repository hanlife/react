import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BreadcrumbView from '../Breadcrumb'

class Home extends Component {
  render() {
    return (
      <div>
      <BreadcrumbView first="" second=""></BreadcrumbView>
        Home
      </div>
    );
  }
}
export default Home
