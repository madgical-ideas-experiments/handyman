import React, {Component} from "react";
import "./serviceProvider.css";
import {FaCommentAlt, FaPhoneAlt,FaCrosshairs } from 'react-icons/fa';
class ServiceProvider extends Component{
    render() {


        const {currProvider} = this.props
        return(
            <React.Fragment>
                <div className="provider_main">
                    <div className="provider_child">
                        <div className="provider_status">
                            <div className="sel_name">{currProvider.selName}</div>
                            <div className="available">
                                <div className="aval_status"><span>Availability</span></div>
                                <div className="aval_time">
                                    <span>8am-12am</span>
                                    <span>12pm-4pm</span>
                                    <span>4pm-8pm</span>
                                </div>
                            </div>
                            <div><span className="provider_rating">{currProvider.rating}</span></div>
                            <div className="provider_contact">
                                <div className="call">
                                    <span>Call Now
                                        <span className="icons"> 
                                            <FaPhoneAlt />
                                        </span>
                                    </span>
                                </div>
                                <div className="chat">
                                    <span>Chat
                                    <span className="icons"><FaCommentAlt /></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="provider_center">
                        <button className="btn btn-primary">
                            Available items
                        </button>
                        <div className="provider_loctions">
                            <div className="find_provider">
                                <span className="address">Address</span>
                                <span className="detect">Auto Detect<span className="crosshairs"><FaCrosshairs/></span></span>
                            </div>
                            <div className="house_details">
                                <input type="text"
                                name="houseNo" 
                                value=""
                                placeholder="House/Flat"
                                />
                            </div>
                            <div className="house_details">
                                <input type="text"
                                name="streat" 
                                value=""
                                placeholder="Road Name/Area/Colony"
                                />
                            </div>
                            <div className="more_details">
                                <input type="text"
                                name="streat" 
                                value=""
                                placeholder="write a message..."
                                />
                            </div>
                            <button className="btn_request">Send Request</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ServiceProvider;