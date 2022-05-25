import React, {Component} from "react";
import "./createService.css";
import {FaCrosshairs,FaPlusSquare } from 'react-icons/fa';

class CreateService extends Component{

    state = {
        findLocation : 0,
    }
    render() {
        const {handleLocation,findLocation,minimisLocation,handleAddService} = this.props;
        return(
            <div className="service_main">
                <div className="service_child">
                    <div className="provider_name">
                        <input type="text"
                        name="username"
                        value=""
                        placeholder="Service provider name"
                        onChange={this.handleCreateService}
                        />
                    </div>
                    <div className="user_mobile">
                        <input type="number"
                        name="mobileNumber"
                        value=""
                        placeholder="Enter your mobile number"
                        onChange={this.handleCreateService}
                        />
                    </div>
                    <div className="user_location">
                        <input type="text"
                        name="userLocation"
                        value=""
                        placeholder="Locations Available in" 
                        />
                        <span className="add_location"
                        onClick={() =>handleLocation()}>+</span>
                    </div>
                    {findLocation === 0 ?
                    
                    <div className="add_btn">
                        Add multiple locations by +
                    </div>
                    :
                    <React.Fragment>
                        <div className="address">
                            <div className="socity_div">
                                <span className="socity">ABC Socity</span>
                                <span className="minimise_address"
                                onClick={() =>minimisLocation()}>-</span>
                                <div className="time_zone">
                                    <span className="morning_time">8am-12pm</span>
                                    <span className="time_slot">12pm-4pm</span>
                                    <span className="time_slot">4pm-8pm</span>
                                </div>
                            </div>

                                <div className="location_div">
                                    <span className="avail_location">Add Location</span>
                                    <span className="find_Locations"> <FaCrosshairs /></span>
                                    <div className="second_time_zone">
                                        <span className="second_time_slot">8am-12pm</span>
                                        <span className="time_slot">12pm-4pm</span>
                                        <span className="time_slot">4pm-8pm</span>
                                    </div>
                                </div>
                        </div>
                        
                    </React.Fragment>
                    }
                    <div className="add_service">
                        <span>Add New Service </span>
                        <span className="add_more_service"
                        onClick={() =>handleAddService()}><FaPlusSquare/></span>
                    </div>
                    <div className="choose_category">
                        Choose your service from the available categories
                    </div>
                    <div className="service_category">
                        <div className="repair_div">
                            <img src={require('../images/repairSer.png')} alt="repair" /><br/>
                            <p>Repair service</p>
                        </div>

                        <div className="veg_div">
                            <img src={require('../images/vegSer.png')} alt="repair" />
                            <p>Vegitables Seller</p>
                        </div>

                        <div className="water_div">
                            <img src={require('../images/waterSer.png')} alt="repair" />
                            <p>RO Water Supply</p>
                        </div>
                        <div className="gassStove_div">
                            <img src={require('../images/gassSer.png')} alt="repair" />
                            <p>Gass Stove Repair</p>
                        </div>
                        <div className="second_last_div">
                            <img src={require('../images/acSer.jpg')} alt="repair" />
                            <p>AC Repair</p>
                        </div>
                        <div className="last_div">
                            <img src={require('../images/repairSer.png')} alt="repair" />
                            <p>Repair service</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateService;