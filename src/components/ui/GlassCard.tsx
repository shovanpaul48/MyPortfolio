'use client'

import { useCallback } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
  style?: React.CSSProperties
}

const paddingMap = {
  none: '0',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  padding = 'md',
  style,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass ${className}`}
      whileHover={hover ? { y: -2, boxShadow: '0 0 32px rgba(8,145,178,0.18)' } : undefined}
      transition={{ duration: 0.2 }}
      style={{ padding: paddingMap[padding], ...style }}
    >
      {children}
    </motion.div>
  )
}
