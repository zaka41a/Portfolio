import SectionHeading from '@/components/ui/section-heading'
import ContactForm from '@/components/contact-form'
import Link from 'next/link'

export const metadata = {
  title: 'Contact · Zakaria Sabiri',
  description: 'Get in touch with Zakaria Sabiri to discuss projects and collaborations.',
}

export default function ContactPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let's discuss your next product"
        description="Fill out the form or contact me directly on the following platforms."
        align="center"
      />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />
        <div className="glass-surface rounded-[30px] p-8 text-sm text-white/80">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Contact Information</p>
          <ul className="mt-4 space-y-3">
            <li>
              <span className="font-semibold text-white">Email:</span>{' '}
              <a href="mailto:zaksab98@gmail.com" className="text-red-300">
                zaksab98@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Location:</span> Aachen, Germany
            </li>
          </ul>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/50">Social</p>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="https://github.com/zaka41a" target="_blank" className="font-semibold text-red-300">
              GitHub →
            </Link>
            <Link
              href="https://www.linkedin.com/in/zakaria-sabiri-8a97b4364/"
              target="_blank"
              className="font-semibold text-white"
            >
              LinkedIn →
            </Link>
          </div>
          <div className="mt-10 rounded-2xl bg-red-600/20 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Availability</p>
            <p className="mt-2 text-sm">Open to freelance missions, work-study programs, and product-oriented internships.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
