const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Banner = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  content: {
    type: String,
    requited: true,
  },
  srcBanner: {
    type: String,
    requited: true,
  }
});

module.exports = mongoose.model("Banner", Banner,'banner-common');
