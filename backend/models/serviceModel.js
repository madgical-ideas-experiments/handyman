const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  serviceDescription: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 100,
  },
  sellers: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});
const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
