import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../ui/theme-toggle'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`rounded-[2rem] bg-background shadow-[var(--shadow-neuro-lg)] transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}>
          <div className="px-4 sm:px-8 flex items-center justify-between">
            <motion.a
              href="#"
              className="text-lg sm:text-xl md:text-2xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <span className="hidden sm:inline">Ghassen Elkamel</span>
              <span className="sm:hidden">G. Elkamel</span>
            </motion.a>

            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 rounded-[1.5rem] text-foreground transition-all duration-500 font-medium shadow-[var(--shadow-neuro-sm)] hover:shadow-[var(--shadow-neuro-inset)] cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 rounded-[1.5rem] bg-background shadow-[var(--shadow-neuro)] hover:shadow-[var(--shadow-neuro-inset)] transition-all duration-500"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 container mx-auto max-w-7xl"
        >
          <div className="rounded-[2rem] bg-background shadow-[var(--shadow-neuro-lg)] p-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-6 py-3 rounded-[1.5rem] text-foreground transition-all duration-500 font-medium shadow-[var(--shadow-neuro-sm)] hover:shadow-[var(--shadow-neuro-inset)] cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

