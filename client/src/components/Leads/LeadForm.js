"use client";

import { useState, useEffect } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";

function LeadForm({ onClose, lead = null }) {
  const [name, setName] = useState(lead ? lead.name : "");
  const [phoneNumber, setPhoneNumber] = useState(lead ? lead.phoneNumber : "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const leadData = { name, phoneNumber };

    try {
      let response;
      if (lead) {
        // Update existing lead
        response = await fetch(`http://localhost:5000/api/leads/${lead.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadData),
        });
      } else {
        // Create new lead
        response = await fetch("http://localhost:5000/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadData),
        });
      }

      if (!response.ok) throw new Error("Failed to save lead");

      // After submission, close the modal
      onClose();
    } catch (error) {
      console.error("Error saving lead:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold">{lead ? "Edit Lead" : "Add New Lead"}</h2>
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <div className="flex justify-end space-x-2">
          <Button type="button" onClick={onClose} variant="secondary" disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : lead ? "Update Lead" : "Add Lead"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default LeadForm;
