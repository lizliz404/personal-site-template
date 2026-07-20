# Gap Analysis: V3 Template vs Three References

> 基于 `notes/2026-05-04-personal-website-design-benchmark.md`（726 行八案例 benchmark）+ `docs/reference-brief.md` + V3 源码逐行审查

---

## 核心诊断

V3 的问题不是技术实现不够炫，而是**偷了形式没偷逻辑**。

haoqi 的系统面板、坐标、loading sequence、char reveal 都被搬过来了，但 haoqi 这些元素之所以成立，是因为**形式本身就是能力证明**——他是 Design Engineer，WebGL/motion 本身就是他的作品。V3 把这些元素搬过来当装饰，但没有让它们服务于 Liz 的身份（AI agent builder / writer / tool maker）。

maxime 的能力主题聚类被写进了 design brief 但没有实现——V3 的 work cards 是 `01/02/03` 占位符，全挂 `Coding Project` 标签，没有 capability cluster。

Geist 的克制原则几乎没有体现——V3 的 motion 更多是"展示我能做动效"而非"解释发生了什么变化"。

---

## 一、haoqi.design 的差距

### HIGH-1: 形式服务身份 — V3 偷了皮肤没偷骨骼

**haoqi 做对了什么：**
haoqi 的每个交互元素都指向 "Design Engineering" 身份。WebGL shader 证明他能做视觉工程，系统面板证明他能做工具化 UI，char reveal 证明他能动效设计。形式 = 能力证明 = 信任建立。

**V3 哪里出了问题：**
V3 照搬了 `THEME[A]` / `SOUND[|]` / `GMT+8` / `X Y coords` 这套语言，但这些不指向 Liz 的任何能力。系统面板对 Liz 来说是"偷来的皮肤"，不是"长出来的骨骼"。Sound 按钮甚至没有任何实际功能——点了只是改文字 `Sound[|]` → `Sound[X]`，没有播放任何声音。

**为什么重要：**
benchmark 分析第 677 行说得清楚——"Haoqi 的警示：系统感必须服务身份"。形式不服务身份就是自嗨装饰。

**修复方向：**
系统面板的 microcopy 要映射 Liz 的身份。不是 `THEME[A]` 而是 `AGENT[ON]` 或 `BUILD[ACTIVE]`；不是假 Sound 按钮而是真实的 `WRITING[N篇]` 或 `LAST_SHIP[2026.06.30]`。每个控件要么指向真实数据，要么删掉。

### HIGH-2: WebGL 不是大气层而是壁纸

**haoqi 做对了什么：**
haoqi 的 WebGL 是 R3F + three.js + GSAP + Lenis 的完整 posture-processing 管线。从他自述可知，他逆向了 Microsoft AI 的光效、学习了 Maxime 的玻璃材质教程。shader 不是背景，而是交互的核心视觉——鼠标移动时光效会跟随变化，页面有真实的 depth 感。

**V3 哪里出了问题：**
V3 用了一个 5-layer FBM noise shader，alpha 固定在 0.06，鼠标只有一个 `smoothstep(0.4, 0.0, md)*0.15` 的微弱 glow。效果是一层几乎看不见的灰色雾气——既不是大气层也不是视觉锚点，更像是"页面上可以用 WebGL"的技术 demo。

**为什么重要：**
如果 WebGL 不能在第一秒让用户感受到"这个页面是活的"，它就是纯负重。haoqi 的 shader 首屏就以全 opacity 展示，V3 的 shader 要 1 秒延迟后 fade in，alpha 0.06 几乎不可见。

**修复方向：**
两条路：A）如果要做 WebGL 大气层，就把 alpha 拉到 0.12-0.15，增加色彩变化（haoqi 用的 `#c0fe04` accent 色在 shader 里有 subtle influence，V3 的 `accent*0.02` 几乎为零）；B）如果不需要重 WebGL，直接删掉整个 canvas 层，用 CSS gradient + noise pattern 替代，把性能省下来给内容加载。Liz 当前更缺内容骨架，不缺 3D 引擎。

### MEDIUM-1: 内容密度 — haoqi 9 个真实项目 vs V3 的 3 个占位符

**haoqi 做对了什么：**
haoqi 首页有 9 个真实项目：Reunimos™、Inspire Mono、Wasm design utils、VectorSymbols、DarkSide、aDrive、Teambition、FoF: See Hear Touch、FoF: Design System。每个都有真实名称和年份，链接到真实产品。虽然工作详情页"懒得做了"，但项目名称本身就是 proof。

**V3 哪里出了问题：**
V3 的 work cards 是 `01/02/03` + `Project Alpha` / `Inspire Mono` / `Wasm Utils`——前两个是假名字，第三个是直接抄 haoqi 的。卡片 visual 中心只有一个 42px 的编号字 `"01"` 透明度 0.15，没有截图、没有描述、没有链接。

