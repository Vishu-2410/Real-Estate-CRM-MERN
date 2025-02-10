import express from "express";
import { createLead, getLeads, updatedLead, deleteLead } from "../controllers/lead.js";

const router = express.Router();

// POST: Create lead
router.post("/", createLead);

// GET: Get all leads
router.get("/", getLeads);

// PUT: Update lead
router.put("/:id", updatedLead);

// DELETE: Delete lead
router.delete("/:id", deleteLead);

export default router;
