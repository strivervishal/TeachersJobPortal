"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Building2, FileText, Home, Menu, Plus, Search } from "lucide-react"

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      {/* Mobile menu button */}
      <div className="flex items-center justify-between border-b bg-white px-4 py-2 lg:hidden">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-indigo-600" />
          <span className="text-xl font-bold">JobConnect</span>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              <button
                className="flex w-full items-center justify-start rounded-md px-3 py-2 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </button>
              <button
                className="flex w-full items-center justify-start rounded-md px-3 py-2 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Post Job
              </button>
              <button
                className="flex w-full items-center justify-start rounded-md px-3 py-2 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Search className="mr-2 h-4 w-4" />
                Search Candidates
              </button>
              <button
                className="flex w-full items-center justify-start rounded-md px-3 py-2 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText className="mr-2 h-4 w-4" />
                Manage Applications
              </button>
              <button
                className="flex w-full items-center justify-start rounded-md px-3 py-2 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Building2 className="mr-2 h-4 w-4" />
                Company Profile
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
