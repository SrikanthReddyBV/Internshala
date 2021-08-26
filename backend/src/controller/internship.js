const express = require("express");

const internships = require("../model/internships");

const CRUD = require("./general");

const router = express.Router();

router.post("/", CRUD(internships).post);

router.get("/", async (req, res) => {
  try {
    const intern = await internships
      .find()
      .populate("domain")
      .populate("city")
      .lean()
      .exec();
    return res.send(intern);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/:id", CRUD(internships).getOne);

router.patch("/:id", CRUD(internships).update);

router.delete("/:id", CRUD(internships).remove);

module.exports = router;
