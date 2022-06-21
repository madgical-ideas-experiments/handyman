import React from 'react';
import '../common.css';

const SignIn = (props) => {

    const { handleUserLogin } = props;

    return (
        <div className='main_card'>
            <div className='card'>
                <div className='logo'>
                    <img src={require('../../../images/logo.png')} alt='logo' />
                </div>
                <div className="handyman">
                    <div className="handyman_title">handyman</div>
                    <div className="description-text">Services, anytime, anywhere</div>
                </div>

                <div className='items'>
                    <label className="title">Welcome!</label>
                    <div className="signin_input">
                        <input type="text"
                            name="name"
                            value=""
                            placeholder="Enter username"
                        />
                    </div>

                    <div className="signin_input">
                        <input type="password"
                            name="password"
                            value=""
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="signin_input">
                        <input type="text"
                            name="name"
                            value=""
                            placeholder="confirm Password"
                        />
                    </div>
                </div>
                <div className="continue_btn">
                    <button className="btn_primary"
                        onClick={() => handleUserLogin()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
