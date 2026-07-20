# 个人网站设计基准分析：八个案例拆解

> 2026-05-04 | 为 lizliz.xyz 后续迭代建立参考坐标系

---

## 一图胜前言

```
设计天花板
  10 ┤                                    ◆ 李笑来 9.0
   9 ┤
   8 ┤              ◆ Peter 7.5
   7 ┤                          ◆ idoubi 7.5
   6 ┤                    ◆ Liz 6.5
   5 ┤
   4 ┤
   3 ┤                                            ◆ Sam 3.0
   2 ┤
   1 ┤
   0 ┼──────────────────────────────────────────────────────
      Blog         Dashboard    Editorial     Retro         Bare
      (Sam)        (idoubi)     (Peter)       (Liz)         (xiaolai)

个性/辨识度
  10 ┤                    ◆ Liz 9
   9 ┤                                    ◆ 李笑来 9
   8 ┤
   7 ┤              ◆ Peter 7
   6 ┤                          ◆ idoubi 6
   5 ┤
   4 ┤
   3 ┤                                            ◆ Sam 3
   2 ┤
   0 ┼──────────────────────────────────────────────────────
```

---

## 案例一：steipete.me（Peter Steinberger）

### 技术栈

| 项目 | 详情 |
|---|---|
| 框架 | **Astro v5.18.1** |
| CSS | **Tailwind CSS v4.2.4**（CSS-first 配置） |
| 字体 | Atkinson（自托管 woff，Regular + Bold） |
| 代码高亮 | Shiki（双主题：亮色/暗色各一套 token 色） |
| JS | 2个 Astro script（分析 + 主题切换） |
| HTML 大小 | 34KB |

### 设计系统

```
亮色模式
  --background: #fdfdfd
  --foreground: #282728
  --accent:     #006cac (沉稳蓝)
  --muted:      #e6e6e6
  --border:     #ece9e9

暗色模式
  --background: #212737 (深海蓝)
  --foreground: #eaedf3
  --accent:     #ff6b01 (🔥燃烧橙 —— 很有辨识度)
  --muted:      #343f60bf
  --border:     #ab4b08
```

- 字体：正文字体是等宽（Atkinson），少见但符合开发者身份
- 暗色模式切换有 **View Transition API** 动画（`::view-transition-old(root)` / `::view-transition-new(root)`）
- Active nav 用 wavy underline（`text-decoration-style: wavy`），有趣的小细节
- Prose 排版用 Tailwind Typography 插件，代码块有专用样式

### 人物画像

- **身份**：iOS/macOS（Swift）转 AI/Web 的独立开发者
- **价值观**：开源激进——CC BY 4.0 + MIT，"Steal this post ➜"
- **输出模式**：build-in-public，社交五链路全开（X + Bluesky + LinkedIn + GitHub + Email）
- **定位**："AI-powered tools from Swift roots to web frontiers"

### 设计评分：7.5/10

| 维度 | 分 | 说明 |
|---|---|---|
| 视觉冲击力 | 7 | 暗色模式橙色 accent 有辨识度，整体偏保守 |
| 排版/可读性 | 8 | Atkinson 等宽字体舒服，prose 排版规范 |
| 布局/空间 | 7 | 标准博客布局，max-w-3xl 居中，中规中矩 |
| 细节/打磨 | 8 | 双主题 Shiki、View Transition 动画、wavy underline |
| 个性/辨识度 | 7 | 干净职业，但缺少意外惊喜 |

**一句话**：做得很干净的开发者博客，但不会让你记住。

---

## 案例二：blog.samaltman.com（Sam Altman）

### 技术栈

| 项目 | 详情 |
|---|---|
| 平台 | **Posthaven**（托管博客平台，前 Posterous 团队作品） |
| CSS | 手写 CSS（normalize.css v2.1.2 打底），托管在 S3 |
| 字体 | 系统默认字体栈 |
| JS | 极少量（Posthaven 平台脚本） |
| HTML 大小 | 75KB（含 10 篇文章摘要） |

### 设计系统

- **没有设计系统**。h1 是浏览器默认 `font-size: 2em; margin: 0.67em 0`
- 无暗色模式、无动效、无响应式优化、无自定义字体
- 就是一个常规博客主题改了个墨绿色 header

### 人物画像

- **身份**：OpenAI CEO，但博客呈现的是一个被攻击后情绪化的个人
- **最新内容**：晒全家福对抗 Molotov cocktail 袭击，"I am awake in the middle of the night and pissed"
- **内容基调**：防御性个人声明 + AI 宏大愿景 + 偶尔技术思考
- **博客定位**：不是内容平台，是**公关应急出口**——当媒体叙事失控时直接对话

### 设计评分：3/10

| 维度 | 分 | 说明 |
|---|---|---|
| 视觉冲击力 | 2 | 没有设计意图，只是功能存在 |
| 排版/可读性 | 4 | 能读，但无排版可言 |
| 布局/空间 | 3 | 单栏，浏览器默认间距 |
| 细节/打磨 | 2 | 无 |
| 个性/辨识度 | 3 | 完全靠内容辨识，非设计 |

**一句话**：不是设计，是功能——能写字就行。对 Sam 来说够用了。

---

## 案例三：lizlizliz.xyz（Liz Tan，剑桥 PhD 学生）

### 技术栈

| 项目 | 详情 |
|---|---|
| 框架 | 静态 HTML/CSS/JS（疑似 Astro 构建后导出） |
| CSS | 纯手写 CSS（~200行，零框架） |
| 字体 | **VT323**（Google Fonts，像素等宽字体） |
| JS | 2个 script（主题 + 访问计数 `gc.zgo.at`） |
| HTML 大小 | **3KB**（五个站里最小） |

### 设计系统

```css
:root {
  --red:       #ff4444;
  --blue:      #4488ff;
  --lightblue: #88ccff;
  --darkred:   #cc2222;
  --bg:        #0a0a1a;
}
```

- 背景：星空 GIF + 深蓝底色
- 自定义光标：像素风箭头 SVG data URI
- 边框：dashed 红/蓝虚线
- 动画：blink 闪烁（`animation: blink 1s step-end infinite`）
- Visitor counter：`background: black; border: 2px inset #888`
- 字体渲染：`image-rendering: pixelated` 用于头像
- 装饰元素：`⊹₊˚‧︵‿₊୨ᰔ୧₊‿︵‧˚₊⊹` / `𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼`

### 人物画像

- **身份**：剑桥大学应用数学 PhD，ML 方向（符号回归 + 深度模型），新加坡人
- **内容**：学术（SymTorch）+ 个人兴趣（食谱、书单、剑桥推荐）
- **审美选择**：90s 个人主页复兴运动——不是"不会设计"，是**有意为之**

### 设计评分：6.5/10（风格加成）

| 维度 | 分 | 说明 |
|---|---|---|
| 视觉冲击力 | 7 | 像素美学 + 星空 GIF + 彩色 unicode，很抓眼 |
| 排版/可读性 | 5 | VT323 全站正文可读性一般 |
| 布局/空间 | 6 | 双栏 content+sidebar，基础但有效 |
| 细节/打磨 | 6 | blink 动画、自定义光标、pixelated 渲染 |
| 个性/辨识度 | **9** | 五个站里最有人味的设计 |

**一句话**：小但有个性——比一个大而无魂的模板站强十倍。

### 改进方向

1. **正文可读性**：VT323 做 display 字体（标题/装饰）很好，正文考虑搭配一个更可读的字体（如 IBM Plex Mono 或 JetBrains Mono，保留等宽基因）
2. **内容充实**：当前 Writing 写 TBC，Projects 只有一个，这是最大的短板——设计好但内容是空壳
3. **响应式加强**：移动端目前比较基础
4. **保持个性**：90s 复古美学不要丢，这是核心辨识度

---

## 案例四：lixiaolai.com（李笑来）

### 技术栈

| 项目 | 详情 |
|---|---|
| 框架 | **Next.js App Router**（RSC） |
| CSS | 5个独立 chunk + CSS Variables 设计体系（手写，非 Tailwind） |
| 字体 | Newsreader（衬线）+ Inter（无衬线）+ JetBrains Mono（等宽），全部 next/font 自托管 |
| 安全 | **nonce-based CSP**（硬编码到 HTML） |
| JS | 4个 webpack chunk |
| HTML 大小 | **182KB**（五个站里最大） |

### 设计系统 —— 工业级精细度

这是五个站里最值得深入研究的。

**字体系统**
- Newsreader（衬线）：标题、文章、卡片标题
- Inter（无衬线）：导航、标签、UI 文本
- JetBrains Mono（等宽）：代码、数字、meta 信息
- 三种字体分工明确，零外部请求，CLS=0

**CJK 排版系统**（五个站里唯一为中文优化的）
- `cjk-spacing` / `cjk-pangu`（盘古之白）：自动在中英文之间加间距
- 中文 emphasis：用下划线替代斜体（因为中文没有 italic 传统）
  ```css
  em { font-style: normal; text-decoration: underline; 
       text-decoration-style: wavy; text-decoration-color: var(--accent); }
  ```
- 中文书名号自动补全：`cite:before { content: "《" } cite:after { content: "》" }`

**Paper Grain 纹理**
- `body:before` 伪元素覆盖全页
- `radial-gradient` 模拟纸张颗粒
- `mix-blend-mode: multiply`（亮色）/ `screen`（暗色）
- 极其克制但效果显著——不仔细看不会发现，但去掉后会感觉"少了什么"

**交互细节**
- Sticky header：`backdrop-filter: blur(16px)` + 92% 透明度毛玻璃
- 移动端导航：完整 slide-in 动画 + backdrop overlay
- Activity sparkline：纯 CSS bar chart（不是图片，不是 canvas）
- Ampersand 徽标有 twinkle 动画（两个 path 交替闪烁）
- Theme toggle：icon 切换有 `scale` + `rotate` 过渡

**无障碍**
- `prefers-reduced-motion`：关闭所有动画
- `forced-colors: active`：高对比度模式适配
- Skip link：键盘导航跳转
- `@media print`：完整的打印样式表

**双语支持**
- 文章列表中/EN 标签：独立 CSS 类（`.zh` / `.en` / `.both`）
- `.both` 标签：左边"中"（accent 色）+ 右边"EN"（默认色），hover 时统一变色

### 人物画像

- **身份**：写作者/投资人/程序员，base 香港→北京→深圳→东京
- **内容系统**：极其工业化——
  - **Reading**：最近在读的文章
  - **Writing**：vmark.app / claudepot / lixiaolai.com
  - **Shipping**：今年已发 22 篇文章（the journal）
  - **Coding**：实时活跃度 sparkline（7天：15, 11, 11, 4, 2, 2, 0）
