import React, { useState} from 'react'
import '../../Style/commonStyle.css';
import './serviceProvider.css';
import { FaArrowLeft, FaBookmark, FaTimesCircle,FaPhoneAlt, FaCommentAlt, FaStar } from 'react-icons/fa';


const ServiceProvider = (props) => {
    const { goToServiceProvider,sendRequest} = props
    const [aval, setAval] = useState(0);
    const handleAvailable = () =>{
        setAval(1);
    }
    const hideAvalItems = () =>{
        setAval(0);
    }

    return (
        <div className='header'>
            <div className='main_provider'>
                <div className='top_icons'>
                    <span className='faArrowLefts'
                    onClick={() =>goToServiceProvider()}><FaArrowLeft /></span>
                    <span className='faBookmark'>
                        <img src={require('../../images/bookmark.png')} />
                    </span>
                </div>
                <div className='provider_details'>
                    <div className="provider_name">Ram Lal Sabzivala</div>
                    <div className="available">
                        <div className="aval_status">Availability</div>
                        <div className="aval_time">
                            <span>8am-12am</span>
                            <span>12pm-4pm</span>
                            <span>4pm-8pm</span>
                        </div>
                    </div>
                    <div className="rating">
                        <FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <div className="provider_contact">
                        <div className="call">
                            <span>Call Now
                                <img className='call_img' src={require('../../images/call.png')} />
                            </span>
                        </div>
                        <div className="chat">
                            <span>Chat
                                <img className='chat_img' src={require('../../images/chat.png')} />
                            </span>
                        </div>
                    </div>
                    <div className='btns'>
                        <button className="aval_btn"
                        onClick={handleAvailable}>
                            Available items
                        </button>
                    </div>
                </div>
            </div>
            <div className='addres_div'>
                <div className='add_para'>
                    <span>Address</span>
                    <span className='auto_para'>Auto Detect 
                        <img src={require('../../images/location.png')} />
                    </span>
                </div>
                <div className='input_div'>
                    <input
                        type='text'
                        name='house'
                        value=''
                        placeholder='House/Flat'
                    />
                </div>
                <div className='input_div'>
                    <input
                        type='text'
                        name='road'
                        value=''
                        placeholder='Road Name/Area/Colony'
                    />
                </div>
                <div className='input_div text_area'>
                    <input
                        type='text'
                        name='road'
                        value=''
                        placeholder='Write a message...'
                    />
                </div>
                <div className='req_btns'>
                    <button className='send_req'
                    onClick={() =>sendRequest()}>
                        Send Request
                    </button>
                </div>
            </div>
            {aval!== 0 ? 
            <div className='all_items'>
                <div className='faTimesCircle'>
                    <span onClick={hideAvalItems}><FaTimesCircle /></span>
                </div>
                <div className='available_items'>
                    <div className='frist_div'>
                        <span className='items_div'>Items</span>
                        <span className='price'>Price</span>
                    </div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='mid_div'></div>
                    <div className='last_div'></div>
                </div>

            </div>
            : 
            ''}
        </div>
    )
}
export default ServiceProvider
