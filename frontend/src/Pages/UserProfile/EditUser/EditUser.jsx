import React from 'react'
import './editUser.css';

const EditUser = (props) => {
    const {handleEdit} = props
    return (
        <div className='container_div'>
            <div className="block_element_Edit-profile">
                <img className='backErrow_img' 
                src={require('../../../assets/images/backErrow.png')} 
                onClick={ () =>handleEdit()}/>
                <div className="user_image flex flex-col absolute_center">
                    <img className='user_icon' src={require('../../../assets/images/userIcon.png')}
                        alt="user_icons"
                    />
                    <div className='edit_names flex flex-row'>
                        <span className="user_name style_inter">User Name</span>
                        <img className='edit_icon' src={require('../../../assets/images/editIcon.png')} alt="edit-icon" />
                    </div>
                </div>
            </div>
            <div className="user_account">
                <p className="account-title style_inter">Account</p>
                <div className="user_contacts style_inter">
                    <p className="user_mobile">+91 12345678</p>
                    <p className="change_number">
                        Tap here to change number
                    </p>
                    
                </div>
                <hr />
                <div className="user_address style_inter">
                    <p className="edit_address">
                        133, Abc Society, Delhi Road, Delhi
                    </p>
                    <p className="change_address">
                        Tab here to change address
                    </p>
                    
                </div>
                <hr />
            </div>
        </div>
    )
}

export default EditUser;
