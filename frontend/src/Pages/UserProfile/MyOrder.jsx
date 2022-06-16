import React from 'react'
import '../../Style/commonStyle.css';
import { FaArrowLeft, FaCheck, FaStar } from 'react-icons/fa';
import './myOrder.css';


const MyOrder = (props) => {
    const { backToProfile } = props;
    return (
        <div className='service_header'>
            <div className='myOrder_myService'>
                <span className="faArrowLeft"
                    onClick={() => backToProfile()}><FaArrowLeft /></span>
                <span className="order_para">Orders</span>

                <div className="all_orders">
                    <div className="users_order_details">
                        <span className="users_name">Sweta</span>
                        <div className="booking_date">
                            <span className="new_para">New Order</span>
                            <span className="booked_time">Friday, 22 April</span>
                        </div>
                    </div>
                    <div className="deliver_address">
                        <span className="home_address">Deliver at House No. 123, ABC colony, Delhi</span>
                        <p className="note_book">Note-Please call me when you are here</p>
                    </div>
                    <div className="order_btns">
                        <span className="accept_btn">Accept</span>
                        <span className="cancel_btn">Cancel</span>
                    </div>
                </div>
                <div className="all_orders">
                    <div className="users_order_details">
                        <span className="users_name">Neeraj</span>
                        <div className="booking_date">
                            <span className="para_Inprogress">In Progress</span>
                            <span className="booked_time">Friday, 22 April</span>
                        </div>
                    </div>
                    <div className="deliver_address">
                        <span className="home_address">Deliver at House No. 123, ABC colony, Delhi</span>
                        <p className="note_book">Note-Please call me when you are here</p>
                    </div>
                    <div className="order_btns">
                        <span className="cancel_btns">Cancel</span>
                    </div>
                </div>
                <div className="all_orders">
                    <div className="users_order_details">
                        <span className="users_name">Priya</span>
                        <div className="booking_date">
                            <span className="para_Deliver">Delivered
                                <span className="deliver_icons">
                                    <FaCheck />
                                </span>
                            </span>
                            <span className="booked_time">Friday, 22 April</span>
                        </div>
                    </div>
                    <div className="deliver_address">
                        <span className="home_address">Deliver at House No. 123, ABC colony, Delhi</span>
                        <p className="note_book">Note-Please call me when you are here</p>
                    </div>
                    <div className="user_rating">
                        <span className="service_rating">Service rating</span>
                        <span className="rating_icons">
                            <FaStar /><FaStar /><FaStar />
                        </span>
                    </div>
                </div>
                <span className="no_more_para">No more orders to display</span>
            </div>
        </div>
    )
}

export default MyOrder
