"use client"

import { useState } from "react"
import InternScheduleSummary from "../components/InternScheduleSummary"
import ApprovalWorkflow from "../admin/components/ApprovalWorkFlow"

export default function ManagerPortal() {
  const [activeTab, setActiveTab] = useState("summary")

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Manager Portal</h2>
    <div className="mb-4">
      <button
        className={`mr-2 ${activeTab === "summary" ? "bg-red-500 text-white" : "bg-gray-700"} px-4 py-2 rounded`}
        onClick={() => setActiveTab("summary")}
      >
        Intern Schedule Summary
      </button>
      
      <button
        className={`${activeTab === "approvals" ? "bg-red-500 text-white" : "bg-gray-700"} px-4 py-2 rounded`}
        onClick={() => setActiveTab("approvals")}
      >
        Manager Approvals
      </button>
    </div>
      {activeTab === "summary" && <InternScheduleSummary />}
      {activeTab === "approvals" && <ApprovalWorkflow/>}

    </div>
  )
}

