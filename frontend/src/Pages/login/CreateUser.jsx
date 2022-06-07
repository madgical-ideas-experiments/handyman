import React from 'react'
import '../../Style/ComStyle/comanCss.css';
import './createUser.css';


const CreateUser = (props) => {
    const {handleUserLogin} = props;

    return (
        <div className='reg_header'>
            <div className='reg_main'>
                <div className="handyman">
                    <span className="handyman_para">handyman</span><br />
                    <span className="handy_span">Services, anytime, anywhere</span>
                </div>

                <div className="customer_input">
                    <p className="say_hi">Hi!</p>
                    <input type="text"
                        name="customer"
                        value=""
                        placeholder="Login as a customer" />
                </div>
                <div className='choose'>OR</div>
                <div className="customer_input">
                    <input type="text"
                        name="customer"
                        value=""
                        placeholder="Login as a service provider" />
                </div>
                <div className="continue">
                    <button className="btn_primary"
                        onClick={() => handleUserLogin()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default CreateUser
