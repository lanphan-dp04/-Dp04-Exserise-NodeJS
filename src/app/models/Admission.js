const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Admission = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  name: {
    type: String,
    requited: true,
  },
  avatar: {
    type: String,
    requited: true,
  },
  intro_1: {
    type: String,
    requited: true,
  },
  intro_2: {
    type: String,
    requited: true,
  },

});

module.exports = mongoose.model("Admission", Admission,'admission');
