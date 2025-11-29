'use client'

import { motion } from 'framer-motion'
import SectionHeading from './ui/section-heading'
import Image from 'next/image'
import { Layers3, Server, Database, Cog, Smartphone, ShieldCheck } from 'lucide-react'

const skillIcons: Record<string, string> = {
  React: '/images/icons/react.svg',
  TypeScript: '/images/icons/typescript.svg',
  'Next.js': '/images/icons/nextjs.svg',
  Vite: '/images/icons/vite.svg',
  TailwindCSS: '/images/icons/tailwindcss.svg',
  'Node.js': '/images/icons/nodejs.svg',
  Express: '/images/icons/express.svg',
  PHP: '/images/icons/php.svg',
  Laravel: '/images/icons/laravel.svg',
  Java: '/images/icons/java.svg',
  'Spring Boot': '/images/icons/springboot.svg',
  MySQL: '/images/icons/mysql.svg',
  PostgreSQL: '/images/icons/postgresql.svg',
  SQLite: '/images/icons/sqlite.svg',
  Firebase: '/images/icons/firebase.svg',
  Docker: '/images/icons/docker.svg',
  'CI/CD': '/images/icons/cicd.svg',
  Nginx: '/images/icons/nginx.svg',
  Linux: '/images/icons/linux.svg',
  'GitHub Actions': '/images/icons/githubactions.svg',
  'AWS basics': '/images/icons/aws.svg',
  Swift: '/images/icons/swift.svg',
  Kotlin: '/images/icons/kotlin.svg',
  iOS: '/images/icons/ios.svg',
  'REST APIs': '/images/icons/restapis.svg',
  Testing: '/images/icons/testing.svg',
  'Clean Architecture': '/images/icons/cleanarchitecture.svg',
  'Agile/Scrum': '/images/icons/agilescrum.svg',
}

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Vite', 'TailwindCSS'],
    icon: Layers3,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'Laravel', 'Java', 'Spring Boot'],
    icon: Server,
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'Firebase'],
    icon: Database,
  },
  {
    category: 'DevOps',
    items: ['Docker', 'CI/CD', 'Nginx', 'Linux', 'GitHub Actions', 'AWS basics'],
    icon: Cog,
  },
  {
    category: 'Mobile',
    items: ['Swift', 'Kotlin', 'iOS'],
    icon: Smartphone,
  },
  {
    category: 'Practices',
    items: ['REST APIs', 'Testing', 'Clean Architecture', 'Agile/Scrum'],
    icon: ShieldCheck,
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section-wrapper mx-auto w-[min(1100px,92vw)] py-16">
      <SectionHeading eyebrow="Skills" title="Stacks & Practices" description="Carefully chosen tools to deliver fast without sacrificing rigor." />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-br from-[#0F0F12] via-[#0a0a0e] to-[#0F0F12] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.6)] transition-all hover:border-[#C084FC]/60 hover:shadow-[0_25px_70px_rgba(192,132,252,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC]/0 to-[#C084FC]/0 opacity-0 transition-opacity group-hover:from-[#C084FC]/5 group-hover:to-transparent group-hover:opacity-100" />

            <div className="relative flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C084FC]/30 bg-gradient-to-br from-[#C084FC]/20 to-[#C084FC]/5 shadow-[0_0_20px_rgba(192,132,252,0.15)] transition-all group-hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]">
                  <group.icon className="h-5 w-5 text-[#C084FC]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{group.category}</h3>
                  <p className="text-xs text-white/40 mt-0.5">{group.items.length} skills</p>
                </div>
              </div>
              <span className="text-xs font-mono tracking-[0.25em] text-[#C084FC]/40">0{index + 1}</span>
            </div>

            <ul className="relative space-y-2.5">
              {group.items.map((skill) => {
                const iconSrc = skillIcons[skill]
                return (
                  <li
                    key={skill}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.02] px-4 py-3 text-sm font-medium text-white/90 transition-all hover:border-[#C084FC]/40 hover:bg-gradient-to-r hover:from-white/[0.10] hover:to-white/[0.04] hover:shadow-[0_0_15px_rgba(192,132,252,0.1)]"
                  >
                    {iconSrc ? (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#14141a] border border-white/10">
                        <Image src={iconSrc} alt={`${skill} icon`} width={18} height={18} />
                      </span>
                    ) : null}
                    <span className="text-sm">{skill}</span>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
