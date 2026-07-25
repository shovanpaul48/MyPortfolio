'use client'

import { useState, useEffect } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { personal } from '@/lib/data'
import GlassCard from '@/components/ui/GlassCard'
import styles from './Sidebar.module.css'

const calendarTheme = {
  dark: ['#0d1520', '#0c3348', '#0a5970', '#0891b2', '#22d3ee'],
  light: ['#e2eaf3', '#bde0f0', '#7ec9e6', '#0891b2', '#0369a1'],
}

interface SidebarProps {
  onOpenCommandPalette: () => void
}

export default function Sidebar({ onOpenCommandPalette }: SidebarProps) {
  const [timeStr, setTimeStr] = useState<string>('')

  // Live Kolkata (IST) Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setTimeStr(now.toLocaleTimeString('en-US', options) + ' IST')
    }

    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <aside className={styles.sidebar}>
      <GlassCard padding="lg" className={styles.sidebarCard}>
        {/* Top Identity Block */}
        <div className={styles.identity}>
          <div className={styles.avatarRow}>
            <div className={styles.avatar}>SP</div>
            <div>
              <h1 className={styles.name}>{personal.name}</h1>
              <p className={`font-mono ${styles.title}`}>{personal.title}</p>
            </div>
          </div>

          <p className={styles.roleLine}>
            <a href="#experience" className={styles.roleLink}>
              {personal.role} @ <span className={styles.companyHighlight}>TCS</span>
            </a>
          </p>

          <p className={styles.tagline}>{personal.tagline}</p>
        </div>

        {/* Metadata: Location + Live Clock */}
        <div className={styles.metaBlock}>
          <div className={styles.metaRow}>
            <span className={styles.metaIcon}>📍</span>
            <a
              href={personal.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.metaLink}
            >
              {personal.location}
            </a>
          </div>

          {timeStr && (
            <div className={styles.metaRow}>
              <span className={styles.clockDot} />
              <span className={`font-mono ${styles.clockText}`}>{timeStr}</span>
            </div>
          )}
        </div>

        {/* Command Palette Trigger */}
        <button
          onClick={onOpenCommandPalette}
          className={styles.cmdBtn}
          aria-label="Open Command Palette"
        >
          <span className={styles.cmdBtnLeft}>
            <span>🔍</span>
            <span>Search or jump to...</span>
          </span>
          <kbd className={styles.cmdKbd}>⌘K</kbd>
        </button>

        {/* Social Icons Row */}
        <div className={styles.socialRow}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="GitHub">
            ⚡ <span className={styles.socialLabel}>GitHub</span>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="LinkedIn">
            💼 <span className={styles.socialLabel}>LinkedIn</span>
          </a>
          <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="LeetCode">
            🧩 <span className={styles.socialLabel}>LeetCode</span>
          </a>
          <a href={`mailto:${personal.email}`} className={styles.socialBtn} title="Email">
            ✉️ <span className={styles.socialLabel}>Email</span>
          </a>
        </div>

        {/* Compact GitHub Contribution Graph */}
        <div className={styles.calendarBlock}>
          <div className={styles.calendarHeader}>
            <span className={`font-mono ${styles.calendarTitle}`}>GitHub Contributions</span>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.githubHandle}>
              @{personal.githubUsername}
            </a>
          </div>

          <div className={styles.calendarScroll}>
            <GitHubCalendar
              username={personal.githubUsername}
              theme={calendarTheme}
              colorScheme="dark"
              blockSize={10}
              blockMargin={3}
              fontSize={11}
              hideTotalCount={false}
              hideColorLegend={false}
            />
          </div>
        </div>
      </GlassCard>
    </aside>
  )
}
