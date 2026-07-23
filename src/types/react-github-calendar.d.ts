declare module 'react-github-calendar' {
  import React from 'react'

  export interface ThemeInput {
    light?: string[]
    dark?: string[]
  }

  export interface Props {
    username: string
    blockSize?: number
    blockMargin?: number
    fontSize?: number
    theme?: ThemeInput
    colorScheme?: 'light' | 'dark'
    hideTotalCount?: boolean
    hideColorLegend?: boolean
    showWeekdayLabels?: boolean
  }

  const GitHubCalendar: React.FC<Props>
  export default GitHubCalendar
}
