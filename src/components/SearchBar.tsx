'use client'

import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  totalSkills: number
}

export function SearchBar({ onSearch, totalSkills }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
      {/* 标签栏 */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-b border-slate-700">
        <span className="text-cyan-400 font-mono text-sm">search --ai</span>
        <span className="text-slate-600 font-mono text-xs">
          输入内容筛选，或按 ⏎ 进行 AI 搜索
        </span>
      </div>
      
      {/* 搜索输入 */}
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-center gap-3">
          <span className="text-cyan-500 font-mono">$</span>
          <span className="text-slate-400 font-mono">find</span>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              onSearch(e.target.value)
            }}
            placeholder={`用 AI 搜索 ${totalSkills.toLocaleString()} 个 skills：试试『代码审查』、『数据分析』...`}
            className="flex-1 bg-transparent text-white placeholder-slate-600 font-mono text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors font-mono text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            execute
          </button>
        </div>
      </form>
    </div>
  )
}
