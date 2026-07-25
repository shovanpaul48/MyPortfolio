import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/styles/theme.css'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shovanpaul48.github.io/MyPortfolio'),
  title: 'Shovan Paul — GenAI & Backend Engineer',
  description:
    'Portfolio of Shovan Paul, Associate Software Developer at TCS Kolkata. Specializing in LangChain, LangGraph, RAG pipelines, GraphRAG, FastAPI, and Azure OpenAI.',
  keywords: [
    'Shovan Paul',
    'GenAI Engineer',
    'LangChain',
    'LangGraph',
    'RAG pipeline',
    'FastAPI',
    'Neo4j',
    'GraphRAG',
    'portfolio',
    'TCS',
  ],
  authors: [{ name: 'Shovan Paul', url: 'https://github.com/shovanpaul48' }],
  openGraph: {
    type: 'website',
    title: 'Shovan Paul — GenAI & Backend Engineer',
    description:
      'LangChain · LangGraph · RAG · GraphRAG · FastAPI · Azure OpenAI. Building intelligent backend systems.',
    url: 'https://shovanpaul48.github.io/MyPortfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Shovan Paul Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shovan Paul — GenAI & Backend Engineer',
    description: 'LangChain · LangGraph · RAG · GraphRAG · FastAPI · Azure OpenAI.',
  },
  robots: { index: true, follow: true },
}

// Inline script to prevent flash-of-wrong-theme
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('portfolio-theme');
      var theme = stored || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {}
  })();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
