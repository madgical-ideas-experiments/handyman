import React,{useState} from 'react';
import ".././Style/commonStyle.css";

import RegisterPage from '../Pages/login/RegisterPage';
import GetOtp from '../Pages/login/GetOtp';
import Login from '../Pages/login/Login';
import CreatePass from '../Pages/login/CreatePass';
import CreateServices from '../Pages/Service/CreateServices';
import AddService from '../Pages/Service/AddService';
import SignIn from '../Pages/login/SignIn';

const LoginMain = () => {

    const [state, setstate] = useState(0);
    const [initial, setfinal]  = useState(0);

    const handleRegister = () =>{
        setstate(1);
    }
    const gotoCreateUser = () => {
      setstate(2);
    }

   const handleUserLogin = () =>{
      setstate(3);
   }

   const goToCreateService = () =>{
    setstate(4);
   }

   const handleAddService = () =>{
    setstate(5);
   }
   const backToCreateService = () =>{
    setstate(4);
   }

   const handlesignIn = () =>{
    setfinal(1)
   }
  return (
    <>
    {
        state === 0 ?
        <RegisterPage 
        handlesignIn = {handlesignIn}
        handleRegister={handleRegister}/>
        :
        state === 1 ? 
        <GetOtp 
        gotoCreateUser={gotoCreateUser}
        />
        : state === 2 ?
        <CreatePass 
        handleUserLogin={handleUserLogin}
        />
        :
        state === 3 ?
        <Login
        goToCreateService={goToCreateService}
       />
        :
        state === 4 ?
        <CreateServices 
        handleAddService={handleAddService}/>
        :
        <AddService 
        backToCreateService={backToCreateService}/>
    }
    </>
  )
}

export default LoginMain
