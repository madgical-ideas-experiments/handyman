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
});

userSchema.post("save", (error, doc, next) => {
  console.log("new user was created and saved in the database", doc);
});
const User = mongoose.model("User", userSchema);
module.exports = User;
