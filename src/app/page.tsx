'use client'

import { useState } from 'react'
import { SkillCard } from '@/components/SkillCard'
import { CategoryGrid } from '@/components/CategoryGrid'
import { SearchBar } from '@/components/SearchBar'
import { getTotalRanking, skills, categories } from '@/lib/skills'

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
  const totalSkills = skills.length

  return (
    <main className="min-h-screen bg-bauhaus-bg relative">
      {/* Geometric Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-bauhaus-red opacity-20 rounded-full shadow-bauhaus" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-bauhaus-blue opacity-20 rotate-45 shadow-bauhaus" />
        <div className="absolute top-1/2 right-1/3 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-bauhaus-yellow opacity-20" />
      </div>

      {/* Navigation - Bauhaus Style */}
      <header className="nav-bauhaus sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Geometric Shapes */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-bauhaus-red border-3 border-bauhaus-black shadow-bauhaus-sm group-hover:animate-rotate" />
                <div className="w-8 h-8 bg-bauhaus-blue border-3 border-bauhaus-black shadow-bauhaus-sm rounded-full" />
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-bauhaus-yellow border-3" />
              </div>
              <span className="bauhaus-heading text-2xl tracking-tight">SKILLHUB</span>
            </a>

            {/* Navigation Buttons */}
            <nav className="hidden md:flex items-center gap-4">
              <a href="/categories" className="btn-bauhaus btn-yellow text-sm">
                CATEGORIES
              </a>
              <a href="/docs" className="btn-bauhaus btn-blue text-sm">
                DOCS
              </a>
            </nav>

            {/* GitHub Link */}
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/sunt23310-ops/niky-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-bauhaus-black hover:bg-bauhaus-red transition-colors border-3 border-bauhaus-black shadow-bauhaus-sm"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Constructivist Style */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bauhaus-card p-8 md:p-12 relative animate-slide-bauhaus geometric-bg">
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-bauhaus-red border-3 border-bauhaus-black shadow-bauhaus-sm" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-bauhaus-blue border-3 border-bauhaus-black rounded-full shadow-bauhaus-sm" />
            
            <div className="relative z-10">
              <h1 className="bauhaus-heading text-4xl md:text-6xl mb-6">
                AGENT SKILLS
                <span className="block text-bauhaus-red">中文站</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl">
                基于开放的 SKILL.MD 生态系统
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="color-block-red" />
                  <div>
                    <div className="text-3xl font-black">{totalSkills}</div>
                    <div className="text-sm font-bold uppercase">Skills</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="color-block-blue" />
                  <div>
                    <div className="text-3xl font-black">{categories.length}</div>
                    <div className="text-sm font-bold uppercase">Categories</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="color-block-yellow" />
                  <div>
                    <div className="text-3xl font-black">OPEN</div>
                    <div className="text-sm font-bold uppercase">Source</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-bold">
                <div className="bauhaus-card-blue p-4">
                  <div className="text-2xl mb-2">🔍</div>
                  <div>AI 语义搜索或关键字筛选</div>
                </div>
                <div className="bauhaus-card-red p-4">
                  <div className="text-2xl mb-2">📁</div>
                  <div>按分类浏览，按热度排序</div>
                </div>
                <div className="bauhaus-card-yellow p-4">
                  <div className="text-2xl mb-2">📦</div>
                  <div>所有技能采用开放标准</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills List Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="bauhaus-card p-6 mb-8 asymmetric-grid">
            <div>
              <h2 className="bauhaus-heading text-3xl mb-2">
                <span className="text-bauhaus-red">▶</span> 浏览技能
              </h2>
              <div className="flex items-center gap-4 text-sm font-bold mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-bauhaus-blue">COUNT:</span>
                  <span className="text-2xl font-black">{displaySkills.length}</span>
                </div>
              </div>
            </div>

            {/* Sort Buttons */}
            <div className="flex flex-col gap-3">
              <div className="text-sm font-bold uppercase mb-2">SORT BY:</div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSortType('stars')}
                  className={sortType === 'stars' ? 'btn-bauhaus btn-red' : 'btn-bauhaus'}
                >
                  ⭐ STARS
                </button>
                <button
                  onClick={() => setSortType('recent')}
                  className={sortType === 'recent' ? 'btn-bauhaus btn-blue' : 'btn-bauhaus'}
                >
                  🕐 RECENT
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={setSearchQuery} totalSkills={totalSkills} />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {displaySkills.map((skill, index) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                rank={searchQuery ? undefined : index + 1}
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {displaySkills.length === 0 && (
            <div className="bauhaus-card p-16 text-center">
              <div className="text-8xl mb-6">🔍</div>
              <div className="bauhaus-heading text-2xl">NO SKILLS FOUND</div>
              <div className="mt-4 font-bold">尝试其他搜索关键词</div>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-12 bg-bauhaus-white border-t-4 border-bauhaus-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bauhaus-card p-6 mb-8 border-primary">
            <h2 className="bauhaus-heading text-3xl mb-2">
              <span className="text-bauhaus-blue">■</span> 按分类浏览
            </h2>
            <p className="font-bold">探索 {categories.length} 个分类的 Agent Skills</p>
          </div>

          <CategoryGrid />
        </div>
      </section>

      {/* Footer - Constructivist Style */}
      <footer className="footer-bauhaus py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="bauhaus-heading text-2xl mb-4 text-bauhaus-yellow">
                SKILLHUB
              </div>
              <p className="font-bold text-sm">
                发现并探索由社区构建的 Agent Skills
              </p>
            </div>

            <div>
              <div className="font-bold text-sm uppercase mb-4 text-bauhaus-red">
                LINKS
              </div>
              <div className="space-y-2 text-sm font-bold">
                <a href="https://github.com/sunt23310-ops/niky-lab" className="block hover:text-bauhaus-yellow transition-colors">
                  → GitHub Repository
                </a>
                <a href="/categories" className="block hover:text-bauhaus-yellow transition-colors">
                  → Browse Categories
                </a>
                <a href="/docs" className="block hover:text-bauhaus-yellow transition-colors">
                  → Documentation
                </a>
              </div>
            </div>

            <div>
              <div className="font-bold text-sm uppercase mb-4 text-bauhaus-blue">
                RESOURCES
              </div>
              <div className="space-y-2 text-sm font-bold">
                <a href="https://docs.anthropic.com" className="block hover:text-bauhaus-yellow transition-colors">
                  → Claude Code Docs
                </a>
                <a href="https://github.com/anthropics/skills" className="block hover:text-bauhaus-yellow transition-colors">
                  → Official Skills
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-bauhaus-white pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-bauhaus-red border-2 border-white" />
              <div className="w-4 h-4 bg-bauhaus-blue border-2 border-white rounded-full" />
              <div className="w-4 h-4 bg-bauhaus-yellow border-2 border-white" />
            </div>
            
            <p className="text-sm font-bold">
              © 2026 由 <span className="text-bauhaus-yellow">suniky</span> 与 <span className="text-bauhaus-red">niky</span> 共同打造
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
