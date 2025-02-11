import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar: Fixed width, full height on large screens */}
      <div className="hidden lg:block w-64 bg-indigo-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        
        {/* Content Area: Centered and scrollable */}
        <main className="flex-1 overflow-auto bg-gray-100 px-6 py-8">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
