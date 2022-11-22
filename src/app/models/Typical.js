const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Typical = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  Typical: {
    type: String,
    requited: true,
  },
  avatar: {
    type: String,
    requited: true,
  },
  infor: {
    type: String,
    requited: true,
  },
  infor: {
    type: String,
    requited: true,
  },
});

module.exports = mongoose.model("Typical", Typical,'typical');
