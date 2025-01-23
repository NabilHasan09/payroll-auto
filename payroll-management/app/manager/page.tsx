"use client"

import { useState } from "react"
import InternScheduleSummary from "../components/InternScheduleSummary"

export default function ManagerPortal() {
  const [activeTab, setActiveTab] = useState("summary")

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Manager Portal</h2>
      <div className="mb-4">
        <button
          className={`${activeTab === "summary" ? "bg-green-500 text-white" : "bg-gray-200"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("summary")}
        >
          Intern Schedule Summary
        </button>
      </div>
      {activeTab === "summary" && <InternScheduleSummary />}
    </div>
  )
}

