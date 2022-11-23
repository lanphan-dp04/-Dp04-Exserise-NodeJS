const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Concern = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  title: {
    type: String,
    requited: true,
  },
  desc: {
    type: String,
    requited: true,
  },
});

module.exports = mongoose.model("Concern", Concern,'concern');
