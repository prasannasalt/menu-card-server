const jwt = require("jsonwebtoken");
require("dotenv").config();

const accessSecret = process.env.JWT_ACCESS_SECRET;
const refreshSecret = process.env.JWT_REFRESH_SECRET;

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, accessSecret, { expiresIn: "15m" });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, refreshSecret, { expiresIn: "7d" });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
