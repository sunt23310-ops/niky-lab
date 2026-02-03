'use client'

import { useState } from 'react'
import { SkillCard } from '@/components/SkillCard'
import { getWeeklyRanking, getMonthlyRanking, getTotalRanking, skills } from '@/lib/skills'
import { categoryLabels, platformLabels } from '@/lib/types'
import { Search, Flame, TrendingUp, Trophy, Zap } from 'lucide-react'

type Tab = 'weekly' | 'monthly' | 'total'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('weekly')
  const [searchQuery, setSearchQuery] = useState('')

  const getSkills = () => {
    let result = activeTab === 'weekly' 
      ? getWeeklyRanking() 
      : activeTab === 'monthly' 
        ? getMonthlyRanking() 
        : getTotalRanking()

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(s => 
        s.name.toLowerCase().includes(q) ||
        s.nameZh.includes(q) ||
        s.tags.some(t => t.includes(q))
      )
    }

    return result
  }

  const displaySkills = getSkills()

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-10 h-10" />
            <h1 className="text-3xl font-bold">SkillHub 中文站</h1>
          </div>
          <p className="text-primary-100 text-lg mb-8">
            发现最热门的 AI Agent 技能，获取中文使用教程和价值说明
          </p>

          {/* 搜索框 */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="搜索技能名称、标签..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>
        </div>
      </header>

      {/* 统计 */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-8 text-sm">
            <div>
              <span className="text-slate-500">收录技能</span>
              <span className="ml-2 font-semibold text-slate-900 dark:text-white">{skills.length}</span>
            </div>
            <div>
              <span className="text-slate-500">支持平台</span>
              <span className="ml-2 font-semibold text-slate-900 dark:text-white">{Object.keys(platformLabels).length}</span>
            </div>
            <div>
              <span className="text-slate-500">分类</span>
              <span className="ml-2 font-semibold text-slate-900 dark:text-white">{Object.keys(categoryLabels).length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主内容 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tab 切换 */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('weekly')}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
              ${activeTab === 'weekly' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-slate-600 hover:bg-slate-100'}
            `}
          >
            <Flame className="w-4 h-4" />
            周榜
          </button>
          <button
            onClick={() => setActiveTab('monthly')}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
              ${activeTab === 'monthly' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-slate-600 hover:bg-slate-100'}
            `}
          >
            <TrendingUp className="w-4 h-4" />
            月榜
          </button>
          <button
            onClick={() => setActiveTab('total')}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
              ${activeTab === 'total' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-slate-600 hover:bg-slate-100'}
            `}
          >
            <Trophy className="w-4 h-4" />
            总榜
          </button>
        </div>

        {/* 技能列表 */}
        <div className="space-y-4">
          {displaySkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              rank={index + 1}
              showGrowth={activeTab === 'total' ? undefined : activeTab}
            />
          ))}
        </div>

        {displaySkills.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            没有找到匹配的技能
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-slate-500 text-sm">
          <p>由 suniky 与 niky ⚡ 共同打造</p>
          <p className="mt-2">
            <a href="https://github.com/sunt23310-ops/niky-lab" className="hover:text-primary-600">
              GitHub
            </a>
            {' · '}
            <a href="https://clawdhub.com" className="hover:text-primary-600">
              ClawdHub
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