- **社区指标**：3个 metric 卡片（读者数/文章数/??）
- **定位**：不是博客，是**个人操作系统 dashboard**

### 设计评分：9/10

| 维度 | 分 | 说明 |
|---|---|---|
| 视觉冲击力 | 8 | Paper grain + 精密排版，低调但高级 |
| 排版/可读性 | **10** | CJK typography 系统是五个站里唯一的真排版 |
| 布局/空间 | 9 | Almanac 网格、chapter 分区、响应式三档 |
| 细节/打磨 | **10** | 打印样式、无障碍、减少动效、forced-colors |
| 个性/辨识度 | 9 | 工业级精度本身就成了个性 |

**一句话**：不是博客，是编辑出版级个人发布系统。细节量是其他四个站加起来的总和。

---

## 案例五：idoubi.ai（艾逗笔）

### 技术栈

| 项目 | 详情 |
|---|---|
| 框架 | **Next.js App Router**（重度 RSC） |
| CSS | **Tailwind CSS v4.1.13** + **shadcn/ui** 组件系统 |
| 字体 | Noto Sans Mono（variable）+ Merriweather，next/font 自托管 |
| 组件库 | Radix UI（shadcn/ui 底层）、Lucide Icons（28处引用） |
| 图表 | Recharts |
| 命令面板 | cmdk |
| HTML 大小 | 140KB（几乎全是 CSS + JS，文本内容极少） |

### 设计系统 —— shadcn/ui 标准范式

- 完整的 shadcn/ui design tokens：
  ```css
  --primary:     oklch(76.86% .1647 70.08)  /* 暖琥珀色 */
  --background:  oklch(100% 0 0) / oklch(20.46% 0 0)
  --foreground:  oklch(26.86% 0 0) / oklch(92.19% 0 0)
  --muted:       oklch(98.46% .0017 247.84) / oklch(23.93% 0 0)
  --border:      oklch(92.76% .0058 264.53) / oklch(37.15% 0 0)
  --ring:        oklch(76.86% .1647 70.08)
  ```
- 完整的亮色/暗色双主题
- shadcn/ui 全套组件：Navigation Menu, Select, Dropdown Menu, Card, Sidebar, Chart
- 自定义动画：`@keyframes grid`, `ripple`, `meteor`, `marquee`
- 容器使用 `max-w-7xl`（80rem），比标准内容站宽

### 人物画像

- **身份**：艾逗笔（idoubi），独立开发者、全栈工程师
- **背景**：2015 年武大核工程毕业 → 自学编程 → 腾讯五年后台开发（支付系统）→ 2023.10 裸辞 → all in AI 应用出海
- **产品矩阵**（6个项目）：
  - shipany.ai / workany.ai / thinkany.ai / mcp.so / copyweb.ai / podlm.ai
- **定位**：serial indie maker——不是写作者，是**产品工厂**

### 设计评分：7.5/10

| 维度 | 分 | 说明 |
|---|---|---|
| 视觉冲击力 | 7 | shadcn/ui 标准质感，干净但不出格 |
| 排版/可读性 | 8 | Merriweather + Noto Sans Mono 搭配合理 |
| 布局/空间 | 8 | Dashboard 式布局，信息密度适中 |
| 细节/打磨 | 8 | 暗色模式、command palette、recharts、动画 |
| 个性/辨识度 | 6 | 非常 "shadcn/ui 模板"，个性来自内容非设计 |

**一句话**：用最标准的工具做了最实用的站——产品人的思维。

**值得注意**：shadcn/ui 正在成为新的 "Bootstrap"——好用、好看、但越来越难区分。当每个独立开发者的站都长一样时，辨识度就成了问题。

---

## 案例六：mmguo.dev（mm guo）

### 技术栈

| 项目 | 详情 |
|---|---|
| 框架 | **纯手写 HTML，零构建步骤**。无 SSG、无 MD 渲染器、无 JS 框架 |
| CSS | 手写 `page-base.css`（468行），全站共享。CSS Variables 做设计 token |
| 字体 | IBM Plex Mono（UI/meta/标题） + Lora（正文衬线），Google Fonts 加载 |
| JS | 极少——语言切换 toggle + `inline-prompt.js`（复制按钮） |
| 内容格式 | **手写 HTML**，非 MD。每篇文章是独立 HTML 文件，双语内容在同一文件内 |
| 亮点 | `.ylw` 荧光笔高亮（linear-gradient）、`.hl` 加粗强调、`blockquote::before` 装饰引号、AI-readable summary（`visually-hidden`） |

### 设计系统

- 背景：暖白/米白，降低屏幕刺眼感
- 文本：深灰而非纯黑，整体低对比、安静
- 字体：小字号 monospace，全站像一个精致的 research notebook
- 版心：窄内容列，约 700px，靠大量 negative space 建立气质
- 顶部：一个小 announcement pill + 右侧语言切换
- 中央视觉：几乎透明的圆形粒子/星云/记忆图谱，像 generative artwork，也像 AI memory map
- 分区：`01 PROJECTS` 这种编号 section + 横线，带一点 archive / lab catalog 味道

### 人物画像

