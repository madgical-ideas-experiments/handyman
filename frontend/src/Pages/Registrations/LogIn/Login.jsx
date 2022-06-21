import React from 'react'
import '../common.css';

const Login = (props) => {
    const { goToCreateService } = props;

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
                    <label className='title'>Hi!</label>
                    <div className="login_input">
                        <input type="text"
                            name="customer"
                            value=""
                            placeholder="Login as a customer"
                        />
                    </div>
                    <div className="login_input">
                        <input type="text"
                            name="customer"
                            value=""
                            placeholder="Login as a service provider"
                        />
                    </div>
                </div>
                <div className="continue_btn">
                    <button className="btn_primary"
                        onClick={() => goToCreateService()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
