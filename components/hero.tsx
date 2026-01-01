'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative mx-auto mb-20 w-[min(1100px,92vw)] overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#07070b] via-[#040404] to-[#0d0d15] px-10 py-16 text-white shadow-[0_70px_180px_rgba(0,0,0,0.7)]">
      <div className="neon-orb neon-orb--cyan neon-orb--animated" />
      <div className="neon-orb neon-orb--purple neon-orb--animated" />
      <div className="relative z-10 flex items-center justify-center">
        {/* Image zak41.png uniquement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-[#C084FC]/20 via-transparent to-[#9333EA]/10 blur-3xl" />
          <Image
            src="/images/zak41.png"
            alt="Developer workspace illustration with GitHub"
            width={1536}
            height={519}
            className="relative z-10 w-full h-auto rounded-[32px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