- **身份**：AI product interaction designer / prompt craft 方向的 builder，base Beijing
- **定位**：不是传统 portfolio，而是**AI interface / prompt / writing lab**
- **内容主线**：AI 产品交互、新体验、prompt、实验、写作
- **当前项目**：
  - Claudio x mmguo FM：private AI DJ，公开 demo + spec
  - Dr. Sharp：honesty over kindness 的 life coach prompt
  - Hamming / Shannon / Yudkowsky / Ilya：偏 meta-learning、重要问题、创造力、LLM taste 的阅读与重构

### 设计评分：8/10

| 维度 | 分 | 说明 |
|---|---|---|
| 视觉冲击力 | 7 | 不靠大图大字，而靠极淡生成式视觉建立记忆点 |
| 排版/可读性 | 8 | 小字号 monospace 有风格，长文场景可能偏吃力，但首页很成立 |
| 布局/空间 | 9 | 留白非常狠，节奏慢而稳，像个人实验室而非模板站 |
| 细节/打磨 | 8 | announcement pill、语言切换、编号 section、中央粒子视觉都克制有效 |
| 个性/辨识度 | 8 | 安静、技术、诗性、AI lab 气质明确 |

**一句话**：不是“展示我很厉害”的 portfolio，而是“这里有一个人在持续做实验”的个人实验室。

### 对 lizliz.xyz 的可借鉴点

1. **首页要有一个"记忆锚点"**：mmguo.dev 的淡粒子圆很轻，但它让页面从普通 bio 变成"有气场的场"。lizliz.xyz 不必照抄粒子，但可以有一个自己的首页核心视觉：像素星图、写作/项目轨道、content constellation，都行。
2. **不要把所有信息摊开**：mmguo.dev 的克制很强。它没有急着解释所有东西，而是让 projects/writings 自己说话。lizliz.xyz 可以少一点导航解释，多一点精选入口。
3. **个人站可以像 lab，不必像 resume**：这点很重要。Liz 的优势不是"职位列表"，而是持续生产的内容、工具、判断和审美。网站应该呈现 ongoing experiments，而不是静态简历。
4. **中英双语入口要轻**：一个小 language switch 就够了，不需要把双语做成很重的系统感。
5. **风格要服务内容气质**：mmguo.dev 的 quiet monospace 适合 AI interaction / prompt craft；lizliz.xyz 的复古像素也成立，但需要更强的内容结构托住，否则容易变成只有皮肤没有骨架。

### 深度复盘：文章渲染方案（2026-05-08 硬拉 HTML/CSS 后修正）

> 本次对 mmguo.dev 的文章页 `https://mmguo.dev/writings/ai-native-multithreaded/` 做了完整 HTML/CSS/JS 抓取分析。注意：这里能确认的是**线上产物是手写式静态 HTML 结构**；无法从公开产物反推出作者源文件一定不是 Markdown。之前把“线上 HTML”直接等同于“作者手写源 HTML”，这个判断过硬，已修正。

#### 核心发现：线上产物不是通用 MD renderer 的默认皮肤，而是高度定制的文章 HTML/CSS

mmguo.dev 的文章页没有暴露 React/Next/MDX/Markdown 渲染器痕迹。页面是静态 HTML，加载两份共享资源：

```html
<link rel="stylesheet" href="../../shared/page-base.css">
<script src="/shared/inline-prompt.js"></script>
```

文章主体是结构化 HTML：

```html
<div id="article-zh" class="article">
  <div class="article-section">
    <p>正文……<strong><span class="ylw">AI让我更累了</span></strong>……</p>
  </div>
  <div class="article-section">
    <div class="article-section-title">你的工作变成了context工程</div>
    <p>正文……<span class="hl"><strong>context工程</strong></span>……</p>
  </div>
</div>
<div id="article-en" class="article hidden">...</div>
```

关键不是“有没有 MD”，而是：**最终渲染没有停在 Markdown 默认 HTML 上，而是人为定义了文章语义层**：`article-section`、`article-section-title`、`ylw`、`hl`、`ai-summary`、双语区块。它可能源自手写 HTML，也可能源自私有脚本/模板；公开页面只能确认最终产物是这套定制结构。

分析要点：

| 维度 | mmguo.dev | lizliz.xyz 当前 |
|---|---|---|
| **线上产物** | 静态 HTML + 共享 CSS/JS，无公开构建痕迹 | Next.js static export |
| **内容源格式** | 公开页面无法确认；最终 HTML 是定制结构 | Markdown → `gray-matter` → `react-markdown` |
| **语法高亮** | 无（该文章无代码块） | 基础 `<pre><code>` 样式，无 Shiki/Prism |
| **脚注（footnotes）** | 该文章无脚注引用 | `remark-gfm` 生成 footnotes + backref |
| **双语方案** | 同一 HTML 内 `article-zh` / `article-en`，JS toggle `hidden` | Next.js i18n context + `useT()` hook |
| **CSS 管理** | 单一共享 `page-base.css`，CSS variables + 文章语义 class | Tailwind v4 + `globals.css` + `.prose-custom` |
| **字体策略** | IBM Plex Mono（UI/meta/标题） + Lora（正文 serif） | Poppins（标题/sans） + Lora（正文 serif） |
| **亮点细节** | `.ylw` 荧光笔、`.hl` 强调、section title、AI-readable summary、inline prompt copy | InkRipple、TopBar accent、pixel animation、custom prose heading/footnotes/table/blockquote |

