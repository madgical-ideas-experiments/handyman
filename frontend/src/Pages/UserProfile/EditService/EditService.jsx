import React from 'react';
import AllItems from '../../Service/ServiceDetails/AllItems';
import './editService.css';
const EditService = () => {
    const itemsArr = [
        {itemsName:'+'},{ itemsName:'+'},
        {itemsName:'+'},{itemsName:'+'},
        {itemsName:'+'},{itemsName:'+'},
        {itemsName:'+'},{itemsName:'+'},
    ];

    const handleChange = () => {

    };

    return (
        <div className='edit_Service-block'>
            <div className='forms_element'>
                <div className="forms_element_inputs">
                    <input type="text"
                        name="providername"
                        value='RamLal Sabziwalal'
                        placeholder="Service provider name"
                        onChange={handleChange}
                    />
                </div>
                <div className="forms_element_inputs">
                    <input type="text"
                        name="number"
                        value='+91 1234567890'
                        placeholder="Enter your mobile number"
                        onChange={handleChange}
                    />
                </div>
                <div className="user_location">
                    <span>Locations Available in</span>
                    <span className="add_location">+</span>
                </div>
            </div>
            <p className='addService_block-title'>Add Images</p>
                <div className="addService_block-images">
                    <span className='img_items'>
                        <img src={require('../../../assets/images/img2.png')} />
                    </span>
                    <div className="add_images">
                       <span>+</span>
                    </div>
                    <div className="add_images">
                        <span>+</span>
                    </div>
                </div>
                <p className="available_item-title">Add available items</p>
                
                <AllItems items={itemsArr}/>

                <div className='continue_btn addService_btn'>
                    <button className='btn_primary'>Save</button>
                </div>
        </div>
    )
}

export default EditService
