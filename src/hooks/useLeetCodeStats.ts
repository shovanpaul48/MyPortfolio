'use client'

import { useState, useEffect } from 'react'

interface LeetCodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  totalQuestions: number
  easyTotal: number
  mediumTotal: number
  hardTotal: number
  ranking: number | null
}

export function useLeetCodeStats(username: string) {
  const [data, setData] = useState<LeetCodeStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!username) return

    const fetchStats = async () => {
      setLoading(true)
      setError(null)

      // Try primary endpoint
      try {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
          signal: AbortSignal.timeout(8000),
        })
        if (res.ok) {
          const json = await res.json()
          if (json.status === 'success') {
            setData({
              totalSolved: json.totalSolved,
              easySolved: json.easySolved,
              mediumSolved: json.mediumSolved,
              hardSolved: json.hardSolved,
              totalQuestions: json.totalQuestions,
              easyTotal: json.totalEasy,
              mediumTotal: json.totalMedium,
              hardTotal: json.totalHard,
              ranking: json.ranking ?? null,
            })
            setLoading(false)
            return
          }
        }
      } catch (_) {
        // fallthrough to backup
      }

      // Backup endpoint
      try {
        const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`, {
          signal: AbortSignal.timeout(10000),
        })
        if (res.ok) {
          const json = await res.json()
          setData({
            totalSolved: json.solvedProblem ?? 0,
            easySolved: json.easySolved ?? 0,
            mediumSolved: json.mediumSolved ?? 0,
            hardSolved: json.hardSolved ?? 0,
            totalQuestions: 3000,
            easyTotal: json.totalEasy ?? 800,
            mediumTotal: json.totalMedium ?? 1700,
            hardTotal: json.totalHard ?? 700,
            ranking: null,
          })
          setLoading(false)
          return
        }
      } catch (_) {
        // both failed
      }

      setError('Could not load LeetCode stats')
      setLoading(false)
    }

    fetchStats()
  }, [username])

  return { data, loading, error }
}
