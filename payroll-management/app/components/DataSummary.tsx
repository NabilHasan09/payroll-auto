"use client"

import { useState, useEffect } from "react"

// Dummy data to simulate consolidated data from Kronos and submitted timesheets
const dummyConsolidatedData = [
  { intern: "Gregory Tomchuk", department: "IT", totalHours: 80, adjustments: 2, flagged: false },
  { intern: "Hasib Shaif", department: "Marketing", totalHours: 75, adjustments: 0, flagged: false },
  { intern: "Bob Johnson", department: "Finance", totalHours: 80, adjustments: 2, flagged: true },
]

export default function DataSummary() {
  const [consolidatedData, setConsolidatedData] = useState(dummyConsolidatedData)

  useEffect(() => {
    // Simulate fetching consolidated data
    // In a real application, this would be an API call
    setConsolidatedData(dummyConsolidatedData)
  }, [])

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Data Summary</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-600 px-4 py-2">Intern</th>
            <th className="border border-gray-600 px-4 py-2">Total Hours</th>
            <th className="border border-gray-600 px-4 py-2">Adjustments</th>
            <th className="border border-gray-600 px-4 py-2">Flagged</th>
          </tr>
        </thead>
        <tbody>
          {consolidatedData.map((data) => (
            <tr key={data.intern} className={data.flagged ? "bg-red-400" : "bg-gray-700"}>
              <td className="border border-gray-600 px-4 py-2">{data.intern}</td>
              <td className="border border-gray-600 px-4 py-2">{data.totalHours}</td>
              <td className="border border-gray-600 px-4 py-2">{data.adjustments}</td>
              <td className="border border-gray-600 px-4 py-2">{data.flagged ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

