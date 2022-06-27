import React, { useState } from 'react';
import './createService.css';
const CreateServices = (props) => {

    const [state, setstate] = useState(0);
    const [data, setData] = useState({
        providername: "",
        number: ""
    });

    const handleChange = (e) => {
        const values = e.target.value;
        let inputvalue = "";
        for (let i = 0; i < inputvalue.length; i++) {
            inputvalue += values[i].name;
        }
        setData(inputvalue);
    }

    const handleLocation = () => {
        setstate(1);
    }

    const { handleAddService } = props;
    return (
        <div className='container_div'>
            <div className='create_service_container'>
                <div className='forms_element'>
                    <div className="forms_element_inputs">
                        <input type="text"
                            name="providername"
                            value={data.providername}
                            placeholder="Service provider name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="forms_element_inputs">
                        <input type="text"
                            name="number"
                            value={data.number}
                            placeholder="Enter your mobile number"

                        />
                    </div>
                    <div className="user_location">
                        <span>Locations Available in</span>
                        <span className="add_location"
                            onClick={() => handleLocation()}>+</span>
                    </div>
                    <p className='add_mul_locations'>Add multiple locations by clicking '+'</p>
                </div>
                <div className='available_categories'>
                    <p> Choose your service from the available categories</p>
                    <div className="service_category">
                        <div className="service_category_img">
                            <img src={require('../../../assets/images/repairSer.png')}
                                alt="repair" />
                            <label>Repair Service</label>
                        </div>

                        <div className="service_category_img">
                            <img src={require('../../../assets/images/vegSer.png')} alt="repair" />
                            <label>Vegetable Seller</label>
                        </div>

                        <div className="service_category_img">
                            <img src={require('../../../assets/images/waterSer.png')} alt="repair" />
                            <label>RO Water Supply</label>
                        </div>
                        <div className="service_category_img">
                            <img src={require('../../../assets/images/gassSer.png')} alt="repair" />
                            <label>Gass Stove Repair</label>
                        </div>
                    </div>
                </div>
                <div className='continue_btn service_btns'>
                    <button className='btn_primary'
                        onClick={() => handleAddService()}>
                        Continue</button>
                </div>
            </div>
        </div>
    )
}

export default CreateServices
