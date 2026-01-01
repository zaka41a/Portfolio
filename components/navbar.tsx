'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { User, FolderOpen, Sparkles, Download } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center"
    >
      <div className={`mt-4 flex w-[min(1100px,92vw)] items-center justify-between rounded-full border border-white/10 px-6 py-3 transition ${scrolled ? 'bg-black shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur' : 'bg-black/80'}`}>
        <Link href="/" className="flex items-center gap-3">
          <span className="relative inline-flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-2xl">
            <Image src="/images/logo.png" alt="Z logo" width={56} height={56} priority />
          </span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {/* About - User Icon */}
          <a
            href="/#about"
            className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-[#C084FC] hover:bg-[#C084FC]/10 hover:shadow-[0_0_22px_rgba(192,132,252,0.45)]"
            title="About"
          >
            <User className="h-5 w-5 text-[#C084FC] transition-transform group-hover:scale-110" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-white">About</span>
          </a>

          {/* Projects - Folder Icon */}
          <a
            href="/#projects"
            className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-[#C084FC] hover:bg-[#C084FC]/10 hover:shadow-[0_0_22px_rgba(192,132,252,0.45)]"
            title="Projects"
          >
            <FolderOpen className="h-5 w-5 text-[#C084FC] transition-transform group-hover:scale-110" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-white">Projects</span>
          </a>

          {/* Demo - Sparkles Icon */}
          <a
            href="/demo"
            className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-[#C084FC] hover:bg-[#C084FC]/10 hover:shadow-[0_0_22px_rgba(192,132,252,0.45)]"
            title="Demo"
          >
            <Sparkles className="h-5 w-5 text-[#C084FC] transition-transform group-hover:rotate-12" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-white">Demo</span>
          </a>

          {/* Download CV */}
          <a
            href="/Zakaria_Sabiri_CV.pdf"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C084FC] to-[#9333EA] px-5 py-2 shadow-[0_0_20px_rgba(192,132,252,0.4)] transition hover:shadow-[0_0_30px_rgba(192,132,252,0.6)] hover:scale-105"
            target="_blank"
            rel="noreferrer"
            title="Download CV"
          >
            <Download className="h-4 w-4 text-white transition-transform group-hover:translate-y-0.5" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-white">Download CV</span>
          </a>
        </div>
      </div>
    </motion.header>
  )
}
