'use client'

import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { stackCategories } from '@/lib/data'
import styles from './Stack.module.css'

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <ScrollReveal direction="up">
        <GlassCard padding="lg">
          <div className={styles.header}>
            <span className={`font-mono ${styles.label}`}>02 / STACK & SKILLS</span>
            <h2 className={styles.title}>Technologies & Tools</h2>
          </div>

          <div className={styles.categoriesGrid}>
            {stackCategories.map((cat) => (
              <div key={cat.num} className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <span className={`font-mono ${styles.catNum}`}>{cat.num}</span>
                  <h3 className={styles.catName}>{cat.category}</h3>
                </div>

                <div className={styles.pillsRow}>
                  {cat.items.map((tech) => (
                    <a
                      key={tech.name}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`badge badge-teal font-mono ${styles.techPill}`}
                      aria-label={`Official website for ${tech.name}`}
                    >
                      {tech.name} <span className={styles.linkArrow}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  )
}
