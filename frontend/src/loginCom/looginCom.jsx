import React, {Component} from "react";
import "./loginStyle.css"
class LoginCom extends Component{
    render() {

        const {goToCreateService} = this.props;
        return(
            <div className="login_main">
                <div className="login_header">
                    <div className="header">
                        <span className="handyman">handyman</span><br/>
                        <span className="handy_span">Services, anytime, anywhere</span>
                    </div>
                    <div className="login_details">
                        <p className="welcome">Welcome!</p>
                        <div className="user_name">
                            <input type="text" 
                            name="name"
                            value=""
                            placeholder="Enter username"
                            onChange={this.handleUserName}
                            />
                        </div>
                    </div>
                    <div className="user_password">
                        <input type="password" 
                        name="password"
                        value=""
                        placeholder="Enter password"
                        onChange={this.handlePassword}
                        />
                    </div>
                    <div className="confirm_password">
                        <input type="text" 
                        name="name"
                        value=""
                        placeholder="confirm Password"
                        onChange={this.handleConPass}
                        />
                    </div>
                    <div className="continue">
                        <button className="btn_primary" 
                        onClick={() =>goToCreateService()}>Continue</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default LoginCom