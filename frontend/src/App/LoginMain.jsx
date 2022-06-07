import React,{useState} from 'react';
import '.././Style/ComStyle/comanCss.css';
import RegisterPage from '../Pages/login/RegisterPage';
import GetOtp from '../Pages/login/GetOtp';
import CreateUser from '../Pages/login/CreateUser';
import CreatePass from '../Pages/login/CreatePass';
import CreateServices from '../Pages/Service/CreateServices';
import AddService from '../Pages/Service/AddService';

const LoginMain = () => {

    const [state, setstate] = useState(0)

    const handleRegister = () =>{
        setstate(1);
    }

    const handleLoginHere = () =>{

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
  return (
    <>
    {
        state === 0 ?
        <RegisterPage 
        handleLoginHere = {handleLoginHere}
        handleRegister={handleRegister}/>
        :
        state === 1 ? 
        <GetOtp 
        gotoCreateUser={gotoCreateUser}
        />
        : state === 2 ?
        <CreateUser
        handleUserLogin={handleUserLogin}/>
        :
        state === 3 ?
        <CreatePass 
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
