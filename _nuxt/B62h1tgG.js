import{u as S,d as B,r as q,a as P,o as E,b as I,c as T,e as U,f as V,h as A,g as R,p as F,n as H,i as x,j,k as L,l as D,m as M,q as $,w as G,s as K,_ as Q,t as W,v as J,x as _,y as C,z as X,A as Y,B as Z}from"./CBwQBUNG.js";import{u as ee}from"./CTlBMrv0.js";async function O(t,r=S()){const{path:l,matched:p}=r.resolve(t);if(!p.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(l)))return;const e=r._preloadPromises=r._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>O(t,r));r._routePreloaded.add(l);const n=p.map(u=>{var a;return(a=u.components)==null?void 0:a.default}).filter(u=>typeof u=="function");for(const u of n){const a=Promise.resolve(u()).catch(()=>{}).finally(()=>e.splice(e.indexOf(a)));e.push(a)}await Promise.all(e)}const te=(...t)=>t.find(r=>r!==void 0);function re(t){const r=t.componentName||"NuxtLink";function l(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return z(e,t.trailingSlash);const u="path"in e&&e.path!==void 0?e.path:n(e).path;return{...e,name:void 0,path:z(u,t.trailingSlash)}}function p(e){const n=S(),u=$(),a=x(()=>!!e.target&&e.target!=="_self"),d=x(()=>{const h=e.to||e.href||"";return typeof h=="string"&&j(h,{acceptRelative:!0})}),y=R("RouterLink"),m=y&&typeof y!="string"?y.useLink:void 0,g=x(()=>{if(e.external)return!0;const h=e.to||e.href||"";return typeof h=="object"?!1:h===""||d.value}),i=x(()=>{const h=e.to||e.href||"";return g.value?h:l(h,n.resolve)}),c=g.value||m==null?void 0:m({...e,to:i}),b=x(()=>{var h;if(!i.value||d.value)return i.value;if(g.value){const k=typeof i.value=="object"&&"path"in i.value?L(i.value):i.value,w=typeof k=="object"?n.resolve(k).href:k;return l(w,n.resolve)}return typeof i.value=="object"?((h=n.resolve(i.value))==null?void 0:h.href)??null:l(D(u.app.baseURL,i.value),n.resolve)});return{to:i,hasTarget:a,isAbsoluteUrl:d,isExternal:g,href:b,isActive:(c==null?void 0:c.isActive)??x(()=>i.value===n.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>i.value===n.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>n.resolve(i.value)),async navigate(){await M(b.value,{replace:e.replace,external:g.value||a.value})}}}return B({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:p,setup(e,{slots:n}){const u=S(),{to:a,href:d,navigate:y,isExternal:m,hasTarget:g,isAbsoluteUrl:i}=p(e),c=q(!1),b=q(null),h=o=>{var f;b.value=e.custom?(f=o==null?void 0:o.$el)==null?void 0:f.nextElementSibling:o==null?void 0:o.$el};function k(o){var f,s;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===o:((f=e.prefetchOn)==null?void 0:f[o])??((s=t.prefetchOn)==null?void 0:s[o]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!oe()}async function w(o=P()){if(c.value)return;c.value=!0;const f=typeof a.value=="string"?a.value:m.value?L(a.value):u.resolve(a.value).fullPath;await Promise.all([o.hooks.callHook("link:prefetch",f).catch(()=>{}),!m.value&&!g.value&&O(a.value,u).catch(()=>{})])}if(k("visibility")){const o=P();let f,s=null;E(()=>{const v=ae();I(()=>{f=T(()=>{var N;(N=b==null?void 0:b.value)!=null&&N.tagName&&(s=v.observe(b.value,async()=>{s==null||s(),s=null,await w(o)}))})})}),U(()=>{f&&V(f),s==null||s(),s=null})}return()=>{var s;if(!m.value&&!g.value){const v={ref:h,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(k("interaction")&&(v.onPointerenter=w.bind(null,void 0),v.onFocus=w.bind(null,void 0)),c.value&&(v.class=e.prefetchedClass||t.prefetchedClass),v.rel=e.rel||void 0),A(R("RouterLink"),v,n.default)}const o=e.target||null,f=te(e.noRel?"":e.rel,t.externalRelAttribute,i.value||g.value?"noopener noreferrer":"")||null;return e.custom?n.default?n.default({href:d.value,navigate:y,prefetch:w,get route(){if(!d.value)return;const v=new URL(d.value,window.location.href);return{path:v.pathname,fullPath:v.pathname,get query(){return F(v.search)},hash:v.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:d.value}},rel:f,target:o,isExternal:m.value||g.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:b,href:d.value||null,rel:f,target:o},(s=n.default)==null?void 0:s.call(n))}}})}const ne=re(H);function z(t,r){const l=r==="append"?G:K;return j(t)&&!t.startsWith("http")?t:l(t,!0)}function ae(){const t=P();if(t._observer)return t._observer;let r=null;const l=new Map,p=(n,u)=>(r||(r=new IntersectionObserver(a=>{for(const d of a){const y=l.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&y&&y()}})),l.set(n,u),r.observe(n),()=>{l.delete(n),r.unobserve(n),l.size===0&&(r.disconnect(),r=null)});return t._observer={observe:p}}function oe(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const ie={class:"antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black"},se={class:"max-w-520px text-center z-20"},le=["textContent"],ue=["textContent"],ce={class:"flex items-center justify-center w-full"},fe={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const r=t;return ee({title:`${r.statusCode} - ${r.statusMessage} | ${r.appName}`,script:[{children:`!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();`}],style:[{children:'*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(l,p)=>{const e=ne;return W(),J("div",ie,[p[0]||(p[0]=_("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),_("div",se,[_("h1",{class:"font-medium mb-8 sm:text-10xl text-8xl",textContent:C(t.statusCode)},null,8,le),_("p",{class:"font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl",textContent:C(t.description)},null,8,ue),_("div",ce,[X(e,{to:"/",class:"cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md"},{default:Y(()=>[Z(C(t.backHome),1)]),_:1})])])])}}},ve=Q(fe,[["__scopeId","data-v-00b6b518"]]);export{ve as default};
