import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const navLinks = [
  { href: '#banner', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
]

function Heropage() {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-slate-900/70 backdrop-blur-lg border-b border-amber-500/10 shadow-lg shadow-black/20 px-3 sm:px-4 md:px-8 min-h-16">
        {/* Left: Mobile menu + Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm sm:btn-md lg:hidden text-amber-400 hover:bg-amber-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content mt-3 w-52 sm:w-56 p-3 shadow-xl rounded-2xl bg-slate-800/95 backdrop-blur-xl border border-amber-500/10 font-medium z-[1] gap-1"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-200 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <a className="btn btn-ghost text-lg sm:text-xl md:text-2xl px-1 sm:px-2 font-bold tracking-wide hover:bg-transparent">
            <span className="text-white">SHIFAT</span>
            <span className="text-amber-400">.</span>
          </a>
        </div>

        {/* Center: Desktop nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-slate-300 hover:text-amber-400 hover:bg-transparent transition-colors after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0.5 after:w-0 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-2/3"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA */}
        <div className="navbar-end">
          <a
            href="mailto:yourname@gmail.com"
            className="btn btn-sm sm:btn-md bg-amber-500 hover:bg-amber-400 text-slate-900 border-none font-semibold rounded-full px-3 sm:px-5 shadow-md shadow-amber-500/20 hover:shadow-amber-400/40 transition-all duration-300 group"
          >
            <span className="hidden xs:inline sm:inline">Hire Me</span>
            <span className="xs:hidden sm:hidden">Hire Me</span>
            <GoArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Heropage