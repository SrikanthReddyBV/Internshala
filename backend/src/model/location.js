const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const locations = mongoose.model("location", locationSchema);

module.exports = locations;
