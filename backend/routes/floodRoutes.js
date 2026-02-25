const express = require("express");
const router = express.Router();
const Flood = require("../models/Flood");

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "Test route works" });
});

// Get all flood data
router.get("/", async (req, res) => {
  try {
    const floods = await Flood.find();
    res.json(floods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new flood record
router.post("/", async (req, res) => {
  try {
    const newFlood = new Flood(req.body);
    const savedFlood = await newFlood.save();
    res.status(201).json(savedFlood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;