import { Skill } from './types'
import skillsData from './skills-data.json'

// 从 JSON 加载技能数据
export const skills: Skill[] = skillsData as Skill[]

// 分类定义
export const categories = [
  { id: 'tools', name: 'Tools', nameZh: '工具', count: 42150, icon: '🔧' },
  { id: 'development', name: 'Development', nameZh: '开发', count: 36559, icon: '💻' },
  { id: 'data-ai', name: 'Data & AI', nameZh: '数据与AI', count: 24400, icon: '🤖' },
  { id: 'business', name: 'Business', nameZh: '商业', count: 23599, icon: '💼' },
  { id: 'devops', name: 'DevOps', nameZh: 'DevOps', count: 19852, icon: '⚙️' },
  { id: 'testing-security', name: 'Testing & Security', nameZh: '测试与安全', count: 15130, icon: '🔒' },
  { id: 'content-media', name: 'Content & Media', nameZh: '内容与媒体', count: 11318, icon: '📝' },
  { id: 'documentation', name: 'Documentation', nameZh: '文档', count: 10618, icon: '📚' },
  { id: 'research', name: 'Research', nameZh: '研究', count: 5533, icon: '🔬' },
  { id: 'databases', name: 'Databases', nameZh: '数据库', count: 2643, icon: '🗄️' },
  { id: 'lifestyle', name: 'Lifestyle', nameZh: '生活方式', count: 2136, icon: '🏠' },
  { id: 'blockchain', name: 'Blockchain', nameZh: '区块链', count: 1731, icon: '⛓️' },
]

// 获取周榜（按周增长排序）
export function getWeeklyRanking(): Skill[] {
  return [...skills].sort((a, b) => b.weeklyGrowth - a.weeklyGrowth)
}

// 获取月榜（按月增长排序）
export function getMonthlyRanking(): Skill[] {
  return [...skills].sort((a, b) => b.monthlyGrowth - a.monthlyGrowth)
}

// 获取总榜（按 stars 排序）
export function getTotalRanking(): Skill[] {
  return [...skills].sort((a, b) => b.stars - a.stars)
}

// 按分类筛选
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter(s => s.category === category)
}

// 搜索技能
export function searchSkills(query: string): Skill[] {
  const q = query.toLowerCase()
  return skills.filter(s => 
    s.name.toLowerCase().includes(q) ||
    s.nameZh.includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.descriptionZh.includes(q) ||
    s.tags.some(t => t.toLowerCase().includes(q))
  )
}

// 格式化数字
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}
