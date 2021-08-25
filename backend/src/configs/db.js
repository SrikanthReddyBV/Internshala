const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/Book-library", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

module.exports = connect;
