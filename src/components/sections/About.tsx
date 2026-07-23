'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { personal, education } from '@/lib/data'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          label="01 / about"
          title="Who I am"
          subtitle="A bit about my background, what drives me, and where I'm headed."
        />

        <div className={styles.grid}>
          {/* Bio card */}
          <ScrollReveal direction="left" className={styles.bioCard}>
            <GlassCard padding="lg">
              <h3 className={styles.cardTitle}>Background</h3>
              <div className={styles.bioText}>
                <p>
                  I&apos;m a software developer based in Kolkata, India, currently at{' '}
                  <span className="text-gradient" style={{ fontWeight: 600 }}>TCS</span>{' '}
                  where I build intelligent systems — RAG pipelines, GraphRAG architectures, and LLM-powered microservices.
                </p>
                <p>
                  My focus is at the intersection of{' '}
                  <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>
                    large language models, knowledge graphs, and production backend engineering
                  </span>.
                  I care about systems that are not just technically correct but genuinely useful at scale.
                </p>
                <p>
                  Outside of work, I build side projects that scratch my own itches — from stock analysis pipelines to career tools.
                  I&apos;m currently aiming toward{' '}
                  <span style={{ color: 'var(--amber)', fontWeight: 600 }}>
                    GenAI Engineer / Forward Deployed Engineer
                  </span>{' '}
                  roles at product and AI-first companies.
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Stats bento grid */}
          <div className={styles.bentoGrid}>
            <ScrollReveal delay={0.1}>
              <GlassCard padding="md" className={styles.statCard}>
                <p className={`font-mono ${styles.statNum}`}>~1.5</p>
                <p className={styles.statLabel}>Years experience</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard padding="md" className={styles.statCard}>
                <p className={`font-mono ${styles.statNum}`}>3+</p>
                <p className={styles.statLabel}>Production RAG pipelines</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <GlassCard padding="md" className={styles.statCard}>
                <p className={`font-mono ${styles.statNum}`}>DP-700</p>
                <p className={styles.statLabel}>Microsoft Certified</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <GlassCard padding="md" className={styles.statCard}>
                <p className={`font-mono ${styles.statNum}`}>MCA</p>
                <p className={styles.statLabel}>IEM Kolkata, 2024</p>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Education card */}
          <ScrollReveal direction="right" delay={0.1} className={styles.eduCard}>
            <GlassCard padding="lg">
              <h3 className={styles.cardTitle}>Education</h3>
              <div className={styles.eduList}>
                {education.map((edu) => (
                  <div key={edu.degree} className={styles.eduItem}>
                    <div className={styles.eduDot} />
                    <div>
                      <p className={styles.eduDegree}>{edu.degree}</p>
                      <p className={styles.eduInstitution}>{edu.institution}</p>
                      <p className={`font-mono ${styles.eduPeriod}`}>{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
