import React from 'react';
import './menu.css'



const Menu = (props) => {

    const { handleMyOrder, handleServiceDetails,
        handleMyService, showUserProfile } = props;
    return (
        <div className='container_div'>
            <div className='menu-block'>
                <div className="block_element_profile">
                    <img className='backErrow_img' src={require('../../../assets/images/backErrow.png')}
                        onClick={() => handleServiceDetails()} />
                    <div className="user_image flex flex-col absolute_center">
                        <img className='user_icon' src={require('../../../assets/images/userIcon.png')}
                            alt="user_icons"
                        />
                        <span className="user_name font-awesome">User Name</span>
                        <span className='edit_para font-awesome'
                            onClick={() => showUserProfile()}>Edit Profile</span>
                    </div>
                </div>
                <div className="block_items">
                    <div className='order_list flex'
                        onClick={() => handleMyOrder()}>
                        <img onClick={() => showUserProfile()}
                            src={require('../../../assets/images/todoIcon.png')}
                            alt="user_icons"
                        />
                        <span className='font-awesome'>Orders</span>
                    </div>
                    <hr />
                    <div className="block_service_items flex"
                        onClick={() => handleMyService()}>
                        <img src={require('../../../assets/images/service.png')}
                            alt="" />
                        <span className='font-awesome'>My Service</span>
                    </div>
                    <hr />
                </div>
                <div className="logout_btn flex flex-row">
                    <img src={require('../../../assets/images/logout.png')}
                        alt="" />
                    <span className="logout_para font-awesome">Log out</span>
                </div>
            </div>
        </div>
    )
}

export default Menu
