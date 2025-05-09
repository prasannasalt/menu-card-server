const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create User Route
router.post("/", userController.createUser);

// Get All User Route
router.get("/", userController.getAllUsers);

// Edit User Route
router.put("/:id", userController.updateUser);

// Delete User Route
router.delete("/:id", userController.deleteUser);

module.exports = router;
