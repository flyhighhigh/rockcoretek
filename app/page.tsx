"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cpu, Zap, Wifi, Camera, CheckCircle, Star, Users, Globe, Award, Shield } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  const products = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: t("products.industrial.title"),
      description: t("products.industrial.desc"),
      href: "/products#industrial-computers",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t("products.ai.title"),
      description: t("products.ai.desc"),
      href: "/products#ai-boxes",
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: t("products.edge.title"),
      description: t("products.edge.desc"),
      href: "/products#edge-devices",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: t("products.camera.title"),
      description: t("products.camera.desc"),
      href: "/products#360-cameras",
    },
  ]

  const features = [
    "Industrial Grade Reliability",
    "Wide Temperature Range",
    "Vibration & Shock Resistant",
    "24/7 Technical Support",
  ]

  const stats = [
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Global Clients" },
    { icon: <Globe className="h-6 w-6" />, number: "50+", label: "Countries" },
    { icon: <Award className="h-6 w-6" />, number: "15+", label: "Years Experience" },
    { icon: <Star className="h-6 w-6" />, number: "99.9%", label: "Uptime" },
  ]

  const whyChooseUs = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "High Performance",
      description: "Cutting-edge processors and optimized architectures for maximum computational power.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Industrial Grade",
      description: "Built to withstand harsh environments with extended temperature ranges and vibration resistance.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Ready",
      description: "Optimized for AI workloads with dedicated neural processing units and accelerators.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Support",
      description: "Worldwide technical support and service network to keep your operations running smoothly.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Tech-Pattern')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6">
                <div className="w-2 h-2 bg-rockcore-green rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Industrial Computing Leader</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t("home.hero.title")}</h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl">{t("home.hero.subtitle")}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/solutions"
                  className="bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-all duration-200 font-medium inline-flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  {t("home.hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="border-2 border-rockcore-green text-rockcore-green px-8 py-4 rounded-lg hover:bg-rockcore-green hover:text-white transition-all duration-200 font-medium text-center"
                >
                  {t("common.viewDetails")}
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-rockcore-green mr-2" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8 shadow-card">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Industrial-Computer"
                  alt="RockCore Industrial Computer"
                  width={500}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-rockcore-green">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-rockcore-green">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
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
                <div className="bg-gray-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-rockcore-green">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose RockCore?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver robust, reliable, and innovative computing solutions designed for the most demanding
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-lg bg-white shadow-card hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-rockcore-green">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("home.products.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("home.products.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="bg-white p-8 rounded-lg shadow-card hover:shadow-lg transition-all duration-200 group border border-gray-100"
              >
                <div className="bg-gray-100 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-rockcore-green transition-colors duration-200">
                  <div className="text-rockcore-green group-hover:text-white transition-colors duration-200">
                    {product.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-rockcore-green font-medium group-hover:text-green-800 transition-colors">
                  {t("common.learnMore")} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("home.solutions.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("home.solutions.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-rockcore-green p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Manufacturing</h3>
                    <p className="text-gray-600">AI-powered automation and real-time monitoring for production lines</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rockcore-green p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Transportation & Logistics</h3>
                    <p className="text-gray-600">Fleet management and cargo monitoring with rugged computing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rockcore-green p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Cities</h3>
                    <p className="text-gray-600">Intelligent urban infrastructure with connected devices</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/solutions"
                  className="bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center"
                >
                  View All Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Solutions-Overview"
                alt="RockCore Solutions"
                width={500}
                height={400}
                className="w-full rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact our experts to discuss your industrial computing needs and find the perfect solution for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center justify-center"
            >
              {t("common.contactUs")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="border-2 border-rockcore-green text-rockcore-green px-8 py-4 rounded-lg hover:bg-rockcore-green hover:text-white transition-colors font-medium"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