#### 我对方针的判断（兼回 Liz 的三个问题）

**Q1: "他会不会也是直接把现成轮子拿来？"**

公开页面看不出他用了现成 MD renderer。更准确地说：**即便源文件是 Markdown，他也没有满足于默认渲染**。最终页面明显有一层自己的文章语义和 CSS：`article-section-title`、`.ylw`、`.hl`、`ai-summary`。这才是 mmguo 文章页有味道的关键。

但 Liz 不应该照搬“手写 HTML 工作流”：
- Liz 写 MD 是高效路径，改回手写 HTML 是倒退
- MD 可移植，方便 AI pipeline、Substack/其他平台复用
- 我们要学的是“定制渲染层”，不是学“人工写标签”

**Q2: "Github已经有太多方案了吧，即便是在Next.js里，是吗？"**

是的，Next.js 生态里 MD 渲染方案多到过剩：

| 方案 | 特点 | 适合 |
|---|---|---|
| `react-markdown` | React 组件式渲染，可自定义 `components` / `remarkPlugins` | **我们当前路线：轻、可控、Server Component 友好** |
| `next-mdx-remote` | 服务端 MDX 编译，支持自定义组件 | 文章里需要嵌入 React 组件 |
| `contentlayer` / `velite` | 类型安全 content layer，自动生成 TS 类型 | 内容规模大、需要复杂查询 |
| `markdown-it` + 插件 | 字符串 → HTML，插件生态成熟 | 轻量但会回到 `dangerouslySetInnerHTML` |
| `unified` + `remark` + `rehype` | AST 级处理管道，最灵活 | 需要自定义 AST 转换 |
| `MDX` | 在 MD 里直接写 JSX | 交互式文章 |
| 手写 HTML | 100% 控制 | 小规模、低频、愿意人工维护标签 |

当前选择 `react-markdown` 是合理的折中：比手写 HTML 干净，比 MDX 轻，比 `markdown-it` 更适合 React/Next 的组件树。

**Q3: "你觉得我们当前的渲染如何？"**

迁到 `react-markdown + remark-gfm` 并改完 `.prose-custom` 后，当前是 **7.2/10**：不再只是“中规中矩”，已经有一点自己的纸面气质，但还没到 mmguo 那种“每篇文章都有语义雕刻”的程度。

具体来说：
- **段落/标题/列表/链接/引用块**：✅ 已经统一到 warm paper + burnt orange 的 Liz 风格
- **GFM 表格**：✅ `remark-gfm` 支持，CSS 已补 table 样式
- **脚注**：✅ `remark-gfm` 生成 footnotes + backref，底部 notes 区已做样式
- **代码块**：⚠️ 有视觉样式，但无语法高亮；未来可上 Shiki
- **内联高亮**：⚠️ CSS 支持 `<mark>`，但 Markdown 还没有 `==highlight==` 自动转换；需要 remark plugin 才顺手
- **自定义语义块**：⚠️ 还没有 mmguo 的 `article-section` / prompt block 那类专用结构

#### 推荐的改进方向（优先级排序）

1. **保留 MD，强化渲染层**：继续用 `react-markdown`，通过 `components` prop 把 `h2`、`blockquote`、`a`、`code`、`table` 定制成 Liz 风格。不要回到手写 HTML，那个方向有点脱裤子放屁。

2. **补一个轻量 remark 插件**：支持 `==highlight==` → `<mark>`，以及未来的 `:::note` / `:::warning` callout。这样能获得 mmguo 那种“文章内强调语义”，但不牺牲 MD 写作效率。

3. **语法高亮**：如果技术文开始变多，上 Shiki；如果只是偶尔贴代码，先别急。

4. **不要做的事**：不要上 MDX/contentlayer/velite 这种重东西。现在问题不是缺系统，是缺几处准确的文章语义和 CSS 味道。

---

## 案例七：haoqi.design（Haoqi Wen）

### 技术栈

| 项目 | 详情 |
|---|---|
| 框架 | **Next.js App Router / RSC 形态**（HTML 内 `self.__next_f`，headers 有 `x-powered-by: Next.js`） |
| 部署 | **Vercel**（`server: Vercel`，`x-vercel-cache: MISS`） |
| 构建信号 | **Turbopack / Next static chunks**（`turbopack-*.js`，13 个脚本 chunk） |
| CSS | Tailwind v4 产物 + 自定义 design tokens（`--font-sans`, `--font-mono`, `--color-l1/l2/l3`, `--background-*`） |
| 字体 | `tiktok` sans + `mono` + `tronica-mono`（从 CSS 变量可见） |
| 交互/图形 | JS chunk 明确命中 `three` / `shader` / `canvas` / `webgl` / `gsap` / `lenis` / `r3f` |
| HTML 大小 | curl 压缩下载 **6.8KB**，解压 HTML **31.8KB**；但 JS assets 很重，不能把 HTML size 等同于真实首屏成本 |

### 设计系统