**修复方向：**
用 Liz 的真实项目替换。Liz 有 BrainRush、pep-words、lead-radar、carver、pausey 等真实产品。每个 card 需要一句 sharp description + 真实链接。

### MEDIUM-2: 项目链接的真实性

**haoqi 做对了什么：**
每个 `<article>` 都是一个 `<a>` 链接，点击进入项目详情。即使"工作详情页懒得做了"，至少有项目名称的 hover 态和可点击反馈。

**V3 哪里出了问题：**
V3 的 work card 的 `<a>` 标签 `id="tiltPanel1"` 没有 href，不是真正的链接。3D tilt 效果是有的，但卡片不可点——纯装饰。

---

## 二、maximeheckel.com 的差距

### HIGH-3: 能力主题聚类完全缺失

**maxime 做对了什么：**
maxime 的作品不是按时间列，而是按能力主题组织：
- Shader light effects（4 个项目）
- Creative freedom with post-processing（6 个项目）
- The infinite possibilities of Raymarching（3 个项目）
- Whimsical interaction patterns（3 个项目）

每个 cluster 有标题 + 描述 + 项目网格。这是一个 craft compounding ledger——不是"我做过什么"而是"我在练什么能力"。

**V3 哪里出了问题：**
V3 的 work section 是一个 flat list，3 个卡片紧跟在一起，全部标签为 `Coding Project`。没有主题、没有分组、没有"我在练什么能力"的叙事。design brief 里写了 `AI agents` / `writing systems` / `tiny tools` / `product experiments` 四个 cluster，但一个都没实现。

**为什么重要：**
benchmark 分析第 687 行——"Maxime 最值得学的是把学习曲线变成作品集"。如果 Liz 的站只是列项目，就和 idoubi 的 dashboard 没有本质区别。能力聚类是让个人站从"简历"变成"craft archive"的关键。

**修复方向：**
把 work section 改成 3-4 个 capability cluster，每个有标题 + 1 句描述 + 2-3 个项目卡片：
- `AI Agent Systems` — BrainRush, lead-radar, carver
- `Writing & Content` — lizliz.xyz articles, liz-notes
- `Tiny Tools` — pep-words, pausey
- `Product Experiments` — 其他实验性项目

### HIGH-4: Writing section 有结构但无内容连接

**maxime 做对了什么：**
maxime 的 writing section 有 8+ 篇真实文章，每篇有标题、日期、"Read study" 或 "View" 的 action label。文章列表后面还有一个 "Learn, build," section 把写作和学习轨迹联系起来。blog 是他"最 proud of 的项目"。

**V3 哪里出了问题：**
V3 的 writing section 有 4 篇假文章（标题是编的），全是 `href="#"`。结构对了（date + title + arrow），但没有真实内容连接。

**为什么重要：**
benchmark 分析第 673 行——"Writing 不要 TBC；没有内容时，设计越花越像空壳"。Liz 的 lizliz.xyz 已经有真实文章了，应该直接接进来。

**修复方向：**
从 lizliz.xyz 的 `content/` 目录拉真实文章列表。V3 template 的渲染层改成可以接受一个 articles JSON 数组，里面是真实的 slug + title + date。writing row 的 `href` 指向 `/articles/{slug}`。

### MEDIUM-3: 传播基础设施缺失

**maxime 做对了什么：**
maxime 有完整的 OG/Twitter metadata、canonical URL、安全 headers（CSP、X-Frame-Options、HSTS）、自托管 font preload。

**V3 哪里出了问题：**
V3 有基本 OG tags 但没有真实的 OG image、没有 canonical、没有 Twitter handle。`og:title` 是模板名 "Liz Personal Site Template" 而不是个人站名。社交分享时不会生成卡片图。

**修复方向：**
在 template 定稿迁入 lizliz.xyz 时，需要把 metadata 接入 lizliz.xyz 的 `layout.tsx`，用真实的 OG image、canonical、Twitter handle `@lizliz404`。V3 template 本身不需要解决这个（它是设计迭代文件），但需要在迁移 checklist 中标注。

---

## 三、Vercel Geist 的差距

### HIGH-5: Motion 没有解释任何变化

**Geist 做对了什么：**
Geist 的 motion 原则：*"Use motion only when it clarifies a change, never for decoration."* 大多数交互应该感觉 instant（0ms）。当 motion 真正有帮助时，keep it short（150ms state changes, 200ms popovers, 300ms overlays）。

**V3 哪里出了问题：**
V3 的 motion 到处都是"装饰性"的：
- char reveal 用 0.8s 动画 + 随机 delay——每个字母独立 fade in，延迟 0.1-0.5s。首屏加载后用户要等所有 hero 文字逐字出现才能读完信息
- scroll reveal 用 0.8s transition——每次滚动到新 section，内容从 opacity:0 + translateY(30px) 慢慢漂入
- loading sequence 用假进度条（random tick 80-200ms），在最简单的情况下也要 2-3 秒才结束
- 3D tilt cards 用 `perspective(800px) rotateY(6deg) rotateX(-6deg)`——但没有内容，用户 tilt 之后看到的只是个空卡片

