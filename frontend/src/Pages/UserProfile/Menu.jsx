import React from 'react'
import '../../Style/commonStyle.css';
import './menu.css'
import { FaArrowLeft, FaUserPlus, FaListUl, FaPowerOff } from 'react-icons/fa';



const Menu = (props) => {

    const {handleMyOrder,handleServiceDetails,
        handleMyService,showUserProfile} = props;
    return (
        <div className='service_header'>
            <div className="profile_child">
                <span className="faArrowLeft"
                    onClick={() => handleServiceDetails()}>
                    <FaArrowLeft />
                </span>

                <div className="user_image">
                    <button className="image_div"
                        onClick={() => showUserProfile()}>
                        <span className="user_icon">
                            <FaUserPlus />
                        </span>
                    </button>
                    <p className="user_name">Taslim</p>
                    <p className='edit_para'>Edit Profile</p>
                </div>
            </div>
            <div className="user_menu">
                <div className="users_order">
                    <button className="My_order_btns"
                        onClick={() => handleMyOrder()}>
                        <span className="user_menu_icons">
                            <FaListUl />
                        </span>
                        <span className="my_order">My Order</span>
                    </button>
                    <hr />
                </div>

                <div className="user_service">
                    <button className="My_Service_btn"
                        onClick={() => handleMyService()}>
                        <span className="service_icon">
                            <img src={require('../../assets/images/service.png')}
                                alt="" />
                        </span>
                        <span className="my_service">My Service</span>
                    </button>
                    <hr />
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

export default Menu
