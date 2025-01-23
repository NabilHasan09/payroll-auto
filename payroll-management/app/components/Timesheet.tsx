"use client"

import { useState, useEffect } from "react"

interface TimesheetEntry {
  Emplid: string
  EarningCode: string
  Amount: string
  Hours: number
  GrossUp: string
  EarnsBeginDt: string
  EarnsEndDt: string
}

// Dummy data to simulate Kronos integration
const dummyKronosData: TimesheetEntry[] = [
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 13.45,
    GrossUp: "N",
    EarnsBeginDt: "11/16/2024",
    EarnsEndDt: "11/29/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 1.25,
    GrossUp: "N",
    EarnsBeginDt: "11/2/2024",
    EarnsEndDt: "11/15/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 8,
    GrossUp: "N",
    EarnsBeginDt: "11/2/2024",
    EarnsEndDt: "11/15/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 12,
    GrossUp: "N",
    EarnsBeginDt: "11/16/2024",
    EarnsEndDt: "11/29/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 15,
    GrossUp: "N",
    EarnsBeginDt: "11/2/2024",
    EarnsEndDt: "11/15/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 15,
    GrossUp: "N",
    EarnsBeginDt: "11/16/2024",
    EarnsEndDt: "11/29/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 10,
    GrossUp: "N",
    EarnsBeginDt: "9/21/2024",
    EarnsEndDt: "10/4/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 7,
    GrossUp: "N",
    EarnsBeginDt: "11/2/2024",
    EarnsEndDt: "11/15/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 59,
    GrossUp: "N",
    EarnsBeginDt: "11/2/2024",
    EarnsEndDt: "11/15/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 35,
    GrossUp: "N",
    EarnsBeginDt: "11/16/2024",
    EarnsEndDt: "11/29/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 42,
    GrossUp: "N",
    EarnsBeginDt: "11/16/2024",
    EarnsEndDt: "11/29/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 7,
    GrossUp: "N",
    EarnsBeginDt: "10/19/2024",
    EarnsEndDt: "11/1/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 6,
    GrossUp: "N",
    EarnsBeginDt: "11/2/2024",
    EarnsEndDt: "11/15/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 6.44,
    GrossUp: "N",
    EarnsBeginDt: "11/2/2024",
    EarnsEndDt: "11/15/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 28.15,
    GrossUp: "N",
    EarnsBeginDt: "11/2/2024",
    EarnsEndDt: "11/15/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 8.45,
    GrossUp: "N",
    EarnsBeginDt: "10/19/2024",
    EarnsEndDt: "11/1/2024",
  },
]

export default function Timesheet() {
  const [timesheet, setTimesheet] = useState<TimesheetEntry[]>(dummyKronosData)

  useEffect(() => {
    // Simulate fetching data from Kronos
    // In a real application, this would be an API call
    setTimesheet(dummyKronosData)
  }, [])

  const handleAdjustment = (index: number, adjustedHours: number) => {
    setTimesheet((prevTimesheet) =>
      prevTimesheet.map((entry, i) => (i === index ? { ...entry, Hours: adjustedHours } : entry)),
    )
  }

  // Group entries by pay period
  const groupedTimesheet = timesheet.reduce(
    (acc, entry) => {
      const key = `${entry.EarnsBeginDt} - ${entry.EarnsEndDt}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(entry)
      return acc
    },
    {} as Record<string, TimesheetEntry[]>,
  )

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Timesheet</h3>
      {Object.entries(groupedTimesheet).map(([payPeriod, entries]) => (
        <div key={payPeriod} className="mb-8">
          <h4 className="text-lg font-semibold mb-2">Pay Period: {payPeriod}</h4>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Employee ID</th>
                <th className="border border-gray-300 px-4 py-2">Earning Code</th>
                <th className="border border-gray-300 px-4 py-2">Hours</th>
                <th className="border border-gray-300 px-4 py-2">Adjustment</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{entry.Emplid}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.EarningCode}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.Hours}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="number"
                      className="border rounded px-2 py-1 w-20"
                      defaultValue={entry.Hours}
                      onChange={(e) => handleAdjustment(timesheet.indexOf(entry), Number.parseFloat(e.target.value))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

