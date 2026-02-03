import { Skill } from './types'

// 示例技能数据
export const skills: Skill[] = [
  {
    id: 'weather',
    name: 'Weather Skill',
    nameZh: '天气查询',
    description: 'Get current weather and forecasts without API key',
    descriptionZh: '无需 API Key 即可获取天气预报',
    valueProposition: `
## 💡 价值说明

天气查询是最实用的 Agent 技能之一。它让你的 AI 助手能够：

- **实时天气** — 获取任意城市的当前天气状况
- **天气预报** — 查看未来几天的天气趋势
- **无需配置** — 开箱即用，不需要申请 API Key

### 适用场景
- 每日提醒出门带伞
- 旅行规划参考
- 户外活动决策
    `.trim(),
    category: 'productivity',
    platform: 'openclaw',
    difficulty: 'beginner',
    githubUrl: 'https://github.com/openclaw/openclaw',
    docsUrl: 'https://docs.openclaw.ai/skills/weather',
    stars: 2840,
    weeklyGrowth: 156,
    monthlyGrowth: 523,
    lastUpdated: '2026-01-30',
    tags: ['天气', '实用', '无需配置'],
    rating: 4.5,
    reviewCount: 128,
  },
  {
    id: 'coding-agent',
    name: 'Coding Agent',
    nameZh: '编程助手',
    description: 'Run Codex CLI, Claude Code, or other coding agents',
    descriptionZh: '运行 Codex CLI、Claude Code 等编程 Agent',
    valueProposition: `
## 💡 价值说明

编程助手技能让你的 Agent 能够调用专业的编程工具：

- **多工具支持** — Codex CLI、Claude Code、OpenCode 等
- **后台运行** — 支持长时间运行的编程任务
- **交互控制** — 可以发送输入、获取输出

### 适用场景
- 自动化代码生成
- 代码审查和重构
- 项目脚手架搭建
    `.trim(),
    category: 'coding',
    platform: 'openclaw',
    difficulty: 'intermediate',
    githubUrl: 'https://github.com/openclaw/openclaw',
    docsUrl: 'https://docs.openclaw.ai/skills/coding-agent',
    stars: 2840,
    weeklyGrowth: 234,
    monthlyGrowth: 891,
    lastUpdated: '2026-01-28',
    tags: ['编程', 'Claude Code', 'Codex', '开发'],
    rating: 4.8,
    reviewCount: 256,
  },
  {
    id: 'browser-automation',
    name: 'Browser Automation',
    nameZh: '浏览器自动化',
    description: 'Control web browsers for automation tasks',
    descriptionZh: '控制浏览器执行自动化任务',
    valueProposition: `
## 💡 价值说明

浏览器自动化让 Agent 能够像人一样操作网页：

- **网页操作** — 点击、输入、滚动、截图
- **数据抓取** — 提取网页内容和结构化数据
- **表单填写** — 自动完成重复性的网页操作

### 适用场景
- 自动化测试
- 数据采集
- 批量操作网页应用
    `.trim(),
    category: 'automation',
    platform: 'universal',
    difficulty: 'intermediate',
    stars: 5200,
    weeklyGrowth: 312,
    monthlyGrowth: 1205,
    lastUpdated: '2026-01-29',
    tags: ['浏览器', '自动化', '爬虫', 'Playwright'],
    rating: 4.6,
    reviewCount: 342,
  },
  {
    id: 'memory-system',
    name: 'Memory System',
    nameZh: '记忆系统',
    description: 'Persistent memory for AI agents across sessions',
    descriptionZh: '跨会话的 AI 记忆持久化系统',
    valueProposition: `
## 💡 价值说明

记忆系统是让 Agent 变得"聪明"的关键：

- **长期记忆** — 记住用户偏好和历史对话
- **语义搜索** — 智能检索相关记忆
- **自动整理** — 定期归纳和更新记忆

### 适用场景
- 个人助理
- 客服机器人
- 任何需要上下文的应用
    `.trim(),
    category: 'productivity',
    platform: 'universal',
    difficulty: 'beginner',
    stars: 3100,
    weeklyGrowth: 189,
    monthlyGrowth: 756,
    lastUpdated: '2026-01-31',
    tags: ['记忆', '上下文', '个性化'],
    rating: 4.7,
    reviewCount: 198,
  },
  {
    id: 'web-search',
    name: 'Web Search',
    nameZh: '网络搜索',
    description: 'Search the web using various search APIs',
    descriptionZh: '使用搜索 API 进行网络搜索',
    valueProposition: `
## 💡 价值说明

网络搜索让 Agent 能够获取实时信息：

- **多引擎支持** — Brave、Google、Bing 等
- **结构化结果** — 返回标题、摘要、链接
- **时效性过滤** — 可按时间范围筛选

### 适用场景
- 实时信息查询
- 研究和调研
- 新闻监控
    `.trim(),
    category: 'research',
    platform: 'universal',
    difficulty: 'beginner',
    githubUrl: 'https://github.com/openclaw/openclaw',
    stars: 4500,
    weeklyGrowth: 267,
    monthlyGrowth: 1034,
    lastUpdated: '2026-01-30',
    tags: ['搜索', '信息获取', 'Brave', 'Google'],
    rating: 4.4,
    reviewCount: 412,
  },
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

// 按平台筛选
export function getSkillsByPlatform(platform: string): Skill[] {
  return skills.filter(s => s.platform === platform)
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
