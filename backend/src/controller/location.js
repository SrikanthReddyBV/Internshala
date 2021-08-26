const express = require("express");

const locations = require("../model/location");

const CRUD = require("./general");

const router = express.Router();

router.post("/", CRUD(locations).post);

router.get("/", CRUD(locations).get);

router.get("/:id", CRUD(locations).getOne);

router.patch("/:id", CRUD(locations).update);

router.delete("/:id", CRUD(locations).remove);

module.exports = router;