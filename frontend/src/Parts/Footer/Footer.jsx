import React from 'react'
import './footer.css';


const Footer = () => {
    return (
        <div className='footer-block'>
            <div className='footer-element'>
                <div className='menu-icon'>
                    <img src={require('../../assets/images/menuIcon.png')} alt="menu" />
                </div>
                <div className='home-icon'>
                    <img src={require('../../assets/images/homeIcon.png')} alt="home" />
                </div>
                <div className='chat-icon'>
                    <img src={require('../../assets/images/chatIcon.png')} alt="chat" />
                </div>
            </div>
        </div>
    )
}

export default Footer;
