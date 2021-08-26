const express = require("express");

const internships = require("../model/internships");

const CRUD = require("./general");

const router = express.Router();

router.post("/", CRUD(internships).post);

router.get("/", CRUD(internships).get);

router.get("/:id", CRUD(internships).getOne);

router.patch("/:id", CRUD(internships).update);

router.delete("/:id", CRUD(internships).remove);

module.exports = router;
