import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Properties from "./pages/Properties";

function App() {
  return (
    // <Router>
    //   <DashboardLayout>
    //     <Routes>
    //       <Route path="/" element={<Dashboard />} />
    //       <Route path="/leads" element={<Leads />} />
    //       <Route path="/properties" element={<Properties />} />
    //     </Routes>
    //   </DashboardLayout>
    // </Router>
    <>
    <h1 className="text-red">Vishakkha </h1>
    </>
  );
}

export default App;
