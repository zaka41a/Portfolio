'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from './ui/section-heading'
import { Code2, Layers, Gauge, Sparkles } from 'lucide-react'

const quickFacts = [
  { label: 'Clean architecture', icon: Layers },
  { label: 'Scalable APIs', icon: Code2 },
  { label: 'Product-centric', icon: Sparkles },
  { label: 'Quality-first', icon: Gauge },
  { label: 'Mentoring teams', icon: Sparkles },
]

const timeline = [
  {
    title: 'Discovery & Strategy',
    content: 'Rapid discovery, product scoping, MVP vs. long-term vision.',
  },
  {
    title: 'Clean Architecture',
    content: 'Modular design, documentation, and technical reviews.',
  },
  {
    title: 'Delivery & Measurement',
    content: 'Incremental implementation, testing, instrumentation, and feedback.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper mx-auto w-[min(1100px,92vw)] py-16">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            Engineering clarity, <span className="text-[#C084FC]">performance</span> and{' '}
            <span className="text-[#C084FC]">future-ready</span> systems.
          </>
        }
        description="I build platforms that combine business requirements, software quality, and scalability. Passionate about clean architectures, testing, and continuous monitoring."
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
            <p className="text-xl leading-relaxed text-white/80">
              With a dual background in mathematics and computer science, I love transforming ideas into tangible
              systems. I navigate between <span className="text-[#C084FC]">infrastructure</span>, <span className="text-[#C084FC]">backend</span>, and{' '}
              <span className="text-[#C084FC]">frontend</span> to ensure consistency, performance, and premium UX.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {timeline.map((step) => (
                <div key={step.title} className="group relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-[#C084FC]/60 hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C084FC]/0 to-[#C084FC]/0 opacity-0 transition-opacity group-hover:from-[#C084FC]/10 group-hover:to-transparent group-hover:opacity-100" />
                  <p className="relative text-sm uppercase tracking-[0.25em] text-[#C084FC] font-semibold mb-2 break-words">{step.title}</p>
                  <p className="relative mt-2 text-sm text-white/85 leading-relaxed break-words">{step.content}</p>
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
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">Quick facts</p>
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
            <p className="relative text-sm uppercase tracking-[0.3em] text-[#C084FC] font-semibold mb-2">Approach</p>
            <p className="relative mt-2 text-base text-white/85 leading-relaxed">
              Rapid discovery, prototyping, architecture, incremental implementation, continuous usage measurement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
