import Link from "next/link"
import { Home, Users, Building } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link
          href="/dashboard"
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/dashboard/leads"
          className="flex items-center space-x-2 px-4 py-2 mt-5 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          <Users className="h-5 w-5" />
          <span>Leads</span>
        </Link>
        <Link
          href="/dashboard/properties"
          className="flex items-center space-x-2 px-4 py-2 mt-5 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          <Building className="h-5 w-5" />
          <span>Properties</span>
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar

