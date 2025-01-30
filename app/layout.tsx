import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Prutha Kale - Personal Website",
  description: "Personal website showcasing experiences, projects, research, and blog posts of Prutha Kale",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white">
          <nav className="container mx-auto px-6 py-3">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-gray-300">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-gray-300">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-8">{children}</main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-6 text-center">
            © {new Date().getFullYear()} Prutha Kale. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

