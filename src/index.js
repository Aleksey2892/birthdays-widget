import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ModernNormalize from 'react-modern-normalize';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ModernNormalize>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModernNormalize>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
