import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import App from './pages/App/components/App/App';
import { EvalProvider } from './context/provider/EvalProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <EvalProvider>
      <App />
    </EvalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
