'use client'

import { categories } from '@/lib/skills'
import Link from 'next/link'

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat, index) => (
        <Link
          key={cat.id}
          href={`/categories/${cat.id}`}
          className="group block animate-fade-in-up"
          style={{ animationDelay: `${index * 50}ms`, opacity: 0 }}
        >
          <div className="category-card rounded-xl border border-slate-700/50 p-5 font-mono">
            {/* 文件夹名 */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl category-icon">{cat.icon}</span>
              <div>
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{cat.id}/</span>
                <span className="text-slate-600 text-xs ml-2">module</span>
              </div>
            </div>
            
            {/* 模块信息 */}
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-amber-400">"name"</span>
                <span className="text-slate-500">:</span>
                <span className="text-green-400 group-hover:text-green-300 transition-colors">"{cat.nameZh}"</span>
              </div>
              <div className="flex gap-2">
                <span className="text-amber-400">"exports"</span>
                <span className="text-slate-500">:</span>
                <span className="text-purple-400 font-medium">{cat.count.toLocaleString()}</span>
                <span className="text-slate-600">// 个技能</span>
              </div>
              <div className="flex gap-2 text-slate-500 group-hover:text-slate-400 transition-colors pt-1">
                <span className="text-cyan-500">$</span>
                <span>cd {cat.id} && ls</span>
                <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
