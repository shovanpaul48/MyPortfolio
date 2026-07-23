import { personal } from '@/lib/data'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          © {year} Shovan Paul — Built with Next.js + Framer Motion
        </p>
        <div className={styles.links}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="GitHub">
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="LeetCode">
            LeetCode
          </a>
          <a href={`mailto:${personal.email}`} className={styles.link} aria-label="Email">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
