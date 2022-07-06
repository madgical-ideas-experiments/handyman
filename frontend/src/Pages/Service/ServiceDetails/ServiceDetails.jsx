import React, { useState } from 'react';
import "./serviceDetails.css";
import AllItems from './AllItems';

const ServiceDetails = (props) => {

    const { backToCreateService, handleAddService } = props;
    const itemsArr = [
        { itemsName: '+' }, { itemsName: '+' },
        { itemsName: '+' }, { itemsName: '+' },
        { itemsName: '+' }, { itemsName: '+' },
        { itemsName: '+' }, { itemsName: '+' },
    ]

    const [serviceName, setserviceName] = useState({
        serviceNames: ''
    });

    const handleServiceChange = (e) => {
        const name = e.target.value;
        setserviceName(name);
        ;
    }

    return (
        <div className='container_div'>
            <img className='backErrow_img' src={require('../../../assets/images/backErrow.png')}
                onClick={() => backToCreateService()} />

            <div className='addService_block'>
                <div className="add_service_input">
                    <input type="text"
                        name="serviceNames"
                        placeholder="Add name to your service"
                        value={serviceName.serviceNames}
                        onChange={handleServiceChange}
                    />
                </div>

                <p className='addService_block-title'>Add Images</p>
                
                <div className="addService_block-images">
                    <div className="add_images">
                        <span>+</span>
                    </div>
                    <div className="add_images">
                        <span>+</span>
                    </div>
                    <div className="add_images">
                        <span>+</span>
                    </div>
                </div>
                <p className="available_item-title">Add available items</p>

                <AllItems items={itemsArr} />

                <div className='continue_btn addService_btn'>
                    <button className='btn_primary'
                        onClick={() => handleAddService()}>
                        Continue</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails
