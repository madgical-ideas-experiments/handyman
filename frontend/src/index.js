import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MainComponent from "./Handyman/mainCom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import RegisterMaimCom from './loginCom/registerMainCom';
import UserMainCom from './userProfile/userMainCom';
import EditMainCom from './editCom/editMainCom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MainComponent /> */}
    {/* <RegisterMaimCom /> */}
    {/* <UserMainCom /> */}
    <EditMainCom />
  </React.StrictMode>
);

