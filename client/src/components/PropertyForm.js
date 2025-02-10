import React, { useState } from 'react';
import api from '../api';

const PropertyForm = () => {
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || !size || !location || !budget) {
      setError('All fields are required.');
      return;
    }
    try {
      const response = await api.post('/properties', { category, size, location, budget });
      console.log('Property created:', response.data);
    } catch (error) {
      setError('Error creating property.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded">
      <h3 className="text-xl font-semibold mb-4">Create Property</h3>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <select
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Size</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Location</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Budget</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Property
      </button>
    </form>
  );
};

export default PropertyForm;
