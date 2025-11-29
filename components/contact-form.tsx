'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitted')
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] border border-white/10 bg-[#0b0b10]/90 p-8 shadow-[0_40px_140px_rgba(0,0,0,0.7)]"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col text-sm font-medium text-white/70">
          Name
          <input
            required
            type="text"
            placeholder="John Doe"
            className="mt-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-red-400"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-white/70">
          Email
          <input
            required
            type="email"
            placeholder="you@example.com"
            className="mt-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-red-400"
          />
        </label>
      </div>
      <label className="mt-6 flex flex-col text-sm font-medium text-white/70">
        Message
        <textarea
          required
          rows={6}
          placeholder="Tell me about your project..."
          className="mt-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-red-400"
        />
      </label>
      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-red-400"
      >
        Send message
      </button>
      {status === 'submitted' ? (
        <p className="mt-4 text-center text-sm text-green-400">Thank you! I will respond quickly.</p>
      ) : null}
    </motion.form>
  )
}
