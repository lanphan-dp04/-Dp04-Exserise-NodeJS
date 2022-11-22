const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Partner = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  linkweb: {
    type: String,
    requited: true,
  },
  srcimage: {
    type: String,
    requited: true,
  }
});

module.exports = mongoose.model("Partner", Partner,'partners');
