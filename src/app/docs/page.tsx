import Link from 'next/link'

export default function DocsPage() {
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 标题 */}
        <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden mb-8">
          <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700">
            <span className="text-cyan-400 font-mono text-sm">docs/README.md</span>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold font-mono mb-4">
              <span className="text-slate-500">#</span> 文档中心
            </h1>
            <p className="text-slate-400">
              了解如何使用 Agent Skills 和 SkillHub 中文站
            </p>
          </div>
        </div>

        {/* 文档列表 */}
        <div className="space-y-4">
          {/* 什么是 Agent Skills */}
          <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
            <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700">
              <span className="text-cyan-400 font-mono text-sm">what-is-agent-skills.md</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold font-mono mb-4">
                <span className="text-slate-500">##</span> 什么是 Agent Skills?
              </h2>
              <div className="space-y-4 text-slate-400 font-mono text-sm">
                <p>
                  Agent Skills 是扩展 AI 编程助手功能的模块化能力。每个 skill 由一个包含指令的 
                  <code className="text-cyan-400 bg-slate-800 px-1 rounded">SKILL.md</code> 文件以及可选的脚本和模板组成。
                </p>
                <p>
                  2025 年 12 月，Anthropic 将 Agent Skills 规范作为开放标准发布，OpenAI 也在 Codex CLI 和 ChatGPT 中采用了相同格式。
                </p>
                <div className="bg-slate-800 rounded p-4 mt-4">
                  <div className="text-slate-500">// 技能结构示例</div>
                  <div className="text-green-400">my-skill/</div>
                  <div className="pl-4">├── <span className="text-cyan-400">SKILL.md</span>  <span className="text-slate-600"># 必需：技能指令</span></div>
                  <div className="pl-4">├── <span className="text-amber-400">scripts/</span>  <span className="text-slate-600"># 可选：辅助脚本</span></div>
                  <div className="pl-4">└── <span className="text-amber-400">templates/</span>  <span className="text-slate-600"># 可选：模板文件</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* 如何安装 */}
          <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
            <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700">
              <span className="text-cyan-400 font-mono text-sm">installation.md</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold font-mono mb-4">
                <span className="text-slate-500">##</span> 如何安装 Agent Skill?
              </h2>
              <div className="space-y-4 text-slate-400 font-mono text-sm">
                <div>
                  <h3 className="text-white mb-2">Claude Code:</h3>
                  <div className="bg-slate-800 rounded p-3">
                    <div className="text-slate-500"># 个人技能</div>
                    <div><span className="text-cyan-500">$</span> cp -r my-skill ~/.claude/skills/</div>
                    <div className="text-slate-500 mt-2"># 项目技能</div>
                    <div><span className="text-cyan-500">$</span> cp -r my-skill .claude/skills/</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white mb-2">OpenAI Codex CLI:</h3>
                  <div className="bg-slate-800 rounded p-3">
                    <div><span className="text-cyan-500">$</span> cp -r my-skill ~/.codex/skills/</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 外部资源 */}
          <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
            <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700">
              <span className="text-cyan-400 font-mono text-sm">resources.md</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold font-mono mb-4">
                <span className="text-slate-500">##</span> 外部资源
              </h2>
              <div className="space-y-2">
                <a 
                  href="https://docs.anthropic.com/en/docs/claude-code/skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm"
                >
                  <span>📄</span>
                  <span>Claude Code Skills 官方文档</span>
                  <span className="text-slate-600">→</span>
                </a>
                <a 
                  href="https://github.com/anthropics/skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm"
                >
                  <span>📁</span>
                  <span>Anthropic 官方 Skills 仓库</span>
                  <span className="text-slate-600">→</span>
                </a>
                <a 
                  href="https://github.com/openai/codex/blob/main/docs/skills.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm"
                >
                  <span>📄</span>
                  <span>OpenAI Codex Skills 文档</span>
                  <span className="text-slate-600">→</span>
                </a>
                <a 
                  href="https://skillsmp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm"
                >
                  <span>🌐</span>
                  <span>Skills Marketplace (英文)</span>
                  <span className="text-slate-600">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

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
