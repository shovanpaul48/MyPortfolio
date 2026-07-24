'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useLeetCodeStats } from '@/hooks/useLeetCodeStats'
import { personal } from '@/lib/data'
import styles from './Activity.module.css'

// Obsidian Teal custom calendar palette
const calendarTheme = {
  dark: ['#0d1520', '#0c3348', '#0a5970', '#0891b2', '#22d3ee'],
  light: ['#e2eaf3', '#bde0f0', '#7ec9e6', '#0891b2', '#0369a1'],
}

type TabType = 'github' | 'leetcode'

function LeetCodeContent() {
  const { data, loading, error } = useLeetCodeStats(personal.leetcodeUsername)

  if (loading) {
    return (
      <div className={styles.lcSkeleton}>
        <div className={styles.skeletonLine} style={{ width: '50%' }} />
        <div className={styles.skeletonLine} style={{ width: '100%' }} />
        <div className={styles.skeletonLine} style={{ width: '80%' }} />
        <div className={styles.skeletonLine} style={{ width: '65%' }} />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className={styles.lcError}>
        <p style={{ margin: 0 }}>Could not fetch live LeetCode metrics.</p>
        <a
          href={personal.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}
        >
          View Profile on LeetCode ↗
        </a>
      </div>
    )
  }

  const difficulties = [
    { label: 'Easy', solved: data.easySolved, total: data.easyTotal, color: '#10b981' },
    { label: 'Medium', solved: data.mediumSolved, total: data.mediumTotal, color: '#f59e0b' },
    { label: 'Hard', solved: data.hardSolved, total: data.hardTotal, color: '#f43f5e' },
  ]

  return (
    <div className={styles.lcContent}>
      <div className={styles.lcTopRow}>
        <div className={styles.lcTotalBox}>
          <span className={`font-mono ${styles.lcTotalNum}`}>{data.totalSolved}</span>
          <span className={styles.lcTotalLabel}>Total Solved</span>
        </div>
        <a
          href={personal.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}
        >
          LeetCode Profile ↗
        </a>
      </div>

      <div className={styles.lcDifficulties}>
        {difficulties.map(({ label, solved, total, color }) => {
          const pct = Math.min(100, Math.round((solved / total) * 100))
          return (
            <div key={label} className={styles.lcDiffRow}>
              <div className={styles.lcDiffMeta}>
                <span className={styles.lcDiffLabel} style={{ color }}>
                  {label}
                </span>
                <span className={`font-mono ${styles.lcDiffCount}`}>
                  {solved} / {total} <span className={styles.pct}>({pct}%)</span>
                </span>
              </div>
              <div className={styles.lcBarTrack}>
                <div
                  className={styles.lcBarFill}
                  style={{ width: `${pct}%`, background: color }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Activity() {
  const [activeTab, setActiveTab] = useState<TabType>('github')

  return (
    <section id="activity" className="section">
      <div className="container">
        <SectionHeading
          label="05 / activity"
          title="Coding Activity"
          subtitle="Real-time open-source contributions and algorithmic problem solving."
        />

        {/* Tab Selector Buttons */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.tabContainer}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'github' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('github')}
              aria-selected={activeTab === 'github'}
              role="tab"
            >
              <span role="img" aria-label="GitHub">⚡</span> GitHub Activity
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'leetcode' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('leetcode')}
              aria-selected={activeTab === 'leetcode'}
              role="tab"
            >
              <span role="img" aria-label="LeetCode">🧩</span> LeetCode Stats
            </button>
          </div>
        </ScrollReveal>

        {/* Tabbed Content Panel with Motion */}
        <ScrollReveal direction="up" delay={0.2}>
          <GlassCard padding="lg" className={styles.unifiedCard}>
            <AnimatePresence mode="wait">
              {activeTab === 'github' ? (
                <motion.div
                  key="github"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={styles.panelInner}
                >
                  <div className={styles.panelHeader}>
                    <div>
                      <h3 className={styles.panelTitle}>GitHub Contributions</h3>
                      <p className={styles.panelSubtitle}>Public activity graph over the past year</p>
                    </div>
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}
                    >
                      @{personal.githubUsername} ↗
                    </a>
                  </div>

                  {/* Horizontally contained & scrollable grid */}
                  <div className={styles.calendarContainer}>
                    <div className={styles.calendarScrollWrapper}>
                      <GitHubCalendar
                        username={personal.githubUsername}
                        theme={calendarTheme}
                        colorScheme="dark"
                        blockSize={13}
                        blockMargin={4}
                        fontSize={12}
                        hideTotalCount={false}
                        hideColorLegend={false}
                      />
                    </div>
                    <p className={`font-mono ${styles.scrollHint}`}>
                      Swipe horizontally to view full calendar →
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="leetcode"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={styles.panelInner}
                >
                  <div className={styles.panelHeader}>
                    <div>
                      <h3 className={styles.panelTitle}>LeetCode Metrics</h3>
                      <p className={styles.panelSubtitle}>Data structures & algorithmic problem breakdown</p>
                    </div>
                  </div>

                  <LeetCodeContent />
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
