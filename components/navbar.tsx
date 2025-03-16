"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          />
          <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
            HealthAI
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/ai-assistance"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            AI Assistance
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Products
          </Link>
          <Link
            href="/doctors"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Doctors
          </Link>
          <Button
            variant="default"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Get Started
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            href="/"
            className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/ai-assistance"
            className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            onClick={toggleMenu}
          >
            AI Assistance
          </Link>
          <Link
            href="/products"
            className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/doctors"
            className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            onClick={toggleMenu}
          >
            Doctors
          </Link>
          <Button
            variant="default"
            className="mt-3 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  )
}

