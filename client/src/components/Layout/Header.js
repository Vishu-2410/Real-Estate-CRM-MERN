import { Bell, Menu, UserCircle } from "lucide-react"; // Lucide Icons

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600 shadow-md">
      {/* Mobile Menu Button (Visible on Small Screens) */}
      <button className="text-gray-600 focus:outline-none lg:hidden">
        <Menu className="h-6 w-6" />
      </button>

      {/* Right-side Icons */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="text-gray-600 hover:text-indigo-600 transition duration-200 focus:outline-none">
          <Bell className="h-6 w-6" />
        </button>

        {/* User Profile Icon */}
        <div className="relative">
          <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none hover:ring-2 hover:ring-indigo-600">
            <UserCircle className="h-8 w-8 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
