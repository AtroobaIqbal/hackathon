const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/home", protect, (req, res) => {
  res.json({ message: "Welcome to the home page", user: req.user });
});

router.get("/dashboard", protect, admin, (req, res) => {
  res.json({ message: "Welcome to the admin dashboard", user: req.user });
});

module.exports = router;
