import React from 'react'
import './createService.css';


const ServiceCategory = (props) => {

    const { servicesCat } = props;
    return (
        <div className="service_category">
            {servicesCat.map((num)=>
            <div className="service_category_img">
                <img src={num.img}
                     alt="repair" />
                <label>{num.title}</label>
            </div> 
            )}    
        </div>
    )
}

export default ServiceCategory
