import React from 'react'
import '../../Style/ComStyle/comanCss.css';
import './registerPage.css';


const RegisterPage = (props) => {
    const {handleRegister,handleLoginHere} = props
    return (
        <div className='reg_header'>
            <div className='reg_main'>
                <div className="handyman">
                    <span className="handyman_para">handyman</span><br />
                    <span className="handy_span">Services, anytime, anywhere</span>
                </div>
                <div className="register_para">
                    <p className="register_here">Register here</p>
                    <div className="users_input">
                        <span className="country_code">+91</span>
                        <input type="number"
                            name="phone"
                            value=''
                            placeholder="phone number"
                            required
                        />
                    </div>
                </div>
                <p className="have_account">Already have an account? 
                    <button className="user_login"
                    onClick={() =>handleLoginHere()}>Login here</button>
                </p>
                <div className="continue">
                    <button className="btn_primary"
                    onClick={() =>handleRegister()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
