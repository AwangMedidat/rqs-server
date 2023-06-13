const express = require("express");
const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: String,
});

const roleModel = new mongoose.model("roles", roleSchema);

module.exports = roleModel;
