import React, { useState } from "react";
import Footer from "../../Parts/Footer/Footer";
import "../../Style/commonStyle.css";
import "./home.css";
import acRepair from "../../assets/images/acSer.jpg";
import gasStove from "../../assets/images/gasStove.png";
import vegetable from "../../assets/images/th1.jpg";
import water from "../../assets/images/waterBottle.png";
import { getCategories } from "../../API/Categories";

const Home = (props) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(0);
  let [selectedItems, setSelectedItems] = useState([]);
  const handleSearch = (e) => {
    const { currentTarget: input } = e;
    if (input.name === "search") {
      setSearch(input.value);
    } else {
      setLocation(input.value);
    }
  };

  const Items = [
    {
      shopName: "Ram Lal Sabzivala",
      img: vegetable,
      distance: "3 km far",
      stars: [1, 1, 1],
      categoryName: "Vegetables",
      types: ["Potato", "Onion", "Pudina"],
    },
    {
      shopName: "Vijay Water Supply",
      img: water,
      distance: "5 km far",
      stars: [1, 1, 1, 1],
      categoryName: "Water",
      types: ["80 bottels available"],
    },
    {
      shopName: "Aman AC Repair's",
      img: acRepair,
      distance: "7 km far",
      stars: [1, 1],
      categoryName: "AC",
      types: ["Automatic"],
    },
    {
      shopName: "Rohit Gas Stove Repair's",
      img: gasStove,
      distance: "2 km far",
      stars: [1, 1, 1, 1, 1],
      categoryName: "Gas Stove",
      types: ["Small", "Big"],
    },
  ];

  let categories = getCategories();
  let filteredCategories = [];
  if (category === 0) {
    filteredCategories = categories.filter((cat) =>
      cat.items.toLowerCase().includes(search.toLowerCase())
    );
  } else if (category === 1 && search !== "") {
    selectedItems = selectedItems.filter((item) =>
      item.categoryName.toLowerCase().includes(search.toLowerCase())
    );
    console.log(selectedItems);
  }
  const handleCategory = (index) => {
    setSearch("");
    setLocation("");
    console.log(categories[index].categoryName);
    selectedItems = Items.filter(
      (item) => item.categoryName === categories[index].categoryName
    );
    setSelectedItems(selectedItems);
    setCategory(1);
  };
  return (
    <div>
      {category === 1 ? (
        <img
          className="backErrow_img"
          src={require("../../assets/images/backErrow.png")}
          onClick={() => (setCategory(0), setSearch(""), setLocation(""))}
        />
      ) : (
        <br />
      )}

      <div className="create_service_container">
        <div className="forms_element">
          <div className="forms_element_inputs">
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
          <h5>{category === 0 ? "Categories" : " "}</h5>
        </span>

        {filteredCategories.length === 0 && category === 0 ? (
          <div className="no_data">
            <h1>No data found</h1>
          </div>
        ) : (
          ""
        )}
        {selectedItems.length === 0 && category === 1 ? (
          <div className="no_data">
            <h1>No data found</h1>
          </div>
        ) : (
          ""
        )}
        {category === 0 ? (
          <div>
            {filteredCategories.map((cat, index) => (
              <div
                className="banner py-2"
                onClick={() => handleCategory(index)}
              >
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
        ) : (
          <div>
            {selectedItems.map((cat, index) => (
              <div style={{ borderRadius: "5px", backgroundColor: "#F5F5F5" }}>
                <div className="row px-3">
                  <div className="col-6 p-2">
                    <span className="shop_name">{cat.shopName}</span>
                    <br />
                    <span className="inside_data">{cat.distance}</span>
                    <br />
                    <span>
                      {cat.stars.map((s) => (
                        <img
                          className="stars"
                          src={require("../../assets/images/star.png")}
                        />
                      ))}
                    </span>
                    <br />
                    <img
                      className="icon"
                      src={require("../../assets/images/call.png")}
                    />
                    <img
                      className="icon"
                      src={require("../../assets/images/chatIcon.png")}
                    />
                    <br />
                    <div className="col-6">
                      <span className="inside_data">
                        {cat.types.map((c) => c + ", ")}
                      </span>
                    </div>
                  </div>
                  <div className="col-6 p-2">
                    <img
                      src={cat.img}
                      style={{ width: "100%", borderRadius: "5px" }}
                    />
                  </div>
                </div>
                <div></div>
              </div>
            ))}
          </div>
        )}

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
