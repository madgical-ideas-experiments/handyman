import React from "react";
import "./createService.css";

const ServiceCategory = (props) => {
  const { servicesCat } = props;
  let scroller1 = [];
  let scroller2 = [];
  servicesCat.map((service, i) => {
    if (i % 2 === 0) {
      scroller2.push(service);
    } else {
      scroller1.push(service);
    }
  });
  return (
    <div className="">
      <div className="service_category">
        {scroller2.map((num) => (
          <div className="service_category_img">
            <img src={num.img} alt="repair" />
            <label>{num.title}</label>
          </div>
        ))}
      </div>
      <div className="service_category">
        {scroller1.map((num) => (
          <div className="service_category_img">
            <img src={num.img} alt="repair" />
            <label>{num.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
