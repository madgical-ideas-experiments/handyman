import React, {useState} from 'react';
import '../common.css';

const SignIn = (props) => {

    const { handleUserLogin } = props;
    const [state, setState] = useState({
        userName : "",
        password : "",
        conPassword : ""
    })


    const handleChange = (e) =>{
        const values = e.target.value; 
        let result = "";
        for(let i=0; i< values.length; i++)
        {
            result += values[i].name;
        }
        setState(result);
    }
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
                    <label className="title">Welcome!</label>
                    <div className="signin_input">
                        <input type="text"
                            name="userName"
                            placeholder="Enter username"
                            value={state.userName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="signin_input">
                        <input type="password"
                            name="password"
                            placeholder="Enter password"
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="signin_input">
                        <input type="password"
                            name="conPassword"
                            placeholder="confirm Password"
                            value={state.conPassword}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="button">
                    <button className="btn_primary"
                        onClick={() => handleUserLogin()}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
