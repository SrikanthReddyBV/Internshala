const express = require("express");

const Location = require("../models/location.model");

const CRUD = require("./general");

const router = express.Router();

router.post("/", CRUD(Location).post);

router.get("/", CRUD(Location).get);

router.get("/:id", CRUD(Location).getOne);

router.patch("/:id", CRUD(Location).update);

router.delete("/:id", CRUD(Location).remove);

module.exports = router;
