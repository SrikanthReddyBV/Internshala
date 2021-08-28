const express = require("express");

const Domain = require("../models/domain.model");

const CRUD = require("./general");

const router = express.Router();

router.post("/", CRUD(Domain).post);

router.get("/", CRUD(Domain).get);

router.get("/:id", CRUD(Domain).getOne);

router.patch("/:id", CRUD(Domain).update);

router.delete("/:id", CRUD(Domain).remove);

module.exports = router;
