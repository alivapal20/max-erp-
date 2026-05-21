import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Meetel | Premium Paper Solutions & ERP Systems',
  description: 'High-quality thermal paper rolls, printers, and integrated ERP solutions for enterprise businesses. Trusted by 500+ companies worldwide.',
  keywords: ['thermal paper', 'paper solutions', 'ERP system', 'business automation', 'thermal printers'],
  creator: 'Meetel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meetel.com',
    siteName: 'Meetel',
    title: 'Meetel | Premium Paper Solutions & ERP Systems',
    description: 'High-quality thermal paper rolls and integrated ERP solutions for enterprise businesses',
  },
  robots: 'index, follow',
  icons: {
    icon: [
      {
        url: '/mainlogo.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/mainlogo.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/mainlogo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/mainlogo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <link rel="icon" href="/mainlogo.svg" />
        <link rel="apple-touch-icon" href="/mainlogo.svg" />
        <meta name="theme-color" content="#0a8f3d" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
