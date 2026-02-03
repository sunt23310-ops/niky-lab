import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillHub 中文站 | Agent 技能发现平台',
  description: '发现最热门的 AI Agent 技能，获取中文使用教程和价值说明',
  keywords: ['AI', 'Agent', 'Skills', 'OpenClaw', 'LangChain', '人工智能', '技能库'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
