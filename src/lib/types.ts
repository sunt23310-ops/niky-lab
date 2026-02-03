// 技能数据类型定义
export interface Skill {
  id: string
  name: string
  nameZh: string
  description: string
  descriptionZh: string
  valueProposition: string  // 中文价值说明
  category: Category
  platform: Platform
  difficulty: Difficulty
  githubUrl?: string
  docsUrl?: string
  stars: number
  weeklyGrowth: number      // 周增长
  monthlyGrowth: number     // 月增长
  lastUpdated: string
  tags: string[]
  tutorial?: string         // 中文使用教程 (Markdown)
  rating: number            // 用户评分 1-5
  reviewCount: number
}

export type Category = 
  | 'automation'    // 自动化
  | 'data'          // 数据处理
  | 'coding'        // 编程开发
  | 'writing'       // 写作创作
  | 'research'      // 研究分析
  | 'communication' // 通讯集成
  | 'productivity'  // 效率工具
  | 'other'         // 其他

export type Platform = 
  | 'openclaw'
  | 'langchain'
  | 'autogpt'
  | 'crewai'
  | 'universal'     // 通用/多平台

export type Difficulty = 
  | 'beginner'      // 入门
  | 'intermediate'  // 中级
  | 'advanced'      // 高级

export const categoryLabels: Record<Category, string> = {
  automation: '🤖 自动化',
  data: '📊 数据处理',
  coding: '💻 编程开发',
  writing: '✍️ 写作创作',
  research: '🔬 研究分析',
  communication: '💬 通讯集成',
  productivity: '⚡ 效率工具',
  other: '📦 其他',
}

export const platformLabels: Record<Platform, string> = {
  openclaw: 'OpenClaw',
  langchain: 'LangChain',
  autogpt: 'AutoGPT',
  crewai: 'CrewAI',
  universal: '通用',
}

export const difficultyLabels: Record<Difficulty, string> = {
  beginner: '🟢 入门',
  intermediate: '🟡 中级',
  advanced: '🔴 高级',
}
