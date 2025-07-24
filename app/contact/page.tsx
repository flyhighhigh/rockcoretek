"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+886-2-1234-5678", "+886-2-8765-4321"],
      description: "Mon-Fri 9:00 AM - 6:00 PM (GMT+8)",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@rockcore.com.tw", "sales@rockcore.com.tw"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["No. 123, Technology Road", "Hsinchu Science Park", "Taiwan 30078"],
      description: "Visit our headquarters",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 12:00 PM"],
      description: "Taiwan Standard Time (GMT+8)",
    },
  ]

  const subjects = [
    "General Inquiry",
    "FPGA Development Services",
    "Edge AI Solutions",
    "Product Information",
    "Technical Support",
    "Partnership Opportunities",
    "Custom Development",
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting RockCore. Our team will review your inquiry and respond within 24 hours.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                subject: "",
                message: "",
              })
            }}
            className="bg-rockcore-green text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("contact.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.name")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.email")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.company")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
                        placeholder="+886-xxx-xxx-xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
                      placeholder="Please describe your requirements, project details, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-white rounded-lg shadow-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-rockcore-green p-2 rounded-lg mr-3">
                      <div className="text-white">{info.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-gray-900 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-rockcore-green mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Hsinchu Science Park</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our FPGA and edge AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What FPGA platforms do you support?</h3>
              <p className="text-gray-600">
                We support major FPGA platforms including Xilinx (AMD) Zynq, Kintex, and Virtex series, as well as Intel
                (Altera) Cyclone, Arria, and Stratix families.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide custom algorithm development?</h3>
              <p className="text-gray-600">
                Yes, we specialize in converting complex algorithms into optimized FPGA IP cores and provide custom
                algorithm development services for specific applications.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What is the typical project timeline?</h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity. Simple IP cores take 4-8 weeks, while complete system
                designs may require 3-6 months including testing and validation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer long-term support?</h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive long-term support including maintenance, updates, and technical assistance
                for all our FPGA and edge AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
