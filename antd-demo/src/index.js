import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';


const render = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('root')
  );
};
render(Router);

registerServiceWorker();
