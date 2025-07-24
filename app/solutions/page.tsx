"use client"

import Link from "next/link"
import Image from "next/image"
import { Factory, Truck, Zap, Building, ArrowRight, CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function SolutionsPage() {
  const { t } = useLanguage()

  const solutions = [
    {
      id: "manufacturing",
      icon: <Factory className="h-12 w-12" />,
      title: t("solutions.manufacturing.title"),
      description: "Smart manufacturing solutions with AI-powered automation and real-time monitoring.",
      benefits: [
        "Increased Production Efficiency",
        "Reduced Downtime",
        "Quality Control Automation",
        "Predictive Maintenance",
        "Real-time Data Analytics",
      ],
      useCases: [
        "Assembly Line Automation",
        "Quality Inspection Systems",
        "Inventory Management",
        "Equipment Monitoring",
      ],
      image: "/placeholder.svg?height=300&width=400&text=Smart-Manufacturing",
    },
    {
      id: "transportation",
      icon: <Truck className="h-12 w-12" />,
      title: t("solutions.transportation.title"),
      description: "Rugged computing solutions for fleet management, logistics, and transportation systems.",
      benefits: [
        "Fleet Tracking & Management",
        "Route Optimization",
        "Driver Safety Monitoring",
        "Cargo Security",
        "Fuel Efficiency",
      ],
      useCases: ["Vehicle Telematics", "Traffic Management", "Public Transportation", "Logistics Tracking"],
      image: "/placeholder.svg?height=300&width=400&text=Transportation",
    },
    {
      id: "energy",
      icon: <Zap className="h-12 w-12" />,
      title: t("solutions.energy.title"),
      description: "Industrial computing solutions for power generation, distribution, and renewable energy systems.",
      benefits: [
        "Grid Monitoring & Control",
        "Energy Efficiency Optimization",
        "Renewable Energy Integration",
        "Fault Detection & Prevention",
        "Regulatory Compliance",
      ],
      useCases: ["Smart Grid Systems", "Solar Farm Management", "Wind Turbine Control", "Power Plant Automation"],
      image: "/placeholder.svg?height=300&width=400&text=Energy-Systems",
    },
    {
      id: "smart-cities",
      icon: <Building className="h-12 w-12" />,
      title: t("solutions.cities.title"),
      description: "Connected infrastructure solutions for intelligent urban environments and smart city initiatives.",
      benefits: [
        "Traffic Flow Optimization",
        "Environmental Monitoring",
        "Public Safety Enhancement",
        "Resource Management",
        "Citizen Services",
      ],
      useCases: ["Smart Lighting", "Waste Management", "Air Quality Monitoring", "Emergency Response"],
      image: "/placeholder.svg?height=300&width=400&text=Smart-City",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("nav.solutions")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific solutions powered by our robust industrial computing platforms, designed to meet the
              unique challenges of modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={solution.id} id={solution.id} className="scroll-mt-20">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="bg-gray-100 p-4 rounded-lg w-20 h-20 mb-6 flex items-center justify-center">
                      <div className="text-rockcore-green">{solution.icon}</div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                    <p className="text-xl text-gray-600 mb-8">{solution.description}</p>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
                      <div className="space-y-3">
                        {solution.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-rockcore-green mr-3" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Use Cases</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.useCases.map((useCase) => (
                          <span
                            key={useCase}
                            className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <div className="bg-gray-100 rounded-lg p-8 shadow-card">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        width={400}
                        height={300}
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let our experts help you design and implement the perfect industrial computing solution for your specific
            industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="border-2 border-rockcore-green text-rockcore-green px-8 py-4 rounded-lg hover:bg-rockcore-green hover:text-white transition-colors font-medium"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
