const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "customer",
  },
  service: {
    type: String,
    required: true,
    default: "none",
  },
  loc: {
    type: [Number],
    index: "2d",
  },
});

userSchema.post("save", (error, doc, next) => {
  console.log("new user was created and saved in the database", doc);
});
const User = mongoose.model("User", userSchema);
module.exports = User;
