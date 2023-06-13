const mongoose = require("mongoose");

module.exports.connection = mongoose
  .connect("mongodb://localhost:27017/rqs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("no connection");
  });
