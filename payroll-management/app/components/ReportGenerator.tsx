"use client"

import { useState } from "react"

export default function ReportGenerator() {
  const [reportType, setReportType] = useState("adjustments")
  const [dateRange, setDateRange] = useState({ start: "", end: "" })

  const handleGenerateReport = () => {
    // In a real application, this would trigger an API call to generate the report
    console.log(`Generating ${reportType} report for date range: ${dateRange.start} to ${dateRange.end}`)
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Report Generator</h3>
      <div className="mb-4">
        <label className="block mb-2">Report Type:</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        >
          <option value="adjustments">Adjustments Report</option>
          <option value="discrepancies">Discrepancies Report</option>
          <option value="payroll">Payroll Data Report</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Start Date:</label>
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">End Date:</label>
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <button onClick={handleGenerateReport} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate Report
      </button>
    </div>
  )
}

