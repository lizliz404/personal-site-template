(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function b(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}const H=.085,j=1.05;let w=0,x=0,T=0,M=null;function O(e,t){const r=e.scrollHeight-e.clientHeight;return Math.max(0,Math.min(t,r))}function q(e){const t=w-x;Math.abs(t)<.35?x=w:x+=t*H,e.scrollTop=x,T=requestAnimationFrame(()=>q(e))}function F(e){x=e.scrollTop,w=x}function G(e){if(b())return()=>{};M=e,F(e),T=requestAnimationFrame(()=>q(e));const t=a=>{a.ctrlKey||(a.preventDefault(),w=O(e,w+a.deltaY*j))},r=()=>{Math.abs(e.scrollTop-x)>2&&F(e)};return e.addEventListener("wheel",t,{passive:!1}),e.addEventListener("scroll",r,{passive:!0}),()=>{cancelAnimationFrame(T),e.removeEventListener("wheel",t),e.removeEventListener("scroll",r),M=null}}function _(e,t,r=1100){if(b()||M!==e)return e.scrollTop=t,w=t,x=t,Promise.resolve();const a=w,i=O(e,t)-a;if(Math.abs(i)<1)return Promise.resolve();const o=performance.now();return new Promise(l=>{const f=v=>{const n=Math.min(1,(v-o)/r),d=n<.5?4*n*n*n:1-(-2*n+2)**3/2;w=O(e,a+i*d),n<1?requestAnimationFrame(f):l()};requestAnimationFrame(f)})}function Y(e){if(b()){e.classList.add("is-ready");return}e.classList.add("is-intro")}function W(e){return b()||e.classList.contains("is-ready")?(e.classList.add("is-ready"),e.classList.remove("is-intro"),()=>{}):(e.classList.contains("is-intro")||e.classList.add("is-intro"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add("is-ready"),e.classList.remove("is-intro")})}),()=>{e.classList.add("is-ready"),e.classList.remove("is-intro")})}function A(e,t,r){e.style.setProperty("--px",`${t.toFixed(2)}px`),e.style.setProperty("--py",`${r.toFixed(2)}px`)}function K(e,t){const r=t.querySelector(".grid-layer"),a=e.querySelector(".hero .caustics"),i=e.querySelector(".glass-hello"),o=e.querySelector(".cursor-3d"),l=e.querySelector(".contact-ghost.a"),f=e.querySelector(".contact-ghost.b"),v=e.querySelector(".contact-caustics"),n=[];r&&n.push({el:r,speed:.04}),a&&n.push({el:a,speed:.18}),i&&n.push({el:i,speed:.32}),o&&n.push({el:o,speed:.48}),l&&n.push({el:l,speed:-.22}),f&&n.push({el:f,speed:.28}),v&&n.push({el:v,speed:.12}),n.forEach(m=>m.el.classList.add("parallax-layer"));let d=!1,u=!1;const c=()=>{if(d=!1,u||b()){n.forEach(p=>{p.el.style.removeProperty("--px"),p.el.style.removeProperty("--py")});return}const m=e.scrollTop,k=e.clientHeight;for(const p of n){const s=p.el.getBoundingClientRect(),g=e.getBoundingClientRect(),S=(s.top+s.height/2-g.top-k/2)*p.speed;if(p.el.classList.contains("grid-layer"))A(p.el,0,m*p.speed);else if(p.el.closest(".hero")){const C=Math.min(m,k)*p.speed;A(p.el,0,C)}else A(p.el,0,-S)}document.body.classList.toggle("is-scrolled",m>48)},h=()=>{d||(d=!0,requestAnimationFrame(c))};return e.addEventListener("scroll",h,{passive:!0}),c(),()=>{u=!0,e.removeEventListener("scroll",h),n.forEach(m=>{m.el.classList.remove("parallax-layer"),m.el.style.removeProperty("--px"),m.el.style.removeProperty("--py")}),document.body.classList.remove("is-scrolled")}}function X(e,t){const r=document.createElement("div");r.className="cursor-trail",r.setAttribute("aria-hidden","true");for(let s=0;s<6;s++){const g=document.createElement("span");g.className="cursor-trail-dot",g.style.setProperty("--i",String(s)),r.appendChild(g)}t.appendChild(r);const a=Array.from(r.querySelectorAll(".cursor-trail-dot")),i=a.map(()=>({x:-100,y:-100}));let o=-100,l=-100,f=0,v=!1,n=!1;const d=e.querySelector(".glass-hello"),u=e.querySelector(".cursor-3d"),c=e.querySelector(".hero .caustics"),h=e.querySelector(".hero"),m=()=>{if(!n){if(b()||!v){r.classList.remove("is-on"),f=0;return}r.classList.add("is-on"),i[0].x+=(o-i[0].x)*.35,i[0].y+=(l-i[0].y)*.35;for(let s=1;s<i.length;s++)i[s].x+=(i[s-1].x-i[s].x)*.28,i[s].y+=(i[s-1].y-i[s].y)*.28;a.forEach((s,g)=>{s.style.transform=`translate3d(${i[g].x}px, ${i[g].y}px, 0)`}),f=requestAnimationFrame(m)}},k=s=>{if(b()||(o=s.clientX,l=s.clientY,v=!0,f||(f=requestAnimationFrame(m)),!h))return;const g=h.getBoundingClientRect();if(!(s.clientX>=g.left&&s.clientX<=g.right&&s.clientY>=g.top&&s.clientY<=g.bottom)){d==null||d.style.removeProperty("--rx"),d==null||d.style.removeProperty("--ry"),u==null||u.style.removeProperty("--rx"),u==null||u.style.removeProperty("--ry"),c==null||c.style.removeProperty("--rx"),c==null||c.style.removeProperty("--ry");return}const S=(s.clientX-g.left)/g.width-.5,C=(s.clientY-g.top)/g.height-.5;d&&(d.style.setProperty("--rx",`${(S*18).toFixed(2)}px`),d.style.setProperty("--ry",`${(C*12).toFixed(2)}px`)),u&&(u.style.setProperty("--rx",`${(S*-28).toFixed(2)}px`),u.style.setProperty("--ry",`${(C*-18).toFixed(2)}px`)),c&&(c.style.setProperty("--rx",`${(S*10).toFixed(2)}px`),c.style.setProperty("--ry",`${(C*8).toFixed(2)}px`))},p=()=>{v=!1,r.classList.remove("is-on"),d==null||d.style.removeProperty("--rx"),d==null||d.style.removeProperty("--ry"),u==null||u.style.removeProperty("--rx"),u==null||u.style.removeProperty("--ry"),c==null||c.style.removeProperty("--rx"),c==null||c.style.removeProperty("--ry")};return window.addEventListener("pointermove",k,{passive:!0}),document.documentElement.addEventListener("pointerleave",p),()=>{n=!0,window.removeEventListener("pointermove",k),document.documentElement.removeEventListener("pointerleave",p),f&&cancelAnimationFrame(f),r.remove()}}const U=".about-copy, .portrait, .project, .innovate-display, .contact-display, .contact-foot";function V(e){const t=Array.from(e.querySelectorAll(U));if(b())return t.forEach(a=>a.classList.add("is-revealed")),()=>{};t.forEach((a,i)=>{a.classList.add("reveal"),a.classList.contains("project")?a.style.setProperty("--reveal-delay",`${i%6*70}ms`):(a.classList.contains("about-copy")||a.classList.contains("portrait"))&&a.style.setProperty("--reveal-delay",a.classList.contains("portrait")?"0ms":"120ms")});const r=new IntersectionObserver(a=>{for(const i of a){if(!i.isIntersecting)continue;const o=i.target;o.classList.add("is-revealed"),r.unobserve(o)}},{root:e,threshold:.12,rootMargin:"0px 0px -8% 0px"});return t.forEach(a=>r.observe(a)),()=>r.disconnect()}function z(e){const t=e.querySelector("[data-scroll-tunnel]");if(!t)return()=>{};let r=!1,a=!1;const i=()=>{if(r=!1,a)return;const l=t.getBoundingClientRect(),f=e.getBoundingClientRect(),v=e.clientHeight,n=t.offsetHeight,d=l.top-f.top+e.scrollTop,u=e.scrollTop-d,c=Math.max(0,Math.min(1,u/Math.max(1,n-v)));if(t.style.setProperty("--tunnel-progress",c.toFixed(4)),t.style.setProperty("--warp-rotate",`${(c*42).toFixed(2)}deg`),t.style.setProperty("--warp-shift",`${(c*18-9).toFixed(2)}%`),t.style.setProperty("--warp-bloom",`${(.35+c*.45).toFixed(3)}`),!b()){const h=Math.sin(c*Math.PI*3)*.08;t.style.setProperty("--warp-pulse",h.toFixed(4))}},o=()=>{r||(r=!0,requestAnimationFrame(i))};return e.addEventListener("scroll",o,{passive:!0}),i(),()=>{a=!0,e.removeEventListener("scroll",o),t.style.removeProperty("--tunnel-progress"),t.style.removeProperty("--warp-rotate"),t.style.removeProperty("--warp-shift"),t.style.removeProperty("--warp-bloom"),t.style.removeProperty("--warp-pulse")}}function J(e){const t=e.querySelector(".svg-sign");if(!t)return()=>{};const r=Array.from(t.querySelectorAll(".svg-sign__path"));if(b())return r.forEach(o=>{o.style.strokeDashoffset="0",o.style.opacity="1"}),()=>{};let a=.5;r.forEach(o=>{const l=o.getTotalLength(),f=Math.max(.08,l/720);o.style.setProperty("--path-len",String(l)),o.style.setProperty("--path-dur",`${f}s`),o.style.setProperty("--path-delay",`${a}s`),o.style.strokeDasharray=String(l),o.style.strokeDashoffset=String(l),a+=f*.85});const i=new IntersectionObserver(o=>{for(const l of o)l.isIntersecting&&(t.classList.add("is-drawing"),i.disconnect())},{root:e,threshold:.25});return i.observe(t.closest(".portrait")??t),()=>i.disconnect()}function Q(e,t){return t.getBoundingClientRect().top-e.getBoundingClientRect().top+e.scrollTop}function Z(e,t){const r=[W(e),G(t),V(t),K(t,e),z(t),J(t),X(t,e)];return()=>r.forEach(a=>a())}const E={role:["Design &","Engineering"],tagline:["Thinking in systems.","Designing with care."],bioBefore:"I'm Haoqi Wen, leading Design Engineering and AI exploration at",bioRedact:6,bioAfter:", engineering, and AI at scale. Outside work, I build design tools for team efficiency.",display:["I FOLD","CRAFT INTO CODE","FOR DIGITAL WORK"]},y={lead:"I explore how to shape AI-era workflows with craft and taste, building the next generation of digital products.",subBefore:"I'm building ",links:[{label:"reunimos™",href:"#selected-work"},{label:"aDrive",href:"#selected-work"},{label:"Teambition",href:"#selected-work"}],subMid:", and previously worked on Alibaba ",subEnd:", and 100offer."},ee=["BUILD","WITH","INTENT"],$={display:["LET'S","MAKE","SOMETHING","WORTH KEEPING"],email:"curiosity.wen@gmail.com",socials:[{label:"TWITTER/X",href:"https://x.com"},{label:"FIGMA",href:"https://figma.com"},{label:"GITHUB",href:"https://github.com"}],copyright:"HAOQI (C) 2026"},te=[{id:"reunimos",title:"REUNIMOS™",year:"2024-2026",kind:"CODING PROJECT",span:"featured",mock:"board"},{id:"inspire",title:"INSPIRE MONO",year:"2025",kind:"CODING PROJECT",span:"half",mock:"clock"},{id:"wasm",title:"WASM DESIGN UTILS",year:"2025",kind:"CODING PROJECT",span:"half",mock:"icons"},{id:"vectors",title:"VECTORSYMBOLS",year:"2023",kind:"CODING PROJECT",badge:"TOOLS",external:!0,span:"third",mock:"symbols"},{id:"darkside",title:"DARKSIDE",year:"2021",kind:"CODING PROJECT",badge:"TOOLS",external:!0,span:"third",mock:"dark"},{id:"adrive",title:"ADRIVE 阿里云盘",year:"2020-2022",span:"third-tall",mock:"drive"},{id:"shore",title:"SHORE ICON",year:"2022",span:"third",mock:"icons"},{id:"teambition",title:"TEAMBITION",year:"2018-2020",span:"third",mock:"board"},{id:"fof-sht",title:"FOF: SEE HEAR TOUCH",year:"2022",badge:"EVENT",external:!0,span:"third",mock:"event"},{id:"fof-ds",title:"FOF: DESIGN SYSTEM",year:"2021",badge:"EVENT",external:!0,span:"third",mock:"event"}],I=["|","/","-","\\"];function re(e){let t=0,r="A";e.innerHTML=`
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
  `;const a=e.querySelector("[data-clock]"),i=e.querySelector("[data-xy]"),o=e.querySelector("[data-theme-val]"),l=e.querySelector("[data-sound-val]");let f="26";const v=()=>{const h=new Date,m=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Shanghai",hour:"2-digit",minute:"2-digit",hour12:!1});a.textContent=`GMT+8 CN ${m.format(h)} ${f}°C`},n=async()=>{var h;try{const m=await fetch("https://api.open-meteo.com/v1/forecast?latitude=31.23&longitude=121.47&current=temperature_2m&timezone=Asia%2FShanghai");if(!m.ok)return;const p=(h=(await m.json()).current)==null?void 0:h.temperature_2m;typeof p=="number"&&Number.isFinite(p)&&(f=String(Math.round(p)),v())}catch{}};v(),n();const d=window.setInterval(v,15e3),u=window.setInterval(()=>void n(),30*6e4),c=window.setInterval(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches||(t=(t+1)%I.length,l.textContent=I[t])},900);return e.querySelector("[data-theme]").addEventListener("click",()=>{r=r==="A"?"B":"A",o.textContent=r,document.body.classList.toggle("theme-b",r==="B")}),e.querySelector("[data-sound]").addEventListener("click",()=>{t=(t+1)%I.length,l.textContent=I[t]}),e.querySelectorAll('a[href^="#"]').forEach(h=>{h.addEventListener("click",m=>{const k=h.getAttribute("href").slice(1);if(!k)return;const p=document.querySelector(".scroller"),s=document.getElementById(k);!p||!s||(m.preventDefault(),_(p,Q(p,s)))})}),{setCoords(h,m){i.textContent=`${String(Math.round(h)).padStart(4,"0")} X ${String(Math.round(m)).padStart(4,"0")} Y`},setDark(h){document.body.classList.toggle("is-dark",h)},destroy(){clearInterval(d),clearInterval(u),clearInterval(c)}}}function ie(){return`<svg class="svg-sign" viewBox="0 0 320 154" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="svg-sign__path" d="M138.27 11.7729C123.15 39.3885 106.223 85.497 102.06 100.029C98.6588 111.899 98.3721 128.792 98.6271 131.165" stroke="#C0FE04" stroke-width="4" fill="none"/>
    <path class="svg-sign__path" d="M78.2326 42.073C68.2519 91.6846 24.5171 161.888 11.6117 145.082C-3.90668 124.872 84.4229 80.042 149.127 70.3141C129.181 76.883 121.731 89.3385 127.224 93.3199C137.212 100.559 148.931 80.9071 154.826 68.4373C154.826 68.4373 145.919 84.0047 152.863 86.4553C163.666 90.2674 183.35 47.449 193.768 55.6123C200.863 61.1719 187.995 78.0438 180.889 75.6465C176.521 74.173 179.98 64.5401 184.583 59.6902C186.629 62.1747 192.878 65.6969 201.5 59.9093C210.123 54.1218 217.989 47.6358 220.844 45.1163" stroke="#C0FE04" stroke-width="4" fill="none"/>
    <path class="svg-sign__path" d="M235.554 43.4299C221.979 37.3731 206.4 60.4017 215.719 63.1233C224.115 65.5752 234.431 48.0119 239.203 40.1227C237.612 42.7522 234.822 53.6736 235.156 66.1976C235.574 81.8524 228.174 116.927 217.431 114.674C206.687 112.422 217.712 80.3645 242.778 57.3701C262.83 38.9746 269.549 28.9006 270.402 26.163C266.375 32.0516 260.249 44.2468 267.959 45.919C275.669 47.5912 298.148 19.8335 308.423 5.74565" stroke="#C0FE04" stroke-width="4" fill="none"/>
    <path class="svg-sign__path" d="M274.89 10.4194L274.409 16.157" stroke="#C0FE04" stroke-width="5" fill="none"/>
  </svg>`}function ae(e){switch(e){case"board":return`
        <div class="mock-board mock-board-rich" aria-hidden="true">
          <div class="mock-sidebar">
            <span class="mock-logo"></span>
            <i></i><i></i><i class="active"></i><i></i>
          </div>
          <div class="mock-main">
            <div class="mock-top"><span></span><span></span><span class="grow"></span></div>
            <div class="mock-hero-card">
              <div class="mock-hero-title"></div>
              <div class="mock-hero-sub"></div>
            </div>
            <div class="mock-grid-rich">
              ${Array.from({length:8},(t,r)=>`<div class="tile-rich t${r%4}"></div>`).join("")}
            </div>
          </div>
        </div>`;case"clock":return`
        <div class="mock-clock mock-clock-rich" aria-hidden="true">
          <div class="mock-clock-ui">
            <div class="mock-clock-bar"><span></span><span></span><span></span></div>
            <div class="orb-rich">
              <span class="orb-time">00:54</span>
              <span class="orb-temp">26°C</span>
            </div>
            <div class="mock-clock-grid">
              ${Array.from({length:6},(t,r)=>`<div class="clock-cell c${r}"></div>`).join("")}
            </div>
          </div>
        </div>`;case"icons":return`
        <div class="mock-icons" aria-hidden="true">
          ${Array.from({length:8},(t,r)=>`<div class="ico c${r%4}"></div>`).join("")}
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
        </div>`}}const oe=`
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

.mock-board-rich { display:grid; grid-template-columns:52px 1fr; height:100%; background:#12151c; }
.mock-sidebar { display:flex; flex-direction:column; gap:10px; padding:12px 8px; background:#0d1016; border-right:1px solid #252a36; }
.mock-logo { width:28px; height:28px; border-radius:8px; background:linear-gradient(135deg,#c0fe04,#7ab800); margin-bottom:8px; }
.mock-sidebar i { display:block; height:8px; border-radius:4px; background:#2a3140; }
.mock-sidebar i.active { background:#c0fe04; opacity:0.85; }
.mock-main { padding:10px 12px; display:flex; flex-direction:column; gap:10px; min-width:0; }
.mock-hero-card { padding:12px; border-radius:8px; background:linear-gradient(145deg,#1e2430,#151a24); border:1px solid #2a3140; }
.mock-hero-title { height:10px; width:55%; background:#e8e8e8; border-radius:3px; margin-bottom:8px; opacity:0.9; }
.mock-hero-sub { height:6px; width:38%; background:#4a5568; border-radius:3px; }
.mock-grid-rich { display:grid; grid-template-columns:repeat(4,1fr); gap:6px; flex:1; }
.tile-rich { border-radius:5px; min-height:36px; background:#252b38; position:relative; overflow:hidden; }
.tile-rich::after { content:""; position:absolute; inset:18% 14%; border-radius:3px; background:rgba(255,255,255,.12); }
.tile-rich.t1 { background:linear-gradient(135deg,#3a4568,#222838); }
.tile-rich.t2 { background:linear-gradient(160deg,#e8e4d8 42%,#2a3140 42.2%); }
.tile-rich.t3 { background:linear-gradient(145deg,#dce8ff,#6a9ad8); }

.mock-clock-rich { display:grid; place-items:center; background:radial-gradient(circle at 50% 30%,#1a2030,#0a0c12); }
.mock-clock-ui { width:88%; height:88%; display:flex; flex-direction:column; gap:10px; }
.mock-clock-bar { display:flex; gap:5px; }
.mock-clock-bar span { width:7px; height:7px; border-radius:50%; background:#3a3f4a; }
.orb-rich { align-self:center; width:52%; aspect-ratio:1; border-radius:50%; background:radial-gradient(circle at 35% 28%,#ff8a55,#c43218 55%,#2a0804);
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px; box-shadow:0 16px 36px rgba(0,0,0,.45); }
.orb-time { font-size:clamp(12px,2.2vw,20px); font-weight:700; color:#111; line-height:1; }
.orb-temp { font-size:clamp(10px,1.6vw,14px); color:#222; opacity:0.85; }
.mock-clock-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:6px; flex:1; }
.clock-cell { border-radius:6px; background:#1e2430; }
.clock-cell.c0 { background:linear-gradient(145deg,#5b8cff,#2f6bff); }
.clock-cell.c2 { background:linear-gradient(145deg,#c0fe04,#7ab800); }
.clock-cell.c4 { background:linear-gradient(145deg,#ff9ecd,#e04898); }
`;function se(e){return`<span class="redact" aria-hidden="true">${Array.from({length:e},()=>"<i></i>").join("")}</span><span class="sr-only">[redacted]</span>`}function ne(){return`<svg class="cursor-3d" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6b9bff"/>
        <stop offset="55%" stop-color="#2f6bff"/>
        <stop offset="100%" stop-color="#1a4fd6"/>
      </linearGradient>
    </defs>
    <path d="M12 8 L12 48 L24 38 L34 58 L42 54 L32 34 L48 34 Z" fill="url(#cg)" stroke="#0b2a8a" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M18 16 L18 36" stroke="rgba(255,255,255,0.45)" stroke-width="3" stroke-linecap="round"/>
  </svg>`}function ce(){const e=te.map(t=>{const r=t.kind?`<span class="chip">${t.kind}</span>`:"",a=t.external?`<span class="ext">${t.badge??"LINK"} ↗</span>`:t.badge?`<span class="ext">${t.badge}</span>`:"";return`
        <a class="project" data-span="${t.span}" href="#${t.id}" id="${t.id}">
          <div class="board">
            ${r}
            <div class="board-inner">${ae(t.mock)}</div>
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
          ${ne()}
        </div>
        <div class="hero-role">${E.role.join("<br/>")}</div>
        <div class="hero-tag">${E.tagline.join("<br/>")}</div>
        <p class="hero-bio">${E.bioBefore}${se(E.bioRedact)}${E.bioAfter}</p>
        <h1 class="hero-display">${E.display.join("<br/>")}</h1>
      </section>

      <section class="section about" id="about" aria-label="About">
        <div class="portrait">
          <div class="signature">${ie()}</div>
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

      <section class="section innovate scroll-tunnel" id="innovate" data-dark-band data-scroll-tunnel aria-label="Innovate">
        <div class="innovate-sticky">
          <div class="innovate-warp" aria-hidden="true"></div>
          <div class="innovate-rays" aria-hidden="true"></div>
          <div class="innovate-noise" aria-hidden="true"></div>
          <div class="innovate-facet" aria-hidden="true"></div>
          <h2 class="innovate-display">${ee.join("<br/>")}</h2>
        </div>
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
  `}const L=document.querySelector("#app");Y(L);L.innerHTML=ce();const R=document.createElement("style");R.textContent=oe;document.head.appendChild(R);const de=L.querySelector("[data-hud]"),N=re(de),P=L.querySelector("[data-scroller]"),D=L.querySelector("[data-dark-band]");P.addEventListener("pointermove",e=>{const t=P.getBoundingClientRect();N.setCoords(e.clientX-t.left,e.clientY-t.top)},{passive:!0});const le=new IntersectionObserver(e=>{for(const t of e)t.target===D&&N.setDark(t.isIntersecting&&t.intersectionRatio>.45)},{root:P,threshold:[.35,.45,.55,.7]});le.observe(D);Z(L,P);
