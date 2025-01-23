"use client"

import { useState } from "react"

export default function CommunicationTools() {
  const [message, setMessage] = useState("")
  const [recipient, setRecipient] = useState("")

  const handleSendMessage = () => {
    // In a real application, this would trigger an API call to send the message
    console.log(`Sending message to ${recipient}: ${message}`)
    setMessage("")
    setRecipient("")
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Communication Tools</h3>
      <div className="mb-4">
        <label className="block mb-2">Recipient:</label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="border rounded px-2 py-1 w-full bg-gray-700"
          placeholder="Enter recipient name or email"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded px-2 py-1 w-full h-32 bg-gray-700"
          placeholder="Type your message here"
        />
      </div>
      <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded ">
        Send Message
      </button>
    </div>
  )
}

