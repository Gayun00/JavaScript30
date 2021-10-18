import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AuthService from './service/auth_service';
import Database from './service/database';

const authService = new AuthService();
const database = new Database();

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      database ={database}
    />
  </React.StrictMode>,
  document.getElementById('root')
);


