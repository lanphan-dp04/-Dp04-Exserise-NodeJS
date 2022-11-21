const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const User = new Schema({
  username: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  password: {
    type: String,
    requited: true,
    maxLength: 255,
  }
});

module.exports = mongoose.model("User", User);
