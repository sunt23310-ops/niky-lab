'use client'

import { useState } from 'react'
import { SkillCard } from '@/components/SkillCard'
import { CategoryGrid } from '@/components/CategoryGrid'
import { SearchBar } from '@/components/SearchBar'
import { getTotalRanking, skills, categories, formatNumber } from '@/lib/skills'

type SortType = 'stars' | 'recent'

export default function Home() {
  const [sortType, setSortType] = useState<SortType>('stars')
  const [searchQuery, setSearchQuery] = useState('')

  const getSkills = () => {
    let result = sortType === 'stars' 
      ? getTotalRanking() 
      : [...skills].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(s => 
        s.name.toLowerCase().includes(q) ||
        s.nameZh.includes(q) ||
        s.descriptionZh.includes(q) ||
        s.tags.some(t => t.includes(q))
      )
    }

    return result
  }

  const displaySkills = getSkills()
  const totalSkills = 128427

  return (
    <main className="min-h-screen bg-slate-950 text-white bg-grid">
      {/* 背景渐变 */}
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />
      
      {/* 导航栏 */}
      <header className="border-b border-slate-800/50 sticky top-0 glass z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 font-mono group">
              <span className="text-green-400 group-hover:text-green-300 transition-colors">ready</span>
              <span className="text-slate-500">~/</span>
              <span className="text-white font-bold group-hover:text-cyan-400 transition-colors">skillhub</span>
            </a>

            {/* 导航 */}
            <nav className="hidden md:flex items-center gap-1">
              <a href="/categories" className="px-3 py-1.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg font-mono text-sm flex items-center gap-2 transition-all">
                <span className="text-cyan-500">$</span>
                <span>cd</span>
                <span className="text-slate-600">/categories</span>
              </a>
              <a href="/docs" className="px-3 py-1.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg font-mono text-sm flex items-center gap-2 transition-all">
                <span className="text-cyan-500">$</span>
                <span>man</span>
                <span className="text-slate-600">docs</span>
              </a>
            </nav>

            {/* 右侧 */}
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/sunt23310-ops/niky-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <span className="text-xs text-slate-500 font-mono px-2 py-1 bg-slate-800/50 rounded">ZH</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero 区域 */}
      <section className="relative border-b border-slate-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="animate-fade-in-up bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
            {/* 标签栏 */}
            <div className="flex items-center gap-2 px-5 py-3 bg-slate-800/50 border-b border-slate-700/50">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <span className="text-cyan-400 font-mono text-sm ml-3">skills.marketplace</span>
              <span className="text-slate-600 font-mono text-xs">// main.ts</span>
            </div>
            
            {/* 内容 */}
            <div className="p-8 font-mono">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 neon-text">
                <span className="text-slate-500">&gt;</span> Agent Skills 中文站
              </h1>
              <p className="text-slate-400 mb-8 text-lg">
                <span className="text-slate-500">&gt;</span> 基于开放的 SKILL.md 生态系统
              </p>
              
              <div className="space-y-3 text-sm md:text-base">
                <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                  <span className="text-purple-400">const</span>
                  <span className="text-cyan-400">skills</span>
                  <span className="text-slate-500">=</span>
                  <span className="text-amber-400 text-xl font-bold">{totalSkills.toLocaleString()}</span>
                  <span className="text-slate-500">;</span>
                </div>
                <div className="text-slate-600 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                  // 发现来自 GitHub 的开源 Agent Skills
                </div>
              </div>
              
              <div className="mt-8 p-5 bg-slate-800/30 rounded-xl border border-slate-700/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-slate-500 text-sm">/**</div>
                <div className="text-slate-400 text-sm pl-3 leading-relaxed">
                  * 🔍 AI 语义搜索或关键字筛选<br/>
                  * 📁 按分类浏览，按热度排序<br/>
                  * 📦 所有技能采用开放的 SKILL.md 标准
                </div>
                <div className="text-slate-500 text-sm">*/</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技能列表区域 */}
      <section className="relative border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* 标题栏 */}
          <div className="bg-slate-900/80 rounded-t-xl border border-slate-700/50 border-b-0 backdrop-blur">
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-mono text-sm">skills --list</span>
                <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full font-mono animate-pulse-slow">ready</span>
              </div>
            </div>
            <div className="px-5 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-bold font-mono">
                <span className="text-slate-500">&gt;</span> 浏览 Agent Skills
              </h2>
              <div className="flex items-center gap-4 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500">$</span>
                  <span className="text-slate-400">count:</span>
                  <span className="text-amber-400 font-bold">{displaySkills.length}</span>
                </div>
                
                {/* 排序选择 */}
                <div className="flex items-center gap-2">
                  <span className="text-slate-600 hidden sm:inline">--sort</span>
                  <div className="flex items-center gap-1 bg-slate-800/80 rounded-lg p-1">
                    <button
                      onClick={() => setSortType('stars')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-all ${
                        sortType === 'stars' ? 'sort-btn-active text-cyan-400' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      stars
                    </button>
                    <button
                      onClick={() => setSortType('recent')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-all ${
                        sortType === 'recent' ? 'sort-btn-active text-cyan-400' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      recent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 搜索栏 */}
          <div className="mb-8">
            <SearchBar onSearch={setSearchQuery} totalSkills={totalSkills} />
          </div>

          {/* 技能网格 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {displaySkills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                rank={searchQuery ? undefined : index + 1}
                index={index}
              />
            ))}
          </div>

          {displaySkills.length === 0 && (
            <div className="text-center py-16 text-slate-500 font-mono">
              <div className="text-4xl mb-4">🔍</div>
              <span className="text-cyan-500">$</span> 没有找到匹配的技能
            </div>
          )}
        </div>
      </section>

      {/* 分类区域 */}
      <section className="relative border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* 标题 */}
          <div className="bg-slate-900/80 rounded-t-xl border border-slate-700/50 border-b-0 px-5 py-4 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-cyan-400 font-mono text-sm">categories.json</span>
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full font-mono">ready</span>
            </div>
            <h2 className="text-xl font-bold font-mono">
              <span className="text-slate-500">&gt;</span> 按分类浏览
            </h2>
            <p className="text-slate-600 font-mono text-sm mt-2">
              <span className="text-cyan-500">$</span> 探索 {categories.length} 个分类的 Agent Skills
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-b-xl border border-slate-700/50 border-t-0 p-5 backdrop-blur">
            <CategoryGrid />
          </div>
        </div>
      </section>

      {/* FAQ 区域 */}
      <section className="relative border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-slate-900/80 rounded-xl border border-slate-700/50 overflow-hidden backdrop-blur">
            <div className="px-5 py-4 border-b border-slate-700/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyan-400 font-mono text-sm">FAQ.md</span>
                <span className="text-slate-600 font-mono text-xs">5 questions</span>
              </div>
              <h2 className="text-xl font-bold font-mono">
                <span className="text-slate-500">#</span> 常见问题
              </h2>
            </div>
            
            <div className="divide-y divide-slate-700/50">
              {[
                { q: '什么是 Agent Skills?', a: 'Agent Skills 是扩展 AI 编程助手功能的模块化能力。每个 skill 由一个包含指令的 SKILL.md 文件以及可选的脚本和模板组成。' },
                { q: '如何安装 Agent Skill?', a: 'Claude Code：添加到 ~/.claude/skills/（个人）或 .claude/skills/（项目）。OpenAI Codex CLI：添加到 ~/.codex/skills/。' },
                { q: '这些技能使用安全吗?', a: '本市场的技能来自公共 GitHub 仓库。我们会过滤掉低质量的仓库并扫描基本质量指标，但你应该在安装前始终审查代码。' },
                { q: '我可以创建并分享自己的技能吗?', a: '可以! 你可以创建自定义 agent skill 并在 GitHub 上分享。基本结构需要一个包含指令的 SKILL.md 文件。' },
                { q: '本网站与 Anthropic 或 OpenAI 有关联吗?', a: '没有，SkillHub 中文站是一个独立的社区项目。我们从 GitHub 聚合和展示 agent skills 以便于发现。' },
              ].map((item, i) => (
                <details key={i} className="group">
                  <summary className="px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-slate-600 font-mono text-sm w-6">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-mono text-slate-300 group-hover:text-white transition-colors">Q: {item.q}</span>
                    </div>
                    <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-lg">[+]</span>
                  </summary>
                  <div className="px-5 pb-5 pl-16 content">
                    <div className="bg-slate-800/30 rounded-lg p-4 font-mono text-sm">
                      <div className="text-slate-500">/**</div>
                      <div className="text-slate-400 pl-2 leading-relaxed">* {item.a}</div>
                      <div className="text-slate-500">*/</div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 关于 */}
            <div>
              <div className="text-slate-500 font-mono text-sm mb-3">$ cat README.md</div>
              <h3 className="text-xl font-bold font-mono mb-3 neon-text"># SkillHub 中文站</h3>
              <p className="text-slate-400 text-sm leading-relaxed">发现并探索由社区构建的 Agent Skills，让 AI 助手更强大</p>
            </div>
            
            {/* 链接 */}
            <div>
              <div className="text-slate-500 font-mono text-sm mb-3">$ git remote -v</div>
              <div className="space-y-3">
                <a href="https://github.com/sunt23310-ops/niky-lab" className="flex items-center gap-3 text-slate-400 hover:text-white text-sm group transition-colors">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>
            
            {/* 资源 */}
            <div>
              <div className="text-slate-500 font-mono text-sm mb-3">$ ls ./资源/</div>
              <div className="space-y-2 text-sm">
                <a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">📄 Claude Code 文档</a>
                <a href="https://github.com/anthropics/skills" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">📁 官方 Skills</a>
                <a href="https://skillsmp.com" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">🌐 Skills Marketplace</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-3 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-green-400">online</span>
              </span>
              <span className="text-slate-600">v0.1.0</span>
              <span className="text-slate-400">SkillHub 中文站</span>
            </div>
            <p className="text-slate-500">
              © 2026 由 <span className="text-cyan-400">suniky</span> 与 <span className="text-amber-400">niky ⚡</span> 共同打造
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
