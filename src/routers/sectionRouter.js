const express = require("express");
const router = new express.Router();
const sectionModel = require("../models/sectionModel");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    const sections = await sectionModel.find();
    res.status(200).json({ status: "Success", data: sections });
  } catch (e) {
    res.status(500).json({ status: "Error", data: e });
  }
});

router.post("/", async (req, res) => {
  try {
    const addSection = new sectionModel(req.body);
    const role = await addSection.save();
    res.status(200).json(role);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
