var e;const t=document.querySelectorAll(".skills-tab"),l=document.querySelectorAll(".skills-group");t.forEach((e=>{e.addEventListener("click",(()=>{var c;const o=document.querySelector(null!==(c=e.dataset.target)&&void 0!==c?c:"");l.forEach((e=>{e.classList.remove("skills-active")})),null==o||o.classList.add("skills-active"),t.forEach((e=>{e.classList.remove("skills-active")})),null==e||e.classList.add("skills-active")}))}));const c=document.querySelector(".projects-container"),o=new Shuffle(c,{itemSelector:".project-card",isCentered:!0,filterMode:Shuffle.FilterMode.ALL}),s=document.querySelector(".projects-clear-filter"),r=document.querySelectorAll(".projects-tags-items li[data-filter]");null==s||s.addEventListener("click",(()=>{o.filter("all"),r.forEach((e=>{e.classList.remove("active")}))}));const n=new Map;r.forEach((e=>{e.addEventListener("click",(()=>{console.log(o.lastFilter);const t=e.dataset.filter;t&&!n.get(t)?(n.set(t,!0),null==e||e.classList.add("active")):t&&n.get(t)&&(n.set(t,!1),null==e||e.classList.remove("active"));const l=[];n.forEach(((e,t)=>{e&&l.push(t)})),o.filter(l.length>0?l:"all")}))}));const i=document.querySelectorAll(".open-project-popup"),a=document.querySelectorAll(".project-popup-close"),d=(e=".project-popup-container")=>{var t;return null===(t=document.querySelector(e))||void 0===t?void 0:t.classList.toggle("open")};i.forEach((e=>{e.addEventListener("click",(()=>d(e.dataset.model)))})),a.forEach((e=>{e.addEventListener("click",(()=>d()))}));const u=document.querySelector(".nav-menu"),v=document.querySelector(".nav-toggle"),h=document.querySelector(".nav-close");v&&v.addEventListener("click",(()=>null==u?void 0:u.classList.add("show"))),h&&h.addEventListener("click",(()=>null==u?void 0:u.classList.remove("show")));const m=document.querySelectorAll("section[id]");window.addEventListener("scroll",(function(){let e=window.pageYOffset;m.forEach((t=>{var l,c;const o=t.offsetHeight,s=t.offsetTop-72,r=t.getAttribute("id");e>s&&e<=s+o?null===(l=document.querySelector(`a[href="#${r}"]`))||void 0===l||l.classList.add("active-link"):null===(c=document.querySelector(`a[href="#${r}"]`))||void 0===c||c.classList.remove("active-link")}))})),window.addEventListener("scroll",(function(){const e=document.querySelector("#header");this.scrollY>=80?null==e||e.classList.add("header-scroll"):null==e||e.classList.remove("header-scroll")}));const L=document.querySelector("#nav-theme-btn"),f=document.querySelector(".theme");null==L||L.addEventListener("click",(()=>null==f?void 0:f.classList.add("theme-show"))),null==f||f.addEventListener("click",(e=>{e.target.classList.contains("theme")&&(null==f||f.classList.remove("theme-show"))}));const p=document.querySelectorAll(".theme-font-size-slider li"),E=null===(e=document.querySelector("html"))||void 0===e?void 0:e.style;p.forEach((e=>{e.addEventListener("click",(()=>{var t;p.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),E&&(E.fontSize=null!==(t=e.dataset.size)&&void 0!==t?t:"")}))}));const y=document.querySelectorAll(".theme-color li");y.forEach((e=>{e.addEventListener("click",(()=>{var t;y.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),null==E||E.setProperty("--primary-color-hue",null!==(t=e.dataset.hue)&&void 0!==t?t:"")}))}));const S=document.querySelectorAll(".theme-background li");S.forEach((e=>{e.addEventListener("click",(()=>{var t;S.forEach((e=>e.classList.remove("active"))),e.classList.add("active");const l=null===(t=e.dataset.lightness)||void 0===t?void 0:t.split(",");l&&(null==E||E.setProperty("--light-color-lightness",l[0]),null==E||E.setProperty("--dark-color-lightness",l[1]),null==E||E.setProperty("--white-color-lightness",l[2]))}))}));
//# sourceMappingURL=index.455d2f1d.js.map
