import React from 'react';
import ReactDOM from 'react-dom';
import CRouter from './src/routes';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <CRouter></CRouter>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
