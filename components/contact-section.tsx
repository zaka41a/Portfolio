'use client'

import { motion } from 'framer-motion'
import SectionHeading from './ui/section-heading'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className="section-wrapper mx-auto w-[min(1100px,92vw)] py-16">
      <div className="rounded-[30px] bg-gradient-to-br from-[#050505] via-[#08080d] to-[#0d0d12] p-10 text-white shadow-[0_60px_150px_rgba(0,0,0,0.6)]">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Ready to build something{' '}
              <span className="text-[#C084FC]">impactful</span>?
            </>
          }
          description="Let's discuss MVPs, refactoring, technical guidance, or immersive experiences."
          align="center"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 text-sm text-white/80 md:flex-row md:justify-center"
        >
          <a href="mailto:zaksab98@gmail.com" className="text-base font-semibold text-white hover:text-white/60">
            zaksab98@gmail.com
          </a>
          <div className="flex gap-4 text-sm">
            <Link href="https://github.com/zaka41a" target="_blank" className="font-semibold text-[#C084FC] transition hover:text-[#9333EA]">
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/zakaria-sabiri-8a97b4364/"
              target="_blank"
              className="font-semibold text-[#C084FC] transition hover:text-[#9333EA]"
            >
              LinkedIn
            </Link>
            <Link href="/contact" className="font-semibold text-[#C084FC] transition hover:text-[#9333EA]">
              Form
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
