"use client"

import { useState } from "react"
import Input from "../common/Input"
import Select from "../common/Select"

function PropertySearch({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("")

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearch(term)
  }

  const handleFilter = (e) => {
    const category = e.target.value
    setFilterCategory(category)
    onFilter(category)
  }

  return (
    <div className="flex space-x-4 mb-4">
      <Input
        type="text"
        placeholder="Search properties"
        value={searchTerm}
        onChange={handleSearch}
        className="flex-grow"
      />
      <Select value={filterCategory} onChange={handleFilter} className="w-48">
        <option value="">All Categories</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Land">Land</option>
      </Select>
    </div>
  )
}

export default PropertySearch

