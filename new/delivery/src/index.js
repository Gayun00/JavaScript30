import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AuthService from './service/auth_service';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);


