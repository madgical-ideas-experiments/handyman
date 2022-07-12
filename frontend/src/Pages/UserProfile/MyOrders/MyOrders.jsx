import React from 'react';
import Order from '../../../Components/Order/Order';
import './myOrders.css';


const MyOrders = (props) => {

    const { backToProfile, users } = props;
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
                    users.map((e) =>
                        <Order
                        element={e}
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

export default MyOrders
