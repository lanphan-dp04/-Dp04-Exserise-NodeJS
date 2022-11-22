const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const United = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  title: {
    type: String,
    requited: true,
  },
  infor: {
    type: String,
    requited: true,
  }
});

module.exports = mongoose.model("United", United,'united');
