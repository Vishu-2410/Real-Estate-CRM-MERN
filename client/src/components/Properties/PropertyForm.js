"use client"

import { useState, useEffect } from "react"
import Modal from "../common/Modal"
import Input from "../common/Input"
import Select from "../common/Select"
import Button from "../common/Button"

function PropertyForm({ onClose, property = null }) {
  const [category, setCategory] = useState(property ? property.category : "")
  const [size, setSize] = useState(property ? property.size : "")
  const [location, setLocation] = useState(property ? property.location : "")
  const [budget, setBudget] = useState(property ? property.budget : "")
  const [availability, setAvailability] = useState(property ? property.availability : "")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Reset form state when closing the modal or when prop changes
    if (!property) {
      setCategory("")
      setSize("")
      setLocation("")
      setBudget("")
      setAvailability("")
    }
  }, [property])

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError(null)

    const formData = {
      category,
      size,
      location,
      budget,
      availability,
    }

    try {
      if (property) {
        // Edit property
        const response = await fetch(`http://localhost:5000/api/properties/${property.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (!response.ok) throw new Error("Failed to update property")

      } else {
        // Add new property
        const response = await fetch("http://localhost:5000/api/properties", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (!response.ok) throw new Error("Failed to add property")
      }

      // Close modal after successful submission
      onClose()

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold">{property ? "Edit Property" : "Add New Property"}</h2>

        {error && <p className="text-red-500">{error}</p>}

        <Select label="Category" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select a category</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </Select>
        <Input label="Size" value={size} onChange={(e) => setSize(e.target.value)} required />
        <Input label="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <Input label="Budget" type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />
        <Input label="Availability" value={availability} onChange={(e) => setAvailability(e.target.value)} required />
        
        <div className="flex justify-end space-x-2">
          <Button type="button" onClick={onClose} variant="secondary" disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : property ? "Update" : "Add"} Property
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default PropertyForm
