import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Properties from './components/Properties';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </Router>
  );
};

export default App;
