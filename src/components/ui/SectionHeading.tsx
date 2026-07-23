'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label?: string      // small monospace label above (e.g. "01 / about")
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ label, title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: center ? 'center' : 'left',
        marginBottom: '3rem',
      }}
    >
      {label && (
        <p
          className="font-mono text-amber"
          style={{ fontSize: '0.75rem', letterSpacing: '0.12em', marginBottom: '0.5rem', textTransform: 'uppercase' }}
        >
          {label}
        </p>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: '0.75rem',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: center ? '540px' : 'none',
            marginInline: center ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
