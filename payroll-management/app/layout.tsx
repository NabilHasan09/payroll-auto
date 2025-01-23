import "./globals.css"
import { Inter } from "next/font/google"
import Image from "next/image"
import logo from "../public/logo.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Internship Management System",
  description: "Manage timesheets, approvals, and schedules for interns",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
          <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold px-4" >MTA Intern Hub</h1>
            <Image src={logo} width={40} height={40}/>
          </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}

