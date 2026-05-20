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
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
