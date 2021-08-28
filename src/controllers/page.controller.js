const express = require("express");
const router = express.Router();

const Domain = require("../models/domain.model");
const Location = require("../models/location.model");
const Internship = require("../models/internship.model");

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
    // console.log(req.query);
    const internship = await Internship.findById(req.query.id)
      .populate("domain city")
      .lean()
      .exec();
    // console.log(internship);
    return res.render("html/details", { internship });
  } catch (err) {
    return res.render("html/error", { err });
  }
});

router.get("/internships.ejs", async (req, res) => {
  try {
    if (Object.keys(req.query).length != 0) {
      return res.render("html/internships");
    } else {
      const domains = await Domain.find({}, { domain: 1 }).lean().exec();
      const locations = await Location.find({}, { city: 1 }).lean().exec();
      // console.log(locations);
      return res.render("html/internships", { domains, locations });
    }
  } catch (err) {
    return res.render("html/error", { err });
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
