const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema(
  {
    domain: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Domain = mongoose.model("domain", domainSchema);

module.exports = Domain;
