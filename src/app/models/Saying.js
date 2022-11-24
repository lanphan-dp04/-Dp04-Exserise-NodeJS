const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Saying = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  title: {
    type: String,
    requited: true,
  },
  name: {
    type: String,
    requited: true,
  },
  desc: {
    type: String,
    requited: true,
  },
  imageAvatar: {
    type: String,
    requited: true,
  },
});

module.exports = mongoose.model("Saying", Saying,'saying');
