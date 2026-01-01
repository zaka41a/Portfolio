'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, Github, Folder, Layers, Zap } from 'lucide-react'

export default function DemoPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const featuredCount = projects.filter((p) => 'featured' in p && p.featured).length
  const liveCount = projects.filter((p) => 'linkLive' in p && p.linkLive).length

  return (
    <div className="relative min-h-screen">
      {/* Hero Introduction Section */}
      <section className="relative mx-auto mb-20 w-[min(1100px,92vw)] overflow-hidden rounded-[56px] border border-white/20 bg-gradient-to-br from-[#0a0a0f] via-[#0d0d15] to-[#050509] px-12 py-20 shadow-[0_60px_180px_rgba(0,0,0,0.9)]">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-[#C084FC]/20 blur-[140px] animate-pulse" />
          <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#9333EA]/20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] rounded-full bg-[#C084FC]/15 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C084FC]/40 bg-[#C084FC]/10 px-6 py-3 backdrop-blur-sm">
              <Folder className="h-5 w-5 text-[#C084FC]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C084FC]">Project Portfolio</span>
            </div>

            {/* Main Title */}
            <h1 className="mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-6xl font-bold leading-tight text-transparent md:text-7xl">
              Full-Stack
              <br />
              <span className="bg-gradient-to-r from-[#C084FC] via-[#9333EA] to-[#C084FC] bg-clip-text">
                Applications
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-white/75">
              Production-ready applications demonstrating full-stack development capabilities, from database design
              to frontend UI. Each project showcases specific technical challenges, architectural decisions, and
              implementation patterns.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C084FC]/30 bg-gradient-to-br from-[#C084FC]/20 to-[#C084FC]/5 shadow-[0_0_30px_rgba(192,132,252,0.3)]">
                  <Folder className="h-7 w-7 text-[#C084FC]" />
                </div>
                <div className="text-left">
                  <p className="text-3xl font-bold text-white">{projects.length}</p>
                  <p className="text-sm text-white/60">Total Projects</p>
                </div>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C084FC]/30 bg-gradient-to-br from-[#C084FC]/20 to-[#C084FC]/5 shadow-[0_0_30px_rgba(192,132,252,0.3)]">
                  <Layers className="h-7 w-7 text-[#C084FC]" />
                </div>
                <div className="text-left">
                  <p className="text-3xl font-bold text-white">{featuredCount}</p>
                  <p className="text-sm text-white/60">Featured Projects</p>
                </div>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C084FC]/30 bg-gradient-to-br from-[#C084FC]/20 to-[#C084FC]/5 shadow-[0_0_30px_rgba(192,132,252,0.3)]">
                  <Zap className="h-7 w-7 text-[#C084FC]" />
                </div>
                <div className="text-left">
                  <p className="text-3xl font-bold text-white">{liveCount}</p>
                  <p className="text-sm text-white/60">Live Deployments</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto w-[min(1100px,92vw)] pb-20">
        <div className="mb-10">
          <h2 className="mb-3 text-4xl font-bold text-white">Complete Project List</h2>
          <p className="text-lg text-white/70">
            Click <span className="text-[#C084FC]">GitHub</span> to view source code or <span className="text-[#C084FC]">Demo</span> to access live deployments
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-br from-[#0F0F12] via-[#0a0a0e] to-[#0F0F12] p-8 transition-all hover:border-[#C084FC]/60 hover:shadow-[0_30px_80px_rgba(192,132,252,0.35)] hover:scale-[1.02]"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#C084FC]/0 via-[#C084FC]/0 to-[#C084FC]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#C084FC]/10 group-hover:via-transparent group-hover:to-[#9333EA]/10 group-hover:opacity-100" />

              {/* Floating Orb on Hover */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#C084FC]/20 blur-[100px]"
                />
              )}

              {/* Featured Badge */}
              {'featured' in project && project.featured && (
                <div className="absolute right-6 top-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C084FC]/40 bg-[#C084FC]/15 px-3 py-1.5 backdrop-blur-sm">
                    <Layers className="h-3.5 w-3.5 text-[#C084FC]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C084FC]">Featured</span>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="relative mb-6 inline-flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#C084FC]/40 bg-gradient-to-br from-[#C084FC]/30 to-[#C084FC]/10 shadow-[0_0_40px_rgba(192,132,252,0.3)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(192,132,252,0.5)]">
                <Folder className="h-10 w-10 text-[#C084FC]" />
              </div>

              {/* Title */}
              <h3 className="relative mb-4 text-2xl font-bold text-white transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#C084FC] group-hover:to-[#9333EA]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="relative mb-6 line-clamp-3 text-sm leading-relaxed text-white/70">
                {project.description}
              </p>

              {/* Tags */}
              <div className="relative mb-6 flex flex-wrap gap-2">
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
              <div className="relative flex gap-3">
                {project.linkGithub && (
                  <a
                    href={project.linkGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-[#C084FC]/50 hover:bg-[#C084FC]/10 hover:shadow-[0_0_25px_rgba(192,132,252,0.3)] hover:scale-105"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                )}
                {'linkLive' in project && project.linkLive && (
                  <a
                    href={project.linkLive}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C084FC] to-[#9333EA] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(192,132,252,0.4)] transition-all hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C084FC]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
