const express = require("express");
const router = new express.Router();
const teacherModel = require("../models/teacherModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    const teacher = await teacherModel.find();
    for (let i = 0; i < teacher.length; i++) {
      if (req.body.username === teacher[i].username) {
        return res
          .status(400)
          .json({ status: "Error", data: "Username Have been Used" });
      }
    }
    const password = await bcrypt.hash(req.body.password, 10);
    req.body.password = password;
    const addTeacher = new teacherModel(req.body);
    const newUser = await addTeacher.save();
    return res.status(200).json({ status: "Success", data: newUser });
  } catch (e) {
    return res.status(500).json({ status: "Error", data: e });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(404)
        .json({ status: "Error", data: "Email or Password must required" });
    } else {
      const user = await teacherModel.find({ username: username });
      if (user.length === 0)
        return res
          .status(404)
          .json({ status: "Error", data: "User Not Available" });
      const comparePassword = await bcrypt.compare(password, user[0].password);
      const token = await jwt.sign(
        {
          username: user[0].username,
          password: user[0].password,
        },
        process.env.JWT_KEY
      );
      if (!comparePassword)
        return res
          .status(400)
          .json({ status: "Error", data: "Invalid Password" });
      const objUser = {
        _id: user[0]._id,
        username: user[0].username,
        token: token,
      };
      return res.status(200).json({ status: "Error", data: objUser });
    }
  } catch (e) {
    res.status(500).json({ status: "Error", data: e });
  }
});

module.exports = router;
