'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [{ label: 'Demo', href: '#demo' }]

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
          <a
            href="/#about"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#C084FC] hover:bg-[#C084FC]/10 hover:shadow-[0_0_22px_rgba(192,132,252,0.45)]"
          >
            About
          </a>
          <a
            href="/#projects"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#C084FC] hover:bg-[#C084FC]/10 hover:shadow-[0_0_22px_rgba(192,132,252,0.45)]"
          >
            Projects
          </a>
          <a
            href="/demo"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#C084FC] hover:bg-[#C084FC]/10 hover:shadow-[0_0_22px_rgba(192,132,252,0.45)]"
          >
            Demo
          </a>
          <a
            href="/Zakaria_Sabiri_CV.pdf"
            className="rounded-full bg-gradient-to-r from-[#C084FC] to-[#9333EA] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(192,132,252,0.4)] transition hover:shadow-[0_0_30px_rgba(192,132,252,0.6)] hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.header>
  )
}
