'use client'

import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { experience } from '@/lib/data'
import styles from './Experience.module.css'

// Helper function to calculate duration string dynamically
function getDurationString(startDateStr: string): string {
  const start = new Date(startDateStr)
  const now = new Date()
  
  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth() + 1

  if (months < 0) {
    years -= 1
    months += 12
  }

  const parts = []
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`)
  
  return parts.length > 0 ? parts.join(' ') : '1 mo'
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <ScrollReveal direction="up">
        <GlassCard padding="lg">
          <div className={styles.header}>
            <span className={`font-mono ${styles.label}`}>03 / EXPERIENCE</span>
            <h2 className={styles.title}>Work Experience</h2>
          </div>

          <div className={styles.list}>
            {experience.map((job) => {
              const duration = getDurationString(job.startDate)

              return (
                <div key={job.id} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.companyRow}>
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.companyName}
                        >
                          {job.company} ↗
                        </a>
                        <span className="badge">{job.type}</span>
                      </div>
                      <h3 className={styles.roleTitle}>{job.role}</h3>
                    </div>

                    <div className={styles.periodBlock}>
                      <span className={`font-mono ${styles.period}`}>{job.period}</span>
                      <span className={`font-mono ${styles.duration}`}>· {duration}</span>
                    </div>
                  </div>

                  <ul className={styles.bullets}>
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className={styles.bulletItem}>
                        <span className={styles.bulletDot}>›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.techChips}>
                    {job.techStack.map((tech) => (
                      <span key={tech} className="badge badge-teal font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  )
}
