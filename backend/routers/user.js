const express = require("express");

const router = express.Router();
const { locationPost } = require("../controllers/userController");

router.post("/:id/location", locationPost);

module.exports = router;
// setting the location of the user
