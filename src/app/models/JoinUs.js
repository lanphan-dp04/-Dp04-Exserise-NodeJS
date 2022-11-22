const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const JoinUs = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  icon: {
    type: String,
    requited: true,
  },
  content: {
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
  },
});

module.exports = mongoose.model("JoinUs", JoinUs,'join-us');
