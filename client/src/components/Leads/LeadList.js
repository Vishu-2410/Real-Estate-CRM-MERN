"use client";

import { useState, useEffect } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import Button from "../common/Button";

function LeadList({ searchTerm }) {
  const [leads, setLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/leads?page=${currentPage}`);
        if (!response.ok) throw new Error("Failed to fetch leads");

        const data = await response.json();
        setLeads(data.leads);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, [currentPage]);

  const handleEdit = (leadId) => {
    console.log("Edit lead:", leadId);
  };

  const handleDelete = async (leadId) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/leads/${leadId}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete lead");

      setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== leadId));
    } catch (error) {
      console.error("Error deleting lead:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : leads.length === 0 ? (
            <tr>
              <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                No leads found.
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
              <tr key={lead.id}>
                <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{lead.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button onClick={() => handleEdit(lead.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <PencilIcon className="h-5 w-5" />
                  </Button>
                  <Button onClick={() => handleDelete(lead.id)} className="text-red-600 hover:text-red-900">
                    <TrashIcon className="h-5 w-5" />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-gray-600 hover:text-gray-900"
          >
            Previous
          </Button>
          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-gray-600 hover:text-gray-900"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

export default LeadList;
