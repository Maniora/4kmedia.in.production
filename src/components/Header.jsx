import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHoveringLogo, setIsHoveringLogo] = useState(false)
  const location = useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      // Keep logo fixed in place on scroll (no parallax)
      if (headerRef.current) {
        const logo = headerRef.current.querySelector('.logo-container')
        if (logo) {
          logo.style.transform = 'translateY(0)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [location])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header 
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0f141a]/98 backdrop-blur-xl shadow-2xl border-b border-[#f7e839]/30 py-0' 
          : 'bg-gradient-to-b from-[#0f141a]/80 to-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 lg:h-20 items-center justify-between relative">
          
          {/* Animated Background Element */}
          {/* <div className={`absolute inset-0 bg-gradient-to-r from-[#f7e839]/5 to-transparent opacity-0 transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : ''
          }`} /> */}

          {/* Logo with Enhanced Animation */}
          <Link 
            to="/" 
            className="relative z-10 flex items-center gap-3 group logo-container will-change-transform"
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => setIsHoveringLogo(false)}
            onClick={() => setOpen(false)}
          >
            <div className="relative">
              {/* Animated glow effect */}
              <div className={`absolute -inset-2 bg-[#f7e839]/20 rounded-xl blur-lg transition-all duration-500 ${
                isHoveringLogo ? 'opacity-100 scale-110' : 'opacity-0 scale-95'
              }`} />
              
              <img
                src="/assets/logo2.png"
                alt="4KMEDIA - Premium Digital Agency"
                className="relative h-12 w-auto px-2 lg:h-14 lg:w-auto rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border-2 border-[#f7e839]/20"
              />
              
              {/* Floating particles */}
              <div className={`absolute -top-1 -right-1 w-3 h-3 bg-[#f7e839] rounded-full transition-all duration-300 ${
                isHoveringLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`} />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent tracking-tight">
                4KMEDIA
              </span>
              {/* Only show the logo and "4KMEDIA" text, no subtitle */}
            </div>
          </Link>

          {/* Desktop Navigation with Enhanced Effects */}
          <nav className="hidden lg:flex items-center gap-1 relative z-10">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-lg group/nav-item ${
                  isActive(item.path) 
                    ? 'text-[#f7e839]' 
                    : 'text-white/80 hover:text-white'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#f7e839]/10 to-[#f7e839]/5 rounded-lg transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 group-hover/nav-item:opacity-100 group-hover/nav-item:scale-100'
                }`} />
                
                {/* Active indicator */}
                {isActive(item.path) && (
                  <>
                    <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#f7e839] rounded-full -translate-x-1/2" />
                    <div className="absolute bottom-0 left-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#f7e839] to-transparent -translate-x-1/2" />
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="relative bg-gradient-to-r from-[#f7e839] to-[#f7e839]/90 text-[#0f141a] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f7e839]/20 group/cta overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700" />
              
              <span className="relative flex items-center gap-2">
                Get Started
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Toggle */}
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden relative z-20 inline-flex items-center justify-center h-12 w-12 rounded-xl transition-all duration-300 group ${
              scrolled ? 'bg-white/10 hover:bg-white/20' : 'bg-white/10 hover:bg-white/20'
            } ${open ? 'bg-[#f7e839]/10' : ''}`}
          >
            <div className="relative w-6 h-6">
              {/* Animated hamburger lines */}
              <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                open 
                  ? 'top-3 rotate-45 bg-[#f7e839]' 
                  : 'top-2 bg-white group-hover:bg-[#f7e839]'
              }`} />
              <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                open 
                  ? 'opacity-0 translate-x-4' 
                  : 'top-3 bg-white group-hover:bg-[#f7e839]'
              }`} />
              <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                open 
                  ? 'top-3 -rotate-45 bg-[#f7e839]' 
                  : 'top-4 bg-white group-hover:bg-[#f7e839]'
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0f141a]/98 backdrop-blur-xl border-t border-[#f7e839]/20 shadow-2xl transition-all duration-500 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="container mx-auto px-6 py-6">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center px-4 py-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group/mobile-item ${
                  isActive(item.path)
                    ? 'bg-[#f7e839]/10 text-[#f7e839] border-l-4 border-[#f7e839]'
                    : 'text-white/80 hover:bg-white/5 hover:text-[#f7e839]'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute right-4 opacity-0 group-hover/mobile-item:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-[#f7e839]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 mt-2 border-t border-[#f7e839]/20">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-gradient-to-r from-[#f7e839] to-[#f7e839]/90 text-[#0f141a] px-4 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] gap-2"
              >
                Discuss Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header