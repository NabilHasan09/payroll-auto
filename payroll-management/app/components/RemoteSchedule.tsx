"use client"

import { useState } from "react"

export default function RemoteSchedule() {
  const [schedule, setSchedule] = useState({
    monday: "on-site",
    tuesday: "on-site",
    wednesday: "remote",
    thursday: "on-site",
    friday: "remote",
  })

  const handleScheduleChange = (day: string, value: string) => {
    setSchedule({ ...schedule, [day]: value })
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Remote Schedule</h3>
      {Object.entries(schedule).map(([day, status]) => (
        <div key={day} className="mb-2">
          <label className="mr-2 capitalize">{day}:</label>
          <select
            value={status}
            onChange={(e) => handleScheduleChange(day, e.target.value)}
            className="bg-gray-700 px-2 py-1 rounded"
          >
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
          </select>
        </div>
      ))}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit Schedule</button>
    </div>
  )
}

