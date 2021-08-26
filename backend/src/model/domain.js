const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const domains = mongoose.model("domain", domainSchema);

module.exports = domains;
