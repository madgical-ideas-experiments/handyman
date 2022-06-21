import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaAlignJustify,
  FaArrowLeft,
  FaCommentAlt,
  FaHome,
} from "react-icons/fa";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Service/AllService/Service";
import ServiceProvider from "../Pages/Service/ServiceProvider/ServiceProvider";
import Order from "../Pages/Order/order";

import acRepair from "../images/acRepair.png";
import gasStove from "../images/gasStove.png";
import vegetable from "../images/vegetable.png";
import water from "../images/water.png";

import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

const App = () => {
  const Categories = [
    {
      items: "Fresh Vegetables",
      img: vegetable,
      numberOfVender: 3,
      message: "Venders near you",
    },
    {
      items: "RO Water Supply",
      img: water,
      numberOfVender: 5,
      message: "Venders near you",
    },
    {
      items: "AC Repair",
      img: acRepair,
      numberOfVender: 8,
      message: "Venders near you",
    },
    {
      items: "Gas Stove Repair",
      img: gasStove,
      numberOfVender: 5,
      message: "Venders near you",
    },
  ];
  const serviceList = [
    {
      id: 1,
      img: img1,
      selName: "Ram Lal Sabzivala",
      distance: "2 Km far",
      status: "closed",
      rating: "5 ratings",
      items: ["Potato,", "Onion,", "Pudina,", "Cauliflower"],
    },
    {
      id: 2,
      img: img2,
      selName: "Sonu Vegetables",
      distance: "5 Km far",
      status: "open",
      rating: "2 ratings",
      items: ["Potato,", "Onion,", "Pudina,", "Cauliflower"],
    },
    {
      id: 3,
      img: img3,
      selName: "Rahul Vegetables",
      distance: "3 Km far",
      status: "closed",
      rating: "No ratings yet",
      items: ["Potato,", "Onion,", "Pudina,", "Cauliflower"],
    },
    {
      id: 4,
      img: img4,
      selName: "Rakesh Vegetables",
      distance: "1 Km far",
      status: "open",
      rating: "No ratings yet",
      items: ["Potato,", "Onion,", "Pudina,", "Cauliflower"],
    },
  ];

  const [changeCom, setchangeCom] = useState(0);
  const [arr, serviceProviderArr] = useState([]);

  const handleHome = () => {
    setchangeCom(1);
  };

  const handleService = () => {
    setchangeCom(0);
  };

  const handleServiceList = (index) => {
    serviceProviderArr(serviceList[index]);
    setchangeCom(2);
  };

  const goToServiceProvider = () => {
    setchangeCom(1);
  };
  const sendRequest = () => {
    setchangeCom(3);
  };

  const goToservicepage = () => {
    setchangeCom(2);
  };

  return (
    <div className="header">
      {changeCom === 0 ? (
        <div className="main">
          <div className="find_location_service">
            <div className="find_search">
              <span>
                <FaSearch />
              </span>
              <input
                type="text"
                name="service"
                value=""
                placeholder="Search Anything"
              />
            </div>
            <div className="find_search">
              <span>
                <FaMapMarkerAlt />
              </span>
              <input
                type="text"
                name="service"
                value=""
                placeholder="Current Locations"
              />
            </div>
          </div>
          <p className="category">Categories</p>

          {Categories.map((num, index) => (
            <Home
              handleHome={handleHome}
              Categories={num}
              key={num.items}
              index={index}
            />
          ))}
        </div>
      ) : changeCom === 1 ? (
        <div className="main">
          <div className="find_location_service">
            <span onClick={handleService}>
              <FaArrowLeft />
            </span>
            <div className="find_search">
              <span>
                <FaSearch />
              </span>
              <input
                type="text"
                name="service"
                value=""
                placeholder="Search Anything"
              />
            </div>
            <div className="find_search">
              <span>
                <FaMapMarkerAlt />
              </span>
              <input
                type="text"
                name="service"
                value=""
                placeholder="Current Locations"
              />
            </div>
          </div>
          {serviceList.map((num, index) => (
            <Services
              serviceList={num}
              key={num.id}
              index={index}
              handleServiceList={handleServiceList}
            />
          ))}
        </div>
      ) : changeCom === 2 ? (
        <ServiceProvider
          arr={serviceProviderArr}
          goToServiceProvider={goToServiceProvider}
          sendRequest={sendRequest}
        />
      ) : (
        <Order goToservicepage={goToservicepage} />
      )}
      <div className="footer">
        <div className="fa_icons">
          <FaAlignJustify />
        </div>
        <div className="fa_icons">
          <FaHome />
        </div>
        <div className="fa_icons">
          <FaCommentAlt />
        </div>
      </div>
    </div>
  );
};

export default App;
