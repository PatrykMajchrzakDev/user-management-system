const mongoose = require("mongoose");

//this is how schematic of db will look like
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
});

//assign model
const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
