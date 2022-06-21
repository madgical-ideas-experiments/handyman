import React from "react";
import'./getOtp.css'
import '../common.css';

const GetOtp = (props) => {
  const { gotoCreateUser } = props;
  return (
    <div className="main_card">
      
      <div className="card">
        <div className='logo'>
          <img src={require('../../../images/logo.png')} alt='logo' />
        </div>
        <div className="handyman">
          <div className="handyman_title">handyman</div>
          <div className="description-text">Services, anytime, anywhere</div>
        </div>

        <div className="items">
          <label className="title">Register here</label>
          <div className="get_Mobile_input">
            <span>+91</span>
            <input
              type="text"
              name="phone"
              value=""
              placeholder="12345678"
            />
          </div>

          <div className="get_otp">
            <div className="otp_text">
              <input type="text" name="otp" value="" placeholder="4"/>
            </div>
            <div className="otp_text">
              <input type="text" name="otp" value="" placeholder="7"/>
            </div>
            <div className="otp_text">
              <input type="text" name="otp" value="" placeholder="9"/>
            </div>
            <div className="otp_text">
              <input type="text" name="otp" value="" placeholder="0"/>
            </div>
          </div>
          <div className="verified">
            <p>Verified!</p>
          </div>
        </div>

        <div className="continue_btn">
          <button className="btn_primary" onClick={() => gotoCreateUser()}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetOtp;
