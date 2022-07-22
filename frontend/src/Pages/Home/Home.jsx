import React, { useState } from "react";
import Footer from "../../Parts/Footer/Footer";
import "../../Style/commonStyle.css";
import "./home.css";
import { getCategories } from "../../API/Categories";

const Home = (props) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const handleSearch = (e) => {
    const { currentTarget: input } = e;
    if (input.name === "search") {
      setSearch(input.value);
    } else {
      setLocation(input.value);
    }
  };

  let categories = getCategories();
  let filteredCategories = categories.filter((cat) =>
    cat.items.toLowerCase().includes(search.toLowerCase())
  );
  console.log(categories);
  return (
    <div className="create_service_container">
      <div className="forms_element">
        <div className="forms_element_inputs">
          <br />
          <input
            type="text"
            placeholder="Search Anything"
            value={search}
            name="search"
            onChange={handleSearch}
          ></input>
        </div>
        <div className="forms_element_inputs">
          <input
            type="text"
            placeholder="Current Location"
            value={location}
            name="location"
            onChange={handleSearch}
          ></input>
        </div>
      </div>
      <span>
        <h5>Categories</h5>
      </span>
      {filteredCategories.length === 0 ? (
        <div className="no_data">
          <h1>No data found</h1>
        </div>
      ) : (
        ""
      )}
      <div className="">
        {filteredCategories.map((cat) => (
          <div className="banner py-2">
            <img src={cat.img} style={{ width: "100%" }} />
            <div className="data">
              <div className="card_body">
                <div className="card_items">
                  <div className="items_list">{cat.items}</div>
                </div>
                <div className="vender">
                  <span className="no_vender">{cat.numberOfVender}</span>
                  <span className="vender_msg">{cat.message}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
