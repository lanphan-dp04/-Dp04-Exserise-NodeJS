const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MustHave = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  name: {
    type: String,
    requited: true,
  },
  icon: {
    type: String,
    requited: true,
  },
  title: {
    type: String,
    requited: true,
  },
  more: {
    type: String,
    requited: true,
  }
});

module.exports = mongoose.model("MustHave", MustHave,'must-have');
