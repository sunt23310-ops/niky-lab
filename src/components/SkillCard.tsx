'use client'

import { Skill } from '@/lib/types'
import { formatNumber } from '@/lib/skills'

interface SkillCardProps {
  skill: Skill
  rank?: number
}

export function SkillCard({ skill, rank }: SkillCardProps) {
  return (
    <a
      href={skill.githubUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-slate-900 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-200 overflow-hidden">
        {/* 头部 - 文件名和星数 */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
          <div className="flex items-center gap-2">
            {rank && (
              <span className={`
                w-6 h-6 rounded flex items-center justify-center text-xs font-mono
                ${rank === 1 ? 'bg-yellow-500/20 text-yellow-400' : ''}
                ${rank === 2 ? 'bg-slate-400/20 text-slate-300' : ''}
                ${rank === 3 ? 'bg-orange-500/20 text-orange-400' : ''}
                ${rank > 3 ? 'bg-slate-700 text-slate-400' : ''}
              `}>
                {rank}
              </span>
            )}
            <span className="text-cyan-400 font-mono text-sm">{skill.fileName}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-mono text-sm">{formatNumber(skill.stars)}</span>
          </div>
        </div>

        {/* 内容区 - 代码风格 */}
        <div className="p-4 font-mono text-sm">
          {/* 行号和内容 */}
          <div className="flex gap-4">
            {/* 行号 */}
            <div className="flex flex-col text-slate-600 select-none">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
            
            {/* 代码内容 */}
            <div className="flex-1 min-w-0">
              {/* 第1行: export name */}
              <div className="flex items-center gap-2 truncate">
                <span className="text-purple-400">export</span>
                <span className="text-green-400">{skill.name}</span>
              </div>
              
              {/* 第2行: from repo */}
              <div className="flex items-center gap-2 truncate">
                <img 
                  src={`https://github.com/${skill.author}.png?size=20`} 
                  alt={skill.author}
                  className="w-4 h-4 rounded"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236b7280"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>'
                  }}
                />
                <span className="text-slate-500">from</span>
                <span className="text-amber-400">"{skill.repo}"</span>
              </div>
              
              {/* 第3-4行: 描述 */}
              <div className="text-slate-400 line-clamp-2 mt-1">
                {skill.descriptionZh}
              </div>
            </div>
          </div>
        </div>

        {/* 底部 - 日期和操作 */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800/30 border-t border-slate-700/50">
          <span className="text-slate-500 text-xs font-mono">{skill.lastUpdated}</span>
          <div className="flex items-center gap-2">
            <button 
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                // TODO: 收藏功能
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </a>
  )
}
