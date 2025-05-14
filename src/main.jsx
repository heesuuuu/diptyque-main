import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css'; // Tailwind 먼저 로드
import store from './store';
import './styles/globals.scss'; // 그 다음 사용자 정의 스타일

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
