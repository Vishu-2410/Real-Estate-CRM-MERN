import { Bell, User } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Real Estate Management</h1>
        <div className="flex items-center">
          <button className="p-1 rounded-full text-gray-400 hover:bg-gray-100">
            <Bell className="h-6 w-6" />
          </button>
          <button className="ml-4 p-1 rounded-full text-gray-400 hover:bg-gray-100">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

