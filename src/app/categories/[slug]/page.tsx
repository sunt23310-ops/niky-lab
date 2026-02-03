import { categories, skills } from '@/lib/skills'
import { SkillCard } from '@/components/SkillCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.id,
  }))
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = categories.find(c => c.id === slug)
  
  if (!category) {
    notFound()
  }

  const categorySkills = skills.filter(s => s.category === slug)

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
              <Link href="/categories" className="px-3 py-1.5 text-slate-400 hover:text-white font-mono text-sm flex items-center gap-2">
                <span className="text-cyan-500">$</span>
                <span>cd</span>
                <span className="text-slate-600">..</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 内容 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 面包屑 */}
        <div className="flex items-center gap-2 text-sm font-mono text-slate-500 mb-6">
          <Link href="/" className="hover:text-white">~</Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-white">categories</Link>
          <span>/</span>
          <span className="text-cyan-400">{slug}</span>
        </div>

        {/* 标题 */}
        <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden mb-8">
          <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700">
            <span className="text-cyan-400 font-mono text-sm">{slug}/</span>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold font-mono mb-2 flex items-center gap-3">
              <span className="text-2xl">{category.icon}</span>
              <span>{category.nameZh}</span>
            </h1>
            <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
              <span className="text-cyan-500">$</span>
              <span>ls -la</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400">{category.count.toLocaleString()}</span>
              <span>个技能</span>
            </div>
          </div>
        </div>

        {/* 技能列表 */}
        {categorySkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorySkills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} rank={index + 1} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-900 rounded-lg border border-slate-700 p-8 text-center">
            <p className="text-slate-500 font-mono">
              <span className="text-cyan-500">$</span> 该分类暂无技能数据
            </p>
            <p className="text-slate-600 font-mono text-sm mt-2">
              // 数据正在收集中...
            </p>
          </div>
        )}

        {/* 返回 */}
        <div className="mt-8 flex justify-center gap-4">
          <Link 
            href="/categories"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-400 hover:text-white rounded-lg font-mono text-sm transition-colors"
          >
            <span className="text-cyan-500">$</span>
            <span>cd ..</span>
          </Link>
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
