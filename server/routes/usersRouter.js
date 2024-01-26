const router = require("express").Router();
const { User, validate } = require("../models/usersModel");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const users = await User.find({})
  res.send(users)
  });

module.exports = router;