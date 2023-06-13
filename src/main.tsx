import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import initI18n from './utils/i18n';
import '@/styles/reset.scss';
import 'uno.css'; //引入unocss
import 'nprogress/nprogress.css';
import * as buffer from 'buffer';

if (typeof (window as any).global === 'undefined') {
  (window as any).global = window;
}

if (typeof (window as any).Buffer === 'undefined') {
  (window as any).Buffer = buffer.Buffer;
}

initI18n();
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
