const MenuItem = require("../models/menuItem");

// GET all menu items
const getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();

    if (!items.length) {
      return res.status(404).json({
        success: false,
        message: "No menu items found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Menu items fetched successfully",
      data: items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu items",
      error: error.message,
    });
  }
};

// GET menu items by category (no pagination)
const getMenuItemsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const items = await MenuItem.find({ category: category.toLowerCase() });

    if (!items.length) {
      return res.status(404).json({
        success: false,
        message: "No menu items found in this category",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Menu items fetched successfully by category",
      data: items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu items by category",
      error: error.message,
    });
  }
};

// GET menu items by search keyword in menuName
const searchMenuItemsByName = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Search term is required",
      });
    }

    const items = await MenuItem.find({
      menuName: { $regex: name, $options: "i" },
    });

    if (!items.length) {
      return res.status(404).json({
        success: false,
        message: "No menu items found matching the search term",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Menu items fetched successfully by search",
      data: items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to search menu items",
      error: error.message,
    });
  }
};

// GET a menu item by ID
const getMenuItemById = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Menu item fetched successfully",
      data: item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu item",
      error: error.message,
    });
  }
};

// POST create new menu item
const createMenuItem = async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    const saved = await newItem.save();
    res.status(201).json({
      success: true,
      message: "Menu item created successfully",
      data: saved,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create menu item",
      error: error.message,
    });
  }
};

// PUT update menu item by ID
const updateMenuItem = async (req, res) => {
  try {
    const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Menu item updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update menu item",
      error: error.message,
    });
  }
};

// DELETE a menu item by ID
const deleteMenuItem = async (req, res) => {
  try {
    const deleted = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Menu item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete menu item",
      error: error.message,
    });
  }
};

module.exports = {
  getAllMenuItems,
  getMenuItemsByCategory,
  searchMenuItemsByName,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
