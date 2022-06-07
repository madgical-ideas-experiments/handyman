import React from 'react'
import {FaCommentAlt, FaPhoneAlt } from 'react-icons/fa';
import './service.css'
const Services = (props) => {


  const {serviceList,handleServiceList,index} = props
  const {img,selName,distance,status,rating,items} = serviceList

  return (
    <div className="service">
      <button className="service_btn"
      onClick={() =>handleServiceList(index)}>
        <div className="service_details">
          <div className="service_list">
            <div className="provider_name">{selName}</div>
            <br />
            <div className="distance">
              {distance}
              {status === 'open' ?
                <span className="status text-black">({status})</span>
                :
                <span className="status text-danger">({status})</span>
              }
              
            </div><br />
            <div className="ratings">{rating}</div>
            <br/>
            <div className="contact">
              <span className='faPhone'><FaPhoneAlt /></span>
              <span className="comment">
                <FaCommentAlt />
              </span>

            </div><br />
            <div className="items">
              {items.map((num) => (
                <span>{num}</span>
              ))}
             
            </div>
          </div>
          <div className="images">
            <div className="imgs">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </button>
    </div>

  )
}

export default Services;
