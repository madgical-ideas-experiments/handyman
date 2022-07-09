
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
export function getServiceList() {
    return serviceList;
}
