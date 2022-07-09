import React, {useState} from 'react'
import Menu from '../Pages/UserProfile/Menu/Menu';
import EditProfile from '../Pages/UserProfile/EditProfile/EditProfile';
import MyOrders from '../Pages/UserProfile/MyOrders/MyOrders';
import MyServices from '../Pages/UserProfile/MyServices/MyServices';

import {getUsers} from '../API/Users';
import {getProviders} from '../API/Providers';

const UserMenu = () => {    

const users = getUsers();
const providers = getProviders();

const [state, setstate] = useState(0);
const showUserProfile = () =>{
  setstate(1);
}
const handleEdit = () =>{
  setstate(0);
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
        <EditProfile 
        handleEdit={handleEdit}/>
        : 
        state === 2 ?
        <MyOrders 
        backToProfile = {backToProfile}
        users = {users}
        />
        :
        <MyServices 
        providers={providers}
        backToProfile = {fromServiceBackToProfile}
        />
      }
      </>
  )
}

export default UserMenu
