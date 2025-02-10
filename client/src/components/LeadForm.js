import React, { useState } from 'react';
import api from '../api';

const LeadForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setError('Name and Phone are required.');
      return;
    }
    try {
      const response = await api.post('/leads', { name, phone });
      console.log('Lead created:', response.data);
    } catch (error) {
      setError('Error creating lead.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded">
      <h3 className="text-xl font-semibold mb-4">Create Lead</h3>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Lead
      </button>
    </form>
  );
};

export default LeadForm;
