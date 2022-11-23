const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const SliderBar = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  description: {
    type: String,
    requited: true,
  },
  logo: {
    type: String,
    requited: true,
  },
  images: [
    {
      id: {
        type: String,
        requited: true,
        maxLength: 255,
      },
      src: {
        type: String,
        requited: true,
      }
    }
  ],
});

module.exports = mongoose.model("SliderBar", SliderBar,'slider-bar');
