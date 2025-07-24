import React from 'react'

interface SimpleRichTextProps {
  content: string
  className?: string
}

export function SimpleRichText({ content, className = "" }: SimpleRichTextProps) {
  // Simple markdown-like parsing for basic formatting
  const parseContent = (text: string) => {
    // Convert markdown-style formatting to HTML
    let parsed = text
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
    
    // Wrap in paragraph tags if not already wrapped
    if (!parsed.includes('<h1>') && !parsed.includes('<h2>') && !parsed.includes('<li>')) {
      parsed = `<p class="mb-4">${parsed}</p>`
    }
    
    // Wrap list items in ul tags
    if (parsed.includes('<li>')) {
      parsed = parsed.replace(/(<li.*?<\/li>)/g, '<ul class="list-disc mb-4">$1</ul>')
    }
    
    return parsed
  }

  return (
    <div 
      className={`prose prose-gray max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: parseContent(content) }}
    />
  )
}