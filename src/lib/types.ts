// 技能数据类型定义
export interface Skill {
  id: string
  name: string
  nameZh: string
  fileName: string
  description: string
  descriptionZh: string
  valueProposition: string
  category: Category
  platform: Platform
  difficulty: Difficulty
  author: string
  repo: string
  githubUrl?: string
  docsUrl?: string
  stars: number
  weeklyGrowth: number
  monthlyGrowth: number
  lastUpdated: string
  tags: string[]
  tutorial?: string
  rating: number
  reviewCount: number
}

export type Category = 
  | 'tools'
  | 'development'
  | 'data-ai'
  | 'business'
  | 'devops'
  | 'testing-security'
  | 'content-media'
  | 'documentation'
  | 'research'
  | 'databases'
  | 'lifestyle'
  | 'blockchain'

export type Platform = 
  | 'claude-code'
  | 'codex'
  | 'openclaw'
  | 'langchain'
  | 'universal'

export type Difficulty = 
  | 'beginner'
  | 'intermediate'
  | 'advanced'

export const categoryLabels: Record<Category, string> = {
  tools: '🔧 工具',
  development: '💻 开发',
  'data-ai': '🤖 数据与AI',
  business: '💼 商业',
  devops: '⚙️ DevOps',
  'testing-security': '🔒 测试与安全',
  'content-media': '📝 内容与媒体',
  documentation: '📚 文档',
  research: '🔬 研究',
  databases: '🗄️ 数据库',
  lifestyle: '🏠 生活方式',
  blockchain: '⛓️ 区块链',
}

export const platformLabels: Record<Platform, string> = {
  'claude-code': 'Claude Code',
  codex: 'Codex CLI',
  openclaw: 'OpenClaw',
  langchain: 'LangChain',
  universal: '通用',
}

export const difficultyLabels: Record<Difficulty, string> = {
  beginner: '入门',
  intermediate: '中级',
  advanced: '高级',
}
