import React, {Component} from "react";
import "./serviceDetails.css";
import {FaArrowLeft} from 'react-icons/fa';
class ServieDetails extends Component {
    
    render() {
        const {handleServiceDetails} = this.props;

        return(
            <div className="servieDetails_main">
                <div className="servieDetails_child">
                    <span className="faArrowLeft" 
                    onClick={() =>handleServiceDetails()}><FaArrowLeft/></span>
                
                    <div className="add_service_input">
                        <input type="text"
                        name="serviceName"
                        placeholder="Add name to your service"
                        onChange={this.handleServiceName}
                        />
                    </div>
                    <div className="add_service_img">
                        <span>Add Images</span>
                        <div className="all_images">
                            <div className="add_images">+</div>
                            <div className="add_images">+</div>
                            <div className="add_images">+</div>
                        </div>
                    </div>
                    <div className="check_available_items">
                        <span className="available_item">Add available items</span>
                        <div className="items_price">
                            <div className="item_table">
                                <span className="show_items">Items</span>
                                <span className="show_price">Price</span>
                            </div>
                            <div className="table_data">
                                <span>+</span>
                            </div>
                            <div className="table_data">
                                <span>+</span>
                            </div>
                            <div className="table_data">
                                <span>+</span>
                            </div>
                            <div className="table_data">
                                <span>+</span>
                            </div>
                            <div className="table_data">
                                <span>+</span>
                            </div>
                            <div className="table_data">
                                <span>+</span>
                            </div>
                            <div className="table_data">
                                <span>+</span>
                            </div>
                            <div className="table_data_last">
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ServieDetails;