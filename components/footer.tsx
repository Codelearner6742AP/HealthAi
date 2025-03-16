import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
                HealthAI
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Revolutionizing healthcare with AI insights, product discovery, and instant doctor consultations.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Features</h3>
            <ul className="space-y-2">
              {["AI Health Assistant", "Product Discovery", "Doctor Consultation", "Health Tracking"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "API Reference", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact</h3>
            <ul className="space-y-2">
              {["support@healthai.com", "+1 (555) 123-4567", "123 Health Street, Med City"].map((item) => (
                <li key={item} className="text-gray-600 dark:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} HealthAI. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Ayush Raghuvanshi
          </p>
        </div>
      </div>
    </footer>
  )
}

