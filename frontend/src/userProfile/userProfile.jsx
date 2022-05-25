import React, {Component} from "react";
import './userProfile.css'
import {FaArrowLeft,FaUserPlus,FaListUl,FaPowerOff} from 'react-icons/fa';
class UserProfile extends Component{

    handleUserService = () => {
        console.log("hhhhh")
    }
    render() {
        const {handleUserOrder,handleServiceDetails,
                handleUserService,showUserProfile} = this.props;
        return(
            <div className="profile_main">
                <div className="profile_child">
                    <span className="faArrowLeft" 
                        onClick={() =>handleServiceDetails()}>
                        <FaArrowLeft/>
                    </span>

                    <div className="user_image">
                        <button className="image_div"
                        onClick={() =>showUserProfile()}>
                            <span className="user_icon">
                            <FaUserPlus />
                            </span>
                        </button>
                        <br/>
                        <span className="user_name">Taslim</span>
                        <p>Edit Profile</p>
                    </div>
                </div>
                <div className="user_menu">
                    <div className="users_order">
                        <button className="My_order_btns"
                        onClick={() =>handleUserOrder()}>
                            <span className="user_menu_icons">
                                <FaListUl/>
                            </span>
                            <span className="my_order">My Order</span>
                        </button>
                        <hr/>
                    </div>
                    
                    <div className="user_service">
                        <button className="My_Service_btn"
                        onClick={() =>handleUserService()}>
                            <span className="service_icon">
                                <img src={require('../images/service.png')} 
                                alt="" />
                            </span>
                            <span className="my_service">My Service</span>
                        </button>
                        <hr/>
                    </div>
                    

                    <div className="logout_div">
                        <span className="logout_btn">
                            <FaPowerOff />
                        </span>
                        <span className="logout_para">Log out</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;