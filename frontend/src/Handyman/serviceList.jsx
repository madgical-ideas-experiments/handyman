import React, { Component } from "react";
import "./serviceList.css";
import { FaCommentAlt, FaPhoneAlt } from "react-icons/fa";
class ServiceList extends Component {
  state = {};

  render() {
    const { serviceList, index, handleSeviceList } = this.props;
    const { img, selName, distance, status, rating, items } = serviceList;
    return (
      <React.Fragment>
        <div className="service">
          <button
            className="service_btn"
            onClick={() => handleSeviceList(index)}
          >
            <div className="service_details">
              <div className="service_list">
                <div className="provider_name">{selName}</div>
                <br />
                <div className="distance">
                  {distance}
                  {status === "open" ? (
                    <span className="status text-black">({status})</span>
                  ) : (
                    <span className="status text-danger">({status})</span>
                  )}
                </div>
                <br />
                <div className="rating">{rating}</div>
                <br />
                <div className="contact">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span className="comment">
                    <FaCommentAlt />
                  </span>
                </div>
                <br />
                <div className="items">
                  {items.map((num) => (
                    <span>{num}</span>
                  ))}
                </div>
              </div>
              <div className="images">
                <div
                  className="imgs"
                  style={"background-image: url(" + img + ")"}
                ></div>
              </div>
            </div>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ServiceList;
