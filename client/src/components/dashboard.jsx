"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, FileText, Users, MessageSquare, ChevronDown, Plus, Search } from "lucide-react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"

export default function EmployerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [progress, setProgress] = useState(13)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      applications: 24,
      posted: "2 days ago",
      status: "open",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      location: "New York, NY",
      type: "Contract",
      applications: 18,
      posted: "1 week ago",
      status: "open",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      applications: 12,
      posted: "3 days ago",
      status: "open",
    },
    {
      id: 4,
      title: "Product Manager",
      location: "Boston, MA",
      type: "Full-time",
      applications: 9,
      posted: "5 days ago",
      status: "closed",
    },
  ]

  const stats = [
    {
      title: "Active Jobs",
      value: "12",
      icon: <Briefcase className="h-4 w-4 text-emerald-500" />,
      change: "+2 this week",
      trend: "up",
    },
    {
      title: "Total Applications",
      value: "248",
      icon: <FileText className="h-4 w-4 text-violet-500" />,
      change: "+18% this month",
      trend: "up",
    },
    {
      title: "Candidates Shortlisted",
      value: "36",
      icon: <Users className="h-4 w-4 text-amber-500" />,
      change: "5 new today",
      trend: "up",
    },
    {
      title: "Interviews Scheduled",
      value: "8",
      icon: <MessageSquare className="h-4 w-4 text-sky-500" />,
      change: "Next: Today, 2PM",
      trend: "neutral",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Navbar for mobile */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Main content */}
        <main className="flex-1">
          <div className="flex items-center justify-between bg-white p-4 shadow-sm">
            <h1 className="text-xl font-semibold">Employer Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Messages</span>
              </button>
              <div className="relative">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                  <span className="text-sm font-medium">TC</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-1 rounded-lg bg-gray-100 p-1 shadow-sm">
                  {["overview", "jobs", "candidates"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 text-sm font-medium transition-all rounded-md ${
                        activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="hidden sm:block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md">
                      <Plus className="mr-2 h-4 w-4" />
                      Post New Job
                    </button>
                  </motion.div>
                </div>
              </div>

              {activeTab === "overview" && (
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between pb-2">
                            <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                            {stat.icon}
                          </div>
                          <div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-gray-500">{stat.change}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="bg-white rounded-lg shadow-sm">
                      <div className="p-4 border-b">
                        <h2 className="font-semibold">Job Posting Overview</h2>
                        <p className="text-sm text-gray-500">Monitor your active job listings and their performance</p>
                      </div>
                      <div className="p-4">
                        <div className="space-y-8">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center">
                                <span>Profile Completion</span>
                              </div>
                              <span className="font-medium">{progress}%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                              <div
                                className="h-full bg-indigo-600 transition-all duration-500 ease-in-out"
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                              <div className="pb-2">
                                <p className="text-base font-medium">Active Jobs</p>
                              </div>
                              <div>
                                <div className="text-3xl font-bold">12</div>
                                <div className="mt-1 flex items-center text-sm text-gray-500">
                                  <span className="text-emerald-500">+2</span>
                                  <span className="ml-1">from last week</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                              <div className="pb-2">
                                <p className="text-base font-medium">Total Views</p>
                              </div>
                              <div>
                                <div className="text-3xl font-bold">1,248</div>
                                <div className="mt-1 flex items-center text-sm text-gray-500">
                                  <span className="text-emerald-500">+12%</span>
                                  <span className="ml-1">from last month</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                              <div className="pb-2">
                                <p className="text-base font-medium">Avg. Response</p>
                              </div>
                              <div>
                                <div className="text-3xl font-bold">24h</div>
                                <div className="mt-1 flex items-center text-sm text-gray-500">
                                  <span className="text-emerald-500">-2h</span>
                                  <span className="ml-1">from last week</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid gap-4 md:grid-cols-2"
                  >
                    <div className="bg-white rounded-lg shadow-sm">
                      <div className="p-4 border-b">
                        <h2 className="font-semibold">Recent Applications</h2>
                        <p className="text-sm text-gray-500">You have received 12 applications today</p>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-sm font-medium">U{i + 1}</span>
                              </div>
                              <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                  {["Alex Morgan", "Jamie Smith", "Taylor Reed"][i]}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Applied for {["Senior Frontend Developer", "UX/UI Designer", "DevOps Engineer"][i]}
                                </p>
                              </div>
                              <button className="rounded-md bg-white px-3 py-1 text-sm font-medium hover:bg-gray-50 shadow-sm">
                                Review
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 border-t">
                        <button className="w-full text-center text-sm font-medium text-gray-600 hover:text-gray-900">
                          View All Applications
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm">
                      <div className="p-4 border-b">
                        <h2 className="font-semibold">Upcoming Interviews</h2>
                        <p className="text-sm text-gray-500">You have 3 interviews scheduled this week</p>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                                {["10:00", "14:30", "11:15"][i]}
                              </div>
                              <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                  {["Chris Johnson", "Pat Taylor", "Sam Wilson"][i]}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {["Today", "Tomorrow", "Apr 15"][i]} ·{" "}
                                  {["Senior Frontend Developer", "UX/UI Designer", "DevOps Engineer"][i]}
                                </p>
                              </div>
                              <button className="rounded-md bg-white px-3 py-1 text-sm font-medium hover:bg-gray-50 shadow-sm">
                                Join
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 border-t">
                        <button className="w-full text-center text-sm font-medium text-gray-600 hover:text-gray-900">
                          View Calendar
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === "jobs" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Your Job Listings</h2>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Search jobs..."
                        className="w-[200px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
                      />
                      <div className="relative">
                        <button className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50 shadow-sm">
                          Filter
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <AnimatePresence>
                      {jobListings.map((job, index) => (
                        <motion.div
                          key={job.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="bg-white rounded-lg shadow-sm">
                            <div className="p-4 border-b">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{job.title}</h3>
                                <span
                                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    job.status === "open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {job.status === "open" ? "Active" : "Closed"}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500">
                                {job.location} • {job.type} • Posted {job.posted}
                              </p>
                            </div>
                            <div className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="flex flex-col">
                                    <span className="text-sm font-medium">Applications</span>
                                    <span className="text-2xl font-bold">{job.applications}</span>
                                  </div>
                                  <div className="h-10 w-px bg-gray-200"></div>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-medium">Views</span>
                                    <span className="text-2xl font-bold">{job.applications * 12}</span>
                                  </div>
                                  <div className="h-10 w-px bg-gray-200"></div>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-medium">Conversion</span>
                                    <span className="text-2xl font-bold">
                                      {Math.round((job.applications / (job.applications * 12)) * 100)}%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <button className="rounded-md bg-white px-3 py-1 text-sm font-medium hover:bg-gray-50 shadow-sm">
                                    Edit
                                  </button>
                                  <button className="rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-700 shadow-sm">
                                    Manage
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              )}

              {activeTab === "candidates" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Candidate Pool</h2>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Search candidates..."
                        className="w-[200px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
                      />
                      <button className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50 shadow-sm">
                        Advanced Search
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-4 border-b">
                      <h2 className="font-semibold">Talent Search</h2>
                      <p className="text-sm text-gray-500">Find the perfect candidates for your open positions</p>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <label className="block text-sm font-medium mb-1">Skills</label>
                          <input
                            type="text"
                            placeholder="e.g. React, JavaScript, UI Design"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Location</label>
                          <input
                            type="text"
                            placeholder="e.g. Remote, New York, London"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Experience Level</label>
                          <input
                            type="text"
                            placeholder="e.g. Entry, Mid, Senior"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
                          />
                        </div>
                      </div>
                      <button className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md">
                        <Search className="mr-2 h-4 w-4" />
                        Search Candidates
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-4 border-b">
                      <h2 className="font-semibold">Recommended Candidates</h2>
                      <p className="text-sm text-gray-500">Based on your job requirements and company profile</p>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        {[1, 2, 3, 4].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4"
                          >
                            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-sm font-medium">U{i + 1}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">
                                  {["Jordan Lee", "Casey Morgan", "Riley Johnson", "Quinn Smith"][i]}
                                </h3>
                                <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium shadow-sm">
                                  {["98%", "95%", "92%", "90%"][i]} Match
                                </span>
                              </div>
                              <p className="text-sm text-gray-500">
                                {
                                  ["Senior Frontend Developer", "UX/UI Designer", "DevOps Engineer", "Product Manager"][
                                    i
                                  ]
                                }
                              </p>
                              <div className="mt-1 flex flex-wrap gap-1">
                                {[
                                  ["React", "TypeScript", "Next.js"],
                                  ["Figma", "UI Design", "User Research"],
                                  ["AWS", "Kubernetes", "CI/CD"],
                                  ["Agile", "Product Strategy", "Roadmapping"],
                                ][i].map((skill) => (
                                  <span
                                    key={skill}
                                    className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="rounded-md bg-white px-3 py-1 text-sm font-medium hover:bg-gray-50 shadow-sm">
                                View Profile
                              </button>
                              <button className="rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-700 shadow-sm">
                                Contact
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 border-t">
                      <button className="w-full text-center text-sm font-medium text-gray-600 hover:text-gray-900">
                        View All Candidates
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 text-center text-sm text-gray-500 shadow-sm">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div>© 2023 JobConnect. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">
              Help & Support
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}