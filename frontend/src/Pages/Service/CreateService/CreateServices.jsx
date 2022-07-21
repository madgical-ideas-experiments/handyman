import React, { useState } from "react";
import "./createService.css";
import ServiceCategory from "./ServiceCategory.jsx";
import repairSer from "../../../assets/images/repairSer.png";
import vegSer from "../../../assets/images/vegSer.png";
import waterSer from "../../../assets/images/waterSer.png";
import gassSer from "../../../assets/images/gassSer.png";

const CreateServices = (props) => {
  const servicesCat = [
    { img: repairSer, title: "Repair Service" },
    { img: vegSer, title: "Vegetable Seller" },
    { img: waterSer, title: "RO Water Supply" },
    { img: gassSer, title: "Gass Stove Repair" },

    { img: repairSer, title: "Repair Service" },
    { img: vegSer, title: "Vegetable Seller" },
    { img: waterSer, title: "RO Water Supply" },
    { img: gassSer, title: "Gass Stove Repair" },
    { img: repairSer, title: "Repair Service" },
    { img: vegSer, title: "Vegetable Seller" },
    { img: waterSer, title: "RO Water Supply" },
    { img: gassSer, title: "Gass Stove Repair" },

    { img: repairSer, title: "Repair Service" },
    { img: vegSer, title: "Vegetable Seller" },
    { img: waterSer, title: "RO Water Supply" },
    { img: gassSer, title: "Gass Stove Repair" },
    { img: repairSer, title: "Repair Service" },
    { img: vegSer, title: "Vegetable Seller" },
    { img: waterSer, title: "RO Water Supply" },
    { img: gassSer, title: "Gass Stove Repair" },
    { img: repairSer, title: "Repair Service" },
    { img: vegSer, title: "Vegetable Seller" },
    { img: waterSer, title: "RO Water Supply" },
    { img: gassSer, title: "Gass Stove Repair" },
  ];

  const [locState, setLocState] = useState(0);
  const handleLocation = () => {
    setLocState(1);
  };

  const timeSlot = ["8am - 12pm", "12pm - 4pm", "4pm - 8pm"];
  const [arr, setArr] = useState([]);
  const [newArr] = useState([]);

  const [data, setData] = useState({
    providername: "",
    number: "",
  });

  const handleChange = (e) => {
    const values = e.target.value;
    let inputvalue = "";
    for (let i = 0; i < inputvalue.length; i++) {
      inputvalue += values[i].name;
    }
    setData(inputvalue);
  };

  const [getLocation, setLocation] = useState({
    userLocation: "",
  });
  const handleUserLocations = (e) => {
    setLocation({ userLocation: e.target.value });
  };

  const handleAdress = (index) => {
    if (getLocation.userLocation !== "") {
      newArr.push({ add: getLocation.userLocation, time: timeSlot[index] });
      setArr(newArr);
    }
    getLocation.userLocation = "";
    setLocState(0);
  };

  const { handleAddService, backToLogin } = props;
  return (
    <div className="container_div">
      {console.log(newArr)}
      <img
        className="backErrow_img"
        src={require("../../../assets/images/backErrow.png")}
        onClick={() => backToLogin()}
      />

      <div className="create_service_container">
        <div className="forms_element">
          <div className="forms_element_inputs">
            <input
              type="text"
              name="providername"
              value={data.providername}
              placeholder="Service provider name"
              onChange={handleChange}
            />
          </div>
          <div className="forms_element_inputs">
            <input
              type="text"
              name="number"
              value={data.number}
              placeholder="Enter your mobile number"
              onChange={handleChange}
            />
          </div>
          <div className="user_location">
            <span>Locations Available in</span>
            <span className="add_location" onClick={() => handleLocation()}>
              +
            </span>
          </div>
          {locState === 0 && arr.length === 0 ? (
            <p className="add_mul_locations">
              Add multiple locations by clicking '+'
            </p>
          ) : (
            <div className="add_location-block">
              {arr.length === 0 ? (
                ""
              ) : (
                <>
                  {arr.map((num) => (
                    <React.Fragment>
                      <div className="booked_address">
                        <span className="address">{num.add}</span>
                        <span className="add_location">-</span>
                      </div>
                      <span className="px-2">
                        <span className="time">{num.time}</span>
                      </span>
                    </React.Fragment>
                  ))}
                </>
              )}
              {locState !== 0 ? (
                <div>
                  <div className="add_location-items  border-top">
                    <input
                      type="text"
                      placeholder="Add location"
                      value={getLocation.userLocation}
                      onChange={handleUserLocations}
                    />
                    <img
                      src={require("../../../assets/images/location.png")}
                      alt="map_icon"
                    />
                  </div>
                  {/* for time */}
                  <div className="add_location-time flex">
                    {timeSlot.map((num, index) => (
                      <div
                        className="time-slot"
                        onClick={() => handleAdress(index)}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* for location */}
            </div>
          )}
        </div>
        <div className="available_categories">
          <p className="px-3">
            {" "}
            Choose your service from the available categories
          </p>

          <ServiceCategory servicesCat={servicesCat} />
        </div>
        <div className="continue_btn service_btns">
          <button className="btn_primary" onClick={() => handleAddService()}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateServices;
