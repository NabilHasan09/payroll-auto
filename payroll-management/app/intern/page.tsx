"use client"

import { useState } from "react"
import Timesheet from "../components/Timesheet"
import RemoteSchedule from "../components/RemoteSchedule"
import Notifications from "../components/Notifications"

export default function InternPortal() {
  const [activeTab, setActiveTab] = useState("timesheet")

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Intern Portal</h2>
      <div className="mb-4">
        <button
          className={`mr-2 ${activeTab === "timesheet" ? "bg-blue-500 text-white" : "bg-gray-200"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("timesheet")}
        >
          Timesheet
        </button>
        <button
          className={`mr-2 ${activeTab === "schedule" ? "bg-blue-500 text-white" : "bg-gray-200"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("schedule")}
        >
          Remote Schedule
        </button>
        <button
          className={`${activeTab === "notifications" ? "bg-blue-500 text-white" : "bg-gray-200"} px-4 py-2 rounded`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
      </div>
      {activeTab === "timesheet" && <Timesheet />}
      {activeTab === "schedule" && <RemoteSchedule />}
      {activeTab === "notifications" && <Notifications />}
    </div>
  )
}

