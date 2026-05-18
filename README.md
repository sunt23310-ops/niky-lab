# 🧪 SkillHub 中文站

> Agent 技能发现与评测平台 — 让每个人都能找到适合自己的 AI 技能

[![GitHub](https://img.shields.io/badge/GitHub-niky--lab-blue)](https://github.com/sunt23310-ops/niky-lab)

## ✨ 特性

- 🔥 **热门排行** — 周榜 / 月榜 / 总榜，发现最受欢迎的技能
- 📖 **中文文档** — 每个技能都有详细的价值说明和使用教程
- 🏷️ **智能分类** — 按用途、平台、难度等多维度筛选
- ⭐ **用户评价** — 真实评分与评论，帮你做出选择
- 🔄 **持续更新** — 自动追踪各大平台的新技能

## 🎯 支持的技能生态

- [OpenClaw](https://clawdhub.com) — 开源 Agent 框架
- [LangChain](https://langchain.com) — LLM 应用开发
- [AutoGPT](https://agpt.co) — 自主 Agent
- [CrewAI](https://crewai.com) — 多 Agent 协作
- 更多持续添加中...

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/sunt23310-ops/niky-lab.git
cd niky-lab

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看效果

## 📁 项目结构

```
niky-lab/
├── src/
│   ├── app/           # Next.js App Router 页面
│   ├── components/    # React 组件
│   ├── lib/           # 工具函数和配置
│   └── data/          # 技能数据（JSON/Markdown）
├── public/            # 静态资源
└── package.json
```

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: TailwindCSS
- **数据库**: Supabase (PostgreSQL)
- **部署**: Vercel
- **语言**: TypeScript

## 📊 数据来源

技能数据通过以下方式收集：
1. GitHub API — 获取仓库信息、Star 数、更新时间
2. 官方文档 — 提取功能描述
3. 社区贡献 — 用户提交的中文翻译和教程

## 🤝 贡献指南

欢迎贡献！你可以：
- 📝 添加新技能的中文介绍
- 🐛 报告问题或建议
- 💻 提交代码改进

## 📜 许可证

MIT License

---

*由 suniky 与 niky ⚡ 共同打造*
# 触发部署 - Tue Feb  3 18:31:49 CST 2026
