import React, {useState} from 'react'
import Menu from '../Pages/UserProfile/Menu';
import EditUser from '../Pages/UserProfile/EditUser';
import MyOrder from '../Pages/UserProfile/MyOrder';
import MyService from '../Pages/UserProfile/MyService';

const UserMenu = () => {    

const [state, setstate] = useState(0);

const showUserProfile = () =>{
  setstate(1);
}

const handleMyOrder = () =>{
  setstate(2);
}

const backToProfile = () =>{
  setstate(0);
}

const handleMyService = () =>{
  setstate(3)
}

const fromServiceBackToProfile = () =>{
  setstate(0)
}

  return (
      <>
      {
        state === 0 ?
        <Menu 
        showUserProfile = {showUserProfile}
        handleMyOrder={handleMyOrder}
        handleMyService = {handleMyService}
        />
        :
        state === 1 ?
        <EditUser />
        : 
        state === 2 ?
        <MyOrder 
        backToProfile = {backToProfile}
        />
        :
        <MyService 
        backToProfile = {fromServiceBackToProfile}
        />
      }
      </>
  )
}

export default UserMenu
