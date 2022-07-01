import React, {useState} from 'react'
import Menu from '../Pages/UserProfile/Menu/Menu';
import EditUser from '../Pages/UserProfile/EditUser/EditUser';
import MyOrder from '../Pages/UserProfile/MyOrder/MyOrder';
import MyService from '../Pages/UserProfile/MyService/MyService';

const UserMenu = () => {    

const allOrders = [
  {names:'Sweta', ordStatus:'In progress',devAddres:'Deliver at 123, Abc Society, Delhi',reminder:'Note- Please call me at my number when you are here. I will be available till 8pm',date:'Friday,22 April'},
  {names:'Neeraj', ordStatus:'Canceled',devAddres:'Deliver at 123, Abc Society, Delhi',reminder:'Note- Please call me at my number when you are here. I will be available till 8pm',date:'Friday,22 April'},
  {names:'Priya', ordStatus:'Delivered',devAddres:'Deliver at 123, Abc Society, Delhi',reminder:'Note- Please call me at my number when you are here. I will be available till 8pm',date:'Friday,22 April'},
]



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
        <EditUser 
        handleEdit={handleEdit}/>
        : 
        state === 2 ?
        <MyOrder 
        backToProfile = {backToProfile}
        allOrders = {allOrders}
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
