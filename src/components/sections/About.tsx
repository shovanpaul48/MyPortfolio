'use client'

import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <ScrollReveal direction="up">
        <GlassCard padding="lg" className={styles.card}>
          <div className={styles.headerRow}>
            <span className={`font-mono ${styles.label}`}>01 / ABOUT</span>
            
            {/* Now Building Badge */}
            <div className={styles.nowBadge}>
              <span className={styles.nowDot} />
              <span>Building AI Job Assistant App</span>
            </div>
          </div>

          <div className={styles.bioText}>
            <p>
              I&apos;m a software developer based in Kolkata, India, currently working at{' '}
              <span className={styles.highlight}>Tata Consultancy Services (TCS)</span>. I specialize in designing and scaling production-grade{' '}
              <span className={styles.accentText}>RAG pipelines, GraphRAG systems with Neo4j</span>, and high-throughput FastAPI LLM microservices.
            </p>
            <p>
              My goal is to engineer reliable, deterministic intelligence layers on top of modern language models.
              I&apos;m actively moving toward <span className={styles.amberText}>GenAI Engineer / Forward Deployed Engineer</span> roles at AI-first product companies.
            </p>
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  )
}
