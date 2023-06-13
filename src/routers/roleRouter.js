const express = require("express");
const router = new express.Router();
const roleModel = require("../models/roleModel");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    const roles = await roleModel.find();
    res.status(200).json({ status: "Success", data: roles });
  } catch (e) {
    res.status(500).json({ status: "Error", data: e });
  }
});

router.post("/", async (req, res) => {
  try {
    const addRole = new roleModel(req.body);
    const role = await addRole.save();
    res.status(200).json(role);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
