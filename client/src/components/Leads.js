import React, { useState, useEffect } from 'react';
import api from '../api';
import LeadForm from './LeadForm';

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await api.get('/leads');
        setLeads(response.data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Leads</h2>
      <LeadForm />
      <div className="mt-6">
        <h3 className="text-xl font-medium">Lead List</h3>
        <ul>
          {leads.map(lead => (
            <li key={lead._id} className="border p-4 mt-4 rounded">
              <p>Name: {lead.name}</p>
              <p>Phone: {lead.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leads;
