const express = require("express");

const Internship = require("../models/internship.model");
const Location = require("../models/location.model");

const CRUD = require("../controllers/crud.controller");

const router = express.Router();

router.post("/", CRUD(Internship).post);

router.get("/", async (req, res) => {
  try {
    const intern = await Internship.find()
      .populate("domain")
      .populate("city")
      .lean()
      .exec();
    return res.send(intern);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/:id", CRUD(Internship).getOne);

router.patch("/:id", CRUD(Internship).update);

router.delete("/:id", CRUD(Internship).remove);

module.exports = router;
