"use client"

import { useState } from "react"

// Dummy data to simulate pending approvals
const dummyPendingApprovals = [
  {
    id: 1,
    intern: "Gregory Tomchuk",
    date: "2023-07-10",
    adjustment: "Changed hours from 13.45 to 21.45",
    reason: "Remote day",
  },
  {
    id: 2,
    intern: "Hasib Shaif",
    date: "2023-07-11",
    adjustment: "Changed hours from 12 to 20",
    reason: "Kronos error"
  },
  {
    id: 3,
    intern: "Bob Johnson",
    date: "2023-07-12",
    adjustment: "Changed hours from 40 to 65",
    reason: "on-field work"
  },
]

export default function ApprovalWorkflow() {
  const [pendingApprovals, setPendingApprovals] = useState(dummyPendingApprovals)

  const handleApproval = (id: number) => {
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
            <strong>Details:</strong> {approval.adjustment}
          </p>
          <p>
            <strong>Reason:</strong> {approval.reason}
          </p>
          <div className="mt-2">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => handleApproval(approval.id)}
            >
              Approve
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleApproval(approval.id)}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

