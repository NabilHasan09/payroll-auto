import { useState, useEffect } from "react"

interface TimesheetEntry {
  Emplid: string
  EarningCode: string
  Amount: string
  Hours: number
  GrossUp: string
  EarnsBeginDt: string
  EarnsEndDt: string
  AdjustedHours?: number
  AdjustmentReason?: string
}

// Dummy function to simulate fetching Kronos data
const fetchKronosData = async (): Promise<TimesheetEntry[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyKronosData), 500)
  })
}

const dummyKronosData: TimesheetEntry[] = [
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 13.45,
    GrossUp: "N",
    EarnsBeginDt: "11/8/2024",
    EarnsEndDt: "11/21/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 20.25,
    GrossUp: "N",
    EarnsBeginDt: "11/2/2024",
    EarnsEndDt: "11/15/2024",
  },
  {
    Emplid: "123456",
    EarningCode: "TRT",
    Amount: "",
    Hours: 43.57,
    GrossUp: "N",
    EarnsBeginDt: "12/09/2024",
    EarnsEndDt: "11/22/2024",
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
]

export default function Timesheet() {
  const [timesheet, setTimesheet] = useState<TimesheetEntry[]>([])
  const [loading, setLoading] = useState(true)

  // Local state for editing the reason text before committing
  const [reasonInputs, setReasonInputs] = useState<{ [index: number]: string }>({})

  useEffect(() => {
    const loadTimesheet = async () => {
      setLoading(true)
      const data = await fetchKronosData()
      setTimesheet(data)
      setLoading(false)
    }
    loadTimesheet()
  }, [])

  const handleAdjustment = (index: number, adjustedHours: number) => {
    setTimesheet((prevTimesheet) =>
      prevTimesheet.map((entry, i) =>
        i === index
          ? { ...entry, AdjustedHours: adjustedHours }
          : entry
      )
    )
  }

  // Called when the user clicks the Enter button
  const handleAdjustmentReason = (index: number, reason: string) => {
    setTimesheet((prevTimesheet) =>
      prevTimesheet.map((entry, i) =>
        i === index
          ? { ...entry, AdjustmentReason: reason }
          : entry
      )
    )
  }

  const groupedTimesheet = timesheet.reduce((acc, entry) => {
    const key = `${entry.EarnsBeginDt} - ${entry.EarnsEndDt}`
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(entry)
    return acc
  }, {} as Record<string, TimesheetEntry[]>)

  if (loading) {
    return <div>Loading timesheet data...</div>
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Timesheet</h3>
      {Object.entries(groupedTimesheet).map(([payPeriod, entries]) => (
        <div key={payPeriod} className="mb-8">
          <h4 className="text-lg font-semibold mb-2">Pay Period: {payPeriod}</h4>
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2">Emplid</th>
                <th className="border border-gray-600 px-4 py-2">Earning Begins Date</th>
                <th className="border border-gray-600 px-4 py-2">Earning Ends Date</th>
                <th className="border border-gray-600 px-4 py-2">Earning Code</th>
                <th className="border border-gray-600 px-4 py-2">Kronos Hours</th>
                <th className="border border-gray-600 px-4 py-2">Adjusted Hours</th>
                <th className="border border-gray-600 px-4 py-2">Reason</th>
                <th className="border border-gray-600 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, indexInGroup) => {
                // Global index in `timesheet` array
                const globalIndex = timesheet.indexOf(entry)

                return (
                  <tr key={indexInGroup} className="bg-gray-700">
                    <td className="border border-gray-600 px-4 py-2">{entry.Emplid}</td>
                    <td className="border border-gray-600 px-4 py-2">{entry.EarnsBeginDt}</td>
                    <td className="border border-gray-600 px-4 py-2">{entry.EarnsEndDt}</td>
                    <td className="border border-gray-600 px-4 py-2">{entry.EarningCode}</td>
                    <td className="border border-gray-600 px-4 py-2">{entry.Hours}</td>
                    <td className="border border-gray-600 px-4 py-2">
                      <input
                        type="number"
                        className="border rounded px-2 py-1 w-20 bg-gray-800 text-white"
                        defaultValue={entry.Hours}
                        onChange={(e) =>
                          handleAdjustment(globalIndex, Number.parseFloat(e.target.value))
                        }
                      />
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      <input
                        type="text"
                        className="border rounded px-2 py-1 w-full bg-gray-800 text-white"
                        placeholder="Reason"
                        // Show the local reason if typed, else fallback to what's in state
                        value={reasonInputs[globalIndex] ?? entry.AdjustmentReason ?? ""}
                        onChange={(e) =>
                          setReasonInputs((prev) => ({
                            ...prev,
                            [globalIndex]: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td className="border border-gray-600 px-4 py-2 text-center">
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        onClick={() =>
                          handleAdjustmentReason(
                            globalIndex,
                            reasonInputs[globalIndex] ?? ""
                          )
                        }
                      >
                        Enter
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
