'use client'
import Link from 'next/link'
import Image from 'next/image'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth',
    });
  }
};

const defaultLinks = [
  { label: 'Amenities', id: 'grant' },
  { label: 'Schedule', id: 'schedule' },
  { label: 'Prizes', id: 'prize' },
  { label: 'Sponsors', id: 'sponsors' },
  { label: 'Discover', id: 'discover' },
  { label: 'Location', id: 'location' },
  { label: 'FAQ', id: 'faq' },
];

const NavbarH = ({ links }: { links?: { label: string; id: string }[] }) => {
  const navLinks = links || defaultLinks;
  return (
    <nav className="fixed top-3 left-3 right-3 z-50 mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-lg shadow-black/20">
      <div className="flex items-center justify-between px-4 md:px-6 py-2">

        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/logo-white.png" alt="BSA Logo" width={48} height={48} className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Center: Nav links (desktop) */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="relative px-3 py-2 text-[13px] font-medium tracking-[0.05em] text-white/60 uppercase transition-colors duration-200 hover:text-white group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </li>
          ))}
        </ul>

        {/* Right: Register + Mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/register"
            className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-semibold tracking-[0.03em] text-white rounded-lg bg-gradient-to-r from-[#2563eb] to-[#4f8cff] shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_28px_rgba(59,130,246,0.5)]"
          >
            Register
          </Link>

          {/* Mobile hamburger */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-sm text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-4 shadow-xl bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl w-56 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left px-3 py-2.5 text-sm font-medium tracking-[0.05em] text-white/70 uppercase rounded-lg transition-colors hover:text-white hover:bg-white/5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 sm:hidden">
                <Link
                  href="/register"
                  className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#2563eb] to-[#4f8cff] shadow-[0_0_16px_rgba(59,130,246,0.3)]"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarH
