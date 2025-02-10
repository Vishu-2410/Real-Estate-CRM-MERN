import express from "express";
import {
  createProperty,
  getProperties,
  updateProperty,
  deleteProperty,
} from "../controllers/property.js";

const router = express.Router();

// POST: Create property
router.post("/", createProperty);

// GET: Get all properties
router.get("/", getProperties);

// PUT: Update property by ID
router.put("/:id", updateProperty);

// DELETE: Delete property by ID
router.delete("/:id", deleteProperty);

export default router;
