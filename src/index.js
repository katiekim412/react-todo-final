// React 라이브러리와 ReactDOM을 불러옵니다.
import React from 'react';
import ReactDOM from 'react-dom/client';
// 전체 앱에 적용할 CSS 파일을 불러옵니다.
import './index.css';
// App 컴포넌트를 불러옵니다.
import App from './App';
// 웹 성능 측정 함수 import
import reportWebVitals from './reportWebVitals';

// root DOM 요소를 찾아 React 앱을 연결합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* App 컴포넌트를 렌더링합니다. */}
    <App />
  </React.StrictMode>
);

// 웹 성능을 측정하려면 아래 함수를 사용하세요.
// 예: reportWebVitals(console.log)
// 자세한 내용: https://bit.ly/CRA-vitals
reportWebVitals();