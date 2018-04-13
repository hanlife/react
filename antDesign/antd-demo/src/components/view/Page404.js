import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Page404 extends Component {
  render() {
    return (
      <div style={{ fontSize: "20px", color: "#000", fontWeight: "bold", textAlign: "center", margin: "100px" }}>
        404无权访问
        <p><Link to={'/Login'}>点击此处登录</Link></p>
      </div>
    );
  }
}
export default Page404
