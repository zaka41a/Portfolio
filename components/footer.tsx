import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#050505] py-6">
      <div className="mx-auto flex w-[min(1100px,92vw)] flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Zakaria Sabiri. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="https://github.com/zaka41a" target="_blank" className="hover:text-white">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/zakaria-sabiri-8a97b4364/" target="_blank" className="hover:text-white">
            LinkedIn
          </Link>
          <a href="mailto:zaksab98@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
