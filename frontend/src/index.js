import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MainComponent from "./Handyman/mainCom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import RegisterMaimCom from './loginCom/registerMainCom';
import UserMainCom from './userProfile/userMainCom';
import EditMainCom from './editCom/editMainCom';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

