const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    // console.log(users);
    return res.json(users);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.post("", async (req, res) => {
  try {
    // console.log(req.body);
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
