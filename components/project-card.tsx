'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  tags: readonly string[]
  linkGithub: string
  linkDemo?: string
}

export default function ProjectCard({ title, description, tags, linkGithub, linkDemo }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.4 }}
      className="group relative flex h-full flex-col rounded-[20px] border border-transparent bg-[rgba(124,58,237,0.08)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition hover:border-[#C084FC] hover:bg-[rgba(192,132,252,0.15)]"
    >
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#C084FC]/15 via-transparent to-[#7C3AED]/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
      <div className="relative z-10 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm text-white/70">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3 text-sm font-semibold">
          <Link href={linkGithub} target="_blank" className="text-white hover:text-white/60">
            GitHub →
          </Link>
          {linkDemo ? (
            <Link href={linkDemo} target="_blank" className="text-white hover:text-white/60">
              Demo →
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
