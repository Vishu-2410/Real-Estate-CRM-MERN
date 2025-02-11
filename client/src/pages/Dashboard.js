"use client";

import { useState, useEffect } from "react";
import { Users, Building, DollarSign, BarChart } from "lucide-react"; // Using Lucide icons
import Button from "../components/common/Button";
import LeadList from "../components/Leads/LeadList";
import PropertyList from "../components/Properties/PropertyList";

function Dashboard() {
  const [metrics, setMetrics] = useState({
    totalLeads: 0,
    totalProperties: 0,
    totalRevenue: 0,
    conversionRate: 0,
  });

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const response = await fetch("/api/dashboard-metrics"); // Replace with actual API URL
        if (!response.ok) throw new Error("Failed to fetch metrics");
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    }

    fetchMetrics();
  }, []);

  const MetricCard = ({ title, value, Icon }) => (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4">
      <Icon className="h-10 w-10 text-blue-500" /> {/* Bigger & colored icon for better visibility */}
      <div>
        <dt className="text-sm font-medium text-gray-500">{title}</dt>
        <dd className="text-2xl font-semibold text-gray-900">{value}</dd>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold text-gray-900 text-center">Dashboard</h1>

      {/* Metrics Section - Properly Aligned */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Leads" value={metrics.totalLeads} Icon={Users} />
        <MetricCard title="Total Properties" value={metrics.totalProperties} Icon={Building} />
        <MetricCard title="Total Revenue" value={`$${metrics.totalRevenue.toLocaleString()}`} Icon={DollarSign} />
        <MetricCard title="Conversion Rate" value={`${metrics.conversionRate}%`} Icon={BarChart} />
      </div>

      {/* Recent Leads & Properties Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Recent Leads</h2>
            <Button onClick={() => window.location.href = "/leads"}>View All</Button>
          </div>
          <LeadList limit={5} />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Recent Properties</h2>
            <Button onClick={() => window.location.href = "/properties"}>View All</Button>
          </div>
          <PropertyList limit={5} />
        </div>
      </div>

      {/* Action Buttons - Centered & Well Spaced */}
      <div className="flex justify-center space-x-6">
        <Button onClick={() => window.location.href = "/add-lead"}>Add New Lead</Button>
        <Button onClick={() => window.location.href = "/add-property"}>Add New Property</Button>
      </div>
    </div>
  );
}

export default Dashboard;
