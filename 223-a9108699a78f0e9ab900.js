"use strict";(self.webpackChunkzoomkoding_com=self.webpackChunkzoomkoding_com||[]).push([[223],{8223:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return m},swapPlaceholderImage:function(){return g}});var o=n(3723),i=n(7294),a=n(7762);n(4811);let r;const c=new WeakMap,l=navigator.connection||navigator.mozConnection||navigator.webkitConnection,s=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function d(e,t,n,o,i,a){const r=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),l=n.has(t);function s(e){this.removeEventListener("load",s);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{u(this,c),null==i||i({wasCached:l})})).catch((e=>{u(this,c),null==a||a(e)})):(u(this,c),null==i||i({wasCached:l}))}return r.addEventListener("load",s),null==o||o({wasCached:l}),Array.from(r.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),r.complete&&s.call(r,{currentTarget:r}),()=>{r&&r.removeEventListener("load",s)}}function g(e,t,i,a,s,u,g){if(!(0,o.h)()){let o;const f=(h=()=>{o=d(e,t,i,s,u,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==l?void 0:l.effectiveType)||null!=l&&l.saveData?"2500px":"1250px"})),function(e){return c.set(e,h),r.observe(e),function(){r&&e&&(c.delete(e),r.unobserve(e))}}):function(){return h(),function(){}}),v=f(e);var m,b;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(m=a.objectFit)?m:"cover",e.dataset.objectPosition=""+(null!=(b=a.objectPosition)?b:"50% 50%"),async function(e){"objectFitPolyfill"in window||await n.e(231).then(n.t.bind(n,7231,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),v()}}var h;return d(e,t,i,s,u,g)}function m(e){let{image:t,loading:n="lazy",isLoading:r,isLoaded:c,imgClassName:l,imgStyle:u={},objectPosition:d,backgroundColor:g,objectFit:m="cover"}=e,b=(0,o._)(e,s);const{width:h,height:f,layout:v,images:w,placeholder:y,backgroundColor:p}=t;return u=(0,o.a)({objectFit:m,objectPosition:d,backgroundColor:g},u),(0,a.uS)(i.createElement(o.L,{layout:v,width:h,height:f},i.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,v,h,f,p,m,d))),i.createElement(o.M,(0,o.a)({},b,{width:h,height:f,className:l},(0,o.b)(r,c,w,n,u)))))}}}]);
//# sourceMappingURL=223-a9108699a78f0e9ab900.js.map