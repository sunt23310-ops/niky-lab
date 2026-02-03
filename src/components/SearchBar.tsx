'use client'

import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  totalSkills: number
}

export function SearchBar({ onSearch, totalSkills }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <div className={`
      bg-slate-900 rounded-xl border transition-all duration-300
      ${isFocused ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10' : 'border-slate-700/50'}
    `}>
      {/* 标签栏 */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-slate-800/60 to-transparent border-b border-slate-700/50">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
        </div>
        <span className="text-cyan-400 font-mono text-sm ml-2">search --ai</span>
        <span className="text-slate-600 font-mono text-xs hidden sm:inline">
          输入内容筛选，或按 ⏎ 进行搜索
        </span>
      </div>
      
      {/* 搜索输入 */}
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-center gap-3">
          <span className="text-cyan-500 font-mono">$</span>
          <span className="text-slate-400 font-mono hidden sm:inline">find</span>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              onSearch(e.target.value)
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={`搜索 ${totalSkills.toLocaleString()} 个 skills...`}
            className="search-input flex-1 bg-transparent text-white placeholder-slate-600 font-mono text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="btn-glow flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all font-mono text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">搜索</span>
          </button>
        </div>
      </form>
    </div>
  )
}
