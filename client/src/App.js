import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';  // Added header component
import Leads from './dashboard/leads/page';
import Properties from './dashboard/properties/page';
const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header /> {/* Header included in the layout */}
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/leads" element={<Leads />} />
              <Route path="/properties" element={<Properties />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
