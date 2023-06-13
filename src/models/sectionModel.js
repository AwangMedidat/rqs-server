const express = require("express");
const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  name: String,
});

const sectionModel = new mongoose.model("sections", sectionSchema);

module.exports = sectionModel;
