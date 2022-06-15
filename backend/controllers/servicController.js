const Service = require("../models/serviceModel");
const User = require("../models/userModel");

// get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).send(services);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getAllnearbyServices = async (req, res) => {
  try {
    const services = await User.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [req.body.longitude, req.body.latitude],
          },
          $maxDistance: req.body.distance,
        },
      },
      role: "seller",
    });
    res.status(200).send(services);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getAllnearbyServicesByService = async (req, res) => {
  try {
    const services = await User.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [req.body.longitude, req.body.latitude],
          },
          $maxDistance: req.body.distance,
        },
      },
      role: "seller",
      service: req.params.service,
    });
    res.status(200).send(services);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getAllServices,
  getAllnearbyServices,
  getAllnearbyServicesByService,
};
