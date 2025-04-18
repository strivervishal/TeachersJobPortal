"use client"
import { motion } from "framer-motion"
import { Briefcase, Building2, ChevronDown, FileText, Home, LogOut, Plus, Search, Settings } from "lucide-react"

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: isSidebarOpen ? 240 : 80 }}
      className={`hidden lg:flex flex-col shadow-lg bg-white ${isSidebarOpen ? "items-start" : "items-center"}`}
    >
      <div
        className={`flex h-14 items-center shadow-sm px-4 w-full ${
          isSidebarOpen ? "justify-between" : "justify-center"
        }`}
      >
        <div className={`flex items-center gap-2 ${!isSidebarOpen && "hidden"}`}>
          <Briefcase className="h-6 w-6 text-indigo-600" />
          <span className="text-xl font-bold">JobConnect</span>
        </div>
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${!isSidebarOpen && "rotate-90"}`} />
        </button>
      </div>

      <nav className="flex flex-col gap-1 p-2 w-full">
        <button
          className={`flex rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${!isSidebarOpen ? "justify-center px-2" : "justify-start"}`}
        >
          <Home className={`h-4 w-4 ${isSidebarOpen && "mr-2"}`} />
          {isSidebarOpen && <span>Dashboard</span>}
        </button>
        <button
          className={`flex rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${!isSidebarOpen ? "justify-center px-2" : "justify-start"}`}
        >
          <Plus className={`h-4 w-4 ${isSidebarOpen && "mr-2"}`} />
          {isSidebarOpen && <span>Post Job</span>}
        </button>
        <button
          className={`flex rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${!isSidebarOpen ? "justify-center px-2" : "justify-start"}`}
        >
          <Search className={`h-4 w-4 ${isSidebarOpen && "mr-2"}`} />
          {isSidebarOpen && <span>Search Candidates</span>}
        </button>
        <button
          className={`flex rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${!isSidebarOpen ? "justify-center px-2" : "justify-start"}`}
        >
          <FileText className={`h-4 w-4 ${isSidebarOpen && "mr-2"}`} />
          {isSidebarOpen && <span>Manage Applications</span>}
        </button>
        <button
          className={`flex rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${!isSidebarOpen ? "justify-center px-2" : "justify-start"}`}
        >
          <Building2 className={`h-4 w-4 ${isSidebarOpen && "mr-2"}`} />
          {isSidebarOpen && <span>Company Profile</span>}
        </button>
      </nav>

      <div className="mt-auto p-2 w-full">
        <button
          className={`flex w-full rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 ${!isSidebarOpen ? "justify-center px-2" : "justify-start"}`}
        >
          <Settings className={`h-4 w-4 ${isSidebarOpen && "mr-2"}`} />
          {isSidebarOpen && <span>Settings</span>}
        </button>
        <button
          className={`flex w-full rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 ${!isSidebarOpen ? "justify-center px-2" : "justify-start"}`}
        >
          <LogOut className={`h-4 w-4 ${isSidebarOpen && "mr-2"}`} />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </motion.aside>
  )
}