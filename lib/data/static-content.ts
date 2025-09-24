// Static content to replace BaseHub CMS data
export interface StaticTheme {
  accent: string
  grayScale: string
}

export interface StaticAuthor {
  _id: string
  _title: string
  image: {
    url: string
    alt: string
    width?: number
    height?: number
  }
  company?: {
    _title: string
    image: {
      url: string
      alt: string
    }
  }
  role?: string
}

export interface StaticBlogPost {
  _id: string
  _title: string
  _slug: string
  excerpt: string
  publishedAt: string
  author: StaticAuthor
  coverImage?: {
    url: string
    alt: string
    width: number
    height: number
  }
  content?: string
}

export interface StaticPage {
  _id: string
  pathname: string
  _title: string
  sections: any[]
}

// Default theme configuration
export const defaultTheme: StaticTheme = {
  accent: "green",
  grayScale: "gray"
}

// Sample authors
export const staticAuthors: StaticAuthor[] = [
  {
    _id: "author-1",
    _title: "John Smith",
    image: {
      url: "/placeholder-user.jpg",
      alt: "John Smith",
      width: 100,
      height: 100
    },
    role: "Technical Writer"
  },
  {
    _id: "author-2", 
    _title: "Jane Doe",
    image: {
      url: "/placeholder-user.jpg",
      alt: "Jane Doe",
      width: 100,
      height: 100
    },
    role: "Product Manager"
  }
]

// Sample blog posts
export const staticBlogPosts: StaticBlogPost[] = [
  {
    _id: "post-1",
    _title: "Industrial Computing Trends 2024",
    _slug: "industrial-computing-trends-2024",
    excerpt: "Explore the latest trends in industrial computing and how they're shaping the future of manufacturing.",
    publishedAt: "2024-01-15T10:00:00Z",
    author: staticAuthors[0],
    coverImage: {
      url: "/placeholder.jpg",
      alt: "Industrial Computing Trends",
      width: 800,
      height: 400
    },
    content: `# Industrial Computing Trends 2024

The industrial computing landscape is evolving rapidly, driven by advances in AI, edge computing, and IoT technologies.

## Key Trends

1. **Edge AI Integration**: More processing power at the edge
2. **5G Connectivity**: Enhanced real-time communication
3. **Sustainability Focus**: Energy-efficient computing solutions

These trends are reshaping how we approach industrial automation and control systems.`
  },
  {
    _id: "post-2",
    _title: "Choosing the Right AI Box for Your Application",
    _slug: "choosing-right-ai-box",
    excerpt: "A comprehensive guide to selecting the perfect AI inference system for your specific use case.",
    publishedAt: "2024-01-10T14:30:00Z",
    author: staticAuthors[1],
    coverImage: {
      url: "/placeholder.jpg",
      alt: "AI Box Selection Guide",
      width: 800,
      height: 400
    },
    content: `# Choosing the Right AI Box for Your Application

Selecting the right AI inference system is crucial for the success of your AI deployment.

## Considerations

- **Performance Requirements**: CPU vs GPU vs specialized accelerators
- **Power Constraints**: Thermal design and power consumption
- **Connectivity**: Network interfaces and expansion options
- **Software Compatibility**: Framework support and development tools

Make sure to evaluate these factors carefully before making your decision.`
  }
]

// Sample changelog entries
export const staticChangelogPosts = [
  {
    _id: "changelog-1",
    _title: "Product Update v2.1.0",
    _slug: "product-update-v2-1-0",
    publishedAt: "2024-01-20T09:00:00Z",
    excerpt: "Enhanced AI processing capabilities and improved thermal management",
    image: {
      url: "/placeholder.jpg",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    },
    authors: [staticAuthors[0]],
    content: `## New Features
- Enhanced AI processing capabilities
- Improved thermal management
- Extended temperature range support

## Bug Fixes
- Fixed connectivity issues in harsh environments
- Resolved memory optimization problems`,
    version: "v2.1.0"
  }
]

// Site settings
export const siteSettings = {
  logo: {
    url: "./rockcore-logo.png",
    alt: "RockCore"
  },
  generalEvents: {
    ingestKey: "static-analytics-key"
  }
}

// Navigation and footer data
export const navigationData = {
  header: {
    navbar: {
      items: [
        { _title: "Home", href: "/" },
        { _title: "Products", href: "/products" },
        { _title: "Solutions", href: "/solutions" },
        { _title: "About", href: "/about" },
        { _title: "Contact", href: "/contact" }
      ]
    },
    rightCtas: {
      items: [
        { _id: "cta-1", label: "Get Quote", href: "/contact", type: "primary" }
      ]
    }
  },
  footer: {
    copyright: "© 2024 RockCore Solutions. All rights reserved.",
    navbar: {
      items: [
        { _title: "Privacy Policy", url: "/privacy" },
        { _title: "Terms of Service", url: "/terms" },
        { _title: "Support", url: "/support" }
      ]
    },
    socialLinks: [
      { _title: "LinkedIn", icon: { url: "/placeholder.svg" }, url: "https://linkedin.com" },
      { _title: "Twitter", icon: { url: "/placeholder.svg" }, url: "https://twitter.com" }
    ]
  }
}
