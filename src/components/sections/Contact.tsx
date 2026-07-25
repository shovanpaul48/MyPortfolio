'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { personal } from '@/lib/data'
import styles from './Contact.module.css'

const contactItems = [
  {
    id: 'email',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: '✉️',
    desc: 'Best for opportunities & collaborations',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@shovanpaul48',
    href: personal.github,
    icon: '⚡',
    desc: 'Code, projects, contributions',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Shovan Sundar Paul',
    href: personal.linkedin,
    icon: '💼',
    desc: 'Professional profile & experience',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    value: '@shovanpaul48',
    href: personal.leetcode,
    icon: '🧩',
    desc: 'Problem solving & DSA',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          label="07 / contact"
          title="Let's connect"
          subtitle="Open to GenAI, backend, and forward-deployed engineering opportunities. Reach out — I respond."
          center
        />

        <div className={styles.grid}>
          {contactItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <motion.a
                href={item.href}
                target={item.id === 'email' ? undefined : '_blank'}
                rel={item.id === 'email' ? undefined : 'noopener noreferrer'}
                className={`glass ${styles.item}`}
                whileHover={{ y: -3, boxShadow: '0 8px 32px rgba(8,145,178,0.18)' }}
                transition={{ duration: 0.2 }}
                aria-label={`${item.label}: ${item.value}`}
              >
                <span className={styles.icon} role="img" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className={`font-mono ${styles.label}`}>{item.label}</p>
                  <p className={styles.value}>{item.value}</p>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        {/* Availability note */}
        <ScrollReveal delay={0.4}>
          <div className={styles.availability}>
            <span className={styles.availDot} />
            <p className={styles.availText}>
              Currently <strong>open to opportunities</strong> — GenAI / AI Engineer / Forward Deployed roles
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
