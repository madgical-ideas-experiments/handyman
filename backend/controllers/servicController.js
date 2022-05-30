const Service = require("../models/serviceModel");

// get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).send(services);
  } catch (err) {
    res.status(400).send(err);
  } 
};
