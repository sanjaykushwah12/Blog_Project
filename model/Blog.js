const mongoose = require("mongoose");

//define schema

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

mongoose.models = {};
// create collection
const BlogModel1 = mongoose.model.blog || mongoose.model("blog", blogSchema);
//                                                        ^collection name

module.exports = BlogModel1;
