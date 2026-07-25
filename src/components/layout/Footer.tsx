import { personal } from '@/lib/data'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.credits}>
          <p className={`font-mono ${styles.copy}`}>
            © {year} {personal.name} — Crafted with Next.js & Framer Motion
          </p>
        </div>

        <div className={styles.links}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className={styles.link}>
            LeetCode
          </a>
          <a href={`mailto:${personal.email}`} className={styles.link}>
            Email
          </a>
          <a href="/llms.txt" target="_blank" className={`font-mono ${styles.llmLink}`}>
            llms.txt ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
