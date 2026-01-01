'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownToLine, Mail } from 'lucide-react'
import Badge from './ui/badge'

export default function HeroSection() {
  return (
    <section className="relative mx-auto mb-20 w-[min(1100px,92vw)] overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#07070b] via-[#040404] to-[#0d0d15] px-10 py-16 text-white shadow-[0_70px_180px_rgba(0,0,0,0.7)]">
      <div className="neon-orb neon-orb--cyan neon-orb--animated" />
      <div className="neon-orb neon-orb--purple neon-orb--animated" />
      <div className="relative z-10 grid gap-12 lg:grid-cols-2">
        {/* Left Column: Text Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Badge>Full-Stack Software Engineer</Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            Hi, I'm <span className="gradient-text">Zakaria Sabiri</span>
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Building full-stack applications with type-safe React, scalable APIs, and maintainable architecture.
          </p>
          <p className="mt-6 text-base text-white/70 leading-relaxed">
            Computer Science student at FH Aachen with 8+ completed projects. Experienced with React/TypeScript,
            Spring Boot, Express, and PostgreSQL. Focus on clean code, REST APIs, and security-first design.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-base bg-[#111111] text-white hover:bg-[#C084FC] hover:text-black"
            >
              Explore Projects
            </a>
            <a
              href="/Zakaria_Sabiri_CV.pdf"
              className="btn-base flex items-center gap-2 bg-transparent text-white"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowDownToLine size={16} />
              Download Resume
            </a>
            <a
              href="mailto:zaksab98@gmail.com"
              className="btn-base flex items-center gap-2 bg-transparent text-white"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image zak41.png */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-[#C084FC]/20 via-transparent to-[#9333EA]/10 blur-3xl" />
            <Image
              src="/images/zak41.png"
              alt="Developer workspace illustration with GitHub"
              width={1536}
              height={519}
              className="relative z-10 w-full h-auto rounded-[32px]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
