'use client'

import { motion } from 'framer-motion'
import { Award, Target, Zap, Rocket, Trophy, Code } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'MERN Stack Master',
    description: 'Full-stack e-commerce platform with authentication & admin dashboard',
    color: 'from-yellow-500/20 to-orange-500/20',
    iconColor: 'text-yellow-400',
    project: 'GreenNest',
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description: 'Knowledge graph generation with Ollama LLM + Neo4j',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    project: 'Pro_KONDA',
  },
  {
    icon: Rocket,
    title: 'Enterprise Architecture',
    description: 'Spring Boot microservices with React frontend',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400',
    project: 'StoreZ & AtmosFlux',
  },
  {
    icon: Code,
    title: 'Full-Stack Polyglot',
    description: 'Proficient in Java, PHP, JavaScript/TypeScript ecosystems',
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
    project: 'Multiple Projects',
  },
  {
    icon: Target,
    title: '10+ Projects',
    description: 'Shipped production-ready applications across different domains',
    color: 'from-indigo-500/20 to-violet-500/20',
    iconColor: 'text-indigo-400',
    project: 'Portfolio',
  },
  {
    icon: Award,
    title: 'Modern Stack Expert',
    description: 'Next.js, React, Redux, Tailwind, TypeScript mastery',
    color: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-400',
    project: 'Current Skills',
  },
]

export default function Achievements() {
  return (
    <section className="mx-auto mb-20 w-[min(1100px,92vw)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C084FC]/10 to-[#9333EA]/10 border border-[#C084FC]/30 px-4 py-2 mb-4">
          <Trophy className="h-4 w-4 text-[#C084FC]" />
          <span className="text-sm font-semibold text-[#C084FC]">Achievements Unlocked</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Technical Achievements
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Key milestones and technical accomplishments across various projects and technologies
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm cursor-pointer"
            >
              {/* Background gradient glow */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${achievement.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`rounded-2xl bg-gradient-to-br ${achievement.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 ${achievement.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                    {achievement.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-white/60 mb-3 leading-relaxed">
                {achievement.description}
              </p>

              {/* Project tag */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
                <span className="text-xs font-medium text-white/70">{achievement.project}</span>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          )
        })}
      </div>

      {/* Fun stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex flex-wrap justify-center items-center gap-8 md:gap-12 rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.03] px-8 md:px-12 py-8 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              5+
            </p>
            <p className="text-sm md:text-base text-white/70 mt-2 font-medium">Tech Stacks</p>
          </div>
          <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              15K+
            </p>
            <p className="text-sm md:text-base text-white/70 mt-2 font-medium">Lines of Code</p>
          </div>
          <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              100%
            </p>
            <p className="text-sm md:text-base text-white/70 mt-2 font-medium">Passion</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
