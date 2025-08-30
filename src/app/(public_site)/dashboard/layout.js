'use client'

import Sidebar from "./components/Sidebar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-yellow-900 text-white pt-[60px]">
      {/* Sidebar always visible on dashboard routes */}
      <Sidebar />

      {/* Page content */}
      <main className="overflow-scroll w-full bg-gray-300 flex justify-center items-center">
        {children}
      </main>
    </div>
  )
}
