"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-card">
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
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
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
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rockcore-green focus:border-transparent"
                    placeholder="Please describe your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rockcore-green text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium inline-flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.info.title")}</h2>
                <p className="text-gray-600 mb-8">{t("contact.info.subtitle")}</p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-rockcore-green p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 123-4568</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-rockcore-green p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@rockcore.com</p>
                      <p className="text-gray-600">sales@rockcore.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-rockcore-green p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Industrial Boulevard
                        <br />
                        Tech City, TC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-rockcore-green p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
