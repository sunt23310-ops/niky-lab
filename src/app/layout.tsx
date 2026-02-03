import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillHub 中文站 | Agent Skills 发现平台',
  description: '发现最热门的 AI Agent 技能，获取中文使用教程和价值说明。支持 Claude Code、Codex CLI、OpenClaw 等平台。',
  keywords: ['AI', 'Agent', 'Skills', 'Claude Code', 'Codex', 'OpenClaw', '人工智能', '技能库', 'SKILL.md'],
  authors: [{ name: 'suniky & niky' }],
  openGraph: {
    title: 'SkillHub 中文站 | Agent Skills 发现平台',
    description: '发现最热门的 AI Agent 技能，获取中文使用教程和价值说明',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-mono">{children}</body>
    </html>
  )
}
