"use client"

import { useState } from "react"

// Dummy data to simulate notifications
const dummyNotifications = [
  {
    id: 1,
    message: "Your timesheet for last week has discrepancies. Please review and submit adjustments.",
    read: false,
  },
  { id: 2, message: "Your remote work request for Friday has been approved.", read: true },
  { id: 3, message: "Reminder: Submit your timesheet by end of day today.", read: false },
]

export default function Notifications() {
  const [notifications, setNotifications] = useState(dummyNotifications)

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Notifications</h3>
      {notifications.map((notif) => (
        <div key={notif.id} className={`p-4 mb-2 rounded ${notif.read ? "bg-green-500" : "bg-blue-500"}`}>
          <p>{notif.message}</p>
          {!notif.read && (
            <button className="mt-2 text-sm text-black font-bold" onClick={() => markAsRead(notif.id)}>
              Mark as read
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

