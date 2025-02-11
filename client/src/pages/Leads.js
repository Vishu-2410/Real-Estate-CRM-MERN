"use client"

import { useState } from "react"
import LeadList from "../components/Leads/LeadList"
import LeadForm from "../components/Leads/LeadForm"
import LeadSearch from "../components/Leads/LeadSearch"
import Button from "../components/common/Button"

function Leads() {
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Leads</h1>
        <Button onClick={() => setShowLeadForm(true)}>Add New Lead</Button>
      </div>
      <LeadSearch onSearch={handleSearch} />
      <LeadList searchTerm={searchTerm} />
      {showLeadForm && <LeadForm onClose={() => setShowLeadForm(false)} />}
    </div>
  )
}

export default Leads

