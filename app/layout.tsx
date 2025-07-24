import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RockCore - Industrial Computing Solutions",
  description:
    "Leading provider of industrial computers, AI boxes, edge devices, and 360° camera solutions for mission-critical applications.",
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
          <Header logo={null} header={null} />
          <main>{children}</main>
          <Footer footer={null} logo={null} />
        </LanguageProvider>
      </body>
    </html>
  )
}
