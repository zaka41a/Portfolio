'use client'

import { motion } from 'framer-motion'
import SectionHeading from './ui/section-heading'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Freelance / Personal Projects',
    summary: 'Designing complete applications (Java, PHP, Next.js) for cafés, marketplaces, and data tools.',
    skills: ['Modular Architecture', 'CI/CD GitHub Actions', 'Spring Boot 3', 'React Query'],
  },
  {
    period: '2023',
    role: 'Projects @ FH Aachen',
    summary: 'Academic work and mentoring on mathematical modeling, data structures, and optimizations.',
    skills: ['Modeling', 'Automated Testing', 'Refactoring', 'MongoDB'],
  },
  {
    period: '2022',
    role: 'Personal R&D',
    summary: 'Mobile explorations (Swift/Kotlin) and API integrations (OpenWeather, Neo4j, Ollama).',
    skills: ['SwiftUI', 'Kotlin', 'Graph Databases', 'API design'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrapper mx-auto w-[min(1100px,92vw)] py-16">
      <SectionHeading
        eyebrow="Experience"
        title="Timeline & Key Learnings"
        description="Each milestone has allowed me to refine my product engineering instincts."
      />
      <div className="relative border-l border-white/10 pl-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative mb-12"
          >
            <span className="absolute -left-[36px] top-2 h-4 w-4 rounded-full border-4 border-[#040404] bg-[#C084FC] shadow-[0_0_20px_rgba(192,132,252,0.6)]" />
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">{exp.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{exp.role}</h3>
            <p className="mt-3 text-sm text-white/60">{exp.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-[#C084FC]/30 bg-[#C084FC]/10 px-3 py-1 text-xs font-medium text-[#C084FC] transition-all hover:border-[#C084FC]/50 hover:bg-[#C084FC]/20 hover:shadow-[0_0_15px_rgba(192,132,252,0.3)]">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
