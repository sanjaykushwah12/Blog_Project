const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};
// create collection
const ContactModel1 =
  mongoose.model.fcontact || mongoose.model("fcontact", contactSchema);
//                                   ^collection name

module.exports = ContactModel1;
