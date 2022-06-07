import React from 'react'
import '../../Style/ComStyle/comanCss.css';
import './registerPage.css';


const GetOtp = (props) => {

    const {gotoCreateUser} = props
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
                            placeholder="12345678"
                            required
                        />
                    </div>
                </div>
                <div className='mobile_otp'>
                    <div className='otp'>
                        <input type="number"
                            name="phone"
                            value=''
                            placeholder="4"
                            required
                        />
                    </div>
                    <div className='otp'>
                        <input type="number"
                            name="phone"
                            value=''
                            placeholder="7"
                            required
                        />
                    </div>
                    <div className='otp'>
                        <input type="number"
                            name="phone"
                            value=''
                            placeholder="9"
                            required
                        />
                    </div>
                    <div className='otp'>
                        <input type="number"
                            name="phone"
                            value=''
                            placeholder="0"
                            required
                        />
                    </div>
                </div>
                
                <div className="continue">
                    <button className="btn_primary"
                        onClick={() => gotoCreateUser()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default GetOtp
