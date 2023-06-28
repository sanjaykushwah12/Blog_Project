const mongoose = require("mongoose");
const url = "'mongodb://0.0.0.0:27017/blogWebsite'";
const live_uri =
  "mongodb+srv://sanjaykushwah2020:ftTxakxdv8cg7nFT@cluster0.hzhtqnp.mongodb.net/cluster0?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose
    .connect(live_uri)

    .then(() => {
      console.log("connection successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
