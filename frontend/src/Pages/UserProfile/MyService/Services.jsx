import React from 'react'
import './myService.css';

const Services = (props) => {
    const { allService,handleEdit,Ind } = props;
    const { names, img } = allService;
    return (
        <div className='myService_block-ele flex flex-row'>
            <div className='flex flex-col'>
                <div className="user_service_detail flex flex-col">
                    <span className="user_names font-awesome">{names}</span>
                    
                    
                    <span className='switch switch-btn'>
                        <input type="checkbox"  />
                        <span className="slider"></span>
                    </span>


                </div>
                <div className="button service_btn">
                    <button className="btn_primary btn_edit"
                    onClick={() =>handleEdit(Ind)}
                    >Edit</button>
                    <button className="btn_danger btn_delete">Delete</button>
                </div>
            </div>

            <div className="service_ele-imgs">
                <img src={img}
                alt="images" />
            </div>
        </div>
    )
}

export default Services
