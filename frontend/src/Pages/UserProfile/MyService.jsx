import React from 'react'
import '../../Style/commonStyle.css';
import './myService.css';
import {FaArrowLeft} from 'react-icons/fa';



const MyService = (props) => {
    const {backToProfile} = props
    return (
        <div className='service_header'>
            <div className='myOrder_myService'>
                <span className="faArrowLeft"
                    onClick={() => backToProfile()}><FaArrowLeft /></span>
                <span className="order_para">My Service</span>
                <div className="create_new">
                    <button className="create_new_btn"
                    >Create New +</button>
                </div>
                <div className="my_service_items">
                    <div className="my_service_details">
                        <div className="users_service_details">
                            <span className="user_names">Ram Lal Sabziwala</span>
                            <span className="service_imgs">
                                <img src={require('../../assets/images/img4.png')}
                                    alt="images" />
                            </span>
                            <div className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </div>
                            <div className="btn_types">
                                <button className="edit_btn">Edit</button>
                                <button className="delete_btn">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyService
