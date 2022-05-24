const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authroized, no token found ");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authroized, no token found ");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

const labStaff = (req, res, next) => {
  if (req.user && req.user.role === "labstaff") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an labStaff");
  }
};

module.exports = { protect, admin, labStaff };
