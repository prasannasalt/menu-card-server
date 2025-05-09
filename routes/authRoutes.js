const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Login Route
router.post("/login", authController.login);

// refresh Route
router.post("/refresh", authController.refreshToken);

// Logout Route
router.post("/logout", authController.logout);

module.exports = router;
