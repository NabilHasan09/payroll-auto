import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Internship Management System</h1>
      <div className="flex space-x-4">
        <Link href="/intern" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Intern Portal
        </Link>
        <Link href="/manager" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Manager Portal
        </Link>
        <Link href="/admin" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Admin Dashboard
        </Link>
      </div>
    </div>
  )
}

