import React, { useState } from 'react'
import '../../Style/commonStyle.css';
import './createService.css';

const CreateServices = (props) => {

    const [state, setstate] = useState(0);

    const handleLocation = () => {
        setstate(1);
    }
    const minimisLocation = () => {
        setstate(0);
    }

    const { handleAddService } = props;
    return (
        <div className='service_header'>
            <div className='service_main'>

                <div className="add_service_input">
                    <input type="text"
                        name="username"
                        value=""
                        placeholder="Service provider name"

                    />
                </div>
                <div className="add_service_input">
                    <input type="number"
                        name="mobileNumber"
                        value=""
                        placeholder="Enter your mobile number"

                    />
                </div>
                <div className="user_location">
                    <input type="text"
                        name="userLocation"
                        value=""
                        placeholder="Locations Available in"
                    />
                    <span className="add_location"
                        onClick={() => handleLocation()}>+</span>
                </div>
                {state === 0 ?

                    <div className="add_btn">
                        Add multiple locations by clicking '+'
                    </div>
                    :
                    <React.Fragment>
                        <div className="address">
                            <div className="socity_div">
                                <span className="socity">ABC Socity</span>
                                <span className="minimise_address"
                                    onClick={() => minimisLocation()}>-</span>
                                <div className="time_zone">
                                    <span className="morning_time">8am-12pm</span>
                                    <span className="time_slot">12pm-4pm</span>
                                    <span className="time_slot">4pm-8pm</span>
                                </div>
                            </div>

                            <div className="location_div">
                                <span className="avail_location">Add Location</span>

                                <img src={require('../../images/location.png')} />

                                <div className="second_time_zone">
                                    <span className="second_time_slot">8am-12pm</span>
                                    <span className="time_slot">12pm-4pm</span>
                                    <span className="time_slot">4pm-8pm</span>
                                </div>
                            </div>
                        </div>

                    </React.Fragment>
                }

                <div className="choose_category">
                    Choose your service from the available categories
                </div>
                <div className="service_category">
                    <div className="repair_div">
                        <img src={require('../../images/repairSer.png')}
                            alt="repair" />
                        <p>Repair service</p>
                    </div>

                    <div className="veg_div">
                        <img src={require('../../images/vegSer.png')} alt="repair" />
                        <p>Vegitables Seller</p>
                    </div>

                    <div className="water_div">
                        <img src={require('../../images/waterSer.png')} alt="repair" />
                        <p>RO Water Supply</p>
                    </div>
                    <div className="gassStove_div">
                        <img src={require('../../images/gassSer.png')} alt="repair" />
                        <p>Gass Stove Repair</p>
                    </div>
                    <div className="second_last_div">
                        <img src={require('../../images/acSer.jpg')} alt="repair" />
                        <p>AC Repair</p>
                    </div>
                    <div className="last_div">
                        <img src={require('../../images/repairSer.png')} alt="repair" />
                        <p>Repair service</p>
                    </div>
                </div>
                <div className='provider_btns'>
                    <button
                        onClick={() => handleAddService()}>
                        Continue</button>
                </div>
            </div>
        </div>
    )
}

export default CreateServices
