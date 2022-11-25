const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose_delete = require("mongoose-delete");

const Concern = new Schema({
  id: {
    type: String,
    requited: true,
    maxLength: 255,
  },
  title: {
    type: String,
    requited: true,
  },
  desc: {
    type: String,
    requited: true,
  },
});
Concern.plugin(mongoose_delete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Concern", Concern, "concern");
