import React from 'react'
import '../../Style/register.css';


const GetOtp = (props) => {

    const {gotoCreateUser} = props
    return (
        <div className='main_card'>
            <div className='card'>
                <div className="handyman">
                    <div className="handyman_title">handyman</div>
                    <div className="description-text">Services, anytime, anywhere</div>
                </div>

                <div className="items">
                    <label className="title">Register here</label>
                    <div className="register_input">
                        <span className="country_code">+91</span>
                        <input type="text"
                            name="phone"
                            value=''
                            placeholder="12345678"
                            required
                        />
                    </div>
                </div>
                <div className='get_otp'>
                    <div className='otp'>
                        <input type="text"
                            name="otp"
                            value=''
                            placeholder="4"
                            required
                        />
                    </div>
                    <div className='otp'>
                        <input type="text"
                            name="otp"
                            value=''
                            placeholder="7"
                            required
                        />
                    </div>
                    <div className='otp'>
                        <input type="text"
                            name="otp"
                            value=''
                            placeholder="9"
                            required
                        />
                    </div>
                    <div className='otp'>
                        <input type="text"
                            name="otp"
                            value=''
                            placeholder="0"
                            required
                        />
                    </div>
                </div>
                <div className='verified'>
                    <p>Verified!</p>
                </div>
                
                
                <div className="continue_btn">
                    <button className="btn_primary"
                        onClick={() => gotoCreateUser()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default GetOtp
