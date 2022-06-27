import React from 'react'
import './addService.css';
const AllItems = (props) => {

    const {items} = props;
    return (
        <div className="check_available_items">
            <table>
                <tr>
                    <th className='table-items'>Items</th>
                    <th className='items_price'>Price</th>
                </tr>
                {items.map((num)=>
                    <tr>
                        <td>{num.itemsName}</td>
                    </tr>
                )}

            </table>
        </div>
    )
}

export default AllItems
