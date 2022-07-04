import React, { useState } from "react";
import'./getOtp.css'
import '../common.css';

const GetOtp = (props) => {
  
  const { gotoCreateUser } = props;
  const [phone, setPhone] = useState({
    regNumber : ""
  });


  const [getOtp, setOtp] = useState({
    otp1 : '',
    otp2 : '',
    otp3 : '',
    otp4 : ''
  })
  
  const handleMobileNumber = (e) =>{
    setPhone({regNumber: e.target.value})
  }

  const handlGetOtp = (e) =>{
    const getOpt = e.target.value;
    let otps = '';
    for( let i=0; i < getOpt.length; i++)
    {
      otps += getOpt[i].name;
    }
    setOtp(otps);
  }

  return (
    <div className="main_container">
      <div className="card">
        <div className='logo'>
          <img src={require('../../../assets/images/logo.png')} alt='logo' />
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
              placeholder="12345678"
              value={phone.regNumber}
              onChange={handleMobileNumber}
            />
          </div>

          <div className="get_otp">
            <div className="otp_text">
              <input type="text" 
              name="otp1"
              placeholder="4" 
              value={getOtp.otp1} 
              onChange={handlGetOtp}
              />
            </div>
            <div className="otp_text">
              <input type="text" 
              name="otp2"
              placeholder="7" 
              value={getOtp.otp2} 
              onChange={handlGetOtp}
              />
            </div>
            <div className="otp_text">
              <input type="text" 
              name="otp3" 
              placeholder="9"
              value={getOtp.otp3} 
              onChange={handlGetOtp}
              />
            </div>
            <div className="otp_text">
              <input type="text" 
              name="otp3" 
              placeholder="0"
              value={getOtp.otp4} 
              onChange={handlGetOtp}
              />
            </div>
          </div>
          <div className="verified">
            <p>Verified!</p>
          </div>
        </div>

        <div className="button">
          <button className="btn_primary" onClick={() => gotoCreateUser()}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetOtp;
