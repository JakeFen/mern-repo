const express = require("express");
const { SignupUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// Login
router.post("/login", loginUser);

// Signup
router.post("/signup", SignupUser);

module.exports = router;
