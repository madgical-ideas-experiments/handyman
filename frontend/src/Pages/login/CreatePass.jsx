import React from 'react'
import '../../Style/ComStyle/comanCss.css';
import './createUser.css';


const CreatePass = (props) => {
    const {goToCreateService}  = props;

    return (
        <div className='reg_header'>
            <div className='reg_main'>
                <div className="handyman">
                    <span className="handyman_para">handyman</span><br />
                    <span className="handy_span">Services, anytime, anywhere</span>
                </div>

                <div className="customer_input">
                    <p className="say_hi">Welcome!</p>
                    <input type="text"
                        name="name"
                        value=""
                        placeholder="Enter username"
                    />
                </div>

                <div className="customer_input">
                    <input type="password"
                        name="password"
                        value=""
                        placeholder="Enter password"
                    />
                </div>
                <div className="customer_input">
                    <input type="text"
                        name="name"
                        value=""
                        placeholder="confirm Password"
                    />
                </div>
                <div className="continue">
                    <button className="btn_primary"
                        onClick={() => goToCreateService()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePass
