'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { projects, olderProjects, type Project } from '@/lib/data'
import styles from './Projects.module.css'

function ProjectCard({ project }: { project: Project }) {
  const statusConfig = {
    live: { label: 'Live', color: 'var(--green)', bg: 'rgba(16,185,129,0.1)' },
    building: { label: 'Building', color: 'var(--amber)', bg: 'rgba(245,158,11,0.1)' },
    archived: { label: 'Archived', color: 'var(--text-muted)', bg: 'var(--glass-bg)' },
  }
  const status = statusConfig[project.status]

  return (
    <GlassCard padding="lg" className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.statusRow}>
          <span
            className={styles.statusPill}
            style={{ color: status.color, background: status.bg }}
          >
            {project.status === 'live' && <span className={styles.liveDot} style={{ background: status.color }} />}
            {status.label}
          </span>
          {project.highlight && (
            <span className="badge">{project.highlight}</span>
          )}
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.cardBottom}>
        <div className={styles.techStack}>
          {project.techStack.slice(0, 5).map((t) => (
            <span key={t} className={`badge badge-teal font-mono`}>{t}</span>
          ))}
          {project.techStack.length > 5 && (
            <span className="badge badge-teal font-mono">+{project.techStack.length - 5}</span>
          )}
        </div>

        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="GitHub">
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Demo">
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  )
}

export default function Projects() {
  const [showOlder, setShowOlder] = useState(false)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          label="04 / projects"
          title="Things I've built"
          subtitle="A selection of projects that reflect how I think about problems."
        />

        {/* Featured projects */}
        <div className={styles.featuredGrid}>
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <ProjectCard project={p} />
            </ScrollReveal>
          ))}
        </div>

        {/* Older projects toggle */}
        <ScrollReveal delay={0.3}>
          <div className={styles.olderSection}>
            <button
              className={styles.olderToggle}
              onClick={() => setShowOlder(!showOlder)}
              aria-expanded={showOlder}
            >
              <span>{showOlder ? '↑ Hide' : '↓ Show'} older projects</span>
              <motion.span
                animate={{ rotate: showOlder ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'inline-block' }}
              >
                ⌄
              </motion.span>
            </button>

            <AnimatePresence>
              {showOlder && (
                <motion.div
                  className={styles.olderGrid}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {olderProjects.map((p) => (
                    <GlassCard key={p.title} padding="md" className={styles.olderCard}>
                      <p className={styles.olderTitle}>{p.title}</p>
                      <p className={styles.olderDesc}>{p.description}</p>
                      <div className={styles.techStack}>
                        {p.techStack.map((t) => (
                          <span key={t} className={`badge font-mono`} style={{ fontSize: '0.7rem' }}>{t}</span>
                        ))}
                      </div>
                    </GlassCard>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
