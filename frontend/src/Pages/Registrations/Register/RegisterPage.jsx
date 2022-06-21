import React from 'react';
import './register.css';
import '../common.css';

const RegisterPage = (props) => {
    const { handleRegister, handleSignIn } = props;
    return (
        <div className='main_card'>

            <div className='card '>
                <div className='logo'>
                    <img  src={require('../../../images/logo.png')} alt='logo' />
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
                            value=''
                            placeholder="phone number"
                        />
                    </div>
                    <div className="have_account">Already have an account?
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
