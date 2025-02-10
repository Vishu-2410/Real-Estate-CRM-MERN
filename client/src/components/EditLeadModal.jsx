"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EditLeadModal({ isOpen, onClose, onEdit, lead }) {
  const [name, setName] = useState(lead.name)
  const [phoneNumber, setPhoneNumber] = useState(lead.phoneNumber)

  useEffect(() => {
    setName(lead.name)
    setPhoneNumber(lead.phoneNumber)
  }, [lead])

  const handleSubmit = (e) => {
    e.preventDefault()
    onEdit({ ...lead, name, phoneNumber })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Lead</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit">Update Lead</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
