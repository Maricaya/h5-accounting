import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // React.StrictMode 用来纠正代码的标签
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