- 首页文案非常少，但结构很硬：`Design & Engineering` / `Thinking in systems. Designing with care.` / `craft & taste to digital work`
- Header 是工具面板式：`THEME[A]`、`SOUND[|]`、GMT+8、坐标 `X/Y`，不是传统 navbar
- 有全屏 canvas / loading progress / pointer overlay，页面更像 interactive artifact，而不是静态 portfolio
- Tailwind utility 很重，但不是 shadcn/ui 那种组件模板感；它更像 designer 自己写的 motion/interaction playground
- CSS 有 `mix-blend-difference` / `mix-blend-exclusion`、`backdrop-filter`、`radial-gradient`、多个 `@keyframes`
- `prefers-reduced-motion` 存在，说明动效不是完全野路子
- 用户实测感受：Haoqi 明显比 Maxime 轻，但初次加载仍至少 3 秒以上；两者交互体感差距没有 payload 差距那么大

### 作者自述线索

> 用户提供的作者 tweet 摘录：新的个人网站断断续续开发 2–3 个月，使用 AI 参考逆向 `@MicrosoftAI` 的光效，学习了 `@MaximeHeckel` 的玻璃材质教程，学习和逆向了数个 WebGL 自定义后处理效果；工作详情页懒得做了。

这个摘录很关键：Haoqi 不是“天然轻量版 Maxime”，而是明确站在 Maxime / Microsoft AI 光效 / WebGL post-processing 这条视觉工程链路上做再组合。差异不在方向，而在取舍：Haoqi 把证明点压缩到首页体验，Maxime 把证明点铺成完整 craft archive。

### 人物画像

- **身份**：Digital Product Designer & Builder；公开文案写的是 “leading Design Engineering and AI exploration”
- **定位**：设计工程 + AI workflow + tool-building，核心词是 `craft & taste`
- **项目线索**：Reunimos™、Inspire Mono、Wasm design utils、VectorSymbols、DarkSide、aDrive、Teambition
- **网站定位**：不是博客，也不是 resume，是一个用交互本身证明设计工程能力的 maker homepage

### 设计评分：8.5/10

| 维度 | 分 | 说明 |
|---|---|---|
| 视觉冲击力 | 9 | 全屏 canvas、坐标、声音/主题面板、超大 typography，记忆点强 |
| 排版/可读性 | 7 | 首页短文案成立；如果承载长文，当前风格会偏吃力 |
| 布局/空间 | 8 | 12 栅格 + 大量留白 + 工具面板式信息，节奏明确 |
| 细节/打磨 | 9 | R3F/WebGL/GSAP/Lenis 信号齐全，motion system 下了重工 |
| 个性/辨识度 | 9 | “设计工程师本人就是交互系统”这个定位很清楚 |

**一句话**：这是一个把个人站做成 realtime design-engineering demo 的案例；很猛，但也很重。

### 对 lizliz.xyz 的可借鉴点

1. **首页可以有系统感，但别为炫技牺牲内容**：Haoqi 的动效服务于“design engineering”身份；Liz 如果做像素星图/轨道，也必须服务写作和项目入口，不是为了酷。
2. **工具面板式 microcopy 很值得偷**：`THEME` / `SOUND` / 时间 / 坐标这种 UI 语言，比普通 `Home/About/Contact` 更有世界观。
3. **不要照搬重 WebGL 路线**：它适合 designer-builder，不一定适合内容/作品 hub。Liz 当前更缺内容骨架，不缺 3D 引擎。这个坑很香，也很容易吞人。

---

## 案例八：maximeheckel.com（Maxime Heckel）

### 技术栈

| 项目 | 详情 |
|---|---|
| 框架 | **Next.js Pages Router**（`__NEXT_DATA__`、`pages/index-*.js`、`data-next-head`） |
| 部署 | **Vercel**（`server: Vercel`，`x-vercel-cache: HIT`） |
| CSS | 运行时 CSS-in-JS / Stitches 风格信号（HTML 内大量 `sxs:*`、token class），另有 1.5KB 全局 CSS chunk |
| 字体 | Inter variable + iA Writer Quattro V / Fira Code / Space Grotesk 风格 token；字体文件自托管 preload |
| 交互/图形 | `framer-motion` + `three` + `shader` + `webgl` + `matter` + `r3f` |
| 安全头 | CSP、`x-frame-options: DENY`、`x-content-type-options: nosniff`、`permissions-policy`、HSTS |
| HTML 大小 | curl 压缩下载 **32KB**，解压 HTML **242KB** |

### 设计系统

- 页面主轴非常明确：`The online home of Maxime's work` → About → shader/light/post-processing/raymarching/interaction projects
- 首页把“作品”和“学习轨迹”合在一起，不是单纯展示项目，而是展示 craft 如何被练出来
- 色彩系统从 HTML token 可见：`maximeheckel-light`、大量 `oklch` 灰/蓝/绿/红/橙 token
- `#main-canvas` 有 fade-in，首页核心视觉显然是 canvas/WebGL 驱动
- 项目条目是强主题聚类：Shader light effects、Creative freedom with post-processing、Raymarching、Whimsical interaction patterns
- OG/Twitter metadata 完整，外部传播面比很多个人站更认真

### 人物画像

- **身份**：New York based frontend engineer
- **长期线索**：过去十年为 startups 做 fast/delightful UX，近年重点转向 3D、WebGL、shaders
- **输出模式**：把学习过程产品化/教学化：interactive experiences、playgrounds、blog posts、case studies
- **网站定位**：creative frontend engineer 的 craft archive，核心资产不是职位，而是“我能把 math/art/code 做成可交互体验”

### 设计评分：8.5/10

