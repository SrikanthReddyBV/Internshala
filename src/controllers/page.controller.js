const express = require("express");
const router = express.Router();

router.get("/index.ejs", (req, res) => {
  try {
    // const users = User.find().lean().exec();
    return res.render("html/index");
  } catch (err) {
    return res.render("html/error");
  }
});

router.get("/students_reg.ejs", async (req, res) => {
  try {
    return res.render("html/students_reg");
  } catch (err) {
    return res.render("html/error");
  }
});

router.get("/students_log.ejs", async (req, res) => {
  try {
    return res.render("html/students_log");
  } catch (err) {
    return res.render("html/error");
  }
});

router.get("/details.ejs", async (req, res) => {
  try {
    return res.render("html/details");
  } catch (err) {
    return res.render("html/error");
  }
});

router.get("/internships.ejs", async (req, res) => {
  try {
    return res.render("html/internships");
  } catch (err) {
    return res.render("html/error");
  }
});

router.get("/error.ejs", async (req, res) => {
  try {
    return res.render("html/error");
  } catch (err) {
    return res.render("html/error");
  }
});

router.get("/resumePage.ejs", async (req, res) => {
  try {
    return res.render("html/resumePage");
  } catch (err) {
    return res.render("html/error");
  }
});

module.exports = router;
