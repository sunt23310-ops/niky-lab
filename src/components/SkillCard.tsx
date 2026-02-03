'use client'

import { Skill, categoryLabels, platformLabels, difficultyLabels } from '@/lib/types'
import { Star, TrendingUp, ExternalLink, Github } from 'lucide-react'

interface SkillCardProps {
  skill: Skill
  rank?: number
  showGrowth?: 'weekly' | 'monthly'
}

export function SkillCard({ skill, rank, showGrowth }: SkillCardProps) {
  const growth = showGrowth === 'weekly' ? skill.weeklyGrowth : skill.monthlyGrowth
  const growthLabel = showGrowth === 'weekly' ? '周' : '月'

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* 排名 */}
        {rank && (
          <div className={`
            flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg
            ${rank === 1 ? 'bg-yellow-100 text-yellow-700' : ''}
            ${rank === 2 ? 'bg-slate-100 text-slate-600' : ''}
            ${rank === 3 ? 'bg-orange-100 text-orange-700' : ''}
            ${rank > 3 ? 'bg-slate-50 text-slate-500' : ''}
          `}>
            {rank}
          </div>
        )}

        {/* 内容 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white truncate">
              {skill.nameZh}
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {skill.name}
            </span>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 line-clamp-2">
            {skill.descriptionZh}
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full">
              {categoryLabels[skill.category]}
            </span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
              {platformLabels[skill.platform]}
            </span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
              {difficultyLabels[skill.difficulty]}
            </span>
          </div>

          {/* 统计 */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>{skill.stars.toLocaleString()}</span>
            </div>

            {showGrowth && (
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>+{growth} {growthLabel}</span>
              </div>
            )}

            <div className="flex items-center gap-1 text-slate-500">
              <span>⭐ {skill.rating}</span>
              <span className="text-slate-400">({skill.reviewCount})</span>
            </div>

            {/* 链接 */}
            <div className="flex items-center gap-2 ml-auto">
              {skill.githubUrl && (
                <a
                  href={skill.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {skill.docsUrl && (
                <a
                  href={skill.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
