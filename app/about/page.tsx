"use client"

import Image from "next/image"
import { Users, Award, Globe, Target, Eye, Heart } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Global Clients" },
    { icon: <Award className="h-8 w-8" />, number: "15+", label: "Years Experience" },
    { icon: <Globe className="h-8 w-8" />, number: "50+", label: "Countries Served" },
    { icon: <Target className="h-8 w-8" />, number: "1000+", label: "Projects Completed" },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description:
        "Continuously pushing the boundaries of industrial computing technology to deliver cutting-edge solutions.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Quality",
      description: "Uncompromising commitment to quality in every product we design, manufacture, and deliver.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Reliability",
      description:
        "Building trust through consistent performance and dependable solutions that our clients can count on.",
    },
  ]

  const team = [
    {
      name: "John Chen",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300&text=John-Chen",
      bio: "20+ years experience in industrial computing and automation systems.",
    },
    {
      name: "Sarah Williams",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300&text=Sarah-Williams",
      bio: "Expert in AI and edge computing technologies with 15+ years in the industry.",
    },
    {
      name: "Michael Zhang",
      position: "VP of Engineering",
      image: "/placeholder.svg?height=300&width=300&text=Michael-Zhang",
      bio: "Leading our R&D efforts with extensive experience in rugged computing design.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("nav.about")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 15 years, RockCore has been at the forefront of industrial computing innovation, delivering
              reliable solutions that power critical operations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, RockCore began with a simple mission: to create industrial computing solutions that
                  could withstand the harshest environments while delivering uncompromising performance.
                </p>
                <p>
                  What started as a small team of engineers has grown into a global leader in industrial computing,
                  serving clients across manufacturing, transportation, energy, and smart city sectors.
                </p>
                <p>
                  Today, we continue to innovate and push the boundaries of what's possible in industrial computing,
                  integrating AI, edge computing, and IoT technologies to help our clients stay ahead of the curve.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 shadow-card">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Company-History"
                alt="RockCore Company History"
                width={500}
                height={400}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="bg-white p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-card">
                  <div className="text-rockcore-green">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8 bg-white rounded-lg shadow-card">
                <div className="bg-gray-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <div className="text-rockcore-green">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading RockCore's mission to revolutionize industrial computing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-card overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-rockcore-green font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
