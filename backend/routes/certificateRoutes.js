const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { generateCertificate } = require("../controllers/certificateController");
const router = express.Router();

router.post("/generate-certificate", protect, generateCertificate);

module.exports = router;
