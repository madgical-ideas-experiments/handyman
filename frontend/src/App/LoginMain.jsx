import React,{useState} from 'react';
import ".././Style/commonStyle.css";

import RegisterPage from '../Pages/Registrations/Register/RegisterPage';
import GetOtp from '../Pages/Registrations/GetOtp/GetOtp';
import Login from '../Pages/Registrations/LogIn/Login';
import CreatePass from '../Pages/Registrations/CreatePass/CreatePass';
import SignIn from '../Pages/Registrations/SignIn/SignIn';

import CreateServices from '../Pages/Service/CreateService/CreateServices';
import AddService from '../Pages/Service/AddService/AddService';


const LoginMain = () => {

    const [state, setstate] = useState(0);

    const handleRegister = () =>{
        setstate(1);
    }
    const gotoCreateUser = () => {
      setstate(2);
    }
    const handleSignIn = () =>{
      setstate(3)
     }
   const handleUserLogin = () =>{
      setstate(4);
   }

   const loginAsServiceProvider = () =>{
    setstate(5);
   }
   const backToLogin = () =>{
    setstate(4);
   }
   const handleAddService = () =>{
    setstate(6);
   }
   const backToCreateService = () =>{
    setstate(5);
   }


  return (
    <>
    {
        state === 0 ?
        <RegisterPage 
        handleSignIn = {handleSignIn}
        handleRegister = {handleRegister}/>
        :

        state === 1 ? 
        <GetOtp 
        gotoCreateUser = {gotoCreateUser}
        />

        : state === 2 ?
        <CreatePass 
        handleUserLogin = {handleUserLogin}
        />
        :
        state === 3 ?
        <SignIn handleUserLogin = {handleUserLogin}/>

        : state === 4 ?
        <Login
        loginAsServiceProvider = {loginAsServiceProvider}
       />
        :
         
        state === 5 ?
        <CreateServices 
        handleAddService = {handleAddService}
        backToLogin={backToLogin}/>
        :

        <AddService 
        backToCreateService = {backToCreateService}/>
    }
    </>
  )
}

export default LoginMain
