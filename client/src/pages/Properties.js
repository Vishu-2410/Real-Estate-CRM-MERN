"use client"

import { useState } from "react"
import PropertyList from "../components/Properties/PropertyList"
import PropertyForm from "../components/Properties/PropertyForm"
import PropertySearch from "../components/Properties/PropertySearch"
import Button from "../components/common/Button"

function Properties() {
  const [showPropertyForm, setShowPropertyForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("")

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleFilter = (category) => {
    setFilterCategory(category)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
        <Button onClick={() => setShowPropertyForm(true)}>Add New Property</Button>
      </div>
      <PropertySearch onSearch={handleSearch} onFilter={handleFilter} />
      <PropertyList searchTerm={searchTerm} filterCategory={filterCategory} />
      {showPropertyForm && <PropertyForm onClose={() => setShowPropertyForm(false)} />}
    </div>
  )
}

export default Properties

