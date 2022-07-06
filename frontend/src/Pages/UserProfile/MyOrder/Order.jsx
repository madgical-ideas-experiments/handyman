import React from 'react';
import './myOrder.css';
import { FaStar } from 'react-icons/fa';


const Order = (props) => {
    const {allOrders} = props;
    const {names,date,ordStatus,devAddres,reminder} = allOrders;
    
    return (
        <div className='order_block-element'>
            <div className='element-name-date'>
                <span className='element-name font-awesome'>{names}</span>
                <span className='element-date font-awesome'>{date}</span>
            </div>
            <div className='element-status font-awesome'>
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
            <div className='ele-deliver-add font-awesome'>
                <img src={require('../../../assets/images/carbon_location.png')} />
                <span>{devAddres}</span>
            </div>
            <div className=' ele-reminder font-awesome'>{reminder}</div>
            <div className='button order-btns font-awesome'>
                {
                    ordStatus === 'In progress' ?
                    <>
                        <button className=' btn_primary btn_accept font-awesome'>Accept</button>
                        <button className=' btn_danger btn_cancel font-awesome'>Cancel</button>
                    </>
                    : ordStatus === 'Delivered' ?
                        <div className='ele_ratting font-awesome'>
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
