'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Star, GitFork } from 'lucide-react'

export default function GitHubStats() {
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

      {/* Image zak41 + Stats */}
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Image à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full overflow-hidden rounded-[32px] border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-[#C084FC]/20 via-transparent to-[#9333EA]/10 blur-2xl" />
            <Image
              src="/images/zak41.png"
              alt="Open source developer with GitHub"
              width={1536}
              height={519}
              className="w-full h-auto rounded-[32px]"
            />
          </div>
        </motion.div>

        {/* Stats à droite */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-4 sm:grid-cols-1"
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
      </div>
    </section>
  )
}
