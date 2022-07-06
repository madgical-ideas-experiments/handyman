import React from 'react';
import Order from './Order';
import './myOrder.css';


const MyOrder = (props) => {

    const { backToProfile, allOrders } = props;
    return (
        <div className='container_div'>
            <div className='heading_block-ele'>
                <img className='backErrow_img'
                    src={require('../../../assets/images/backErrow.png')} alt='back-Errow'
                    onClick={() => backToProfile()}
                />
                <span className="block-ele-title font-awesome">Orders</span>
            </div>
            
            <div className='order_block'>
                
                {
                    allOrders.map((e) =>
                        <Order
                        allOrders={e}
                        />
                    )
                }
                <div className='more-element font-awesome'>
                No more orders to display
                </div>
            </div>

        </div>
    )
}

export default MyOrder
