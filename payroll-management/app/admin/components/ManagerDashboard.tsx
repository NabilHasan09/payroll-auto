"use client"

import { useState, useEffect } from "react"

interface InternTimesheet {
  internId: string
  internName: string
  payPeriod: string
  totalHours: number
  adjustedHours: number
  status: "pending" | "approved" | "rejected"
}

// Dummy function to simulate fetching intern timesheet data
const fetchInternTimesheets = async (): Promise<InternTimesheet[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            internId: "123456",
            internName: "Gregory Tomchuk",
            payPeriod: "11/16/2024 - 11/29/2024",
            totalHours: 80,
            adjustedHours: 82,
            status: "pending",
          },
          {
            internId: "234567",
            internName: "Hasib Shaif",
            payPeriod: "11/16/2024 - 11/29/2024",
            totalHours: 75,
            adjustedHours: 75,
            status: "approved",
          },
          {
            internId: "345678",
            internName: "Bob Johnson",
            payPeriod: "11/16/2024 - 11/29/2024",
            totalHours: 80,
            adjustedHours: 100,
            status: "rejected",
          },
        ]),
      500,
    )
  })
}

export default function ManagerDashboard() {
  const [timesheets, setTimesheets] = useState<InternTimesheet[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("all")

  useEffect(() => {
    const loadTimesheets = async () => {
      setLoading(true)
      const data = await fetchInternTimesheets()
      setTimesheets(data)
      setLoading(false)
    }
    loadTimesheets()
  }, [])

  const filteredTimesheets = timesheets.filter((timesheet) => filter === "all" || timesheet.status === filter)

  const handleApproval = (internId: string, status: "approved" | "rejected") => {
    setTimesheets((prevTimesheets) =>
      prevTimesheets.map((timesheet) => (timesheet.internId === internId ? { ...timesheet, status } : timesheet)),
    )
  }

  if (loading) {
    return <div>Loading dashboard data...</div>
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Admin Interns</h3>
      <div className="mb-4">
        <label className="mr-2">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as "all" | "pending" | "approved" | "rejected")}
          className="border rounded px-2 py-1 bg-gray-800 text-white"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <table className="w-full border-collapse border border-gray-600">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-600 px-4 py-2">InternId</th>
            <th className="border border-gray-600 px-4 py-2">Intern Name</th>
            <th className="border border-gray-600 px-4 py-2">Pay Period</th>
            <th className="border border-gray-600 px-4 py-2">Total Hours</th>
            <th className="border border-gray-600 px-4 py-2">Adjusted Hours</th>
            <th className="border border-gray-600 px-4 py-2">Status</th>
            <th className="border border-gray-600 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTimesheets.map((timesheet) => (
            <tr key={timesheet.internId} className="bg-gray-700">
              <td className="border border-gray-600 px-4 py-2">{timesheet.internId}</td>
              <td className="border border-gray-600 px-4 py-2">{timesheet.internName}</td>
              <td className="border border-gray-600 px-4 py-2">{timesheet.payPeriod}</td>
              <td className="border border-gray-600 px-4 py-2">{timesheet.totalHours}</td>
              <td className="border border-gray-600 px-4 py-2">{timesheet.adjustedHours}</td>
              <td className="border border-gray-600 px-4 py-2">{timesheet.status}</td>
              <td className="border border-gray-600 px-4 py-2">
                {timesheet.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleApproval(timesheet.internId, "approved")}
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleApproval(timesheet.internId, "rejected")}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

