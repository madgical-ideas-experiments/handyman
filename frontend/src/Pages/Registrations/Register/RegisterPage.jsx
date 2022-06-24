import React, {useState} from 'react';
import './register.css';
import '../common.css';

const RegisterPage = (props) => {

    const [number, setNumber] = useState({
        mobileNumber : ""
    })
    const { handleRegister, handleSignIn } = props;

    const handleChange = (e) =>{
        setNumber({ mobileNumber: e.target.value });
    }
    return (
        <div className='main_container'>

            <div className='card '>
                <div className='logo'>
                    <img  src={require('../../../assets/images/logo.png')} alt='logo' />
                </div>
                <div className="handyman flex flex-col">
                    <div className="handyman_title">handyman</div>
                    <div className="description-text">Services, anytime, anywhere</div>
                </div>
                <div className="items">
                    <lable className="title">Register here</lable>
                    <div className="register_input">
                        <span className="country_code">+91</span>
                        <input type="text"
                            name="phone"
                            placeholder="phone number"
                            value={number.mobileNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="have_account">Already a user?
                        <span onClick={() => handleSignIn()}> Log in here</span>
                    </div>
                </div>
                <div className="continue_btn">
                    <button className="btn_primary"
                    onClick={() => handleRegister()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
