"use client"

import { useState } from "react"
import Input from "../common/Input"

function LeadSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearch(term)
  }

  return (
    <div className="mb-4">
      <Input
        type="text"
        placeholder="Search leads by name or phone number"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full"
      />
    </div>
  )
}

export default LeadSearch

