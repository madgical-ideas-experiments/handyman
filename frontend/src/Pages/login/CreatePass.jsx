import React from 'react'
import '../../Style/register.css';


const CreatePass = (props) => {
    const {handleUserLogin}  = props;

    return (
        <div className='main_card'>
            <div className='card'>
                <div className="handyman">
                    <div className="handyman_title">handyman</div>
                    <div className="description-text">Services, anytime, anywhere</div>
                </div>
                
                <div className='title'>Welcome!</div>
                <div className="login_input">
                    
                    <input type="text"
                        name="name"
                        value=""
                        placeholder="Create a username"
                    />
                </div>

                <div className="login_input">
                    <input type="password"
                        name="password"
                        value=""
                        placeholder="Enter password"
                    />
                </div>
                <div className="login_input">
                    <input type="text"
                        name="name"
                        value=""
                        placeholder="confirm Password"
                    />
                </div>
                <div className="continue_btn">
                    <button className="btn_primary"
                        onClick={() => handleUserLogin()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePass
