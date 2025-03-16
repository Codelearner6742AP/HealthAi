import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Sparkles, MessageSquare, Bot } from "lucide-react"
import Link from "next/link";

export default function AiAssistancePage() {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="py-16 md:py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
                AI-Powered Health Assistant
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our advanced AI provides personalized health recommendations and insights tailored to
              your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative">
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

                  <div className="flex items-start space-x-3 flex-row-reverse">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                      <p>Some evidence-based supplements for sleep:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                        <li>Melatonin (0.5-5mg, 30 min before bed)</li>
                        <li>Magnesium glycinate (200-400mg)</li>
                        <li>L-theanine (200mg)</li>
                        <li>Valerian root extract (300-600mg)</li>
                      </ul>
                      <p className="mt-2 text-sm">Always consult with your doctor before starting any supplement.</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-6">
                    <input
                      type="text"
                      placeholder="Ask a health question..."
                      className="flex-1 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Link href="/ai-assistance/chat">
                    <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-2xl -z-10"></div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
                Personalized Health Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our AI assistant analyzes your health data and preferences to provide tailored recommendations that help
                you achieve your wellness goals.
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
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Exercise recommendations</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Stress management techniques</p>
                </li>
              </ul>

              <Link href="/ai-assistance/chat">
                <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Try AI Assistant Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
              Key Features
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="h-full border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
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
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
              How It Works
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Share Your Health Goals</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tell our AI assistant about your health concerns, goals, and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our Gemini-powered AI analyzes your information and generates personalized recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implement & Track</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Follow the personalized recommendations and track your progress over time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Health?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Get started with our AI Health Assistant today and receive personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started Now
                </Button>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

