"use client"

import { useState } from "react"
import DataSummary from "../components/DataSummary"
import ReportGenerator from "../components/ReportGenerator"
import CommunicationTools from "../components/CommunicationTools"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("summary")

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="mb-4">
        <button
          className={`mr-2 ${activeTab === "summary" ? "bg-red-500 text-white" : "bg-gray-200"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("summary")}
        >
          Data Summary
        </button>
        <button
          className={`mr-2 ${activeTab === "reports" ? "bg-red-500 text-white" : "bg-gray-200"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("reports")}
        >
          Generate Reports
        </button>
        <button
          className={`${activeTab === "communication" ? "bg-red-500 text-white" : "bg-gray-200"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("communication")}
        >
          Communication Tools
        </button>
      </div>
      {activeTab === "summary" && <DataSummary />}
      {activeTab === "reports" && <ReportGenerator />}
      {activeTab === "communication" && <CommunicationTools />}
    </div>
  )
}

