"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react"
import CreateLeadModal from "../../components/CreateLeadModal"
import EditLeadModal from "../../components/EditLeadModal"

export default function Leads() {
  const [leads, setLeads] = useState([
    { id: "1", name: "John Doe", phoneNumber: "123-456-7890" },
    { id: "2", name: "Jane Smith", phoneNumber: "987-654-3210" },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editingLead, setEditingLead] = useState(null)

  const filteredLeads = leads.filter(
    (lead) => lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || lead.phoneNumber.includes(searchTerm),
  )

  const handleCreate = (newLead) => {
    setLeads([...leads, { ...newLead, id: Date.now().toString() }])
    setIsCreateModalOpen(false)
  }

  const handleEdit = (updatedLead) => {
    setLeads(leads.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead)))
    setIsEditModalOpen(false)
  }

  const handleDelete = (id) => {
    setLeads(leads.filter((lead) => lead.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Leads</h1>
        <Button onClick={() => setIsCreateModalOpen(true)}>Create Lead</Button>
      </div>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search leads..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLeads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.phoneNumber}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingLead(lead)
                    setIsEditModalOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDelete(lead.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CreateLeadModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onCreate={handleCreate} />
      {editingLead && (
        <EditLeadModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onEdit={handleEdit}
          lead={editingLead}
        />
      )}
    </div>
  )
}
