'use client'

import GitHubCalendar from 'react-github-calendar'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useLeetCodeStats } from '@/hooks/useLeetCodeStats'
import { personal } from '@/lib/data'
import styles from './Activity.module.css'

// Custom theme matching Obsidian Teal palette
const calendarTheme = {
  dark: ['#0d1520', '#0c3348', '#0a5970', '#0891b2', '#22d3ee'],
  light: ['#e2eaf3', '#bde0f0', '#7ec9e6', '#0891b2', '#0369a1'],
}

function LeetCodeBlock() {
  const { data, loading, error } = useLeetCodeStats(personal.leetcodeUsername)

  if (loading) {
    return (
      <div className={styles.lcSkeleton}>
        <div className={styles.skeletonLine} style={{ width: '60%' }} />
        <div className={styles.skeletonLine} style={{ width: '80%' }} />
        <div className={styles.skeletonLine} style={{ width: '50%' }} />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className={styles.lcError}>
        <p>Could not load stats.</p>
        <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className={styles.lcLink}>
          View on LeetCode ↗
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
      <div className={styles.lcTotal}>
        <span className={`font-mono ${styles.lcTotalNum}`}>{data.totalSolved}</span>
        <span className={styles.lcTotalLabel}>problems solved</span>
      </div>

      <div className={styles.lcDifficulties}>
        {difficulties.map(({ label, solved, total, color }) => {
          const pct = Math.round((solved / total) * 100)
          return (
            <div key={label} className={styles.lcDiffRow}>
              <div className={styles.lcDiffMeta}>
                <span className={styles.lcDiffLabel} style={{ color }}>{label}</span>
                <span className={`font-mono ${styles.lcDiffCount}`}>
                  {solved} / {total}
                </span>
              </div>
              <div className={styles.lcBar}>
                <div
                  className={styles.lcBarFill}
                  style={{ width: `${pct}%`, background: color }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className={styles.lcLink}>
        View full profile ↗
      </a>
    </div>
  )
}

export default function Activity() {
  return (
    <section id="activity" className="section">
      <div className="container">
        <SectionHeading
          label="05 / activity"
          title="Coding Activity"
          subtitle="GitHub contributions and LeetCode progress."
        />

        <div className={styles.grid}>
          {/* GitHub Calendar */}
          <ScrollReveal direction="left" className={styles.githubCard}>
            <GlassCard padding="lg">
              <div className={styles.cardHeader}>
                <span className="font-mono text-amber" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  GitHub Contributions
                </span>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileLink}
                  aria-label="View GitHub profile"
                >
                  @{personal.githubUsername} ↗
                </a>
              </div>
              <div className={styles.calendarWrapper}>
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
            </GlassCard>
          </ScrollReveal>

          {/* LeetCode Stats */}
          <ScrollReveal direction="right" delay={0.15} className={styles.lcCard}>
            <GlassCard padding="lg" style={{ height: '100%' }}>
              <div className={styles.cardHeader}>
                <span className="font-mono text-amber" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  LeetCode Stats
                </span>
              </div>
              <LeetCodeBlock />
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
