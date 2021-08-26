const express = require("express");

const domains = require("../model/domain");

const CRUD = require("./general");

const router = express.Router();

router.post("/", CRUD(domains).post);

router.get("/", CRUD(domains).get);

router.get("/:id", CRUD(domains).getOne);

router.patch("/:id", CRUD(domains).update);

router.delete("/:id", CRUD(domains).remove);

module.exports = router;
