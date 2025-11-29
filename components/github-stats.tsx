'use client'

import { motion } from 'framer-motion'
import { Github, Star, GitFork } from 'lucide-react'
import Image from 'next/image'

export default function GitHubStats() {
  const username = 'zaka41a'

  return (
    <section className="mx-auto mb-20 w-[min(1100px,92vw)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          GitHub Activity
        </h2>
        <p className="text-white/60 text-lg">
          Open source contributions and code statistics
        </p>
      </motion.div>

      {/* Contribution Streak */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/10 to-cyan-500/10 blur-3xl" />

        <div className="flex items-center gap-3 mb-6">
          <Star className="h-6 w-6 text-white" />
          <h3 className="text-xl font-semibold text-white">Contribution Streak</h3>
        </div>

        <Image
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0d1117&ring=00d9ff&fire=ff6b00&currStreakLabel=ffffff`}
          alt="Contribution Streak"
          width={1000}
          height={180}
          className="w-full rounded-xl"
          unoptimized
        />
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 grid gap-4 sm:grid-cols-3"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <div className="flex justify-center mb-3">
            <div className="rounded-full bg-cyan-500/20 p-3">
              <Github className="h-6 w-6 text-cyan-400" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white mb-1">10+</p>
          <p className="text-sm text-white/60">Public Repositories</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <div className="flex justify-center mb-3">
            <div className="rounded-full bg-purple-500/20 p-3">
              <Star className="h-6 w-6 text-purple-400" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white mb-1">10+</p>
          <p className="text-sm text-white/60">Total Stars</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <div className="flex justify-center mb-3">
            <div className="rounded-full bg-green-500/20 p-3">
              <GitFork className="h-6 w-6 text-green-400" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white mb-1">5+</p>
          <p className="text-sm text-white/60">Total Forks</p>
        </div>
      </motion.div>
    </section>
  )
}
