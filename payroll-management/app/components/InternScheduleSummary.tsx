"use client"

import { useState, useEffect } from "react"

// Dummy data to simulate intern schedules
const dummyInternSchedules = [
  {
    intern: "John Doe",
    monday: "on-site",
    tuesday: "on-site",
    wednesday: "remote",
    thursday: "on-site",
    friday: "remote",
  },
  {
    intern: "Jane Smith",
    monday: "remote",
    tuesday: "on-site",
    wednesday: "on-site",
    thursday: "remote",
    friday: "on-site",
  },
  {
    intern: "Bob Johnson",
    monday: "on-site",
    tuesday: "remote",
    wednesday: "on-site",
    thursday: "on-site",
    friday: "remote",
  },
]

export default function InternScheduleSummary() {
  const [schedules, setSchedules] = useState(dummyInternSchedules)

  useEffect(() => {
    // Simulate fetching data
    // In a real application, this would be an API call
    setSchedules(dummyInternSchedules)
  }, [])

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Intern Schedule Summary</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Intern</th>
            <th className="border border-gray-300 px-4 py-2">Monday</th>
            <th className="border border-gray-300 px-4 py-2">Tuesday</th>
            <th className="border border-gray-300 px-4 py-2">Wednesday</th>
            <th className="border border-gray-300 px-4 py-2">Thursday</th>
            <th className="border border-gray-300 px-4 py-2">Friday</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.intern}>
              <td className="border border-gray-300 px-4 py-2">{schedule.intern}</td>
              <td className="border border-gray-300 px-4 py-2">{schedule.monday}</td>
              <td className="border border-gray-300 px-4 py-2">{schedule.tuesday}</td>
              <td className="border border-gray-300 px-4 py-2">{schedule.wednesday}</td>
              <td className="border border-gray-300 px-4 py-2">{schedule.thursday}</td>
              <td className="border border-gray-300 px-4 py-2">{schedule.friday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

