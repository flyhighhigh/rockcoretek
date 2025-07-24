"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Users,
  Award,
  Globe,
  Target,
  Cpu,
  Zap,
  Brain,
  Shield,
  ArrowRight,
  CheckCircle,
  Cloud,
  Server,
} from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Global Clients" },
    { icon: <Award className="h-8 w-8" />, number: "15+", label: "Years Experience" },
    { icon: <Globe className="h-8 w-8" />, number: "50+", label: "Countries Served" },
    { icon: <Target className="h-8 w-8" />, number: "100+", label: "FPGA Projects" },
  ]

  const coreValues = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: t("about.values.algorithm"),
      description: t("about.values.algorithm.desc"),
      details: [
        "Convert complex algorithms into optimized FPGA IP cores",
        "Proprietary algorithm libraries for industrial applications",
        "Custom IP development for specific customer requirements",
        "Long-term IP licensing and support services",
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t("about.values.edge"),
      description: t("about.values.edge.desc"),
      details: [
        "Real-time processing with microsecond latency",
        "Reduced bandwidth requirements and costs",
        "Enhanced data privacy and security",
        "Offline operation capability",
      ],
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: t("about.values.innovation"),
      description: t("about.values.innovation.desc"),
      details: [
        "Cutting-edge FPGA and AI research",
        "Continuous technology advancement",
        "Industry-leading performance optimization",
        "Future-ready solution development",
      ],
    },
  ]

  const edgeVsCloud = {
    edge: {
      title: "Edge AI Computing",
      subtitle: "RockCore's Approach",
      advantages: [
        "Ultra-low latency (< 1ms response time)",
        "No internet dependency required",
        "Enhanced data privacy and security",
        "Reduced operational costs",
        "Real-time decision making",
        "Customizable algorithms",
      ],
      useCases: ["Industrial automation", "Quality control inspection", "Predictive maintenance", "Safety monitoring"],
      icon: <Server className="h-12 w-12" />,
    },
    cloud: {
      title: "Traditional Cloud AI",
      subtitle: "Conventional Approach",
      limitations: [
        "High latency (50-200ms typical)",
        "Internet connectivity required",
        "Data privacy concerns",
        "Ongoing subscription costs",
        "Bandwidth limitations",
        "Generic algorithms",
      ],
      challenges: [
        "Network reliability issues",
        "Scalability bottlenecks",
        "Data transfer costs",
        "Compliance restrictions",
      ],
      icon: <Cloud className="h-12 w-12" />,
    },
  }

  const team = [
    {
      name: "Dr. John Chen",
      position: "CEO & Founder",
      specialization: "FPGA Architecture & Algorithm Design",
      experience: "20+ years in industrial computing and FPGA development",
      image: "/placeholder.svg?height=300&width=300&text=John-Chen",
      achievements: ["Former Intel FPGA architect", "50+ patents in FPGA technology", "PhD in Electrical Engineering"],
    },
    {
      name: "Sarah Williams",
      position: "CTO",
      specialization: "Edge AI & Machine Learning",
      experience: "15+ years in AI and edge computing technologies",
      image: "/placeholder.svg?height=300&width=300&text=Sarah-Williams",
      achievements: ["Former NVIDIA AI researcher", "Expert in edge AI optimization", "MS in Computer Science"],
    },
    {
      name: "Michael Zhang",
      position: "VP of Engineering",
      specialization: "Industrial Systems & IoT",
      experience: "18+ years in industrial automation and IoT solutions",
      image: "/placeholder.svg?height=300&width=300&text=Michael-Zhang",
      achievements: ["Former Siemens engineer", "Industrial IoT specialist", "MS in Industrial Engineering"],
    },
  ]

  const capabilities = [
    {
      category: "FPGA Expertise",
      skills: [
        "Xilinx Vivado & Vitis development",
        "Intel Quartus Prime & OpenCL",
        "High-level synthesis (HLS)",
        "RTL design and verification",
        "System-on-chip (SoC) integration",
      ],
    },
    {
      category: "Algorithm IP Development",
      skills: [
        "Digital signal processing (DSP)",
        "Computer vision algorithms",
        "Machine learning acceleration",
        "Communication protocols",
        "Control system algorithms",
      ],
    },
    {
      category: "Edge AI Technologies",
      skills: [
        "TensorFlow Lite optimization",
        "ONNX model deployment",
        "Quantization techniques",
        "Neural network pruning",
        "Custom AI accelerators",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("nav.about")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leading provider of FPGA solutions and edge AI computing, specializing in algorithm IP development for
              industrial applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-rockcore-green text-white px-4 py-2 rounded-full text-sm font-medium">
                FPGA Specialists
              </span>
              <span className="bg-rockcore-green text-white px-4 py-2 rounded-full text-sm font-medium">
                Algorithm IP
              </span>
              <span className="bg-rockcore-green text-white px-4 py-2 rounded-full text-sm font-medium">Edge AI</span>
              <span className="bg-rockcore-green text-white px-4 py-2 rounded-full text-sm font-medium">
                Industrial Computing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("about.mission.title")}</h2>
              <p className="text-lg text-gray-600 mb-6">{t("about.mission.desc")}</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-rockcore-green mr-2" />
                  Develop cutting-edge FPGA solutions
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-rockcore-green mr-2" />
                  Create proprietary algorithm IP libraries
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-rockcore-green mr-2" />
                  Enable edge AI computing capabilities
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("about.vision.title")}</h2>
              <p className="text-lg text-gray-600 mb-6">{t("about.vision.desc")}</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-rockcore-green mr-2" />
                  Global leadership in FPGA technology
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-rockcore-green mr-2" />
                  Pioneer in edge AI solutions
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-rockcore-green mr-2" />
                  Industry standard for algorithm IP
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that drive our innovation in FPGA and edge AI technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-gray-50 rounded-lg p-8">
                <div className="bg-white p-4 rounded-lg w-20 h-20 mb-6 flex items-center justify-center shadow-sm">
                  <div className="text-rockcore-green">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 mb-6">{value.description}</p>
                <ul className="space-y-2">
                  {value.details.map((detail) => (
                    <li key={detail} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-rockcore-green mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge AI vs Cloud AI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Edge AI vs Traditional Cloud AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the advantages of edge computing over traditional cloud-based AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Edge AI */}
            <div className="bg-white rounded-lg shadow-card p-8">
              <div className="flex items-center mb-6">
                <div className="bg-rockcore-green p-3 rounded-lg mr-4">
                  <div className="text-white">{edgeVsCloud.edge.icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{edgeVsCloud.edge.title}</h3>
                  <p className="text-rockcore-green font-medium">{edgeVsCloud.edge.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Advantages</h4>
                <ul className="space-y-2">
                  {edgeVsCloud.edge.advantages.map((advantage) => (
                    <li key={advantage} className="flex items-start text-gray-600">
                      <CheckCircle className="h-4 w-4 text-rockcore-green mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Ideal Use Cases</h4>
                <div className="flex flex-wrap gap-2">
                  {edgeVsCloud.edge.useCases.map((useCase) => (
                    <span key={useCase} className="bg-rockcore-green text-white px-3 py-1 rounded-full text-sm">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud AI */}
            <div className="bg-white rounded-lg shadow-card p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gray-400 p-3 rounded-lg mr-4">
                  <div className="text-white">{edgeVsCloud.cloud.icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{edgeVsCloud.cloud.title}</h3>
                  <p className="text-gray-600 font-medium">{edgeVsCloud.cloud.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Limitations</h4>
                <ul className="space-y-2">
                  {edgeVsCloud.cloud.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start text-gray-600">
                      <div className="w-4 h-4 border border-gray-400 rounded mr-2 mt-0.5 flex-shrink-0"></div>
                      <span className="text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Common Challenges</h4>
                <div className="flex flex-wrap gap-2">
                  {edgeVsCloud.cloud.challenges.map((challenge) => (
                    <span key={challenge} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive expertise in FPGA development, algorithm IP creation, and edge AI implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.category} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{capability.category}</h3>
                <ul className="space-y-2">
                  {capability.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-600">
                      <Shield className="h-4 w-4 text-rockcore-green mr-2" />
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving RockCore's innovation in FPGA and edge AI technologies.
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
                  <p className="text-rockcore-green font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.specialization}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center text-xs text-gray-600">
                        <Award className="h-3 w-3 text-rockcore-green mr-1" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rockcore-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partner with FPGA and Edge AI Experts</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Leverage our expertise in algorithm IP development and edge computing to transform your industrial
            applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rockcore-green px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center justify-center"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-rockcore-green transition-colors font-medium"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
