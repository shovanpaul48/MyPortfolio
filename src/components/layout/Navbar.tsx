'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { personal } from '@/lib/data'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Activity', href: '#activity' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className={`${styles.nav} container`}>
        {/* Brand / Logo */}
        <a href="#hero" className={styles.logo} aria-label="Shovan Paul Homepage">
          <span className="font-mono text-gradient" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
            SP
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Header Actions - ThemeToggle is ALWAYS visible here */}
        <div className={styles.actions}>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-ghost ${styles.desktopResume}`}
            style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}
          >
            Resume ↗
          </a>

          {/* Persistent Theme Toggle */}
          <ThemeToggle />

          {/* Mobile hamburger icon */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.bar2Open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.bar3Open : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className={styles.mobileMenuInner}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary ${styles.mobileResumeBtn}`}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
              >
                Download Resume ↗
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
