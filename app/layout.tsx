import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RockCore - Industrial Computing & FPGA Solutions | Edge AI Technology",
  description:
    "Leading provider of industrial computers, FPGA development, and edge AI solutions. Specializing in algorithm IP development, smart manufacturing, and rugged computing systems for mission-critical applications.",
  keywords:
    "FPGA development, edge AI, industrial computers, algorithm IP, smart manufacturing, TSN, AOI solutions, 360 camera, embedded systems, Taiwan",
  authors: [{ name: "RockCore Technology" }],
  openGraph: {
    title: "RockCore - Industrial Computing & FPGA Solutions",
    description: "Leading provider of FPGA development and edge AI solutions for industrial applications.",
    url: "https://rockcore.com.tw",
    siteName: "RockCore Technology",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
