'use client'
import { useState } from "react"
import Link from "next/link"

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="relative h-full">
      {/* Sidebar */}
      <div
        className={`flex h-full ${
          collapsed ? "w-[60px]" : "w-[250px]"
        } bg-gray-800 transition-all duration-300 flex-col pt-8 gap-6 text-sm`}
      >
        {!collapsed && (
          <>
            <Link
              className="flex items-center justify-center w-full text-center hover:bg-gray-700 py-2 rounded transition"
              href="/dashboard/register/hacker"
            >
              Registration
            </Link>
            <Link
              className="flex items-center justify-center w-full text-center hover:bg-gray-700 py-2 rounded transition"
              href="/dashboard/register/contributor"
            >
              Mentors, Volunteers, and Judges
            </Link>
          </>
        )}
      </div>

      {/* Toggle Handle (sticks to right border, vertically centered) */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-1/2 -right-1.5 transform -translate-y-1/2 
                   w-3 h-12 bg-gray-700 text-white flex items-center justify-center 
                   cursor-pointer rounded-r-md shadow-lg hover:bg-gray-600 transition"
      >
        {collapsed ? "»" : "«"}
      </div>
    </div>
  )
}

export default Sidebar
