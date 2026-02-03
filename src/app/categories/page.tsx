import { categories } from '@/lib/skills'
import { CategoryGrid } from '@/components/CategoryGrid'
import Link from 'next/link'

export default function CategoriesPage() {
  const totalSkills = categories.reduce((sum, cat) => sum + cat.count, 0)

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* 导航栏 */}
      <header className="border-b border-slate-800 sticky top-0 bg-slate-950/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-mono">
              <span className="text-green-400">ready</span>
              <span className="text-slate-500">~/</span>
              <span className="text-white font-bold">skillhub</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-3 py-1.5 text-slate-400 hover:text-white font-mono text-sm flex items-center gap-2">
                <span className="text-cyan-500">$</span>
                <span>cd</span>
                <span className="text-slate-600">~</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 内容 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 标题 */}
        <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden mb-8">
          <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700">
            <span className="text-cyan-400 font-mono text-sm">categories/</span>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold font-mono mb-2">
              <span className="text-slate-500">&gt;</span> 所有分类
            </h1>
            <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
              <span className="text-cyan-500">$</span>
              <span>ls -la</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400">{categories.length}</span>
              <span>个分类</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400">{totalSkills.toLocaleString()}</span>
              <span>个技能</span>
            </div>
          </div>
        </div>

        {/* 分类网格 */}
        <CategoryGrid />

        {/* 返回首页 */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-400 hover:text-white rounded-lg font-mono text-sm transition-colors"
          >
            <span className="text-cyan-500">$</span>
            <span>cd ~</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
