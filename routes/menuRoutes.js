const express = require("express");
const router = express.Router();

const menuItemController = require("../controllers/menuController");

// Get all menu items
router.get("/", menuItemController.getAllMenuItems);

// Get menu items by category
router.get("/category/:category", menuItemController.getMenuItemsByCategory);

// Search by menuName or price
router.get("/search/term", menuItemController.getMenuItemsByCategory);

// Get menu item by ID
router.get("/:id", menuItemController.getMenuItemById);

// Create new menu item
router.post("/", menuItemController.createMenuItem);

// Update menu item by ID
router.put("/:id", menuItemController.updateMenuItem);

// Delete menu item by ID
router.delete("/:id", menuItemController.deleteMenuItem);

module.exports = router;
