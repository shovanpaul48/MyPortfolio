'use client'

import { motion } from 'framer-motion'
import { personal } from '@/lib/data'
import styles from './Hero.module.css'

const roles = ['GenAI Engineer', 'RAG Pipeline Builder', 'Backend Developer', 'LLM Systems Engineer']

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Ambient glow blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Greeting */}
        <motion.p
          className={`font-mono ${styles.greeting}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-amber">~/</span> hello world
        </motion.p>

        {/* Name */}
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          I&apos;m{' '}
          <span className="text-gradient">{personal.name}</span>
        </motion.h1>

        {/* Animated role subtitle */}
        <motion.div
          className={styles.roleWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <p className={styles.roleStatic}>Associate Software Developer at TCS &mdash;</p>
          <RoleCycler roles={roles} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {personal.tagline}
        </motion.p>

        {/* Tech stack pill row */}
        <motion.div
          className={styles.techRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {['LangChain', 'LangGraph', 'RAG', 'GraphRAG', 'FastAPI', 'Neo4j', 'Azure OpenAI'].map((tech) => (
            <span key={tech} className={`badge badge-teal font-mono`}>
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#projects" className="btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Resume ↗
          </a>
        </motion.div>

        {/* Social links row */}
        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {[
            { label: 'GitHub', href: personal.github },
            { label: 'LinkedIn', href: personal.linkedin },
            { label: 'LeetCode', href: personal.leetcode },
            { label: personal.email, href: `mailto:${personal.email}` },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

// Role cycler component
function RoleCycler({ roles }: { roles: string[] }) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <div className={styles.roleCycler} aria-live="polite">
      <motion.span
        key={roles[index]}
        className="text-gradient"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35 }}
      >
        {roles[index]}
      </motion.span>
    </div>
  )
}

import React from 'react'
