const express = require("express");
const mongoose = require("mongoose");

const teacherModel = new mongoose.Schema(
  {
    username: String,
    password: String,
    status: Boolean,
    gender: String,
    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roles",
    },
    section_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sections",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const roleModel = new mongoose.model("teachers", teacherModel);

module.exports = roleModel;
