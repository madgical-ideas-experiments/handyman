import React, {Component} from "react";
import "./userType.css"
class UserType extends Component{
    render() {

        const {handleLogin} = this.props;
        return(
            <div className="main_div">
                <div className="element_div">
                    <div className="user_header">
                        <span className="title">handyman</span><br/>
                        <span className="sub_title">Services, anytime, anywhere</span>
                    </div>
                    
                    <div className="customer_input">
                    <p className="say_hi">Hi!</p>
                        <input type="text" 
                        name="customer"
                        value=""
                        placeholder="Login as a customer" />
                    </div>
                    <div className="provider_input">
                        <input type="text" 
                        name="customer"
                        value=""
                        placeholder="Login as a service provider" />
                    </div>
                    <div className="continue">
                        <button className="btn_primary" 
                        onClick={() =>handleLogin()}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserType;
