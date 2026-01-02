'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from './ui/section-heading'
import { Code2, Layers, Gauge, Sparkles, BookOpen } from 'lucide-react'

const quickFacts = [
  { label: 'Clean architecture', icon: Layers },
  { label: 'REST API design', icon: Code2 },
  { label: 'Type-safe development', icon: Sparkles },
  { label: 'Security-first approach', icon: Gauge },
  { label: 'Full-stack ownership', icon: BookOpen },
]

const timeline = [
  {
    title: 'Requirements Analysis',
    content: 'Understanding user needs, defining scope, and choosing appropriate tech stack.',
  },
  {
    title: 'Architecture & Design',
    content: 'Database schema, API endpoints, component structure, and authentication flow.',
  },
  {
    title: 'Implementation & Testing',
    content: 'Incremental development, manual testing, deployment, and documentation.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper mx-auto w-[min(1100px,92vw)] py-16">
      {/* Banner cybertech avant le heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 overflow-hidden rounded-[40px] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/20 via-transparent to-[#9333EA]/10 blur-2xl" />
          <Image
            src="/images/cybertech-bannerV.png"
            alt="Zakaria Sabiri - Full-Stack Developer Tech Stack"
            width={1374}
            height={578}
            className="relative z-10 w-full h-auto"
          />
        </div>
      </motion.div>

      <SectionHeading
        eyebrow="About"
        title={
          <>
            Building <span className="text-[#C084FC]">maintainable</span>,{' '}
            <span className="text-[#C084FC]">scalable</span> applications.
          </>
        }
        description="I develop full-stack web applications from database design to responsive UI, applying software engineering principles and modern tooling."
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-br from-[#0b0b12] via-[#050505] to-[#0d0d18] p-8 shadow-[0_40px_160px_rgba(0,0,0,0.65)]"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_50%)]" />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-6">
              <div className="group relative h-28 w-28 overflow-hidden rounded-2xl border-2 border-white/20 shadow-[0_0_30px_rgba(192,132,252,0.2)] transition-all hover:border-[#C084FC]/60 hover:shadow-[0_0_40px_rgba(192,132,252,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Image src="/images/me.png" alt="Zakaria Sabiri portrait" fill className="object-cover transition-transform group-hover:scale-105" priority />
              </div>
              <div className="text-sm text-white/65">
                <p className="text-xs uppercase tracking-[0.3em] text-[#C084FC] font-semibold">Profile</p>
                <p className="mt-2 text-xl font-semibold text-white">Zakaria Sabiri</p>
                <p className="mt-1 text-base text-white/60">Dual Math & CS · FH Aachen</p>
              </div>
            </div>
            <p className="text-xl leading-relaxed text-white/90">
              Dual major in Mathematics and Computer Science at FH Aachen. I build full-stack applications
              from database schema to responsive UI, combining <span className="text-[#C084FC]">analytical thinking</span> from
              mathematics with <span className="text-[#C084FC]">practical engineering</span> from computer science.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {timeline.map((step) => (
                <div key={step.title} className="group relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-[#C084FC]/60 hover:shadow-[0_0_25px_rgba(192,132,252,0.2)] h-full flex flex-col">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C084FC]/0 to-[#C084FC]/0 opacity-0 transition-opacity group-hover:from-[#C084FC]/10 group-hover:to-transparent group-hover:opacity-100" />
                  <p className="relative text-sm uppercase tracking-[0.25em] text-[#C084FC] font-semibold mb-2 break-words">{step.title}</p>
                  <p className="relative mt-2 text-sm text-white/85 leading-relaxed break-words flex-1">{step.content}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] border border-white/20 bg-[#08080f] p-8 shadow-[0_35px_120px_rgba(0,0,0,0.6)]"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">Core Strengths</p>
          <ul className="mt-5 space-y-3">
            {quickFacts.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="group flex items-center gap-3 rounded-2xl border border-white/25 bg-gradient-to-r from-white/[0.10] to-white/[0.03] px-5 py-4 text-sm text-white transition-all hover:border-[#C084FC]/60 hover:shadow-[0_0_20px_rgba(192,132,252,0.2)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C084FC]/30 bg-gradient-to-br from-[#C084FC]/30 to-[#C084FC]/10 shadow-[0_0_15px_rgba(192,132,252,0.2)] transition-all group-hover:shadow-[0_0_25px_rgba(192,132,252,0.4)]">
                  <Icon className="h-5 w-5 text-[#C084FC]" strokeWidth={2} />
                </span>
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
          <div className="group relative mt-8 rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-6 text-white backdrop-blur-sm transition-all hover:border-[#C084FC]/60 hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C084FC]/0 to-[#C084FC]/0 opacity-0 transition-opacity group-hover:from-[#C084FC]/10 group-hover:to-transparent group-hover:opacity-100" />
            <p className="relative text-sm uppercase tracking-[0.3em] text-[#C084FC] font-semibold mb-2">Development Approach</p>
            <p className="relative mt-2 text-base text-white/85 leading-relaxed">
              Requirements analysis, technical design, incremental implementation with Git version control,
              manual testing, and comprehensive documentation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
