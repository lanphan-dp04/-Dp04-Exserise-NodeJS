const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Campus = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  avatar: {
    type: String,
    requited: true,
  },
  name: {
    type: String,
    requited: true,
  },
});

module.exports = mongoose.model("Campus", Campus,'campus');
