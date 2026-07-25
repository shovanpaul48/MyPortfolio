'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { projects, olderProjects } from '@/lib/data'
import styles from './Projects.module.css'

export default function Projects() {
  const [showOlder, setShowOlder] = useState(false)

  return (
    <section id="projects" className={styles.section}>
      <ScrollReveal direction="up">
        <GlassCard padding="lg">
          <div className={styles.header}>
            <span className={`font-mono ${styles.label}`}>04 / PROJECTS</span>
            <h2 className={styles.title}>Featured Projects</h2>
          </div>

          <div className={styles.list}>
            {projects.map((project) => (
              <div key={project.id} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span
                      className={`${styles.statusPill} ${
                        project.status === 'building'
                          ? styles.statusBuilding
                          : styles.statusLive
                      }`}
                    >
                      {project.status === 'live' && <span className={styles.liveDot} />}
                      {project.statusText}
                    </span>
                    {project.highlight && (
                      <span className="badge">{project.highlight}</span>
                    )}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: '0.78rem', padding: '0.3rem 0.8rem' }}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.techChips}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge badge-teal font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Collapsible Older Projects Drawer */}
          <div className={styles.olderSection}>
            <button
              onClick={() => setShowOlder(!showOlder)}
              className={styles.olderToggleBtn}
              aria-expanded={showOlder}
            >
              <span>{showOlder ? '↑ Hide' : '↓ View'} older / archived projects ({olderProjects.length})</span>
            </button>

            <AnimatePresence>
              {showOlder && (
                <motion.div
                  className={styles.olderGrid}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {olderProjects.map((p) => (
                    <div key={p.id} className={styles.olderItem}>
                      <div className={styles.olderHeader}>
                        <h4 className={styles.olderTitle}>{p.title}</h4>
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.olderLink}
                          >
                            Code ↗
                          </a>
                        )}
                      </div>
                      <p className={styles.olderDesc}>{p.description}</p>
                      <div className={styles.olderChips}>
                        {p.techStack.map((t) => (
                          <span key={t} className="badge font-mono" style={{ fontSize: '0.68rem' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  )
}
