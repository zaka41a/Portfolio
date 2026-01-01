'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, Github, Sparkles, Zap, Code2, Boxes } from 'lucide-react'

export default function DemoPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const featuredCount = projects.filter((p) => 'featured' in p && p.featured).length
  const liveCount = projects.filter((p) => 'linkLive' in p && p.linkLive).length

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d0d15] to-[#050509]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-1/4 top-0 h-[800px] w-[800px] rounded-full bg-[#C084FC]/20 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-[#9333EA]/20 blur-[120px]"
        />
      </div>

      {/* Hero Section with 3D Effect */}
      <section className="relative mx-auto mb-32 w-[min(1100px,92vw)] pt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 inline-flex"
          >
            <div className="group relative overflow-hidden rounded-full border border-[#C084FC]/40 bg-gradient-to-r from-[#C084FC]/10 to-[#9333EA]/10 px-8 py-4 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C084FC]/20 to-[#9333EA]/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-[#C084FC] animate-pulse" />
                <span className="text-lg font-bold uppercase tracking-[0.3em] text-white">Portfolio Showcase</span>
                <Sparkles className="h-6 w-6 text-[#9333EA] animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Main Title with Gradient Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="mb-4 text-7xl font-black leading-none md:text-8xl">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Full-Stack
              </span>
            </div>
            <div className="relative inline-block text-7xl font-black leading-none md:text-9xl">
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="bg-gradient-to-r from-[#C084FC] via-[#9333EA] to-[#C084FC] bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Creations
              </motion.span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 -z-10 rounded-full bg-[#C084FC]/20 blur-3xl"
              />
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mb-16 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl"
          >
            Crafted with precision. Built for performance.
            <br />
            <span className="text-[#C084FC]">Each project tells a story</span> of technical excellence.
          </motion.p>

          {/* Stats with 3D Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { icon: Boxes, value: projects.length, label: 'Projects Built', color: 'from-cyan-500 to-blue-500' },
              { icon: Code2, value: featuredCount, label: 'Featured Work', color: 'from-purple-500 to-pink-500' },
              { icon: Zap, value: liveCount, label: 'Live Demos', color: 'from-orange-500 to-red-500' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all hover:border-[#C084FC]/60 hover:shadow-[0_20px_60px_rgba(192,132,252,0.4)]">
                  {/* Gradient Orb */}
                  <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />

                  <div className="relative flex flex-col items-center gap-4">
                    <div className={`rounded-2xl bg-gradient-to-br ${stat.color} p-4 shadow-lg`}>
                      <stat.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-center">
                      <p className="mb-1 text-5xl font-black text-white">{stat.value}</p>
                      <p className="text-sm font-medium uppercase tracking-wider text-white/60">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto w-[min(1100px,92vw)] pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-black text-white">
            The <span className="text-[#C084FC]">Collection</span>
          </h2>
          <p className="text-lg text-white/70">
            Explore the source code or experience live deployments
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-br from-[#0F0F12] via-[#0a0a0e] to-[#0F0F12] p-8 transition-all duration-500 hover:border-[#C084FC]/60 hover:shadow-[0_30px_80px_rgba(192,132,252,0.4)] hover:scale-[1.02]">
                {/* Animated Gradient Background on Hover */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/10 via-transparent to-[#9333EA]/10"
                />

                {/* Floating Orb */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#C084FC]/30 blur-[100px]"
                  />
                )}

                {/* Featured Badge */}
                {'featured' in project && project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute right-6 top-6 z-10"
                  >
                    <div className="flex items-center gap-2 rounded-full border border-[#C084FC]/40 bg-gradient-to-r from-[#C084FC]/20 to-[#9333EA]/20 px-4 py-2 backdrop-blur-sm">
                      <Sparkles className="h-4 w-4 text-[#C084FC]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C084FC]">Featured</span>
                    </div>
                  </motion.div>
                )}

                {/* Icon with Gradient */}
                <div className="relative z-10 mb-6 inline-flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#C084FC] to-[#9333EA] p-[2px] shadow-[0_0_40px_rgba(192,132,252,0.3)] transition-all group-hover:shadow-[0_0_60px_rgba(192,132,252,0.6)]">
                  <div className="flex h-full w-full items-center justify-center rounded-[26px] bg-[#0a0a0e]">
                    <Code2 className="h-12 w-12 text-[#C084FC]" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 mb-4 text-2xl font-bold text-white transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#C084FC] group-hover:to-[#9333EA]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mb-6 line-clamp-3 text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="relative z-10 mb-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/20 bg-gradient-to-r from-white/10 to-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-all group-hover:border-[#C084FC]/40 group-hover:bg-[#C084FC]/10 group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/50">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="relative z-10 flex gap-3">
                  {project.linkGithub && (
                    <a
                      href={project.linkGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-[#C084FC]/50 hover:bg-[#C084FC]/10 hover:shadow-[0_0_25px_rgba(192,132,252,0.3)]"
                    >
                      <Github className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                      <span>Code</span>
                    </a>
                  )}
                  {'linkLive' in project && project.linkLive && (
                    <a
                      href={project.linkLive}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C084FC] to-[#9333EA] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(192,132,252,0.4)] transition-all hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>

                {/* Bottom Glow Line */}
                <motion.div
                  initial={false}
                  animate={{
                    scaleX: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-[#C084FC] via-[#9333EA] to-[#C084FC]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
