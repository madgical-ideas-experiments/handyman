const User = require("../models/userModel");

const locationPost = async (req, res) => {
  const { longitude, latitude } = req.body;

  try {
    const id = req.params.id;
    const user = await User.findById(id);
    user.loc = { type: "Point", coordinates: [longitude, latitude] };
    await user.save();
    res.status(200).send({
      success: true,
      msg: "Location updated successfully",
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      msg: "Error updating location",
    });
  }
};

module.exports = { locationPost };
