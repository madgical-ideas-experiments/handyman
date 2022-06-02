const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getAllnearbyServices,
  getAllnearbyServicesByService,
} = require("../controllers/servicController");

router.get("/", getAllServices);
roouter.get("/nearby", getAllnearbyServices);
router.get("/nearby/:service", getAllnearbyServicesByService);

module.exports = router;
