import{a as f,S as p,i as a}from"./assets/vendor-CauDeeDU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",g="51082200-d89cb29d811094b68c71827c6";async function y(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new p(".gallery a");function b(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${i}</p>
            <p><b>Comments</b> ${u}</p>
            <p><b>Downloads</b> ${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search term.",position:"topRight"});return}L(),w();try{const o=await y(r);o.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(o.hits)}catch(o){a.error({message:"Something went wrong. Try again!",position:"topRight"}),console.error(o)}finally{S()}});
//# sourceMappingURL=index.js.map
