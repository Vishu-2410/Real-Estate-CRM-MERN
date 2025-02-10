import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Left Navigation */}
      <nav className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-2xl mb-4">Real Estate CRM</h2>
        <ul>
          <li>
            <Link to="/leads" className="block p-2 rounded hover:bg-gray-700">
              Leads
            </Link>
          </li>
          <li>
            <Link to="/properties" className="block p-2 rounded hover:bg-gray-700">
              Properties
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="mt-4">Welcome to your Real Estate CRM Dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;
