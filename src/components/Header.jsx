// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   const [open, setOpen] = useState(false)
//   return (
//   <header className="sticky top-0 z-50 bg-[#0f141a]/90 backdrop-blur border-b border-white/10">
//     <div className="container flex h-16 items-center justify-between">
//       <Link to="/" className="flex items-center group" onClick={() => setOpen(false)}>
//         <img
//           src="/assets/logo2.png"
//           alt="4kMedia logo"
//           className="h-15 w-15 rounded-md ring-0 group-hover:ring-2 ring-[#f7e839]/30 transition"
//         />
//         <span className="flex items-baseline">
//           <span className="text-white font-bold text-2xl tracking-tight leading-none" style={{ letterSpacing: '-0.02em' }}>4k</span>
//           <span className="text-[#f7e839] font-bold text-xl tracking-tight leading-none" style={{ marginLeft: '0.1em', letterSpacing: '-0.02em' }}>Media</span>
//         </span>
//       </Link>
//       {/* Desktop nav */}
//       <nav className="hidden md:flex items-center gap-8 text-white/85">
//         <Link to="/" className="hover:text-[#f7e839] transition">Home</Link>
//         <Link to="/about" className="hover:text-[#f7e839] transition">About</Link>
//         <Link to="/services" className="hover:text-[#f7e839] transition">Services</Link>
//         <Link to="/contact" className="hover:text-[#f7e839] transition">Contact</Link>
//       </nav>
//       {/* Mobile toggle */}
//       <button aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-white/15 text-white/90">
//         <svg className={`h-5 w-5 ${open ? 'hidden' : 'block'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
//         <svg className={`h-5 w-5 ${open ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
//       </button>
//     </div>
//     {/* Mobile sheet */}
//     {open && (
//       <div className="md:hidden border-t border-white/10 bg-[#0f141a]" role="dialog" aria-modal="true">
//         <div className="container py-3 flex flex-col gap-2 text-white/90">
//           <Link to="/" onClick={() => setOpen(false)} className="py-2 hover:text-[#f7e839]">Home</Link>
//           <Link to="/about" onClick={() => setOpen(false)} className="py-2 hover:text-[#f7e839]">About</Link>
//           <Link to="/services" onClick={() => setOpen(false)} className="py-2 hover:text-[#f7e839]">Services</Link>
//           <Link to="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-[#f7e839]">Contact</Link>
//         </div>
//       </div>
//     )}
//   </header>
// )}

// export default Header




import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0f141a]/95 backdrop-blur-md shadow-lg border-b border-[#f7e839]/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group" 
            onClick={() => setOpen(false)}
          >
            <div className="relative">
              <img
                src="/assets/logo2.png"
                alt="4kMedia - Premium Digital Agency"
                className="h-16 w-16 rounded-lg transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg bg-[#f7e839]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`}>
                4kMedia
              </span>
              {/* <span className="text-xs font-sm text-[#f7e839] tracking-wide">Zero to viral, we make it happen</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 px-1 py-2 ${
                  isActive(item.path) 
                    ? 'text-[#f7e839]' 
                    : 'text-white/90 hover:text-[#f7e839]'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f7e839] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-[#f7e839] text-[#0f141a] px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-[#f7e839]/90 hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Discuss Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex items-center justify-center h-12 w-12 rounded-lg transition-all duration-300 ${
              scrolled ? 'bg-white/10 hover:bg-white/20' : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                open ? 'top-3 rotate-45 bg-[#f7e839]' : 'top-2 bg-white'
              }`} />
              <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                open ? 'opacity-0' : 'top-3 bg-white'
              }`} />
              <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                open ? 'top-3 -rotate-45 bg-[#f7e839]' : 'top-4 bg-white'
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div 
          className="lg:hidden bg-[#0f141a]/95 backdrop-blur-md border-t border-[#f7e839]/20 shadow-xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-[#f7e839]/10 text-[#f7e839] border-l-4 border-[#f7e839]'
                      : 'text-white/90 hover:bg-white/5 hover:text-[#f7e839]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-[#f7e839]/20">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center bg-[#f7e839] text-[#0f141a] px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#f7e839]/90 gap-2"
                >
                  Discuss Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header