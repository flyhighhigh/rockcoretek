"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cpu, Zap, Wifi, Camera, CheckCircle, Users, Award, Globe, TrendingUp } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: t("home.stats.clients") },
    { icon: <Award className="h-8 w-8" />, number: "15+", label: t("home.stats.experience") },
    { icon: <Globe className="h-8 w-8" />, number: "50+", label: t("home.stats.countries") },
    { icon: <TrendingUp className="h-8 w-8" />, number: "99.9%", label: t("home.stats.uptime") },
  ]

  const products = [
    {
      icon: <Cpu className="h-12 w-12" />,
      title: t("products.industrial.title"),
      description: t("products.industrial.desc"),
      features: ["Fanless Design", "Wide Temperature", "Vibration Resistant"],
      href: "/products#industrial-computers",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: t("products.ai.title"),
      description: t("products.ai.desc"),
      features: ["GPU Acceleration", "Edge AI", "Real-time Inference"],
      href: "/products#ai-boxes",
    },
    {
      icon: <Wifi className="h-12 w-12" />,
      title: t("products.edge.title"),
      description: t("products.edge.desc"),
      features: ["Low Power", "IoT Ready", "Wireless Connectivity"],
      href: "/products#edge-devices",
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: t("products.camera.title"),
      description: t("products.camera.desc"),
      features: ["4K Resolution", "AI Analytics", "360° Coverage"],
      href: "/products#360-cameras",
    },
  ]

  const solutions = [
    {
      title: t("solutions.fpga.title"),
      description: "Custom FPGA development and algorithm IP implementation for high-performance applications.",
      image: "/placeholder.svg?height=200&width=300&text=FPGA-Solutions",
      href: "/solutions#fpga-solutions",
    },
    {
      title: t("solutions.manufacturing.title"),
      description: "AI-powered manufacturing solutions with 360° inspection and energy optimization.",
      image: "/placeholder.svg?height=200&width=300&text=Smart-Manufacturing",
      href: "/solutions#smart-manufacturing",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("home.hero.title")}</h1>
              <p className="text-xl text-gray-600 mb-8">{t("home.hero.subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center justify-center"
                >
                  {t("home.hero.cta1")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/solutions"
                  className="border-2 border-rockcore-green text-rockcore-green px-8 py-4 rounded-lg hover:bg-rockcore-green hover:text-white transition-colors font-medium text-center"
                >
                  {t("home.hero.cta2")}
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 shadow-card">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Industrial-Computing"
                alt="Industrial Computing Solutions"
                width={500}
                height={400}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-rockcore-green">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of industrial computing solutions designed for the most demanding environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gray-100 p-4 rounded-lg w-20 h-20 mb-6 flex items-center justify-center">
                  <div className="text-rockcore-green">{product.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-rockcore-green mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className="text-rockcore-green hover:text-green-800 font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions combining our hardware expertise with advanced algorithms and AI capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution) => (
              <div key={solution.title} className="group">
                <div className="bg-gray-100 rounded-lg p-8 shadow-card group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    width={300}
                    height={200}
                    className="w-full rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <Link
                    href={solution.href}
                    className="bg-rockcore-green text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center"
                  >
                    Explore Solution
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rockcore-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Industrial Operations?
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Contact our experts to discuss how our FPGA and edge AI solutions can optimize your applications.
          </p>
          <Link
            href="/contact"
            className="bg-white text-rockcore-green px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
