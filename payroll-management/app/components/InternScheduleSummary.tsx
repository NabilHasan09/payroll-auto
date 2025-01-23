"use client"

import { useState, useEffect } from "react"

interface InternSchedule {
  intern: string
  monday: { type: string; hours: number }
  tuesday: { type: string; hours: number }
  wednesday: { type: string; hours: number }
  thursday: { type: string; hours: number }
  friday: { type: string; hours: number }
}

// Dummy data to simulate intern schedules
const dummyInternSchedules: InternSchedule[] = [
  {
    intern: "Gregory Tomchuk",
    monday: { type: "on-site", hours: 8 },
    tuesday: { type: "on-site", hours: 8 },
    wednesday: { type: "remote", hours: 7 },
    thursday: { type: "on-site", hours: 8 },
    friday: { type: "remote", hours: 7 },
  },
  {
    intern: "Hasib Shaif",
    monday: { type: "remote", hours: 7 },
    tuesday: { type: "on-site", hours: 8 },
    wednesday: { type: "on-site", hours: 8 },
    thursday: { type: "remote", hours: 7 },
    friday: { type: "on-site", hours: 8 },
  },
  {
    intern: "Bob Johnson",
    monday: { type: "on-site", hours: 8 },
    tuesday: { type: "remote", hours: 7 },
    wednesday: { type: "on-site", hours: 8 },
    thursday: { type: "on-site", hours: 8 },
    friday: { type: "remote", hours: 7 },
  },
]

export default function InternScheduleSummary() {
  const [schedules, setSchedules] = useState<InternSchedule[]>(dummyInternSchedules)

  useEffect(() => {
    // Simulate fetching data
    // In a real application, this would be an API call
    setSchedules(dummyInternSchedules)
  }, [])

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Intern Schedule Summary</h3>
      <table className="w-full border-collapse border border-gray-600">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-600 px-4 py-2">Intern</th>
            <th className="border border-gray-600 px-4 py-2">Monday</th>
            <th className="border border-gray-600 px-4 py-2">Tuesday</th>
            <th className="border border-gray-600 px-4 py-2">Wednesday</th>
            <th className="border border-gray-600 px-4 py-2">Thursday</th>
            <th className="border border-gray-600 px-4 py-2">Friday</th>
            <th className="border border-gray-600 px-4 py-2">Total Hours</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.intern} className="bg-gray-700">
              <td className="border border-gray-600 px-4 py-2">{schedule.intern}</td>
              {["monday", "tuesday", "wednesday", "thursday", "friday"].map((day) => (
                <td key={day} className="border border-gray-600 px-4 py-2">
                  {schedule[day as keyof InternSchedule].type} ({schedule[day as keyof InternSchedule].hours}h)
                </td>
              ))}
              <td className="border border-gray-600 px-4 py-2 font-bold">
                {Object.values(schedule).reduce((total, day) => {
                  if (typeof day === "object" && "hours" in day) {
                    return total + day.hours
                  }
                  return total
                }, 0)}
                h
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

