const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("", async (req, res) => {
  const users = User.find().lean().exec();
});

module.exports = router;
