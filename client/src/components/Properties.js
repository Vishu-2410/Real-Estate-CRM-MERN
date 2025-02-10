import React, { useState, useEffect } from 'react';
import api from '../api';
import PropertyForm from './PropertyForm';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get('/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Properties</h2>
      <PropertyForm />
      <div className="mt-6">
        <h3 className="text-xl font-medium">Property List</h3>
        <ul>
          {properties.map(property => (
            <li key={property._id} className="border p-4 mt-4 rounded">
              <p>Category: {property.category}</p>
              <p>Location: {property.location}</p>
              <p>Budget: ${property.budget}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Properties;
