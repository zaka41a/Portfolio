'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDownToLine, Mail } from 'lucide-react'
import Badge from './ui/badge'

export default function HeroSection() {
  return (
    <section className="relative mx-auto mb-20 w-[min(1100px,92vw)] overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#07070b] via-[#040404] to-[#0d0d15] px-10 py-16 text-white shadow-[0_70px_180px_rgba(0,0,0,0.7)]">
      <div className="neon-orb neon-orb--cyan neon-orb--animated" />
      <div className="neon-orb neon-orb--purple neon-orb--animated" />
      <div className="relative z-10 grid gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Badge>Full-Stack Software Engineer</Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            Hi, I'm <span className="gradient-text">Zakaria Sabiri</span>
          </h1>
          <p className="mt-4 text-lg text-white/75">
            "Crafting scalable, enterprise-grade solutions with clean architecture and modern tech stacks."
          </p>
          <p className="mt-6 text-base text-white/60 leading-relaxed">
            Full-Stack Developer • Software Engineer • Tech Enthusiast specializing in robust architectures, scalable
            systems, and premium user experiences using Java, PHP, and modern JavaScript ecosystems.
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

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          <div className="glass-surface relative min-h-[380px] w-full max-w-md rounded-[32px] border border-white/20 p-7 animate-float shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-white/12 via-transparent to-white/5 blur-3xl" />
            <div className="flex h-full flex-col gap-4">
              <div className="group relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[#C084FC]/60 hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C084FC]/0 to-[#C084FC]/0 opacity-0 transition-opacity group-hover:from-[#C084FC]/10 group-hover:to-transparent group-hover:opacity-100" />
                <p className="relative text-xs uppercase tracking-[0.3em] text-[#C084FC] font-semibold">Currently Building</p>
                <h3 className="relative mt-3 text-xl font-bold text-white leading-tight">Enterprise-grade solutions</h3>
                <p className="relative mt-2 text-sm text-white/70 leading-relaxed">
                  Full-stack orchestration for demanding business applications and scalable platforms.
                </p>
              </div>
              <div className="group relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[#C084FC]/60 hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C084FC]/0 to-[#C084FC]/0 opacity-0 transition-opacity group-hover:from-[#C084FC]/10 group-hover:to-transparent group-hover:opacity-100" />
                <p className="relative text-xs uppercase tracking-[0.3em] text-[#C084FC] font-semibold">Core Expertise</p>
                <p className="relative mt-3 text-sm text-white/85 font-medium leading-relaxed">RESTful APIs • Microservices • Responsive UI/UX • Database Architecture</p>
              </div>
              <div className="group relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[#C084FC]/60 hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C084FC]/0 to-[#C084FC]/0 opacity-0 transition-opacity group-hover:from-[#C084FC]/10 group-hover:to-transparent group-hover:opacity-100" />
                <p className="relative text-xs uppercase tracking-[0.3em] text-[#C084FC] font-semibold">Tech Stack</p>
                <p className="relative mt-3 text-sm text-white/85 font-medium leading-relaxed">
                  Java • Spring Boot • PHP • Laravel • React • Next.js • TypeScript • Node.js • MongoDB • MySQL • Neo4j
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
