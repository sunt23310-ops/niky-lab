import { Skill } from './types'

// 扩展的技能数据 - 模拟从 GitHub 抓取的数据
export const skills: Skill[] = [
  {
    id: 'feature-flags',
    name: 'feature-flags',
    nameZh: '特性标志管理',
    fileName: 'feature-flags.md',
    description: 'Use when feature flag tests fail, flags need updating, understanding @gate pragmas',
    descriptionZh: '用于特性标志测试失败、标志更新、理解 @gate 指令时使用',
    valueProposition: `
## 💡 价值说明

特性标志管理技能帮助你在大型项目中管理功能开关：

- **标志测试** — 自动检测和修复特性标志测试失败
- **标志更新** — 批量更新多个特性标志状态
- **调试支持** — 理解 @gate 指令和通道特定的测试失败

### 适用场景
- React 等大型开源项目开发
- 功能灰度发布
- A/B 测试管理
    `.trim(),
    category: 'development',
    platform: 'claude-code',
    difficulty: 'intermediate',
    author: 'facebook',
    repo: 'facebook/react',
    githubUrl: 'https://github.com/facebook/react',
    stars: 242700,
    weeklyGrowth: 1560,
    monthlyGrowth: 5230,
    lastUpdated: '2026-01-31',
    tags: ['React', '特性标志', '测试'],
    rating: 4.8,
    reviewCount: 328,
  },
  {
    id: 'create-pr',
    name: 'create-pr',
    nameZh: '创建 PR',
    fileName: 'create-pr.md',
    description: 'Creates GitHub pull requests with properly formatted titles',
    descriptionZh: '创建格式规范的 GitHub Pull Request',
    valueProposition: `
## 💡 价值说明

自动创建符合项目规范的 Pull Request：

- **格式化标题** — 自动生成符合 CI 验证的 PR 标题
- **模板填充** — 自动填写 PR 描述模板
- **一键提交** — 简化代码审查流程

### 适用场景
- 团队协作开发
- 开源项目贡献
- CI/CD 流程优化
    `.trim(),
    category: 'development',
    platform: 'claude-code',
    difficulty: 'beginner',
    author: 'n8n-io',
    repo: 'n8n-io/n8n',
    githubUrl: 'https://github.com/n8n-io/n8n',
    stars: 172500,
    weeklyGrowth: 2340,
    monthlyGrowth: 8910,
    lastUpdated: '2026-02-02',
    tags: ['GitHub', 'PR', '自动化'],
    rating: 4.9,
    reviewCount: 456,
  },
  {
    id: 'skill-lookup',
    name: 'skill-lookup',
    nameZh: '技能查找',
    fileName: 'skill-lookup.md',
    description: 'Activates when the user asks about Agent Skills, wants to find reusable AI capabilities',
    descriptionZh: '当用户询问 Agent Skills 或需要查找可复用 AI 能力时激活',
    valueProposition: `
## 💡 价值说明

帮助发现和安装 Agent Skills：

- **智能搜索** — 语义搜索匹配最相关的技能
- **一键安装** — 简化技能安装流程
- **能力发现** — 探索可复用的 AI 能力

### 适用场景
- 扩展 AI 助手能力
- 发现新工具
- 技能管理
    `.trim(),
    category: 'tools',
    platform: 'claude-code',
    difficulty: 'beginner',
    author: 'f',
    repo: 'f/prompts.chat',
    githubUrl: 'https://github.com/f/prompts.chat',
    stars: 144200,
    weeklyGrowth: 1890,
    monthlyGrowth: 7560,
    lastUpdated: '2026-02-02',
    tags: ['Skills', '搜索', '安装'],
    rating: 4.7,
    reviewCount: 298,
  },
  {
    id: 'gemini-cli',
    name: 'gemini',
    nameZh: 'Gemini CLI',
    fileName: 'gemini.md',
    description: 'Gemini CLI for one-shot Q&A, summaries, and generation',
    descriptionZh: 'Gemini 命令行工具，用于一次性问答、摘要和生成',
    valueProposition: `
## 💡 价值说明

在命令行中使用 Google Gemini：

- **快速问答** — 一次性问题快速获得答案
- **文本摘要** — 长文本自动摘要
- **内容生成** — 生成各类文本内容

### 适用场景
- 命令行工作流
- 快速信息查询
- 批量文本处理
    `.trim(),
    category: 'data-ai',
    platform: 'openclaw',
    difficulty: 'beginner',
    author: 'openclaw',
    repo: 'openclaw/openclaw',
    githubUrl: 'https://github.com/openclaw/openclaw',
    stars: 143700,
    weeklyGrowth: 2670,
    monthlyGrowth: 10340,
    lastUpdated: '2026-02-02',
    tags: ['Gemini', 'CLI', 'AI'],
    rating: 4.6,
    reviewCount: 412,
  },
  {
    id: 'web-scraper',
    name: 'web-scraper',
    nameZh: '网页抓取',
    fileName: 'web-scraper.md',
    description: 'Scrape and extract structured data from websites',
    descriptionZh: '从网站抓取和提取结构化数据',
    valueProposition: `
## 💡 价值说明

智能网页数据抓取：

- **结构化提取** — 自动识别并提取网页数据
- **批量处理** — 支持多页面批量抓取
- **格式转换** — 输出 JSON、CSV 等格式

### 适用场景
- 数据采集
- 竞品分析
- 内容聚合
    `.trim(),
    category: 'data-ai',
    platform: 'universal',
    difficulty: 'intermediate',
    author: 'anthropics',
    repo: 'anthropics/skills',
    githubUrl: 'https://github.com/anthropics/skills',
    stars: 98500,
    weeklyGrowth: 3120,
    monthlyGrowth: 12050,
    lastUpdated: '2026-01-30',
    tags: ['爬虫', '数据', '自动化'],
    rating: 4.5,
    reviewCount: 342,
  },
  {
    id: 'code-review',
    name: 'code-review',
    nameZh: '代码审查',
    fileName: 'code-review.md',
    description: 'Automated code review with best practices and security checks',
    descriptionZh: '自动代码审查，包含最佳实践和安全检查',
    valueProposition: `
## 💡 价值说明

AI 驱动的代码审查：

- **最佳实践** — 检查代码是否符合最佳实践
- **安全扫描** — 识别潜在安全漏洞
- **性能建议** — 提供性能优化建议

### 适用场景
- PR 审查
- 代码质量保证
- 安全合规
    `.trim(),
    category: 'testing-security',
    platform: 'universal',
    difficulty: 'intermediate',
    author: 'anthropics',
    repo: 'anthropics/skills',
    githubUrl: 'https://github.com/anthropics/skills',
    stars: 87600,
    weeklyGrowth: 2890,
    monthlyGrowth: 11200,
    lastUpdated: '2026-01-29',
    tags: ['代码审查', '安全', '质量'],
    rating: 4.8,
    reviewCount: 567,
  },
  {
    id: 'api-docs-gen',
    name: 'api-docs-generator',
    nameZh: 'API 文档生成',
    fileName: 'api-docs-generator.md',
    description: 'Generate comprehensive API documentation from code',
    descriptionZh: '从代码自动生成完整的 API 文档',
    valueProposition: `
## 💡 价值说明

自动化 API 文档生成：

- **代码分析** — 自动分析代码结构
- **文档生成** — 生成 OpenAPI/Swagger 规范
- **示例代码** — 自动生成调用示例

### 适用场景
- API 开发
- 文档维护
- 团队协作
    `.trim(),
    category: 'documentation',
    platform: 'universal',
    difficulty: 'beginner',
    author: 'openai',
    repo: 'openai/codex',
    githubUrl: 'https://github.com/openai/codex',
    stars: 76800,
    weeklyGrowth: 1980,
    monthlyGrowth: 7650,
    lastUpdated: '2026-01-28',
    tags: ['API', '文档', '自动化'],
    rating: 4.6,
    reviewCount: 234,
  },
  {
    id: 'git-automation',
    name: 'git-automation',
    nameZh: 'Git 自动化',
    fileName: 'git-automation.md',
    description: 'Automate common Git workflows and operations',
    descriptionZh: '自动化常见的 Git 工作流和操作',
    valueProposition: `
## 💡 价值说明

Git 工作流自动化：

- **智能提交** — 自动生成有意义的提交信息
- **分支管理** — 自动化分支创建和合并
- **冲突解决** — 辅助解决合并冲突

### 适用场景
- 日常开发
- 团队协作
- CI/CD 集成
    `.trim(),
    category: 'devops',
    platform: 'universal',
    difficulty: 'beginner',
    author: 'github',
    repo: 'github/copilot-skills',
    githubUrl: 'https://github.com/github/copilot-skills',
    stars: 65400,
    weeklyGrowth: 1560,
    monthlyGrowth: 6230,
    lastUpdated: '2026-01-31',
    tags: ['Git', '自动化', 'DevOps'],
    rating: 4.7,
    reviewCount: 389,
  },
  {
    id: 'markdown-writer',
    name: 'markdown-writer',
    nameZh: 'Markdown 写作',
    fileName: 'markdown-writer.md',
    description: 'Enhanced Markdown writing with templates and formatting',
    descriptionZh: '增强的 Markdown 写作，包含模板和格式化',
    valueProposition: `
## 💡 价值说明

专业的 Markdown 写作助手：

- **模板库** — 丰富的文档模板
- **格式化** — 自动格式化和美化
- **预览** — 实时预览效果

### 适用场景
- 技术文档
- 博客写作
- README 编写
    `.trim(),
    category: 'content-media',
    platform: 'universal',
    difficulty: 'beginner',
    author: 'community',
    repo: 'awesome-skills/markdown',
    githubUrl: 'https://github.com/awesome-skills/markdown',
    stars: 54300,
    weeklyGrowth: 1230,
    monthlyGrowth: 4890,
    lastUpdated: '2026-01-27',
    tags: ['Markdown', '写作', '文档'],
    rating: 4.5,
    reviewCount: 198,
  },
  {
    id: 'sql-assistant',
    name: 'sql-assistant',
    nameZh: 'SQL 助手',
    fileName: 'sql-assistant.md',
    description: 'Generate and optimize SQL queries with natural language',
    descriptionZh: '用自然语言生成和优化 SQL 查询',
    valueProposition: `
## 💡 价值说明

自然语言 SQL 生成：

- **查询生成** — 自然语言转 SQL
- **查询优化** — 自动优化慢查询
- **解释说明** — 解释复杂查询逻辑

### 适用场景
- 数据分析
- 数据库开发
- 报表生成
    `.trim(),
    category: 'databases',
    platform: 'universal',
    difficulty: 'intermediate',
    author: 'datatools',
    repo: 'datatools/sql-skills',
    githubUrl: 'https://github.com/datatools/sql-skills',
    stars: 43200,
    weeklyGrowth: 980,
    monthlyGrowth: 3890,
    lastUpdated: '2026-01-30',
    tags: ['SQL', '数据库', '查询'],
    rating: 4.6,
    reviewCount: 267,
  },
  {
    id: 'research-assistant',
    name: 'research-assistant',
    nameZh: '研究助手',
    fileName: 'research-assistant.md',
    description: 'Academic research assistance with citation and summarization',
    descriptionZh: '学术研究助手，支持引用和摘要',
    valueProposition: `
## 💡 价值说明

学术研究全流程支持：

- **文献搜索** — 智能搜索相关文献
- **引用管理** — 自动生成引用格式
- **论文摘要** — 快速理解论文要点

### 适用场景
- 学术研究
- 论文写作
- 文献综述
    `.trim(),
    category: 'research',
    platform: 'universal',
    difficulty: 'intermediate',
    author: 'academic',
    repo: 'academic/research-skills',
    githubUrl: 'https://github.com/academic/research-skills',
    stars: 38900,
    weeklyGrowth: 890,
    monthlyGrowth: 3450,
    lastUpdated: '2026-01-29',
    tags: ['研究', '学术', '引用'],
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 'smart-home',
    name: 'smart-home',
    nameZh: '智能家居',
    fileName: 'smart-home.md',
    description: 'Control and automate smart home devices',
    descriptionZh: '控制和自动化智能家居设备',
    valueProposition: `
## 💡 价值说明

智能家居控制中心：

- **设备控制** — 语音/文字控制设备
- **场景自动化** — 创建自动化场景
- **状态监控** — 实时监控设备状态

### 适用场景
- 家庭自动化
- 能源管理
- 安防监控
    `.trim(),
    category: 'lifestyle',
    platform: 'openclaw',
    difficulty: 'intermediate',
    author: 'homelab',
    repo: 'homelab/smart-skills',
    githubUrl: 'https://github.com/homelab/smart-skills',
    stars: 28700,
    weeklyGrowth: 670,
    monthlyGrowth: 2680,
    lastUpdated: '2026-01-28',
    tags: ['智能家居', 'IoT', '自动化'],
    rating: 4.4,
    reviewCount: 134,
  },
]

// 分类定义
export const categories = [
  { id: 'tools', name: '工具', nameZh: '工具', count: 42150, icon: '🔧' },
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
