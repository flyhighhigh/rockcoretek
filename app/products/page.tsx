"use client"

import Link from "next/link"
import Image from "next/image"
import { Cpu, Zap, Wifi, Camera, ArrowRight, CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ProductsPage() {
  const { t } = useLanguage()

  const productCategories = [
    {
      id: "industrial-computers",
      icon: <Cpu className="h-12 w-12" />,
      title: t("products.industrial.title"),
      description: t("products.industrial.desc"),
      features: [
        "Fanless Design",
        "Wide Temperature Range (-40°C to +70°C)",
        "Vibration & Shock Resistant",
        "Multiple I/O Interfaces",
        "Long-term Availability",
      ],
      applications: ["Factory Automation", "Process Control", "Machine Vision", "Data Acquisition"],
      image: "/placeholder.svg?height=300&width=400&text=Industrial-PC",
    },
    {
      id: "ai-boxes",
      icon: <Zap className="h-12 w-12" />,
      title: t("products.ai.title"),
      description: t("products.ai.desc"),
      features: [
        "NVIDIA GPU Support",
        "High-Performance CPU",
        "Deep Learning Frameworks",
        "Edge AI Optimization",
        "Real-time Inference",
      ],
      applications: ["Computer Vision", "Predictive Maintenance", "Quality Control", "Autonomous Systems"],
      image: "/placeholder.svg?height=300&width=400&text=AI-Box",
    },
    {
      id: "edge-devices",
      icon: <Wifi className="h-12 w-12" />,
      title: t("products.edge.title"),
      description: t("products.edge.desc"),
      features: [
        "Compact Form Factor",
        "Low Power Consumption",
        "Wireless Connectivity",
        "IoT Protocol Support",
        "Cloud Integration",
      ],
      applications: ["Smart Buildings", "Environmental Monitoring", "Asset Tracking", "Remote Sensing"],
      image: "/placeholder.svg?height=300&width=400&text=Edge-Device",
    },
    {
      id: "360-cameras",
      icon: <Camera className="h-12 w-12" />,
      title: t("products.camera.title"),
      description: t("products.camera.desc"),
      features: ["4K Resolution", "360° Panoramic View", "Night Vision", "Weather Resistant", "AI-Powered Analytics"],
      applications: ["Security Surveillance", "Traffic Monitoring", "Industrial Inspection", "Smart City"],
      image: "/placeholder.svg?height=300&width=400&text=360-Camera",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("nav.products")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of industrial computing solutions designed for mission-critical applications across
              various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <div key={category.id} id={category.id} className="scroll-mt-20">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="bg-gray-100 p-4 rounded-lg w-20 h-20 mb-6 flex items-center justify-center">
                      <div className="text-rockcore-green">{category.icon}</div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                    <p className="text-xl text-gray-600 mb-8">{category.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.features.map((feature) => (
                          <div key={feature} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-rockcore-green mr-2" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.applications.map((app) => (
                          <span
                            key={app}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center"
                    >
                      Request Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <div className="bg-gray-100 rounded-lg p-8 shadow-card">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our engineering team can design and manufacture custom industrial computing solutions tailored to your
            specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center justify-center"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/solutions"
              className="border-2 border-rockcore-green text-rockcore-green px-8 py-4 rounded-lg hover:bg-rockcore-green hover:text-white transition-colors font-medium"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
