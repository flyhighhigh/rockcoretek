"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/rockcore-logo.png"
              alt="RockCore"
              width={120}
              height={40}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of industrial computing solutions, FPGA development, and edge AI technologies for
              mission-critical applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.solutions")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-rockcore-green" />
                <span className="text-gray-300">+886-2-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-rockcore-green" />
                <span className="text-gray-300">info@rockcore.com.tw</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-rockcore-green" />
                <span className="text-gray-300">
                  No. 123, Technology Rd.
                  <br />
                  Hsinchu Science Park
                  <br />
                  Taiwan 30078
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RockCore Technology. All rights reserved. | FPGA Solutions | Edge AI Computing | Industrial
            Automation
          </p>
        </div>
      </div>
    </footer>
  )
}
