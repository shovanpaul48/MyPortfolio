'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { skillCategories } from '@/lib/data'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          label="02 / skills"
          title="Tech Stack"
          subtitle="The tools and technologies I work with day-to-day."
        />

        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 0.08}>
              <GlassCard padding="lg" className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon} role="img" aria-label={cat.category}>{cat.icon}</span>
                  <h3 className={styles.category}>{cat.category}</h3>
                </div>
                <div className={styles.pills}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className={`badge badge-teal font-mono ${styles.pill}`}>
                      {skill}
                    </span>
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
