---
source: /home/ubuntu/notes/2026-05-04-personal-website-design-benchmark.md
extracted: cases 7-8 plus cross-comparison
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