| 维度 | 分 | 说明 |
|---|---|---|
| 视觉冲击力 | 9 | WebGL/canvas 是首页主角，且主题和个人能力高度一致 |
| 排版/可读性 | 8 | Inter + mono 体系成熟，长文/技术文章支撑力强 |
| 布局/空间 | 8 | About、Work、Contact 结构传统，但作品聚类让它不俗 |
| 细节/打磨 | 9 | metadata、安全头、字体 preload、motion/WebGL 工程都很完整 |
| 个性/辨识度 | 8 | creative coding 气质强，但同类 top-tier frontend portfolio 里不算完全独一档 |

**一句话**：这是“前端工程师把学习曲线变成作品集”的标杆；不是简历站，是 craft compounding ledger。

### 对 lizliz.xyz 的可借鉴点

1. **把学习过程变成可浏览资产**：Maxime 不是只列项目，而是按能力主题组织：shader、post-processing、raymarching、interaction。Liz 也可以按 `AI agents` / `writing systems` / `tiny tools` / `product experiments` 聚类。
2. **作品页要证明 taste 的成长**：每个项目不只是链接，而要说明问题、约束、实验、结果。这样个人站才有“复利账本”感。
3. **传播基础设施别偷懒**：OG image、Twitter card、canonical、安全头这些不是性感设计，但会影响作品被分享时是否像正经资产。

---

## 横向对比总结

### 新增样本的共同判断

Haoqi 和 Maxime 都不是传统意义上的“写作者个人站”或“简历站”，而是**视觉设计型工程师的能力展示场**。两者都把 WebGL / shader / post-processing / motion 当作核心表达材料。

差异在于：
- **Haoqi 更轻、更压缩**：把 2–3 个月的学习、AI 辅助逆向、Microsoft AI 光效参考、Maxime 玻璃材质教程、WebGL 后处理实验，集中压进一个首页体验；工作详情页反而被作者自己说“懒得做了”。
- **Maxime 更重、更体系化**：页面 payload 更大、首屏更重，但它把 shader / raymarching / post-processing / interaction patterns 做成长期 archive。
- **交互体感差距小于工程体量差距**：这很关键。用户感受到的不是 bundle size，而是首屏等待 + 进入后的反馈密度。两者初次加载都可能 3 秒以上，因此“轻量”只能相对成立，不能当作真实性能结论。

### 技术栈一览

| | steipete.me | blog.samaltman.com | lizlizliz.xyz | lixiaolai.com | idoubi.ai | mmguo.dev | haoqi.design | maximeheckel.com |
|---|---|---|---|---|---|---|---|---|
| **框架** | Astro 5.18 | Posthaven | 静态 HTML | Next.js App Router | Next.js App Router | 静态 HTML 产物（无公开构建痕迹） | Next.js App Router / RSC | Next.js Pages Router |
| **CSS** | Tailwind 4.2 | 手写 | 手写 200行 | 手写设计体系 | Tailwind 4.1 + shadcn/ui | 手写 page-base.css (~9.8KB) | Tailwind v4 产物 + 自定义 tokens | CSS-in-JS token + 轻全局 CSS |
| **字体** | Atkinson | 系统默认 | VT323 | Newsreader+Inter+JetBrains | Noto Sans Mono+Merriweather | IBM Plex Mono + Lora | tiktok + mono + tronica-mono | Inter + iA Writer Quattro V |
| **HTML/首屏成本** | 34KB | 75KB | **3KB** | 182KB | 140KB | ~19KB（双语文章页） | HTML 31.8KB，但 JS/WebGL 首屏不轻 | HTML 242KB，首屏明显更重 |
| **暗色模式** | ✅ | ❌ | ❌ (始终暗) | ✅ | ✅ | ❌（亮色极简） | ✅（THEME 控件） | 未从 curl 静态证据确认 |
| **无障碍** | 基础 | ❌ | ❌ | ✅ 全套 | 基础 | AI-readable summary | `prefers-reduced-motion` | 安全/权限头完整，视觉无障碍未深测 |
| **CJK优化** | ❌ | ❌ | ❌ | ✅ 专业 | ❌ | 中英双语文档内切换，无 CJK 排版专项 | ❌ | ❌ |

### 设计评分汇总

| 维度 | Peter | Sam | **Liz** | 李笑来 | idoubi | mmguo | Haoqi | Maxime |
|---|---|---|---|---|---|---|---|---|
| 视觉冲击力 | 7 | 2 | 7 | 8 | 7 | 7 | **9** | **9** |
| 排版/可读性 | 8 | 4 | 5 | **10** | 8 | 8 | 7 | 8 |
| 布局/空间 | 7 | 3 | 6 | 9 | 8 | **9** | 8 | 8 |
| 细节/打磨 | 8 | 2 | 6 | **10** | 8 | 8 | 9 | 9 |
| 个性/辨识度 | 7 | 3 | **9** | 9 | 6 | 8 | **9** | 8 |
| **总分** | **7.5** | **3.0** | **6.5** | **9.0** | **7.5** | **8.0** | **8.5** | **8.5** |

### 人物画像对照

