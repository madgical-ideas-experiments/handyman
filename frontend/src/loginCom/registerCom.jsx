import React,{Component} from "react";
import "./registerCom.css"


class Register extends Component{
    state = {
        phoneNum : {phone : ''},
    }

    handleInput = (e) =>{
        let s = {...this.state};
        s.phoneNum[e.currentTarget.name]= e.currentTarget.value;
        this.setState(s)
    }
    render() {
        const {phoneNum} = this.state;
        const { phone} = phoneNum;
        const {handlePhone,handleRegister,handleLoginHere,changeCom} = this.props;
        return(
            <div className="register">
                <div className="main">
                    <div className="regis_header">
                        <span className="handyman">handyman</span><br/>
                        <span className="handy_span">Services, anytime, anywhere</span>
                    </div>
                    <div className="register_para">
                        <p className="register_here">Register here</p>
                        <div className="user_phone">
                            <span className="country_code">+91</span>
                            <input type="number"
                            name="phone" 
                            value ={ changeCom=== 0 ? phone : phone}
                            placeholder="phone number"
                            onChange={this.handleInput}
                            required
                            />
                        </div>
                    </div>
                    {
                    changeCom === 0 ?  
                    <React.Fragment>
                        <div className="verification">
                            <button className="btn_dark" 
                            onClick={() =>handlePhone()}>Get verification code</button>
                        </div>
                        <p className="have_account">Already have an account? 
                            <button className="user_login"
                            onClick={() =>handleLoginHere()}>Login here</button>
                        </p>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                        <div className="mobile_otp">
                            <div className="otp1">
                                <input type="number" 
                                name = "number1"
                                value="5"
                                />
                            </div>
                            <div className="otp2">
                                <input type="number" 
                                name = "number2"
                                value="6"
                                />
                            </div>
                            <div className="otp3">
                                <input type="number" 
                                name = "number3"
                                value="8"
                                />
                            </div>
                            <div className="otp4">
                                <input type="number" 
                                name = "number4"
                                value="7"
                                />
                            </div>
                        </div>
                        <div className="verified_otp">
                            <p>Verified!</p>
                        </div>
                    </React.Fragment>    
                    }
                    <div className="continue">
                        <button className="btn_primary"
                        onClick={() =>handleRegister()}>Continue</button>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}
export default Register;