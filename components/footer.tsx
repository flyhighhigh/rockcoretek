"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Footer({ footer, logo }: any) {
  const { t } = useLanguage()

  const footerLinks = {
    products: [
      { name: t("products.industrial.title"), href: "/products#industrial-computers" },
      { name: t("products.ai.title"), href: "/products#ai-boxes" },
      { name: t("products.edge.title"), href: "/products#edge-devices" },
      { name: t("products.camera.title"), href: "/products#360-cameras" },
    ],
    solutions: [
      { name: t("solutions.manufacturing.title"), href: "/solutions#manufacturing" },
      { name: t("solutions.transportation.title"), href: "/solutions#transportation" },
      { name: t("solutions.energy.title"), href: "/solutions#energy" },
      { name: t("solutions.cities.title"), href: "/solutions#smart-cities" },
    ],
    company: [
      { name: t("nav.about"), href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "News", href: "/news" },
      { name: "Support", href: "/support" },
    ],
    support: [
      { name: "Documentation", href: "/docs" },
      { name: "Downloads", href: "/downloads" },
      { name: "Technical Support", href: "/support" },
      { name: "Warranty", href: "/warranty" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/rockcore-logo.png" alt="RockCore" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold">RockCore</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of industrial computing solutions, delivering robust and reliable technology for
              mission-critical applications worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rockcore-green" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rockcore-green" />
                <span className="text-gray-300">info@rockcore.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rockcore-green mt-1" />
                <span className="text-gray-300">
                  123 Industrial Boulevard
                  <br />
                  Tech City, TC 12345
                  <br />
                  United States
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("nav.products")}</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("nav.solutions")}</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">© 2024 RockCore Solutions. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
