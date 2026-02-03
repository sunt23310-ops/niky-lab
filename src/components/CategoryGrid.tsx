'use client'

import { categories } from '@/lib/skills'

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`/categories/${cat.id}`}
          className="group block"
        >
          <div className="bg-slate-900 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-200 p-4 font-mono">
            {/* 文件夹名 */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{cat.icon}</span>
              <span className="text-cyan-400">{cat.id}/</span>
              <span className="text-slate-600 text-xs">module</span>
            </div>
            
            {/* 模块信息 */}
            <div className="space-y-1 text-sm">
              <div className="flex gap-2">
                <span className="text-amber-400">"name"</span>
                <span className="text-slate-500">:</span>
                <span className="text-green-400">"{cat.nameZh}"</span>
              </div>
              <div className="flex gap-2">
                <span className="text-amber-400">"exports"</span>
                <span className="text-slate-500">:</span>
                <span className="text-purple-400">{cat.count.toLocaleString()}</span>
                <span className="text-slate-600">// 个技能</span>
              </div>
              <div className="flex gap-2 text-slate-500">
                <span className="text-cyan-500">$</span>
                <span>cd {cat.id} && ls</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
