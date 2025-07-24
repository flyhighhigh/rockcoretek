"use client"

import Link from "next/link"
import Image from "next/image"
import { Cpu, Zap, Wifi, Camera, ArrowRight, CheckCircle, Star, Award, Shield } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ProductsPage() {
  const { t } = useLanguage()

  const productCategories = [
    {
      id: "industrial-computers",
      icon: <Cpu className="h-12 w-12" />,
      title: t("products.industrial.title"),
      description: t("products.industrial.desc"),
      badge: "Most Popular",
      features: [
        "Fanless Design for Silent Operation",
        "Wide Temperature Range (-40°C to +70°C)",
        "Vibration & Shock Resistant (IEC 60068-2)",
        "Multiple I/O Interfaces (USB, Serial, Ethernet)",
        "Long-term Availability (5+ years)",
        "Industrial Grade Components",
      ],
      specifications: {
        CPU: "Intel Core i3/i5/i7, ARM Cortex-A series",
        Memory: "4GB to 32GB DDR4",
        Storage: "64GB to 2TB SSD/eMMC",
        "Operating System": "Windows 10 IoT, Linux, Android",
        Certifications: "CE, FCC, UL, CCC",
      },
      applications: [
        "Factory Automation",
        "Process Control",
        "Machine Vision",
        "Data Acquisition",
        "HMI Applications",
        "Digital Signage",
      ],
      image: "/placeholder.svg?height=400&width=500&text=Industrial-PC",
      models: [
        { name: "IPC-5000 Series", desc: "High-performance fanless industrial PC", price: "Contact for pricing" },
        { name: "IPC-3000 Series", desc: "Compact industrial computer", price: "Contact for pricing" },
        { name: "IPC-1000 Series", desc: "Entry-level industrial PC", price: "Contact for pricing" },
      ],
    },
    {
      id: "ai-boxes",
      icon: <Zap className="h-12 w-12" />,
      title: t("products.ai.title"),
      description: t("products.ai.desc"),
      badge: "AI Powered",
      features: [
        "NVIDIA GPU Support (RTX series)",
        "High-Performance CPU (Intel Xeon/Core)",
        "Deep Learning Framework Support",
        "Edge AI Optimization",
        "Real-time Inference Processing",
        "CUDA & OpenCL Support",
      ],
      specifications: {
        GPU: "NVIDIA RTX 4080/4090, GTX series",
        CPU: "Intel Xeon/Core i7/i9",
        Memory: "16GB to 128GB DDR4/DDR5",
        Storage: "1TB to 8TB NVMe SSD",
        "AI Frameworks": "TensorFlow, PyTorch, OpenVINO",
      },
      applications: [
        "Computer Vision",
        "Predictive Maintenance",
        "Quality Control",
        "Autonomous Systems",
        "Medical Imaging",
        "Smart Surveillance",
      ],
      image: "/placeholder.svg?height=400&width=500&text=AI-Computing-Box",
      models: [
        { name: "AI-Pro Series", desc: "High-end AI computing platform", price: "Contact for pricing" },
        { name: "AI-Edge Series", desc: "Compact edge AI solution", price: "Contact for pricing" },
        { name: "AI-Lite Series", desc: "Entry-level AI computing", price: "Contact for pricing" },
      ],
    },
    {
      id: "edge-devices",
      icon: <Wifi className="h-12 w-12" />,
      title: t("products.edge.title"),
      description: t("products.edge.desc"),
      badge: "IoT Ready",
      features: [
        "Ultra-Compact Form Factor",
        "Low Power Consumption (<15W)",
        "Wireless Connectivity (WiFi, 4G/5G)",
        "IoT Protocol Support (MQTT, CoAP)",
        "Cloud Integration Ready",
        "Secure Boot & Encryption",
      ],
      specifications: {
        CPU: "ARM Cortex-A78, Intel Atom",
        Memory: "2GB to 16GB LPDDR4",
        Storage: "32GB to 512GB eMMC",
        Connectivity: "WiFi 6, Bluetooth 5.0, 4G/5G",
        Power: "5V DC, PoE+ support",
      },
      applications: [
        "Smart Buildings",
        "Environmental Monitoring",
        "Asset Tracking",
        "Remote Sensing",
        "Smart Agriculture",
        "Retail Analytics",
      ],
      image: "/placeholder.svg?height=400&width=500&text=Edge-Computing-Device",
      models: [
        { name: "Edge-Gateway Pro", desc: "Advanced edge computing gateway", price: "Contact for pricing" },
        { name: "Edge-Mini", desc: "Ultra-compact edge device", price: "Contact for pricing" },
        { name: "Edge-Sensor", desc: "Sensor integration platform", price: "Contact for pricing" },
      ],
    },
    {
      id: "360-cameras",
      icon: <Camera className="h-12 w-12" />,
      title: t("products.camera.title"),
      description: t("products.camera.desc"),
      badge: "AI Enhanced",
      features: [
        "4K Ultra HD Resolution",
        "360° Panoramic Coverage",
        "Advanced Night Vision",
        "Weather Resistant (IP67)",
        "AI-Powered Analytics",
        "Real-time Object Detection",
      ],
      specifications: {
        Resolution: "4K (3840x2160) @ 30fps",
        Lens: "Dual fisheye lenses",
        "Night Vision": "IR LEDs up to 30m",
        Storage: "Local SD card + NVR support",
        "AI Features": "Face detection, motion tracking",
      },
      applications: [
        "Security Surveillance",
        "Traffic Monitoring",
        "Industrial Inspection",
        "Smart City Applications",
        "Retail Security",
        "Perimeter Protection",
      ],
      image: "/placeholder.svg?height=400&width=500&text=360-Surveillance-Camera",
      models: [
        { name: "Cam-360-Pro", desc: "Professional 360° surveillance camera", price: "Contact for pricing" },
        { name: "Cam-360-AI", desc: "AI-enhanced 360° camera", price: "Contact for pricing" },
        { name: "Cam-360-Lite", desc: "Cost-effective 360° solution", price: "Contact for pricing" },
      ],
    },
  ]

  const certifications = [
    { name: "CE", icon: <Award className="h-6 w-6" /> },
    { name: "FCC", icon: <Shield className="h-6 w-6" /> },
    { name: "UL", icon: <Star className="h-6 w-6" /> },
    { name: "ISO 9001", icon: <CheckCircle className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("nav.products")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive range of industrial computing solutions engineered for mission-critical applications across
              various industries.
            </p>

            {/* Certifications */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-rockcore-green">{cert.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {productCategories.map((category, index) => (
              <div key={category.id} id={category.id} className="scroll-mt-20">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    {/* Header */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-gray-100 p-4 rounded-lg mr-4">
                          <div className="text-rockcore-green">{category.icon}</div>
                        </div>
                        {category.badge && (
                          <span className="bg-rockcore-green text-white px-3 py-1 rounded-full text-sm font-medium">
                            {category.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                      <p className="text-xl text-gray-600">{category.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.features.map((feature) => (
                          <div key={feature} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-rockcore-green mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <dl className="grid grid-cols-1 gap-3">
                          {Object.entries(category.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <dt className="font-medium text-gray-900">{key}:</dt>
                              <dd className="text-gray-600 text-right">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
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

                    {/* Models */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Models</h3>
                      <div className="space-y-3">
                        {category.models.map((model) => (
                          <div key={model.name} className="bg-white border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-gray-900">{model.name}</h4>
                                <p className="text-gray-600 text-sm">{model.desc}</p>
                              </div>
                              <span className="text-rockcore-green font-medium">{model.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center"
                    >
                      Request Detailed Specs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="bg-gray-100 rounded-lg p-8 shadow-card sticky top-8">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={500}
                        height={400}
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

      {/* Technical Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are engineered to meet the highest standards of performance, reliability, and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <div className="text-4xl font-bold text-rockcore-green mb-2">-40°C to +85°C</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operating Temperature</h3>
              <p className="text-gray-600">Extreme temperature tolerance for harsh industrial environments</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <div className="text-4xl font-bold text-rockcore-green mb-2">IP67</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Protection Rating</h3>
              <p className="text-gray-600">Dust-tight and waterproof protection for outdoor applications</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card text-center">
              <div className="text-4xl font-bold text-rockcore-green mb-2">24/7</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Operation</h3>
              <p className="text-gray-600">Designed for non-stop industrial and mission-critical applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our engineering team can design and manufacture custom industrial computing solutions tailored to your
            specific requirements and applications.
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
