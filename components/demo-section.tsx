'use client'

import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Live prototype',
    detail: 'Tableau de bord Next.js + Tailwind animé, optimisé pour la performance.',
  },
  {
    title: 'Stack alignée',
    detail: 'React 19, Server Components, animations Framer Motion, thèmes personnalisés.',
  },
  {
    title: 'Focus produit',
    detail: 'Narration claire, CTA visibles, mise en avant des stacks et expériences clés.',
  },
]

export default function DemoSection() {
  return (
    <section id="demo" className="section-wrapper mx-auto w-[min(1100px,92vw)] py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#07070b] via-[#050505] to-[#12121b] p-10 shadow-[0_50px_140px_rgba(0,0,0,0.65)]"
      >
        <div className="absolute inset-0 opacity-[0.35] blur-3xl">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%)]" />
        </div>
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Demo</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Palette Zakaria Sabiri · Noir profond, gris premium et highlights lumineux.
            </h2>
            <p className="mt-4 text-base text-white/70">
              Cette section résume le ton visuel du portfolio : surfaces noires satinées, typographie nette, halos subtils,
              et CTA contrastés. Un aperçu rapide de ce que je livre lorsque je design un MVP ou un espace de présentation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">#040404</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">#101015</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">#F5F5F5</span>
            </div>
          </div>
          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">{item.title}</p>
                <p className="mt-2 text-sm text-white/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
