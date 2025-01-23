"use client"

import { useState } from "react"
import ApprovalWorkflow from "../components/ApprovalWorkFlow"
import InternScheduleSummary from "../components/InternScheduleSummary"

export default function ManagerPortal() {
  const [activeTab, setActiveTab] = useState("approvals")

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manager Portal</h2>
      <div className="mb-4">
        <button
          className={`mr-2 ${activeTab === "approvals" ? "bg-green-500 text-white" : "bg-gray-200"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("approvals")}
        >
          Approvals
        </button>
        <button
          className={`${activeTab === "summary" ? "bg-green-500 text-white" : "bg-gray-200"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("summary")}
        >
          Intern Schedule Summary
        </button>
      </div>
      {activeTab === "approvals" && <ApprovalWorkflow />}
      {activeTab === "summary" && <InternScheduleSummary />}
    </div>
  )
}

