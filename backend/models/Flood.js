const mongoose = require("mongoose");

const floodSchema = new mongoose.Schema(
  {
    district: { type: String, required: true },
    year: Number,
    month: String,
    week: Number,
    rainfall: Number,
    waterLevel: Number,
    soilMoisture: Number,
    riskScore: Number,
    riskLevel: {
      type: String,
      enum: ["Low", "Moderate", "High", "Critical"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flood", floodSchema);