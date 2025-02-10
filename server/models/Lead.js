import mongoose from "mongoose";

// Lead Schema
const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt fields
  }
);

const Lead = mongoose.model("Lead", leadSchema);
export default Lead;
