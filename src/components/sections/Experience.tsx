'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { experience } from '@/lib/data'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          label="03 / experience"
          title="Where I've worked"
        />

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 0.1}>
              <GlassCard padding="lg" className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <div className={styles.companyRow}>
                      <h3 className={styles.company}>{job.company}</h3>
                      <span className="badge">{job.type}</span>
                    </div>
                    <p className={styles.role}>{job.role}</p>
                    <p className={`font-mono ${styles.meta}`}>
                      <span>{job.location}</span>
                      <span className={styles.dot}>·</span>
                      <span className="text-amber">{job.period}</span>
                    </p>
                  </div>

                  {/* Status indicator */}
                  <div className={styles.statusPill}>
                    <span className={styles.statusDot} />
                    <span>Current</span>
                  </div>
                </div>

                <ul className={styles.bullets}>
                  {job.bullets.map((b) => (
                    <li key={b} className={styles.bullet}>
                      <span className={styles.arrowIcon}>›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {job.techStack.map((t) => (
                    <span key={t} className={`badge badge-teal font-mono`}>{t}</span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
