import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

import HeaderV from '../components/header'
import Home from '../components/view/Home'
import View1 from '../components/view/View1'
import View2 from '../components/view/View2'
import RouterEnter from '../components/view/routerEnter'
import Page404 from '../components/view/Page404'
import Login from '../components/view/Login'

class CRouter extends Component {
  requireAuth = (permission, component) => {
    if (!localStorage.getItem("name")) {
      hashHistory.replace('/404')
    }
    return component;
  };
  render() {
    return (
      <Router history={hashHistory}>
        <Route path={'/'} components={HeaderV}>
          <IndexRedirect to="/Home"/>
          <Route path={'Home'} components={Home}></Route>
          <Route path={'View1'} components={View1}></Route>
          <Route path={'View2'} components={View2}></Route>
          <Route
            path={'RouterEnter'}
            component={(props) => this.requireAuth('/404', < RouterEnter {
            ...props
          } />)}></Route>
        </Route>
        <Route path={'404'} components={Page404}></Route>
        <Route path={'Login'} components={Login}></Route>
      </Router>
    )
  }
}

export default CRouter
