const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://krishna:45K5$U$!gq-C.V2@cluster0.ndxbh.mongodb.net/internshala?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