| | 身份 | 核心驱动力 | 网站定位 |
|---|---|---|---|
| Peter | iOS→AI 独立开发者 | 开源/分享 | 技术博客+作品集 |
| Sam | OpenAI CEO | 影响力/公关 | 应急出口 |
| **Liz** | ML PhD 学生 | 学术+个人表达 | 个人主页 |
| 李笑来 | 写作者/投资人/程序员 | 系统化输出 | 个人操作系统 |
| idoubi | 独立产品人 | 产品矩阵 | 作品集+Dashboard |
| mmguo | AI 产品交互 / prompt craft builder | 实验/品味/AI interface | 个人实验室 |
| Haoqi | 视觉设计型 Design Engineer / AI workflow builder | craft + taste + systems | 交互式 design-engineering demo |
| Maxime | 视觉设计型 Creative frontend engineer | 3D/WebGL/shader craft compounding | 作品集 + 学习轨迹 archive |

---

## 对 lizliz.xyz 的启示

### 1. 你的优势是别人没有的

lizliz.xyz 的 9 分个性辨识度是所有站里最高的（和李笑来并列）。90s 像素复古 + unicode 装饰 + 自定义光标 + blink 动画——这是一个**有态度的设计选择**，不是能力不足的结果。**不要丢掉它**。

### 2. 你需要补的短板

- **排版**（5分）：VT323 全站正文太累了。考虑双字体策略——VT323 做标题/装饰，正文换 JetBrains Mono 或 IBM Plex Mono（保留等宽基因，但可读性翻倍）
- **内容**（当前最大问题）：Writing TBC，Projects 只有一个。设计再好的空壳也没意义
- **响应式**：移动端目前比较基础

### 3. 李笑来是天花板，不是模仿对象

李笑来的 9 分是靠工业级投入堆出来的：CJK typography、paper grain、无障碍、打印样式、sparkline。这些不适合现阶段直接模仿。

但他的**思维模式**值得学：
- 把个人网站当**系统**而非**页面**来设计
- 内容更新不是"偶尔写一篇"，而是**流水线**（Reading/Writing/Shipping/Coding 四维追踪）
- 设计服务于内容系统，而非反过来

### 4. idoubi 的警示

shadcn/ui 正在成为新一代 Bootstrap——当每个 dev 的站都长一样，辨识度归零。**不要走这条路**。

### 5. Peter 的 Astro 方案值得考虑

Astro v5 + Tailwind v4 是目前做内容站的最优解：
- 比纯静态灵活（可以用组件）
- 比 Next.js 轻（0 JS by default）
- Tailwind v4 的 CSS-first 配置比 v3 的 JS config 更干净

如果 lizliz.xyz 下一个版本需要框架化，Astro 是第一候选。

### 6. mmguo 的启发：做成 lab，而不是 resume

mmguo.dev 最值得偷的不是视觉样式，而是**克制的信息架构**：一句定位、少量精选项目、一个轻视觉锚点、编号 section，然后让作品自己说话。

这对 lizliz.xyz 的启发很直接：
- 首页应该有一个属于 Liz 的“场”——像素星图 / writing constellation / project orbit，而不是普通 hero 区
- Projects 不要列清单，要像实验入口：每个项目一句 sharp description + 一个可点击成果
- Writing 不要 TBC；没有内容时，设计越花越像空壳，尴尬值会加倍
- 双语不要做重，轻入口即可；重点是内容结构，不是语言系统炫技
- 保留复古像素个性，但用更清楚的内容骨架把它托住

### 7. Haoqi 的警示：系统感必须服务身份

haoqi.design 很强，但强在“形式就是能力证明”：他是 Design Engineer，所以 WebGL、坐标、声音、主题、motion 都是在证明设计工程能力。

Liz 可以偷的是**界面语言**，不是重技术栈：
- `THEME` / `SOUND` / 时间 / 坐标这种 microcopy 可以转化为 Liz 自己的像素终端/星图语言
- 首页可以有一个轻量“系统面板”，但它必须指向 Writing / Projects / Experiments，而不是变成自嗨特效
- 当前阶段不要上重 WebGL。内容骨架没补好之前，3D 动效就是昂贵烟雾弹

### 8. Maxime 的启发：按能力主题组织作品

maximeheckel.com 最值得学的是把学习曲线变成作品集。他不是简单列 `projects`，而是按 shader、post-processing、raymarching、interaction 这些能力主题组织。

Liz 的站也可以这么做：
- 不要只分 `Writing / Projects / About`，可以增加更有判断力的主题聚类：`AI agents`、`writing systems`、`tiny tools`、`product experiments`
- 每个项目要说明它证明了什么能力：研究、产品判断、工程实现、审美、发行、复盘
- OG card、canonical、分享图、安全 headers 这类外部传播基础设施要补；作品被转发时必须像一个正经资产

---

## 附录：关键设计细节速查

### 字体搭配公式

```
最佳实践 = 衬线(标题) + 无衬线(正文) + 等宽(代码/meta)

李笑来: Newsreader + Inter + JetBrains Mono
idoubi:  Merriweather + ? + Noto Sans Mono
Peter:   全站等宽 Atkinson（开发者身份强化）
Liz:     全站像素 VT323（复古个性强化）
```

### 设计系统最小可行方案

```css
:root {
  --bg:       #fff;
  --fg:       #1a1a1a;
  --accent:   #0066cc;
  --muted:    #f5f5f5;
  --border:   #e5e5e5;
  --font-display: 'Your Display Font';
  --font-body:    'Your Body Font';
  --font-mono:    'Your Mono Font';
}

/* 五个变量就可以启动一个设计系统。
   李笑来有 80+ 个变量，但那是工业级需求。 */
```
