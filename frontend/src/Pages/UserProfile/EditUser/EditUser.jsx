import React,{useState} from 'react'
import './editUser.css';

const EditUser = (props) => {
    const [data, setData] = useState(false);
    
    const [details, setDetails] = useState({
        names : 'User Name',
        mobile : '12345678',
        address : '133, Abc Society, Delhi Road, Delhi',
    });
    
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
                        <span className="user_name font-awesome">User Name</span>
                        <img className='edit_icon' src={require('../../../assets/images/editIcon.png')} alt="edit-icon" />
                    </div>
                </div>
            </div>
            <div className="user_account">
                <p className="account-title font-awesome">Account</p>
                <div className="user_contacts font-awesome">
                    <p className="user_mobile">+91 <span>12345678</span></p>
                    <p className="change_number">
                        Tap here to change number
                    </p>
                    
                </div>
                <hr />
                <div className="user_address font-awesome">
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
