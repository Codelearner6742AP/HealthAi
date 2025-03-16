"use client"

import { motion } from "framer-motion"
import { Phone, Calendar, Clock, MessageCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function DoctorConsultation() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Physician",
      image: "/placeholder.svg?height=100&width=100",
      availability: "Mon-Fri, 9AM-5PM",
      rating: 4.9,
      reviews: 124,
      whatsapp: "+1234567890",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      image: "/placeholder.svg?height=100&width=100",
      availability: "Tue-Sat, 10AM-6PM",
      rating: 4.8,
      reviews: 98,
      whatsapp: "+1234567891",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Nutritionist",
      image: "/placeholder.svg?height=100&width=100",
      availability: "Mon-Thu, 8AM-4PM",
      rating: 4.7,
      reviews: 86,
      whatsapp: "+1234567892",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Mental Health",
      image: "/placeholder.svg?height=100&width=100",
      availability: "Wed-Sun, 11AM-7PM",
      rating: 4.9,
      reviews: 112,
      whatsapp: "+1234567893",
    },
  ]

  return (
    <section id="doctors" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
            Connect with Doctors
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get instant consultations with qualified healthcare professionals via WhatsApp.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Avatar className="h-16 w-16 border-2 border-gray-200 dark:border-gray-700">
                    <AvatarImage src={doctor.image} alt={doctor.name} />
                    <AvatarFallback>
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Badge
                    variant="outline"
                    className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800"
                  >
                    Available
                  </Badge>
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
                  {doctor.name}
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">{doctor.specialty}</p>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center text-yellow-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? "fill-current" : "text-gray-300 dark:text-gray-600"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {doctor.rating} ({doctor.reviews} reviews)
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{doctor.availability}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Response time: ~15 minutes</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 group">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  <span>WhatsApp Consultation</span>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
              Need Specialized Care?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our platform connects you with specialists across various health domains. Get personalized care from the
              comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Phone className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
              <Button variant="outline">View All Specialists</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

