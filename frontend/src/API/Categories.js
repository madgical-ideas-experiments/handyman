import acRepair from "../assets/images/acRepair.png";
import gasStove from "../assets/images/gasStove.png";
import vegetable from "../assets/images/vegetable.png";
import water from "../assets/images/water.png";


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
  
  export function getCategories() {
    return Categories;
}