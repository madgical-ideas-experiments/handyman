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
    categoryName: "Vegetables",
  },
  {
    items: "RO Water Supply",
    img: water,
    numberOfVender: 5,
    message: "Venders near you",
    categoryName: "Water",
  },
  {
    items: "AC Repair",
    img: acRepair,
    numberOfVender: 8,
    message: "Venders near you",
    categoryName: "AC",
  },
  {
    items: "Gas Stove Repair",
    img: gasStove,
    numberOfVender: 5,
    message: "Venders near you",
    categoryName: "Gas Stove",
  },
];

export function getCategories() {
  return Categories;
}
