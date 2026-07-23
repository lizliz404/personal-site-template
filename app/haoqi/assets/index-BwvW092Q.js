(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();function b(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function M(e){return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function R(e){if(b()){e.classList.add("is-ready");return}e.classList.add("is-intro")}function N(e){return b()||e.classList.contains("is-ready")?(e.classList.add("is-ready"),e.classList.remove("is-intro"),()=>{}):(e.classList.contains("is-intro")||e.classList.add("is-intro"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add("is-ready"),e.classList.remove("is-intro")})}),()=>{e.classList.add("is-ready"),e.classList.remove("is-intro")})}function T(e,t,i){e.style.setProperty("--px",`${t.toFixed(2)}px`),e.style.setProperty("--py",`${i.toFixed(2)}px`)}function F(e,t){const i=t.querySelector(".grid-layer"),a=e.querySelector(".hero .caustics"),r=e.querySelector(".glass-hello"),n=e.querySelector(".cursor-3d"),u=e.querySelector(".contact-ghost.a"),h=e.querySelector(".contact-ghost.b"),v=e.querySelector(".contact-caustics"),p=[];i&&p.push({el:i,speed:.04}),a&&p.push({el:a,speed:.18}),r&&p.push({el:r,speed:.32}),n&&p.push({el:n,speed:.48}),u&&p.push({el:u,speed:-.22}),h&&p.push({el:h,speed:.28}),v&&p.push({el:v,speed:.12}),p.forEach(f=>f.el.classList.add("parallax-layer"));let s=!1,c=!1;const d=()=>{if(s=!1,c||b()){p.forEach(m=>{m.el.style.removeProperty("--px"),m.el.style.removeProperty("--py")});return}const f=e.scrollTop,E=e.clientHeight;for(const m of p){const o=m.el.getBoundingClientRect(),l=e.getBoundingClientRect(),L=(o.top+o.height/2-l.top-E/2)*m.speed;if(m.el.classList.contains("grid-layer"))T(m.el,0,f*m.speed);else if(m.el.closest(".hero")){const w=Math.min(f,E)*m.speed;T(m.el,0,w)}else T(m.el,0,-L)}document.body.classList.toggle("is-scrolled",f>48)},g=()=>{s||(s=!0,requestAnimationFrame(d))};return e.addEventListener("scroll",g,{passive:!0}),d(),()=>{c=!0,e.removeEventListener("scroll",g),p.forEach(f=>{f.el.classList.remove("parallax-layer"),f.el.style.removeProperty("--px"),f.el.style.removeProperty("--py")}),document.body.classList.remove("is-scrolled")}}function D(e,t){const i=document.createElement("div");i.className="cursor-trail",i.setAttribute("aria-hidden","true");for(let o=0;o<6;o++){const l=document.createElement("span");l.className="cursor-trail-dot",l.style.setProperty("--i",String(o)),i.appendChild(l)}t.appendChild(i);const a=Array.from(i.querySelectorAll(".cursor-trail-dot")),r=a.map(()=>({x:-100,y:-100}));let n=-100,u=-100,h=0,v=!1,p=!1;const s=e.querySelector(".glass-hello"),c=e.querySelector(".cursor-3d"),d=e.querySelector(".hero .caustics"),g=e.querySelector(".hero"),f=()=>{if(!p){if(b()||!v){i.classList.remove("is-on"),h=0;return}i.classList.add("is-on"),r[0].x+=(n-r[0].x)*.35,r[0].y+=(u-r[0].y)*.35;for(let o=1;o<r.length;o++)r[o].x+=(r[o-1].x-r[o].x)*.28,r[o].y+=(r[o-1].y-r[o].y)*.28;a.forEach((o,l)=>{o.style.transform=`translate3d(${r[l].x}px, ${r[l].y}px, 0)`}),h=requestAnimationFrame(f)}},E=o=>{if(b()||(n=o.clientX,u=o.clientY,v=!0,h||(h=requestAnimationFrame(f)),!g))return;const l=g.getBoundingClientRect();if(!(o.clientX>=l.left&&o.clientX<=l.right&&o.clientY>=l.top&&o.clientY<=l.bottom)){s==null||s.style.removeProperty("--rx"),s==null||s.style.removeProperty("--ry"),c==null||c.style.removeProperty("--rx"),c==null||c.style.removeProperty("--ry"),d==null||d.style.removeProperty("--rx"),d==null||d.style.removeProperty("--ry");return}const L=(o.clientX-l.left)/l.width-.5,w=(o.clientY-l.top)/l.height-.5;s&&(s.style.setProperty("--rx",`${(L*18).toFixed(2)}px`),s.style.setProperty("--ry",`${(w*12).toFixed(2)}px`)),c&&(c.style.setProperty("--rx",`${(L*-28).toFixed(2)}px`),c.style.setProperty("--ry",`${(w*-18).toFixed(2)}px`)),d&&(d.style.setProperty("--rx",`${(L*10).toFixed(2)}px`),d.style.setProperty("--ry",`${(w*8).toFixed(2)}px`))},m=()=>{v=!1,i.classList.remove("is-on"),s==null||s.style.removeProperty("--rx"),s==null||s.style.removeProperty("--ry"),c==null||c.style.removeProperty("--rx"),c==null||c.style.removeProperty("--ry"),d==null||d.style.removeProperty("--rx"),d==null||d.style.removeProperty("--ry")};return window.addEventListener("pointermove",E,{passive:!0}),document.documentElement.addEventListener("pointerleave",m),()=>{p=!0,window.removeEventListener("pointermove",E),document.documentElement.removeEventListener("pointerleave",m),h&&cancelAnimationFrame(h),i.remove()}}const B=".about-copy, .portrait, .project, .innovate-display, .contact-display, .contact-foot";function H(e){const t=Array.from(e.querySelectorAll(B));if(b())return t.forEach(a=>a.classList.add("is-revealed")),()=>{};t.forEach((a,r)=>{a.classList.add("reveal"),a.classList.contains("project")?a.style.setProperty("--reveal-delay",`${r%6*70}ms`):(a.classList.contains("about-copy")||a.classList.contains("portrait"))&&a.style.setProperty("--reveal-delay",a.classList.contains("portrait")?"0ms":"120ms")});const i=new IntersectionObserver(a=>{for(const r of a){if(!r.isIntersecting)continue;const n=r.target;n.classList.add("is-revealed"),i.unobserve(n)}},{root:e,threshold:.12,rootMargin:"0px 0px -8% 0px"});return t.forEach(a=>i.observe(a)),()=>i.disconnect()}let S=0;function j(e,t,i=900){if(S&&cancelAnimationFrame(S),b()){e.scrollTop=t;return}const a=e.scrollTop,r=t-a;if(Math.abs(r)<1)return;const n=performance.now(),u=h=>{const v=Math.min(1,(h-n)/i);e.scrollTop=a+r*M(v),v<1?S=requestAnimationFrame(u):S=0};S=requestAnimationFrame(u)}function G(e,t){return t.getBoundingClientRect().top-e.getBoundingClientRect().top+e.scrollTop}function Y(e,t){const i=[N(e),H(t),F(t,e),D(t,e)];return()=>i.forEach(a=>a())}const k={role:["Design &","Engineering"],tagline:["Thinking in systems.","Designing with care."],bioBefore:"I'm Haoqi Wen, leading Design Engineering and AI exploration at",bioRedact:6,bioAfter:", engineering, and AI at scale. Outside work, I build design tools for team efficiency.",display:["I FOLD","CRAFT INTO CODE","FOR DIGITAL WORK"]},y={lead:"I explore how to shape AI-era workflows with craft and taste, building the next generation of digital products.",subBefore:"I'm building ",links:[{label:"reunimos™",href:"#selected-work"},{label:"aDrive",href:"#selected-work"},{label:"Teambition",href:"#selected-work"}],subMid:", and previously worked on Alibaba ",subEnd:", and 100offer."},X=["BUILD","WITH","INTENT"],$={display:["LET'S","MAKE","SOMETHING","WORTH KEEPING"],email:"curiosity.wen@gmail.com",socials:[{label:"TWITTER/X",href:"https://x.com"},{label:"FIGMA",href:"https://figma.com"},{label:"GITHUB",href:"https://github.com"}],copyright:"HAOQI (C) 2026"},K=[{id:"reunimos",title:"REUNIMOS™",year:"2024-2026",kind:"CODING PROJECT",span:"featured",mock:"board"},{id:"inspire",title:"INSPIRE MONO",year:"2025",kind:"CODING PROJECT",span:"half",mock:"clock"},{id:"wasm",title:"WASM DESIGN UTILS",year:"2025",kind:"CODING PROJECT",span:"half",mock:"icons"},{id:"vectors",title:"VECTORSYMBOLS",year:"2023",kind:"CODING PROJECT",badge:"TOOLS",external:!0,span:"third",mock:"symbols"},{id:"darkside",title:"DARKSIDE",year:"2021",kind:"CODING PROJECT",badge:"TOOLS",external:!0,span:"third",mock:"dark"},{id:"adrive",title:"ADRIVE 阿里云盘",year:"2020-2022",span:"third-tall",mock:"drive"},{id:"shore",title:"SHORE ICON",year:"2022",span:"third",mock:"icons"},{id:"teambition",title:"TEAMBITION",year:"2018-2020",span:"third",mock:"board"},{id:"fof-sht",title:"FOF: SEE HEAR TOUCH",year:"2022",badge:"EVENT",external:!0,span:"third",mock:"event"},{id:"fof-ds",title:"FOF: DESIGN SYSTEM",year:"2021",badge:"EVENT",external:!0,span:"third",mock:"event"}],I=["|","/","-","\\"];function U(e){let t=0,i="A";e.innerHTML=`
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
  `;const a=e.querySelector("[data-clock]"),r=e.querySelector("[data-xy]"),n=e.querySelector("[data-theme-val]"),u=e.querySelector("[data-sound-val]"),h=()=>{const s=new Date,c=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Shanghai",hour:"2-digit",minute:"2-digit",hour12:!1});a.textContent=`GMT+8 CN ${c.format(s)} 26°C`};h();const v=window.setInterval(h,15e3),p=window.setInterval(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches||(t=(t+1)%I.length,u.textContent=I[t])},900);return e.querySelector("[data-theme]").addEventListener("click",()=>{i=i==="A"?"B":"A",n.textContent=i,document.body.classList.toggle("theme-b",i==="B")}),e.querySelector("[data-sound]").addEventListener("click",()=>{t=(t+1)%I.length,u.textContent=I[t]}),e.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",c=>{const d=s.getAttribute("href").slice(1);if(!d)return;const g=document.querySelector(".scroller"),f=document.getElementById(d);!g||!f||(c.preventDefault(),j(g,G(g,f)))})}),{setCoords(s,c){r.textContent=`${String(Math.round(s)).padStart(4,"0")} X ${String(Math.round(c)).padStart(4,"0")} Y`},setDark(s){document.body.classList.toggle("is-dark",s)},destroy(){clearInterval(v),clearInterval(p)}}}function V(e){switch(e){case"board":return`
        <div class="mock-board" aria-hidden="true">
          <div class="mock-top"><span></span><span></span><span class="grow"></span></div>
          <div class="mock-grid">
            ${Array.from({length:12},(t,i)=>`<div class="tile t${i%5}"></div>`).join("")}
          </div>
        </div>`;case"clock":return`
        <div class="mock-clock" aria-hidden="true">
          <div class="orb">00:54<br/>26°C</div>
        </div>`;case"icons":return`
        <div class="mock-icons" aria-hidden="true">
          ${Array.from({length:8},(t,i)=>`<div class="ico c${i%4}"></div>`).join("")}
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
        </div>`}}const W=`
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
`;function J(e){return`<span class="redact" aria-hidden="true">${Array.from({length:e},()=>"<i></i>").join("")}</span><span class="sr-only">[redacted]</span>`}function _(){return`<svg class="cursor-3d" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6b9bff"/>
        <stop offset="55%" stop-color="#2f6bff"/>
        <stop offset="100%" stop-color="#1a4fd6"/>
      </linearGradient>
    </defs>
    <path d="M12 8 L12 48 L24 38 L34 58 L42 54 L32 34 L48 34 Z" fill="url(#cg)" stroke="#0b2a8a" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M18 16 L18 36" stroke="rgba(255,255,255,0.45)" stroke-width="3" stroke-linecap="round"/>
  </svg>`}function z(){const e=K.map(t=>{const i=t.kind?`<span class="chip">${t.kind}</span>`:"",a=t.external?`<span class="ext">${t.badge??"LINK"} ↗</span>`:t.badge?`<span class="ext">${t.badge}</span>`:"";return`
        <a class="project" data-span="${t.span}" href="#${t.id}" id="${t.id}">
          <div class="board">
            ${i}
            <div class="board-inner">${V(t.mock)}</div>
          </div>
          <div class="project-meta">
            <span>${t.title}</span>
            <span class="year">${t.year}${a?` ${a}`:""}</span>
          </div>
        </a>`}).join("");return`
    <div class="grid-layer" aria-hidden="true"></div>
    <header class="hud" data-hud></header>
    <div class="scroller" data-scroller>
      <section class="section hero" id="top">
        <div class="theater" aria-hidden="true">
          <div class="caustics"></div>
          <div class="glass-hello">hello</div>
          ${_()}
        </div>
        <div class="hero-role">${k.role.join("<br/>")}</div>
        <div class="hero-tag">${k.tagline.join("<br/>")}</div>
        <p class="hero-bio">${k.bioBefore}${J(k.bioRedact)}${k.bioAfter}</p>
        <h1 class="hero-display">${k.display.join("<br/>")}</h1>
      </section>

      <section class="section about" id="about" aria-label="About">
        <div class="portrait">
          <span class="signature">Haoqi</span>
          <div class="portrait-face" aria-hidden="true"></div>
        </div>
        <div class="about-copy">
          <p class="about-lead">${y.lead}</p>
          <p class="about-sub">
            ${y.subBefore}<a href="${y.links[0].href}">${y.links[0].label}</a>${y.subMid}<a href="${y.links[1].href}">${y.links[1].label}</a>, <a href="${y.links[2].href}">${y.links[2].label}</a>${y.subEnd}
          </p>
        </div>
      </section>

      <section class="section work" id="selected-work" aria-label="Selected work">
        <div class="work-grid">${e}</div>
      </section>

      <section class="section innovate" id="innovate" data-dark-band aria-label="Innovate">
        <div class="innovate-rays" aria-hidden="true"></div>
        <div class="innovate-facet" aria-hidden="true"></div>
        <h2 class="innovate-display">${X.join("<br/>")}</h2>
      </section>

      <footer class="section contact" id="contact">
        <div class="caustics contact-caustics" aria-hidden="true"></div>
        <span class="contact-ghost a" aria-hidden="true">craft</span>
        <span class="contact-ghost b" aria-hidden="true">taste</span>
        <h2 class="contact-display">${$.display.join("<br/>")}</h2>
        <div class="contact-foot">
          <div class="contact-email">
            <a href="mailto:${$.email}">${$.email}</a>
            <small>${$.copyright}</small>
          </div>
          <div class="contact-socials">
            ${$.socials.map(t=>`<a href="${t.href}" target="_blank" rel="noopener noreferrer">${t.label}</a>`).join("")}
          </div>
        </div>
      </footer>
    </div>
  `}const x=document.querySelector("#app");R(x);x.innerHTML=z();const A=document.createElement("style");A.textContent=W;document.head.appendChild(A);const Q=x.querySelector("[data-hud]"),C=U(Q),O=x.querySelector("[data-scroller]"),P=x.querySelector("[data-dark-band]");O.addEventListener("pointermove",e=>{const t=O.getBoundingClientRect();C.setCoords(e.clientX-t.left,e.clientY-t.top)},{passive:!0});const Z=new IntersectionObserver(e=>{for(const t of e)t.target===P&&C.setDark(t.isIntersecting&&t.intersectionRatio>.45)},{root:O,threshold:[.35,.45,.55,.7]});Z.observe(P);Y(x,O);
