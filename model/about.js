const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};

const AboutModel1 =
  mongoose.model.about || mongoose.model("about", AboutSchema);

module.exports = AboutModel1;
