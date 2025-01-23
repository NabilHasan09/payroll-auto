"use client"

import { useState } from "react"
import Timesheet from "../components/Timesheet"
import RemoteSchedule from "../components/RemoteSchedule"
import Notifications from "../components/Notifications"

export default function InternPortal() {
  const [activeTab, setActiveTab] = useState("timesheet")
  const employeeId = "123456" // This would typically come from authentication

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Intern Portal</h2>
      <div className="mb-4">
        <button
          className={`mr-2 ${activeTab === "timesheet" ? "bg-blue-600" : "bg-gray-700"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("timesheet")}
        >
          Timesheet
        </button>
        <button
          className={`mr-2 ${activeTab === "schedule" ? "bg-blue-600" : "bg-gray-700"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("schedule")}
        >
          Remote Schedule
        </button>
        <button
          className={`${activeTab === "notifications" ? "bg-blue-600" : "bg-gray-700"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
      </div>
      {activeTab === "timesheet" && <Timesheet employeeId={employeeId} />}
      {activeTab === "schedule" && <RemoteSchedule/>}
      {activeTab === "notifications" && <Notifications />}
    </div>
  )
}

