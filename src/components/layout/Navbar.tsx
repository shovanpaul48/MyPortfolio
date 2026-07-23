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

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className={`${styles.nav} container`}>
        {/* Logo / Name */}
        <a href="#hero" className={styles.logo}>
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

        {/* Actions */}
        <div className={styles.actions}>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}
          >
            Resume ↗
          </a>
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
