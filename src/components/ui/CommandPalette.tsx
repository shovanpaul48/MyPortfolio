'use client'

import React, { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { personal, projects, stackCategories } from '@/lib/data'
import styles from './CommandPalette.module.css'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState('')

  // Toggle on Cmd+K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, onOpenChange])

  if (!open) return null

  const handleSelect = (action: () => void) => {
    action()
    onOpenChange(false)
    setSearch('')
  }

  const navigateTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.overlay} onClick={() => onOpenChange(false)}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <Command label="Command Menu" className={styles.command}>
          <div className={styles.header}>
            <span className={styles.searchIcon}>🔍</span>
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search sections, projects, or tech stack... (ESC to exit)"
              className={styles.input}
              autoFocus
            />
          </div>

          <Command.List className={styles.list}>
            <Command.Empty className={styles.empty}>No matching results found.</Command.Empty>

            {/* Navigation */}
            <Command.Group heading="Navigation" className={styles.group}>
              {[
                { id: 'about', label: 'About', icon: '👤' },
                { id: 'stack', label: 'Stack / Skills', icon: '🛠️' },
                { id: 'experience', label: 'Experience', icon: '💼' },
                { id: 'projects', label: 'Projects', icon: '🚀' },
                { id: 'leetcode-certs', label: 'LeetCode & Certifications', icon: '🧩' },
                { id: 'education', label: 'Education', icon: '🎓' },
              ].map((item) => (
                <Command.Item
                  key={item.id}
                  value={item.label}
                  onSelect={() => handleSelect(() => navigateTo(item.id))}
                  className={styles.item}
                >
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <span>Jump to {item.label}</span>
                  <span className={styles.shortcut}>Section</span>
                </Command.Item>
              ))}
            </Command.Group>

            {/* Featured Projects */}
            <Command.Group heading="Featured Projects" className={styles.group}>
              {projects.map((p) => (
                <Command.Item
                  key={p.id}
                  value={`${p.title} ${p.description} ${p.techStack.join(' ')}`}
                  onSelect={() => handleSelect(() => navigateTo('projects'))}
                  className={styles.item}
                >
                  <span className={styles.itemIcon}>📦</span>
                  <div>
                    <div className={styles.itemTitle}>{p.title}</div>
                    <div className={styles.itemDesc}>{p.highlight} · {p.statusText}</div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>

            {/* Tech Stack */}
            <Command.Group heading="Technologies" className={styles.group}>
              {stackCategories.flatMap((cat) =>
                cat.items.map((tech) => (
                  <Command.Item
                    key={tech.name}
                    value={`${tech.name} ${cat.category}`}
                    onSelect={() => handleSelect(() => window.open(tech.url, '_blank'))}
                    className={styles.item}
                  >
                    <span className={styles.itemIcon}>⚡</span>
                    <span>{tech.name} ({cat.category})</span>
                    <span className={styles.shortcut}>Docs ↗</span>
                  </Command.Item>
                ))
              )}
            </Command.Group>

            {/* Social Links */}
            <Command.Group heading="Connect" className={styles.group}>
              {[
                { label: 'GitHub', url: personal.github, icon: '⚡' },
                { label: 'LinkedIn', url: personal.linkedin, icon: '💼' },
                { label: 'LeetCode', url: personal.leetcode, icon: '🧩' },
                { label: 'Email Shovan', url: `mailto:${personal.email}`, icon: '✉️' },
              ].map((link) => (
                <Command.Item
                  key={link.label}
                  value={link.label}
                  onSelect={() => handleSelect(() => window.open(link.url, '_blank'))}
                  className={styles.item}
                >
                  <span className={styles.itemIcon}>{link.icon}</span>
                  <span>{link.label}</span>
                  <span className={styles.shortcut}>External ↗</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className={styles.footer}>
            <span>Navigation: <kbd>↑</kbd> <kbd>↓</kbd></span>
            <span>Select: <kbd>↵</kbd></span>
            <span>Close: <kbd>ESC</kbd></span>
          </div>
        </Command>
      </div>
    </div>
  )
}