**为什么重要：**
这些动效在不延迟信息获取的前提下是好的调味。但 V3 的 char reveal 实际上**延迟了**信息获取——首屏 hero 的关键文字需要等所有字母逐个 fade in 才能读完。这与 Geist 的 "motion clarifies a change" 原则直接矛盾。

**修复方向：**
- char reveal 只用于装饰性大字（hero bottom 的 `I BRING / CRAFT & TASTE / TO DIGITAL WORK`），不用于信息性文字（hero-identity 的描述段落）
- scroll reveal 的 transition 从 0.8s 降到 0.4s
- loading sequence 如果没有真实资源需要加载，直接删掉——假进度条是 anti-pattern
- 3D tilt cards 在有真实内容（截图/描述）之前先禁用，避免空壳动效

### MEDIUM-4: 缺少 Focus visibility 和键盘导航

**Geist 做对了什么：**
Geist 要求每个交互元素在 `:focus-visible` 时显示两层 ring：`2px surface color gap + 2px blue-700 ring`。never remove an outline without a visible replacement。

**V3 哪里出了问题：**
V3 的 `.dot-hover` 有 `:focus-visible::before` 的 border 效果，但没有标准的 focus ring。system panel 按钮是 `<span>` 不是 `<button>`，没有 `tabindex`（themeBtn 有 `tabindex="0"` 但 soundBtn 没有）。键盘用户可以 Tab 到 brand link 但无法操作 theme/sound。

### MEDIUM-5: 排版无层次感

**Geist 做对了什么：**
Geist 有 8 级 heading（72px→14px）、5 级 label、6 级 copy、3 级 button，每级有精确的 lineHeight 和 letterSpacing。

**V3 哪里出了问题：**
V3 只有三个字号层级：hero-bottom 的 `clamp(3rem, 7.2svw, 6rem)`、section-heading 的相同值、其他全靠 inline style 手动调。没有 body text 的排版系统。如果 Liz 需要在 template 里展示一段较长的 project description，当前字号体系撑不住。

---

## 四、V3 自身的方向性问题

### HIGH-6: Liz 的身份定位与 template 形式不匹配

这是最根本的 gap。

- haoqi 是 **Design Engineer** → WebGL/motion/系统面板是能力证明 → 形式即内容
- maxime 是 **Creative Frontend Engineer** → shader/raymarching 作品集 → 形式即内容
- Liz 是 **AI Agent Builder / Writer / Tool Maker** → WebGL/motion 不是核心能力证明 → 形式 ≠ 内容

V3 目前是"把 haoqi 的皮肤贴在 Liz 身上"。但 Liz 需要的不是"我的页面也会做 WebGL"，而是"我的页面证明我能 build AI agents、write with clarity、ship tools"。

**这意味着什么：**
- 系统面板的 microcopy 应该映射 Liz 的工作方式（`LAST_BUILD` / `AGENT_STATUS` / `WRITING_PIPELINE`），而不是 haoqi 的设计工具语言
- work cards 的 visual 不应该是空 3D tilt 空间，而应该是项目截图/预览/数据可视化
- writing section 是 Liz 最有 proof 的地方，应该比 work section 更突出
- WebGL 如果保留，应该有 AI/agent 感的视觉主题（数据流、节点网络、agent 通信图），而不是单纯的 FBM 噪声

---

## 修复优先级

| 优先级 | Gap | 影响面 | 工作量 |
|---|---|---|---|
| **P0** | HIGH-6 身份定位不匹配 | 方向性问题，影响所有后续迭代 | 先定方向再动手 |
| **P0** | HIGH-3 能力主题聚类缺失 | 从"简历"变"craft archive"的关键 | 重组 work section 结构 |
| **P1** | HIGH-4 Writing 无真实内容连接 | Writing 是 Liz 最有 proof 的领域 | 接入 lizliz.xyz 真实文章 |
| **P1** | HIGH-1 系统面板是装饰不是功能 | 形式不服务身份 | 重设计 microcopy |
| **P1** | HIGH-5 Motion 延迟信息获取 | 首屏体验 | 调整动效范围 |
| **P2** | HIGH-2 WebGL 太弱 | 要么加强要么删掉 | 二选一 |
| **P2** | MEDIUM-1 内容是占位符 | 真实项目替换 | 等真实内容 |
| **P2** | MEDIUM-4 focus/键盘 | 无障碍 | 补 focus ring |
| **P3** | MEDIUM-2 项目链接不可点 | 真实内容时自然解决 | 随内容一起做 |
| **P3** | MEDIUM-3 传播基础设施 | 迁入 lizliz.xyz 时解决 | 迁移 checklist |
| **P3** | MEDIUM-5 排版层次不足 | 当有长文本时才暴露 | 按需补 |