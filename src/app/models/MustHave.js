const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MustHave = new Schema({
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

module.exports = mongoose.model("MustHave", MustHave,'musthave');
