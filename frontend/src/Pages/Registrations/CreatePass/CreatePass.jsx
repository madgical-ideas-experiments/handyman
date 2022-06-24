import React, { useState } from 'react'
import '../common.css';

const CreatePass = (props) => {

    const [newUser, setNewUser] = useState({
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
        setNewUser(result);
    }

    const { handleUserLogin } = props;
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
                    <label className='title'>Welcome!</label>
                    <div className="password_input">

                        <input type="text"
                            name="userName"
                            placeholder="Create a username"
                            value={newUser.userName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="password_input">
                        <input type="password"
                            name="password"
                            value={newUser.password}
                            placeholder="Enter password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="password_input">
                        <input type="password"
                            name="name"
                            value={newUser.conPassword}
                            placeholder="Confirm password"
                            onChange={handleChange}
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

export default CreatePass
