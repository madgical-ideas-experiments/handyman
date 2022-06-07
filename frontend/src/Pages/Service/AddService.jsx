import React from 'react'
import '../../Style/ComStyle/comanCss.css';
import "./addService.css";
import { FaArrowLeft } from 'react-icons/fa';

const AddService = (props) => {

    const { backToCreateService } = props;

    return (
        <div className='service_header'>
            <div className='service_main'>
                <span className="faArrowLeft_addService"
                    onClick={() => backToCreateService()}>
                    <FaArrowLeft />
                </span>

                <div className="add_service_input">
                    <input type="text"
                        name="serviceName"
                        value=''
                        placeholder="Add name to your service"
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

export default AddService
