!function(){var e,t=document.querySelectorAll(".skills-tab"),l=document.querySelectorAll(".skills-group");t.forEach((function(e){e.addEventListener("click",(function(){var c,n=document.querySelector(null!==(c=e.dataset.target)&&void 0!==c?c:"");l.forEach((function(e){e.classList.remove("skills-active")})),null==n||n.classList.add("skills-active"),t.forEach((function(e){e.classList.remove("skills-active")})),null==e||e.classList.add("skills-active")}))}));var c=document.querySelector(".projects-container"),n=new Shuffle(c,{itemSelector:".project-card",isCentered:!0,filterMode:Shuffle.FilterMode.ALL}),o=document.querySelector(".projects-clear-filter"),r=document.querySelectorAll(".projects-tags-items li[data-filter]");null==o||o.addEventListener("click",(function(){n.filter("all"),r.forEach((function(e){e.classList.remove("active")}))}));var i=new Map;r.forEach((function(e){e.addEventListener("click",(function(){console.log(n.lastFilter);var t=e.dataset.filter;t&&!i.get(t)?(i.set(t,!0),null==e||e.classList.add("active")):t&&i.get(t)&&(i.set(t,!1),null==e||e.classList.remove("active"));var l=[];i.forEach((function(e,t){e&&l.push(t)})),n.filter(l.length>0?l:"all")}))}));var s=document.querySelectorAll(".open-project-popup"),a=document.querySelectorAll(".project-popup-close"),u=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".project-popup-container";return null===(e=document.querySelector(t))||void 0===e?void 0:e.classList.toggle("open")};s.forEach((function(e){e.addEventListener("click",(function(){return u(e.dataset.model)}))})),a.forEach((function(e){e.addEventListener("click",(function(){return u()}))}));var d=document.querySelector(".nav-menu"),v=document.querySelector(".nav-toggle"),f=document.querySelector(".nav-close");v&&v.addEventListener("click",(function(){return null==d?void 0:d.classList.add("show")})),f&&f.addEventListener("click",(function(){return null==d?void 0:d.classList.remove("show")}));var h=document.querySelectorAll("section[id]");window.addEventListener("scroll",(function(){var e=window.pageYOffset;h.forEach((function(t){var l,c,n=t.offsetHeight,o=t.offsetTop-72,r=t.getAttribute("id");e>o&&e<=o+n?null===(l=document.querySelector('a[href="#'.concat(r,'"]')))||void 0===l||l.classList.add("active-link"):null===(c=document.querySelector('a[href="#'.concat(r,'"]')))||void 0===c||c.classList.remove("active-link")}))})),window.addEventListener("scroll",(function(){var e=document.querySelector("#header");this.scrollY>=80?null==e||e.classList.add("header-scroll"):null==e||e.classList.remove("header-scroll")}));var m=document.querySelector("#nav-theme-btn"),L=document.querySelector(".theme");null==m||m.addEventListener("click",(function(){return null==L?void 0:L.classList.add("theme-show")})),null==L||L.addEventListener("click",(function(e){e.target.classList.contains("theme")&&(null==L||L.classList.remove("theme-show"))}));var p=document.querySelectorAll(".theme-font-size-slider li"),E=null===(e=document.querySelector("html"))||void 0===e?void 0:e.style;p.forEach((function(e){e.addEventListener("click",(function(){var t;p.forEach((function(e){return e.classList.remove("active")})),e.classList.add("active"),E&&(E.fontSize=null!==(t=e.dataset.size)&&void 0!==t?t:"")}))}));var y=document.querySelectorAll(".theme-color li");y.forEach((function(e){e.addEventListener("click",(function(){var t;y.forEach((function(e){return e.classList.remove("active")})),e.classList.add("active"),null==E||E.setProperty("--primary-color-hue",null!==(t=e.dataset.hue)&&void 0!==t?t:"")}))}));var S=document.querySelectorAll(".theme-background li");S.forEach((function(e){e.addEventListener("click",(function(){var t;S.forEach((function(e){return e.classList.remove("active")})),e.classList.add("active");var l=null===(t=e.dataset.lightness)||void 0===t?void 0:t.split(",");l&&(null==E||E.setProperty("--light-color-lightness",l[0]),null==E||E.setProperty("--dark-color-lightness",l[1]),null==E||E.setProperty("--white-color-lightness",l[2]))}))}))}();
//# sourceMappingURL=index.4e4657f2.js.map
