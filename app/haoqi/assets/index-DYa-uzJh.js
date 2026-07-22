(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const c={role:["Design &","Engineering"],tagline:["Thinking in systems.","Designing with care."],bioBefore:"I'm Haoqi Wen, leading Design Engineering and AI exploration at",bioRedact:6,bioAfter:", engineering, and AI at scale. Outside work, I build design tools for team efficiency.",display:["I FOLD","CRAFT INTO CODE","FOR DIGITAL WORK"]},o={lead:"I explore how to shape AI-era workflows with craft and taste, building the next generation of digital products.",subBefore:"I'm building ",links:[{label:"reunimos™",href:"#selected-work"},{label:"aDrive",href:"#selected-work"},{label:"Teambition",href:"#selected-work"}],subMid:", and previously worked on Alibaba ",subEnd:", and 100offer."},$=["BUILD","WITH","INTENT"],u={display:["LET'S","MAKE","SOMETHING","WORTH KEEPING"],email:"curiosity.wen@gmail.com",socials:[{label:"TWITTER/X",href:"https://x.com"},{label:"FIGMA",href:"https://figma.com"},{label:"GITHUB",href:"https://github.com"}],copyright:"HAOQI (C) 2026"},O=[{id:"reunimos",title:"REUNIMOS™",year:"2024-2026",kind:"CODING PROJECT",span:"featured",mock:"board"},{id:"inspire",title:"INSPIRE MONO",year:"2025",kind:"CODING PROJECT",span:"half",mock:"clock"},{id:"wasm",title:"WASM DESIGN UTILS",year:"2025",kind:"CODING PROJECT",span:"half",mock:"icons"},{id:"vectors",title:"VECTORSYMBOLS",year:"2023",kind:"CODING PROJECT",badge:"TOOLS",external:!0,span:"third",mock:"symbols"},{id:"darkside",title:"DARKSIDE",year:"2021",kind:"CODING PROJECT",badge:"TOOLS",external:!0,span:"third",mock:"dark"},{id:"adrive",title:"ADRIVE 阿里云盘",year:"2020-2022",span:"third-tall",mock:"drive"},{id:"shore",title:"SHORE ICON",year:"2022",span:"third",mock:"icons"},{id:"teambition",title:"TEAMBITION",year:"2018-2020",span:"third",mock:"board"},{id:"fof-sht",title:"FOF: SEE HEAR TOUCH",year:"2022",badge:"EVENT",external:!0,span:"third",mock:"event"},{id:"fof-ds",title:"FOF: DESIGN SYSTEM",year:"2021",badge:"EVENT",external:!0,span:"third",mock:"event"}],h=["|","/","-","\\"];function T(t){let e=0,r="A";t.innerHTML=`
    <div class="hud-top">
      <a class="brand" href="#top">HAOQI.DESIGN</a>
      <nav class="hud-nav" aria-label="Primary">
        <a href="#selected-work">WORK</a>
        <a href="#contact">CONTACT</a>
        <button type="button" data-theme aria-label="Toggle theme">THEME[<span data-theme-val>A</span>]</button>
        <button type="button" data-sound aria-label="Toggle sound">SOUND[<span data-sound-val>|</span>]</button>
      </nav>
    </div>
    <div class="hud-bottom">
      <div class="hud-meta-left" data-clock>GMT+8 CN --:-- --°C</div>
      <div class="hud-meta-mid" data-xy>0000 X 0000 Y</div>
      <div class="hud-meta-right">
        <svg class="globe" viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1">
          <circle cx="16" cy="16" r="11"/>
          <ellipse cx="16" cy="16" rx="5" ry="11"/>
          <path d="M5 16h22M7.5 10.5h17M7.5 21.5h17"/>
        </svg>
      </div>
    </div>
  `;const n=t.querySelector("[data-clock]"),a=t.querySelector("[data-xy]"),i=t.querySelector("[data-theme-val]"),d=t.querySelector("[data-sound-val]"),m=()=>{const s=new Date,l=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Shanghai",hour:"2-digit",minute:"2-digit",hour12:!1});n.textContent=`GMT+8 CN ${l.format(s)} 26°C`};m();const w=window.setInterval(m,15e3),I=window.setInterval(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches||(e=(e+1)%h.length,d.textContent=h[e])},900);return t.querySelector("[data-theme]").addEventListener("click",()=>{r=r==="A"?"B":"A",i.textContent=r,document.body.classList.toggle("theme-b",r==="B")}),t.querySelector("[data-sound]").addEventListener("click",()=>{e=(e+1)%h.length,d.textContent=h[e]}),t.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",l=>{const v=s.getAttribute("href").slice(1);if(!v)return;const p=document.querySelector(".scroller"),b=document.getElementById(v);if(!p||!b)return;l.preventDefault();const E=b.getBoundingClientRect().top-p.getBoundingClientRect().top+p.scrollTop;p.scrollTo({top:E,behavior:"smooth"})})}),{setCoords(s,l){a.textContent=`${String(Math.round(s)).padStart(4,"0")} X ${String(Math.round(l)).padStart(4,"0")} Y`},setDark(s){document.body.classList.toggle("is-dark",s)},destroy(){clearInterval(w),clearInterval(I)}}}function S(t){switch(t){case"board":return`
        <div class="mock-board" aria-hidden="true">
          <div class="mock-top"><span></span><span></span><span class="grow"></span></div>
          <div class="mock-grid">
            ${Array.from({length:12},(e,r)=>`<div class="tile t${r%5}"></div>`).join("")}
          </div>
        </div>`;case"clock":return`
        <div class="mock-clock" aria-hidden="true">
          <div class="orb">00:54<br/>26°C</div>
        </div>`;case"icons":return`
        <div class="mock-icons" aria-hidden="true">
          ${Array.from({length:8},(e,r)=>`<div class="ico c${r%4}"></div>`).join("")}
        </div>`;case"symbols":return`
        <div class="mock-symbols" aria-hidden="true">
          <svg viewBox="0 0 120 80"><path d="M10 60 L40 20 L70 55 L110 15" fill="none" stroke="#c0fe04" stroke-width="3"/><circle cx="40" cy="20" r="4" fill="#fff"/><circle cx="110" cy="15" r="4" fill="#2f6bff"/></svg>
        </div>`;case"dark":return`
        <div class="mock-dark" aria-hidden="true">
          <div class="row"></div><div class="row short"></div><div class="row"></div>
          <div class="panel"></div>
        </div>`;case"drive":return`
        <div class="mock-drive" aria-hidden="true">
          <div class="bar"></div>
          <div class="files">${Array.from({length:6},()=>"<i></i>").join("")}</div>
        </div>`;case"event":return`
        <div class="mock-event" aria-hidden="true">
          <div class="poster">FoF</div>
          <div class="lines"><i></i><i></i><i></i></div>
        </div>`}}const C=`
.mock-board, .mock-clock, .mock-icons, .mock-symbols, .mock-dark, .mock-drive, .mock-event {
  height: 100%; width: 100%;
}
.mock-board .mock-top { display:flex; gap:6px; margin-bottom:12px; }
.mock-board .mock-top span { width:8px; height:8px; border-radius:50%; background:#3a3f4a; }
.mock-board .mock-top .grow { flex:1; height:8px; border-radius:4px; background:#2a2f38; }
.mock-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; height:calc(100% - 28px); }
.tile { background:#2a3140; border-radius:4px; min-height:48px; position:relative; overflow:hidden; }
.tile::after { content:""; position:absolute; inset:14% 12%; border-radius:3px; background:rgba(255,255,255,.14); }
.tile.t1 { background:linear-gradient(135deg,#3a4568,#222838); }
.tile.t2 { background:linear-gradient(160deg,#e8e4d8 40%,#2a3140 40.2%); }
.tile.t3 { background:linear-gradient(135deg,#fff6e8,#d8c8a8); }
.tile.t4 { background:linear-gradient(145deg,#dce8ff,#8aaad8); }

.mock-clock { display:grid; place-items:center; }
.orb { width:56%; aspect-ratio:1; border-radius:50%; background:radial-gradient(circle at 35% 30%,#ff7a45,#c43218 60%,#3a0a05);
  display:grid; place-items:center; text-align:center; font-size:clamp(14px,2vw,22px); font-weight:600; color:#111; line-height:1.15; box-shadow:0 20px 40px rgba(0,0,0,.35); }

.mock-icons { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; align-content:center; padding:8px; }
.ico { aspect-ratio:1; border-radius:18px; background:#2a3142; }
.ico.c1 { background:linear-gradient(145deg,#5b8cff,#2f6bff); }
.ico.c2 { background:linear-gradient(145deg,#c0fe04,#7ab800); }
.ico.c3 { background:linear-gradient(145deg,#ff9ecd,#e04898); }

.mock-symbols { display:grid; place-items:center; }
.mock-symbols svg { width:70%; height:auto; }

.mock-dark { display:flex; flex-direction:column; gap:10px; justify-content:center; }
.mock-dark .row { height:10px; background:#2a3140; border-radius:4px; width:80%; }
.mock-dark .row.short { width:55%; }
.mock-dark .panel { margin-top:12px; flex:1; min-height:80px; background:linear-gradient(180deg,#1a2030,#12151e); border:1px solid #2a3140; border-radius:6px; }

.mock-drive .bar { height:28px; background:#1e2430; border-radius:6px; margin-bottom:14px; }
.mock-drive .files { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
.mock-drive .files i { display:block; aspect-ratio:1; background:#252b38; border-radius:6px; }

.mock-event { display:grid; grid-template-columns:1fr 1fr; gap:12px; align-items:center; }
.mock-event .poster { aspect-ratio:3/4; background:linear-gradient(160deg,#c0fe04,#2f6bff); border-radius:4px; display:grid; place-items:center; color:#111; font-weight:700; font-size:18px; }
.mock-event .lines { display:flex; flex-direction:column; gap:8px; }
.mock-event .lines i { height:8px; background:#2a3140; border-radius:4px; }
.mock-event .lines i:nth-child(2){ width:70%; }
`;function L(t){return`<span class="redact" aria-hidden="true">${Array.from({length:t},()=>"<i></i>").join("")}</span><span class="sr-only">[redacted]</span>`}function A(){return`<svg class="cursor-3d" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6b9bff"/>
        <stop offset="55%" stop-color="#2f6bff"/>
        <stop offset="100%" stop-color="#1a4fd6"/>
      </linearGradient>
    </defs>
    <path d="M12 8 L12 48 L24 38 L34 58 L42 54 L32 34 L48 34 Z" fill="url(#cg)" stroke="#0b2a8a" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M18 16 L18 36" stroke="rgba(255,255,255,0.45)" stroke-width="3" stroke-linecap="round"/>
  </svg>`}function N(){const t=O.map(e=>{const r=e.kind?`<span class="chip">${e.kind}</span>`:"",n=e.external?`<span class="ext">${e.badge??"LINK"} ↗</span>`:e.badge?`<span class="ext">${e.badge}</span>`:"";return`
        <a class="project" data-span="${e.span}" href="#${e.id}" id="${e.id}">
          <div class="board">
            ${r}
            <div class="board-inner">${S(e.mock)}</div>
          </div>
          <div class="project-meta">
            <span>${e.title}</span>
            <span class="year">${e.year}${n?` ${n}`:""}</span>
          </div>
        </a>`}).join("");return`
    <div class="grid-layer" aria-hidden="true"></div>
    <header class="hud" data-hud></header>
    <div class="scroller" data-scroller>
      <section class="section hero" id="top">
        <div class="theater" aria-hidden="true">
          <div class="caustics"></div>
          <div class="glass-hello">hello</div>
          ${A()}
        </div>
        <div class="hero-role">${c.role.join("<br/>")}</div>
        <div class="hero-tag">${c.tagline.join("<br/>")}</div>
        <p class="hero-bio">${c.bioBefore}${L(c.bioRedact)}${c.bioAfter}</p>
        <h1 class="hero-display">${c.display.join("<br/>")}</h1>
      </section>

      <section class="section about" id="about" aria-label="About">
        <div class="portrait">
          <span class="signature">Haoqi</span>
          <div class="portrait-face" aria-hidden="true"></div>
        </div>
        <div class="about-copy">
          <p class="about-lead">${o.lead}</p>
          <p class="about-sub">
            ${o.subBefore}<a href="${o.links[0].href}">${o.links[0].label}</a>${o.subMid}<a href="${o.links[1].href}">${o.links[1].label}</a>, <a href="${o.links[2].href}">${o.links[2].label}</a>${o.subEnd}
          </p>
        </div>
      </section>

      <section class="section work" id="selected-work" aria-label="Selected work">
        <div class="work-grid">${t}</div>
      </section>

      <section class="section innovate" id="innovate" data-dark-band aria-label="Innovate">
        <div class="innovate-rays" aria-hidden="true"></div>
        <div class="innovate-facet" aria-hidden="true"></div>
        <h2 class="innovate-display">${$.join("<br/>")}</h2>
      </section>

      <footer class="section contact" id="contact">
        <div class="caustics contact-caustics" aria-hidden="true"></div>
        <span class="contact-ghost a" aria-hidden="true">craft</span>
        <span class="contact-ghost b" aria-hidden="true">taste</span>
        <h2 class="contact-display">${u.display.join("<br/>")}</h2>
        <div class="contact-foot">
          <div class="contact-email">
            <a href="mailto:${u.email}">${u.email}</a>
            <small>${u.copyright}</small>
          </div>
          <div class="contact-socials">
            ${u.socials.map(e=>`<a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.label}</a>`).join("")}
          </div>
        </div>
      </footer>
    </div>
  `}const g=document.querySelector("#app");g.innerHTML=N();const k=document.createElement("style");k.textContent=C;document.head.appendChild(k);const M=g.querySelector("[data-hud]"),y=T(M),f=g.querySelector("[data-scroller]"),x=g.querySelector("[data-dark-band]");f.addEventListener("pointermove",t=>{const e=f.getBoundingClientRect();y.setCoords(t.clientX-e.left,t.clientY-e.top)},{passive:!0});const D=new IntersectionObserver(t=>{for(const e of t)e.target===x&&y.setDark(e.isIntersecting&&e.intersectionRatio>.45)},{root:f,threshold:[.35,.45,.55,.7]});D.observe(x);
