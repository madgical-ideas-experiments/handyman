import React from 'react'
import '../../Style/commonStyle.css';
import './editUser.css';
import {FaUserPlus,FaEdit} from 'react-icons/fa';

const EditUser = () => {
    return (
        <div className='service_header'>
            <div className="show_child">
                <div className="user_div">
                    <span className="user_icons">
                        <span className="profile_icons">
                            <FaUserPlus />
                        </span>
                    </span>
                </div>
                <div className="user_details">
                    <span className="show_username">Hi Kavita</span>
                    <span className="edit_user_icons">
                        <FaEdit />
                    </span>
                </div>
            </div>
            <div className="user_account">
                <p className="show_account">Account</p>
                <div className="user_contacts">
                    <p className="user_mobile">+91 12345678</p>
                    <p className="change_number">
                        Tap here to change number
                    </p>
                    <hr />
                </div>
                <div className="user_address">
                    <p className="user_home_add">
                        133, Abc Society, Delhi Road, Delhi
                    </p>
                    <p className="change_address">
                        Tab here to change address
                    </p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default EditUser;
