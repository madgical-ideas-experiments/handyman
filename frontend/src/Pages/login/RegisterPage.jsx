import React from 'react'
import '../../Style/register.css';


const RegisterPage = (props) => {
    const { handleRegister, handlesignIn } = props;
    return (
        <div className='main_card'>
            <div className='card'>
                <div className="handyman">
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
                            required
                        />
                    </div>
                    <div className="have_account">Already have an account?
                        <button onClick={() => handlesignIn()}>Login in here</button>
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
