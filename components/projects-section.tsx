'use client'

import SectionHeading from './ui/section-heading'
import ProjectCard from './project-card'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProjectsSection({ limit }: { limit?: number }) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects
  return (
    <section id="projects" className="section-wrapper mx-auto w-[min(1100px,92vw)] py-16">
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#7C3AED]/15 via-[#C084FC]/12 to-transparent p-10">
        <SectionHeading
          eyebrow="Projects"
          title="Production Releases & Playgrounds"
          description="An overview of the platforms and tools I've built with a focus on impact."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        {limit && projects.length > limit ? (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#C084FC] hover:bg-[#C084FC]/10"
            >
              View All Projects
            </Link>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
