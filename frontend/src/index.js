import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from './App/App';
import LoginMain from './App/LoginMain';
import UserMenu from './App/UserMenu';
import AppTest from './App/AppTest'

import { BrowserRouter } from 'react-router-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <LoginMain/> */}
    {/* <UserMenu /> */}

    <BrowserRouter >
    <AppTest/>
    </BrowserRouter>
  </React.StrictMode>
);

