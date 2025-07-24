"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Cpu,
  Eye,
  Settings,
  Network,
  Camera,
  Wind,
  ArrowRight,
  CheckCircle,
  Play,
  Monitor,
  Smartphone,
  BarChart3,
} from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function SolutionsPage() {
  const { t } = useLanguage()

  const fpgaSolutions = [
    {
      id: "cad-cam",
      icon: <Settings className="h-8 w-8" />,
      title: t("solutions.fpga.cad"),
      description:
        "High-precision CAD/CAM processing with real-time computation and advanced algorithm implementation.",
      features: [
        "Real-time G-code processing",
        "Advanced interpolation algorithms",
        "Multi-axis motion control",
        "Precision toolpath optimization",
        "Custom FPGA acceleration",
      ],
      applications: ["CNC Machining", "3D Printing", "Laser Cutting", "PCB Manufacturing"],
      benefits: [
        "50% faster processing speed",
        "Microsecond-level precision",
        "Reduced CPU load",
        "Customizable algorithms",
      ],
      image: "/placeholder.svg?height=300&width=400&text=CAD-CAM-Solution",
    },
    {
      id: "aoi",
      icon: <Eye className="h-8 w-8" />,
      title: t("solutions.fpga.aoi"),
      description:
        "Automated Optical Inspection with FPGA-accelerated image processing and AI-powered defect detection.",
      features: [
        "High-speed image acquisition",
        "Real-time defect detection",
        "Machine learning integration",
        "Multi-camera synchronization",
        "Custom vision algorithms",
      ],
      applications: ["PCB Inspection", "Component Verification", "Surface Quality Control", "Assembly Validation"],
      benefits: [
        "99.9% detection accuracy",
        "10x faster inspection",
        "Reduced false positives",
        "Flexible algorithm updates",
      ],
      image: "/placeholder.svg?height=300&width=400&text=AOI-Solution",
    },
    {
      id: "fpga-design",
      icon: <Cpu className="h-8 w-8" />,
      title: t("solutions.fpga.design"),
      description:
        "Complete FPGA design services from concept to implementation, specializing in algorithm IP development.",
      features: [
        "Custom IP core development",
        "Algorithm optimization",
        "Hardware-software co-design",
        "Verification and testing",
        "Long-term support",
      ],
      applications: ["Signal Processing", "Communications", "Image Processing", "Control Systems"],
      benefits: ["Reduced development time", "Optimized performance", "IP protection", "Scalable solutions"],
      image: "/placeholder.svg?height=300&width=400&text=FPGA-Design",
    },
    {
      id: "tsn",
      icon: <Network className="h-8 w-8" />,
      title: t("solutions.fpga.tsn"),
      description: "Time-Sensitive Networking solutions for deterministic communication in industrial automation.",
      features: [
        "IEEE 802.1 TSN compliance",
        "Deterministic latency",
        "Traffic shaping",
        "Time synchronization",
        "Quality of Service (QoS)",
      ],
      applications: ["Industrial Automation", "Automotive", "Audio/Video", "Smart Grid"],
      benefits: ["Guaranteed latency", "Improved reliability", "Bandwidth optimization", "Future-proof technology"],
      image: "/placeholder.svg?height=300&width=400&text=TSN-Solution",
    },
  ]

  const smartManufacturing = [
    {
      id: "360-ai-inspection",
      icon: <Camera className="h-8 w-8" />,
      title: t("solutions.manufacturing.inspection"),
      description:
        "Revolutionary 360° AI inspection system with edge computing and low-light enhancement capabilities.",
      features: [
        "360° panoramic coverage",
        "Edge AI processing",
        "Low-light enhancement",
        "Real-time defect detection",
        "LINE notification integration",
        "AR visualization support",
      ],
      comparison: {
        "360° Camera": {
          Coverage: "Full 360° view",
          "Blind Spots": "Zero blind spots",
          Installation: "Single camera setup",
          Cost: "Lower total cost",
        },
        "720° Camera": {
          Coverage: "Dual 360° sensors",
          "Blind Spots": "Minimal overlap zones",
          Installation: "Complex dual setup",
          Cost: "Higher investment",
        },
      },
      rockCoreAdvantages: [
        "Edge AI Processing: Real-time analysis without cloud dependency",
        "Low-Light Enhancement: Superior performance in challenging lighting conditions",
        "LINE Integration: Instant notifications and alerts to mobile devices",
        "AR Visualization: Augmented reality overlay for enhanced inspection",
        "Custom Algorithm IP: Proprietary defect detection algorithms",
      ],
      demoVideo: "https://example.com/demo-video",
      image: "/placeholder.svg?height=300&width=400&text=360-AI-Inspection",
    },
    {
      id: "energy-saving",
      icon: <Wind className="h-8 w-8" />,
      title: t("solutions.manufacturing.energy"),
      description: "Intelligent blower energy optimization system using AI algorithms and real-time monitoring.",
      features: [
        "Real-time energy monitoring",
        "AI-powered optimization",
        "Predictive maintenance",
        "Remote control capability",
        "Energy consumption analytics",
        "ROI tracking",
      ],
      benefits: [
        "30-50% energy savings",
        "Reduced maintenance costs",
        "Extended equipment life",
        "Environmental compliance",
        "Real-time monitoring",
      ],
      image: "/placeholder.svg?height=300&width=400&text=Energy-Saving",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("nav.solutions")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advanced FPGA and smart manufacturing solutions powered by our expertise in algorithm IP development and
              edge AI computing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-rockcore-green text-white px-4 py-2 rounded-full text-sm font-medium">
                FPGA Expertise
              </span>
              <span className="bg-rockcore-green text-white px-4 py-2 rounded-full text-sm font-medium">Edge AI</span>
              <span className="bg-rockcore-green text-white px-4 py-2 rounded-full text-sm font-medium">
                Algorithm IP
              </span>
              <span className="bg-rockcore-green text-white px-4 py-2 rounded-full text-sm font-medium">
                Smart Manufacturing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FPGA Solutions */}
      <section id="fpga-solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("solutions.fpga.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom FPGA development and algorithm IP implementation for high-performance computing applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {fpgaSolutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-white rounded-lg shadow-card p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    <div className="text-rockcore-green">{solution.icon}</div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{solution.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-rockcore-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app) => (
                      <span key={app} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-sm text-gray-600">
                        <BarChart3 className="h-4 w-4 text-rockcore-green mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  width={400}
                  height={300}
                  className="w-full rounded-lg mb-6"
                />

                <Link
                  href="/contact"
                  className="bg-rockcore-green text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Manufacturing Solutions */}
      <section id="smart-manufacturing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("solutions.manufacturing.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive smart manufacturing solutions with AI-powered automation and real-time monitoring
              capabilities.
            </p>
          </div>

          {/* 360° AI Inspection */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                    <div className="text-rockcore-green">{smartManufacturing[0].icon}</div>
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900">{smartManufacturing[0].title}</h3>
                </div>

                <p className="text-lg text-gray-600 mb-6">{smartManufacturing[0].description}</p>

                {/* Demo Video */}
                <div className="bg-white rounded-lg p-6 shadow-card mb-6">
                  <div className="flex items-center mb-4">
                    <Play className="h-5 w-5 text-rockcore-green mr-2" />
                    <h4 className="font-semibold text-gray-900">Demo Video</h4>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <Play className="h-12 w-12 text-rockcore-green mx-auto mb-4" />
                    <p className="text-gray-600">Watch our 360° AI inspection system in action</p>
                    <button className="mt-4 bg-rockcore-green text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors">
                      Play Demo
                    </button>
                  </div>
                </div>

                {/* RockCore Advantages */}
                <div className="bg-white rounded-lg p-6 shadow-card mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">RockCore Advantages</h4>
                  <ul className="space-y-3">
                    {smartManufacturing[0].rockCoreAdvantages.map((advantage) => (
                      <li key={advantage} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-rockcore-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AR Visualization */}
                <div className="bg-white rounded-lg p-6 shadow-card">
                  <div className="flex items-center mb-4">
                    <Monitor className="h-5 w-5 text-rockcore-green mr-2" />
                    <h4 className="font-semibold text-gray-900">AR Visualization</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Enhanced inspection experience with augmented reality overlay, providing real-time defect
                    visualization and interactive analysis.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Smartphone className="h-4 w-4 text-rockcore-green mr-1" />
                      <span className="text-sm text-gray-600">Mobile AR Support</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 text-rockcore-green mr-1" />
                      <span className="text-sm text-gray-600">Real-time Overlay</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src={smartManufacturing[0].image || "/placeholder.svg"}
                  alt={smartManufacturing[0].title}
                  width={500}
                  height={400}
                  className="w-full rounded-lg shadow-card mb-6"
                />

                {/* 360° vs 720° Comparison */}
                <div className="bg-white rounded-lg p-6 shadow-card">
                  <h4 className="font-semibold text-gray-900 mb-4">360° vs 720° Camera Comparison</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-medium text-gray-900">Feature</th>
                          <th className="text-center py-2 font-medium text-rockcore-green">360° Camera</th>
                          <th className="text-center py-2 font-medium text-gray-600">720° Camera</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(smartManufacturing[0].comparison["360° Camera"]).map(([feature, value]) => (
                          <tr key={feature} className="border-b border-gray-100">
                            <td className="py-2 font-medium text-gray-700">{feature}</td>
                            <td className="py-2 text-center text-rockcore-green">{value}</td>
                            <td className="py-2 text-center text-gray-600">
                              {smartManufacturing[0].comparison["720° Camera"][feature]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Saving Solution */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src={smartManufacturing[1].image || "/placeholder.svg"}
                  alt={smartManufacturing[1].title}
                  width={500}
                  height={400}
                  className="w-full rounded-lg shadow-card"
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                    <div className="text-rockcore-green">{smartManufacturing[1].icon}</div>
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900">{smartManufacturing[1].title}</h3>
                </div>

                <p className="text-lg text-gray-600 mb-6">{smartManufacturing[1].description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {smartManufacturing[1].features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-rockcore-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {smartManufacturing[1].benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-gray-600">
                        <BarChart3 className="h-4 w-4 text-rockcore-green mr-2" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="bg-rockcore-green text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center"
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rockcore-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Implement Advanced Solutions?</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Contact our FPGA and edge AI experts to discuss how our solutions can transform your industrial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rockcore-green px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-rockcore-green transition-colors font-medium"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
