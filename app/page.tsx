import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
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
                
              </div>
            </div>

            <div className="relative">
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
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
              Our Features
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Assistance */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
                AI Health Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Get personalized health recommendations powered by Gemini API based on your specific needs.
              </p>
              <Link href="/ai-assistance">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                  <span>Explore AI Assistant</span>
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Button>
              </Link>
            </div>

            {/* Product Discovery */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
                Product Discovery
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Find the perfect health products for your needs with our Shopify-powered marketplace.
              </p>
              <Link href="/products">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                  <span>Browse Products</span>
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Button>
              </Link>
            </div>

            {/* Doctor Consultation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
                Doctor Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect with qualified healthcare professionals via WhatsApp for instant consultations.
              </p>
              <Link href="/doctors">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                  <span>Meet Doctors</span>
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Health Journey?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Join thousands of users who have already improved their health with our AI-powered ecosystem.
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

