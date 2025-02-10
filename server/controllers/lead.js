import express from "express";
import Lead from "../models/Lead.js";

// Create Lead
export const createLead = async (req, res) => {
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name and Phone are required fields.",
    });
  }

  try {
    const newLead = await Lead.create({ name, phone });

    res.status(201).json({
      success: true,
      message: "Lead added successfully.",
      lead: newLead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while adding the lead.",
    });
  }
};

// Get All Leads
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    if (leads.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No lead records found.",
      });
    }
    res.status(200).json({
      success: true,
      leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while fetching leads.",
    });
  }
};

// Update Lead
export const updatedLead = async (req, res) => {
  const { name, phone } = req.body;

  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found.",
      });
    }

    lead.name = name || lead.name;
    lead.phone = phone || lead.phone;

    await lead.save();

    res.status(200).json({
      success: true,
      message: "Lead updated successfully.",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while updating the lead.",
    });
  }
};

// Delete Lead
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found.",
      });
    }

    await Lead.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while deleting the lead.",
    });
  }
};
