'use client'

import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useLeetCodeStats } from '@/hooks/useLeetCodeStats'
import { certifications, personal } from '@/lib/data'
import styles from './LeetCodeAndCerts.module.css'

function LeetCodeCard() {
  const { data, loading, error } = useLeetCodeStats(personal.leetcodeUsername)

  return (
    <div className={styles.lcBox}>
      <div className={styles.lcHeader}>
        <div>
          <span className={`font-mono ${styles.label}`}>ALGORITHMIC SOLVING</span>
          <h3 className={styles.lcTitle}>LeetCode Stats</h3>
        </div>
        <a
          href={personal.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem' }}
        >
          Profile ↗
        </a>
      </div>

      {loading ? (
        <div className={styles.lcSkeleton}>
          <div className={styles.skeletonLine} style={{ width: '40%' }} />
          <div className={styles.skeletonLine} style={{ width: '100%' }} />
        </div>
      ) : error || !data ? (
        <p className={styles.lcError}>View live metrics on LeetCode profile.</p>
      ) : (
        <div className={styles.lcBody}>
          <div className={styles.lcTotalNum}>
            <span className={`font-mono ${styles.bigNum}`}>{data.totalSolved}</span>
            <span className={styles.subText}>Solved</span>
          </div>

          <div className={styles.barsGrid}>
            {[
              { label: 'Easy', count: data.easySolved, total: data.easyTotal, color: '#10b981' },
              { label: 'Medium', count: data.mediumSolved, total: data.mediumTotal, color: '#f59e0b' },
              { label: 'Hard', count: data.hardSolved, total: data.hardTotal, color: '#f43f5e' },
            ].map(({ label, count, total, color }) => {
              const pct = Math.min(100, Math.round((count / total) * 100))
              return (
                <div key={label} className={styles.barItem}>
                  <div className={styles.barMeta}>
                    <span style={{ color, fontWeight: 700, fontSize: '0.8rem' }}>{label}</span>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {count} / {total}
                    </span>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${pct}%`, background: color }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default function LeetCodeAndCerts() {
  return (
    <section id="leetcode-certs" className={styles.section}>
      <ScrollReveal direction="up">
        <GlassCard padding="lg">
          {/* LeetCode Card */}
          <LeetCodeCard />

          <div className={styles.divider} />

          {/* Certifications Block */}
          <div className={styles.certsHeader}>
            <span className={`font-mono ${styles.label}`}>05 / CERTIFICATIONS</span>
            <h2 className={styles.title}>Verified Credentials</h2>
          </div>

          <div className={styles.certsGrid}>
            {certifications.map((cert) => (
              <div key={cert.code} className={styles.certCard}>
                <div className={styles.certIcon}>{cert.icon}</div>
                <div className={styles.certMeta}>
                  <div className={styles.certTop}>
                    <span className={`font-mono ${styles.certCode}`} style={{ color: cert.badgeColor }}>
                      {cert.code}
                    </span>
                    <span className={`font-mono ${styles.certDate}`}>{cert.date}</span>
                  </div>
                  <h4 className={styles.certTitle}>{cert.title}</h4>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.verifyLink}
                  >
                    Verify credential ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  )
}
