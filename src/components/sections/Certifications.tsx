'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { certifications } from '@/lib/data'
import styles from './Certifications.module.css'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          label="06 / certifications"
          title="Certifications"
        />

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.code} delay={i * 0.1}>
              <GlassCard padding="lg" className={styles.card}>
                <div className={styles.inner}>
                  <div
                    className={styles.badge}
                    style={{ background: `${cert.badgeColor}18`, border: `1px solid ${cert.badgeColor}40` }}
                  >
                    <span className={styles.icon} role="img" aria-label={cert.code}>{cert.icon}</span>
                    <div>
                      <p
                        className={`font-mono ${styles.code}`}
                        style={{ color: cert.badgeColor }}
                      >
                        {cert.code}
                      </p>
                      <p className={styles.issuer}>{cert.issuer}</p>
                    </div>
                  </div>

                  <div className={styles.info}>
                    <h3 className={styles.title}>{cert.title}</h3>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.verify}
                      aria-label={`Verify ${cert.code} certification`}
                    >
                      Verify credential ↗
                    </a>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
