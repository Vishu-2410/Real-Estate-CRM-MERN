"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CreatePropertyModal from "../../components/CreatePropertyModal"
import EditPropertyModal from "../../components/EditPropertyModal"

export default function Properties() {
  const [properties, setProperties] = useState([
    {
      id: "1",
      category: "Residential",
      size: "2000 sqft",
      location: "New York",
      budget: "$500,000",
      availability: "Available",
    },
    {
      id: "2",
      category: "Commercial",
      size: "5000 sqft",
      location: "Los Angeles",
      budget: "$1,000,000",
      availability: "Sold",
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)

  const filteredProperties = properties.filter(
    (property) =>
      (property.location.toLowerCase().includes(searchTerm.toLowerCase()) || property.budget.includes(searchTerm)) &&
      (categoryFilter === "All" || property.category === categoryFilter),
  )

  const handleCreate = (newProperty) => {
    setProperties([...properties, { ...newProperty, id: Date.now().toString() }])
    setIsCreateModalOpen(false)
  }

  const handleEdit = (updatedProperty) => {
    setProperties(properties.map((property) => (property.id === updatedProperty.id ? updatedProperty : property)))
    setIsEditModalOpen(false)
  }

  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Properties</h1>
        <Button onClick={() => setIsCreateModalOpen(true)}>Add Property</Button>
      </div>
      <div className="flex mb-4 space-x-4">
        <Input
          type="text"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Residential">Residential</SelectItem>
            <SelectItem value="Commercial">Commercial</SelectItem>
            <SelectItem value="Land">Land</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProperties.map((property) => (
            <TableRow key={property.id}>
              <TableCell>{property.category}</TableCell>
              <TableCell>{property.size}</TableCell>
              <TableCell>{property.location}</TableCell>
              <TableCell>{property.budget}</TableCell>
              <TableCell>{property.availability}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingProperty(property)
                    setIsEditModalOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDelete(property.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CreatePropertyModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreate}
      />
      {editingProperty && (
        <EditPropertyModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onEdit={handleEdit}
          property={editingProperty}
        />
      )}
    </div>
  )
}
