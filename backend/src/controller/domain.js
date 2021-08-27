const express = require("express");

const domains = require("../model/domain");

const CRUD = require("./general");

const router = express.Router();

router.post("/", CRUD(domains).post);

router.get("/", CRUD(domains).get);

router.get("/:id", CRUD(domains).getOne);
router.delete("/a/:id", async (req, res) => {
  const items = await domains.find({ city: req.params.id });
  return res.send(items);
});

router.patch("/:id", CRUD(domains).update);

router.delete("/:id", CRUD(domains).remove);

module.exports = router;
