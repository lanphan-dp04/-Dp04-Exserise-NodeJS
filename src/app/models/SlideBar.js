const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose_delete = require("mongoose-delete");

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
      },
    },
  ],
});
SliderBar.plugin(mongoose_delete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("SliderBar", SliderBar, "slider-bar");
