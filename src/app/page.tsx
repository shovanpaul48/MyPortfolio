'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import About from '@/components/sections/About'
import Stack from '@/components/sections/Stack'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import LeetCodeAndCerts from '@/components/sections/LeetCodeAndCerts'
import Education from '@/components/sections/Education'
import Footer from '@/components/layout/Footer'
import ThemeToggle from '@/components/ui/ThemeToggle'
import CommandPalette from '@/components/ui/CommandPalette'
import styles from './page.module.css'

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false)

  return (
    <div className={styles.layoutWrapper}>
      {/* Top thin progress bar / accent line */}
      <div className={styles.topAccentLine} />

      <div className={`container ${styles.layoutGrid}`}>
        {/* Sticky Left Sidebar */}
        <div className={styles.sidebarCol}>
          <Sidebar onOpenCommandPalette={() => setCmdOpen(true)} />
        </div>

        {/* Right Scrolling Content Area */}
        <main className={styles.mainCol}>
          <About />
          <Stack />
          <Experience />
          <Projects />
          <LeetCodeAndCerts />
          <Education />
          <Footer />
        </main>
      </div>

      {/* Floating Theme Toggle in Bottom-Right Corner */}
      <div className={styles.floatingThemeToggle}>
        <ThemeToggle />
      </div>

      {/* Command Palette Modal */}
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
    </div>
  )
}
