import React from 'react'
import './login.css';
import '../common.css';

const Login = (props) => {
    const { loginAsCustomer,loginAsServiceProvider } = props;

    return (
        <div className='main_container'>
            <div className='card'>
                <div className='logo'>
                    <img src={require('../../../assets/images/logo.png')} alt='logo' />
                </div>
                <div className="handyman">
                    <div className="handyman_title">handyman</div>
                    <div className="description-text">Services, anytime, anywhere</div>
                </div>

                <div className='items'>
                    <label className='title'>Hi!</label>
                    <div className="login_input">
                        <button className='login_btn'
                        onClick={() =>{loginAsCustomer()}}>
                            Login as a customer
                        </button>
                    </div>
                    <div className="login_input">
                        <button className='login_btn'
                        onClick={() =>{loginAsServiceProvider()}}>
                        Login as a service provider
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
