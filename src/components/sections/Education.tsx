'use client'

import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { education } from '@/lib/data'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <ScrollReveal direction="up">
        <GlassCard padding="lg">
          <div className={styles.header}>
            <span className={`font-mono ${styles.label}`}>06 / EDUCATION</span>
            <h2 className={styles.title}>Academic Background</h2>
          </div>

          <div className={styles.list}>
            {education.map((edu) => (
              <div key={edu.degree} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.institution}
                    >
                      {edu.institution} ↗
                    </a>
                  </div>
                  <span className={`font-mono ${styles.period}`}>{edu.period}</span>
                </div>

                <p className={styles.details}>{edu.details}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  )
}
