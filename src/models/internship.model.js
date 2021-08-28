const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    duration: { type: Number, required: true },
    image: { type: String, required: true },
    domain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "domain",
      required: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "location",
    },
    wfh: { type: Boolean, default: false },
    part_time: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Internship = mongoose.model("internship", internshipSchema);

module.exports = Internship;
