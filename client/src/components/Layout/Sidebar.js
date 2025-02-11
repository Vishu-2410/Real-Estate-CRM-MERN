import { Link, useLocation } from "react-router-dom";
import { Home, Users, Building } from "lucide-react"; // Lucide Icons

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Leads", icon: Users, path: "/leads" },
    { name: "Properties", icon: Building, path: "/properties" },
  ];

  return (
    <div className="flex flex-col w-64 bg-gray-800 h-screen">
      {/* Logo / Header */}
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-2xl font-bold text-gray-100">Real Estate CRM</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col py-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center h-12 pl-4 gap-3 transform hover:translate-x-2 transition-transform ease-in duration-200 rounded-md ${
                location.pathname === item.path
                  ? "text-gray-100 bg-gray-700"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5 text-gray-300" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
