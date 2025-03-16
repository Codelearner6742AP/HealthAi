"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
              AI-Powered Health Ecosystem
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Revolutionizing healthcare with AI insights, product discovery, and instant doctor consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[500px] bg-white dark:bg-gray-900 rounded-[36px] border-8 border-gray-800 dark:border-gray-700 overflow-hidden shadow-xl">
                <div className="h-full w-full bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-4 flex flex-col">
                  <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3 flex flex-col gap-3">
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-20 w-full bg-blue-100 dark:bg-blue-900/30 rounded-lg mt-2"></div>
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full mt-2"></div>
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="mt-auto h-10 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  )
}

