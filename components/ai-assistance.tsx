"use client"

import { motion } from "framer-motion"
import { Brain, Sparkles, MessageSquare, Bot } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AiAssistance() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-blue-500" />,
      title: "AI Health Insights",
      description: "Get personalized health recommendations powered by Gemini API.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-500" />,
      title: "Smart Suggestions",
      description: "Receive tailored health tips based on your specific needs and goals.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-indigo-500" />,
      title: "Interactive Chat",
      description: "Ask health questions and get evidence-based answers in real-time.",
    },
    {
      icon: <Bot className="h-10 w-10 text-pink-500" />,
      title: "Health Tracking",
      description: "Monitor your progress with AI-powered health tracking and insights.",
    },
  ]

  return (
    <section id="ai-assistance" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900/50 dark:to-gray-950 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
            AI-Powered Health Assistant
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Our advanced AI uses Gemini API to provide personalized health recommendations and insights tailored to your
          needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                  <p className="text-gray-800 dark:text-gray-200">How can I improve my sleep quality?</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 flex-row-reverse">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                  <p>Based on your patterns, I recommend:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Maintain a consistent sleep schedule</li>
                    <li>Avoid screens 1 hour before bedtime</li>
                    <li>Keep your bedroom cool (65-68°F)</li>
                    <li>Try a 10-minute meditation before sleep</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                  <p className="text-gray-800 dark:text-gray-200">Any supplements that might help?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-2xl -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
            Personalized Health Insights
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our AI assistant analyzes your health data and preferences to provide tailored recommendations that help you
            achieve your wellness goals.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Evidence-based recommendations</p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Personalized nutrition advice</p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Sleep optimization strategies</p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Mental wellness support</p>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

