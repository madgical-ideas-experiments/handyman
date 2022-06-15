import React from 'react'
import '../../Style/commonStyle.css';
import './order.css';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Order = (props) => {

    const { goToservicepage } = props;

    return (
        <div className='service_header'>
            <div className='errow_title'>
                <span className='backErrow'
                    onClick={() => goToservicepage()}>
                    <img src={require('../../images/backErrow.png')} alt="" />
                </span>
                <span className='order_para'>Order</span>
            </div>
            <div className='orders_div'>
                <div className='user_status'>
                    <div className='names'>Ram Lal Sabzivala</div>
                    <div className='staus'>In Progress</div>
                </div>
                <div className='locations'>
                    <span className='map_icons'><FaMapMarkerAlt /></span>
                    <span className='address_para'>
                        Dilevering at 123, Abc Society, Delhi
                    </span>
                </div>
                <div className='notice'>Note: please call me at my number when you are here. I will be available till 8pm.</div>

                <button className='cancel_btn'>
                    Cancel
                </button>

            </div>
            <div className='no_more'>
                No more orders to display
            </div>
        </div>
    )
}

export default Order;
