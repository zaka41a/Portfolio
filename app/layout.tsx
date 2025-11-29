import type { Metadata } from 'next'
import './globals.css'
import '@/styles/gradients.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollProgress from '@/components/scroll-progress'
import AnimatedBackground from '@/components/animated-background'

export const metadata: Metadata = {
  title: 'Zakaria Sabiri · Full-Stack Software Engineer',
  description: 'Portfolio of Zakaria Sabiri — Full-Stack Software Engineer based in Aachen, Germany.',
  metadataBase: new URL('https://example.com'),
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
  openGraph: {
    title: 'Zakaria Sabiri · Portfolio',
    description: 'Building clean, scalable and future-ready digital systems.',
    url: 'https://example.com',
    siteName: 'Zakaria Sabiri Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-white font-sans">
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative flex min-h-screen flex-col overflow-hidden pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
