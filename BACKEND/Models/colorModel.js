const mongoose = require("mongoose");
const colorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 40,
      unique: true
    },
    code: {
      type: String,
      required: true,
      maxLength: 10,
      unique: true
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const ColorModel = mongoose.model("Color", colorSchema);
module.exports = ColorModel;
