import React, { Component } from 'react';
import './editService.css';
import {FaPen} from 'react-icons/fa';
class EditServiceCom extends Component {
    render() {
        return(
            <div className="edit_main">
                <div className="edit_child">
                    <div className="service_provider_name">
                        <input type="text"
                        name="name"
                        value="Ram Lal Sabziwala"
                        onChange={this.handleInputs} 
                        />
                        <span className="edit_icons">
                            <FaPen />
                        </span>
                    </div>
                    <div className="service_pro_contact">
                        <span className="country_code">+91</span>
                        <input type="text"
                        name="number"
                        value="1234567"
                        onChange={this.handleContacts}
                        />
                        <span className="edit_icons">
                            <FaPen />
                        </span>
                    </div>
                    <div className="available_location">
                        <span className="available_para">Location Available in</span>
                        <span className="pluse_icons">+</span>
                    </div>
                    <div className="edit_locations">
                        <div className="edit_address">
                            <span className="add_para">Abc Society</span>
                            <span className="edit_minus">-</span>
                            <div className="edit_time">
                                <span className="edit_time_div">8am-12am</span>
                                <span className="edit_time_slot">12am-4pm</span>
                                <span className="edit_time_last">4pm-8pm</span>
                            </div>
                        </div>
                        <div className="edit_second_div">
                            <span className="add_para">Abc Society</span>
                            <span className="edit_minus">-</span>
                            <div className="second_time_div">
                                <span className="sec_time_slot">8am-12am</span>
                                <span className="sec_time">12am-4pm</span>
                                <span className="sec_time_last">4pm-8pm</span>
                            </div>
                        </div>
                    </div>

                    <div className="add_service_img">
                        <span className='add_img_para'>Add Images</span>
                        <div className="all_srv_img">
                            <div className="add_sr_imgs">
                                <img src={require('../images/img4.png')}/>
                            </div>
                            <div className="add_sr_img">+</div>
                            <div className="add_sr_img">+</div>
                        </div>
                    </div>
                    <div className="check_serv_items">
                        <span className="available_paras">Add available items</span>
                        <div className="service_items_price">
                            <div className="setvice_items_table">
                                <span className="service_items">Items</span>
                                <span className="service_price">Price</span>
                            </div>
                            <div className="service_table">
                                <span>+</span>
                            </div>
                            <div className="service_table">
                                <span>+</span>
                            </div>
                            <div className="service_table">
                                <span>+</span>
                            </div>
                            <div className="service_table">
                                <span>+</span>
                            </div>
                            <div className="service_table">
                                <span>+</span>
                            </div>
                            <div className="service_table">
                                <span>+</span>
                            </div>
                            <div className="service_table">
                                <span>+</span>
                            </div>
                            <div className="service_table_last">
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                    <div className="service_btns">
                        <button className="save_btns">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default EditServiceCom;