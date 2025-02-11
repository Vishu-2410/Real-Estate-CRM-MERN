"use client"

import { useState, useEffect } from "react"
import { PencilIcon, TrashIcon } from "@heroicons/react/outline"
import Button from "../common/Button"

function PropertyList({ searchTerm, filterCategory }) {
  const [properties, setProperties] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    // Fetch properties from API
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/properties?page=${currentPage}&searchTerm=${searchTerm}&category=${filterCategory}`
        )
        const data = await response.json()
        setProperties(data.properties)
        setTotalPages(data.totalPages)
      } catch (error) {
        console.error("Error fetching properties:", error)
      }
    }

    fetchProperties()
  }, [currentPage, searchTerm, filterCategory]) // Only fetch when these values change

  const handleEdit = (propertyId) => {
    // Implement edit functionality
    console.log("Editing property with ID:", propertyId)
  }

  const handleDelete = async (propertyId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/properties/${propertyId}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error("Failed to delete property")
      // After successful deletion, refresh the list of properties
      setProperties(properties.filter((property) => property.id !== propertyId))
    } catch (error) {
      console.error("Error deleting property:", error)
    }
  }

  const handlePagination = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return
    setCurrentPage(pageNumber)
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Availability
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {properties.map((property) => (
            <tr key={property.id}>
              <td className="px-6 py-4 whitespace-nowrap">{property.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{property.size}</td>
              <td className="px-6 py-4 whitespace-nowrap">{property.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{property.budget}</td>
              <td className="px-6 py-4 whitespace-nowrap">{property.availability}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button onClick={() => handleEdit(property.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                  <PencilIcon className="h-5 w-5" />
                </Button>
                <Button onClick={() => handleDelete(property.id)} className="text-red-600 hover:text-red-900">
                  <TrashIcon className="h-5 w-5" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <Button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-500 hover:text-gray-700"
        >
          Previous
        </Button>
        <span className="text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => handlePagination(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-500 hover:text-gray-700"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default PropertyList
