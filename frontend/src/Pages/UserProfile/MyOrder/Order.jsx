import React from 'react';
import './myOrder.css';
import { FaStar } from 'react-icons/fa';


const Order = (props) => {
    const {allOrders} = props;
    const {names,date,ordStatus,devAddres,reminder} = allOrders;
    
    return (
        <div className='order_block-element'>
            <div className='element-name-date'>
                <span className='element-name style_inter'>{names}</span>
                <span className='element-date style_inter'>{date}</span>
            </div>
            <div className='element-status style_inter'>
                {
                    ordStatus === 'In progress' ?
                        <span className='status-progress'>{ordStatus}</span>
                        :
                        ordStatus === 'Canceled' ?
                            <span className='status-canceled'>{ordStatus}</span>
                            :
                            <span className='status-delivered'>{ordStatus}</span>
                }
                {ordStatus === 'Delivered' ? <img src={require('../../../assets/images/checked.png')} alt='' /> : ''}
            </div>
            <div className='ele-deliver-add style_inter'>
                <img src={require('../../../assets/images/carbon_location.png')} />
                <span>{devAddres}</span>
            </div>
            <div className=' ele-reminder style_inter'>{reminder}</div>
            <div className='button-type style_inter'>
                {
                    ordStatus === 'In progress' ?
                    <>
                        <button className='btn_accept style_inter'>Accept</button>
                        <button className=' btn_danger btn_cancel style_inter'>Cancel</button>
                    </>
                    : ordStatus === 'Delivered' ?
                        <div className='ele_ratting'>
                            <span>Service Rating</span>
                            <span className='service_ratting'>
                                <img src={require('../../../assets/images/star.png')} />
                                <img src={require('../../../assets/images/star.png')} />
                                <img src={require('../../../assets/images/star.png')} />
                            </span>
                        </div>
                        : ''
                }
            </div>
        </div>
    )
}

export default Order;
