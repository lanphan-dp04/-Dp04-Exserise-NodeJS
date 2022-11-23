const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const About = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  title: {
    type: String,
    requited: true,
  },
});

module.exports = mongoose.model("About", About,'about');
