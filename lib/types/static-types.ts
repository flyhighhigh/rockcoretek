// Static types to replace BaseHub fragments

export interface StaticHeading {
  title: string
  subtitle?: string
  tag?: string
  align?: 'left' | 'center' | 'right'
}

export interface StaticImage {
  url: string
  alt: string
  width?: number
  height?: number
  aspectRatio?: number
  blurDataURL?: string
}

export interface StaticDarkLightImage {
  dark: StaticImage
  light: StaticImage
}

export interface StaticButton {
  _id: string
  label: string
  href: string
  type: 'primary' | 'secondary'
  icon?: string
}

export interface StaticAuthor {
  _id: string
  _title: string
  image: StaticImage
  company?: {
    _title: string
    image: StaticImage
  }
  role?: string
}

export interface StaticQuote {
  _id: string
  author: StaticAuthor
  quote: string
}

// Mock fragment function for compatibility
export function mockFragment<T>(componentName: string, fields: any): T {
  return {} as T
}

// Mock fragmentOn for compatibility
export const fragmentOn = {
  infer: <T>(fragment: any): T => ({} as T)
}

// Export mock fragments for components that still reference them
export const headingFragment = mockFragment('HeadingComponent', {})
export const darkLightImageFragment = mockFragment('DarkLightImageComponent', {})
export const buttonFragment = mockFragment('ButtonComponent', {})
export const authorFragment = mockFragment('AuthorComponent', {})
export const quoteFragment = mockFragment('QuoteComponent', {})
export const optimizedImageFragment = mockFragment('BlockImage', {})
export const avatarFragment = mockFragment('BlockImage', {})

export type HeadingFragment = StaticHeading
export type DarkLightImageFragment = StaticDarkLightImage
export type ButtonFragment = StaticButton
export type AuthorFragment = StaticAuthor
export type QuoteFragment = StaticQuote
export type OptimizedImageFragment = StaticImage
export type AvatarFragment = StaticImage

// General events mock
export interface GeneralEvents {
  ingestKey: string
}
