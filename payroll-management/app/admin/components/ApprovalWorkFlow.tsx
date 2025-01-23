"use client"

import { useState } from "react"

// Dummy data to simulate pending approvals
const dummyPendingApprovals = [
  {
    id: 1,
    intern: "John Doe",
    date: "2023-07-10",
    type: "Timesheet Adjustment",
    details: "Changed hours from 7.5 to 8",
  },
  {
    id: 2,
    intern: "Jane Smith",
    date: "2023-07-11",
    type: "Remote Day Request",
    details: "Requesting to work remotely on Friday",
  },
  {
    id: 3,
    intern: "Bob Johnson",
    date: "2023-07-12",
    type: "Overtime Request",
    details: "Requesting approval for 2 hours overtime",
  },
]

export default function ApprovalWorkflow() {
  const [pendingApprovals, setPendingApprovals] = useState(dummyPendingApprovals)

  const handleApproval = (id: number, approved: boolean) => {
    // In a real application, this would send an API request
    setPendingApprovals(pendingApprovals.filter((approval) => approval.id !== id))
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Pending Approvals</h3>
      {pendingApprovals.map((approval) => (
        <div key={approval.id} className="border p-4 mb-4 rounded">
          <p>
            <strong>Intern:</strong> {approval.intern}
          </p>
          <p>
            <strong>Date:</strong> {approval.date}
          </p>
          <p>
            <strong>Type:</strong> {approval.type}
          </p>
          <p>
            <strong>Details:</strong> {approval.details}
          </p>
          <div className="mt-2">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => handleApproval(approval.id, true)}
            >
              Approve
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleApproval(approval.id, false)}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

