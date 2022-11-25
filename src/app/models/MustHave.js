const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoose_delete = require("mongoose-delete");

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
  course: {
    type: String,
    requited: true,
  },
  icon: {
    type: String,
    requited: true,
  },
});
MustHave.plugin(mongoose_delete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("MustHave", MustHave, "musthave");
