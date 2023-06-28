const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};

// create collection
const AdminModel1 =
  mongoose.model.regadmin || mongoose.model("regadmin", adminSchema);
//                                                              ^collection name

module.exports = AdminModel1;
