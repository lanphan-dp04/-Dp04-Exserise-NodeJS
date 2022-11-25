const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose_delete = require("mongoose-delete");

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
Campus.plugin(mongoose_delete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Campus", Campus, "campus");
