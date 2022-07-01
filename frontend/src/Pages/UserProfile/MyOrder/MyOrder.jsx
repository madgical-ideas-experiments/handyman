import React from 'react'
// import '../../../Style/commonStyle.css';
import { FaArrowLeft, FaCheck, FaStar } from 'react-icons/fa';
import './myOrder.css';


const MyOrder = (props) => {
    const { backToProfile, allOrders } = props;
    console.log(allOrders)
    return (
        <div className='container_div'>
            <div className='order_block'>
                <img className='backErrow_img'
                    src={require('../../../assets/images/backErrow.png')} alt='back-Errow'
                    onClick={() => backToProfile()} />
                <span className="order_block-title style_inter">Orders</span>
            </div>

            {
                allOrders.map((e) =>
                    <div className='order_block-element'>
                        <div className='element-name-date'>
                            <span className='element-name style_inter'>{e.names}</span>
                            <span className='element-date style_inter'>{e.date}</span>
                        </div>
                        <div className='element-status style_inter'>
                            {
                                e.ordStatus === 'In progress' ?
                                    <span className='status-progress'>{e.ordStatus}</span>
                                    :
                                    e.ordStatus === 'Canceled' ?
                                        <span className='status-canceled'>{e.ordStatus}</span>
                                        :
                                        <span className='status-delivered'>{e.ordStatus}</span>
                            }
                            {e.ordStatus === 'Delivered' ? <img src={require('../../../assets/images/checked.png')} alt='' /> : ''}
                        </div>
                        <div className='ele-deliver-add style_inter'>
                            <img src={require('../../../assets/images/carbon_location.png')} />
                            <span>{e.devAddres}</span>
                        </div>
                        <div className=' ele-reminder style_inter'>{e.reminder}</div>
                        <div className='button-type style_inter'>
                            {e.ordStatus === 'In progress' ?
                                <>
                                    <button className='btn_accept style_inter'>Accept</button>
                                    <button className='btn_cancel style_inter'>Cancel</button>
                                </>
                                : e.ordStatus === 'Delivered' ?
                                    <div className='ele_ratting'>
                                        <span>Service Rating</span>
                                        <span className='srvice_ratting'><FaStar /> <FaStar /> <FaStar /></span>
                                    </div>
                                    : ''

                            }
                        </div>
                    </div>
                )
            }


        </div>
    )
}

export default MyOrder
