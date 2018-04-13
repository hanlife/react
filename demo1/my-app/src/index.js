import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ComponentA } from './ComponentA';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<ComponentA />, document.getElementById('root'));
registerServiceWorker();
