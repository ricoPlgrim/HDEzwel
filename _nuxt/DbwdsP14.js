import{_ as d}from"./C9-_MLo8.js";import{e as m,o as a,c as l,a as o,b as i,w as p,d as u,t as r,F as f,r as v,n as g,_ as h}from"./BnhLGwPz.js";const B={class:"page-guide-nav guide"},N={class:"nav-title"},k={class:"nav"},w=m({__name:"GuideNav",props:{title:{},version:{},menuItems:{}},setup(x){const c=e=>{const t=window.location.pathname.split("/").filter(Boolean).pop()||"",s=e.split("/").filter(Boolean).pop()||"";return t===s};return(e,t)=>{const s=d;return a(),l("div",B,[o("h1",N,[i(s,{to:"/mobile"},{default:p(()=>[t[0]||(t[0]=o("i",{class:"ico-logo"},null,-1)),t[1]||(t[1]=o("br",null,null,-1)),u(r(e.title)+" ",1),o("span",null,r(e.version),1)]),_:1})]),o("ul",k,[(a(!0),l(f,null,v(e.menuItems,(n,_)=>(a(),l("li",{key:_,class:g({on:c(n.path)})},[i(s,{to:n.path},{default:p(()=>[u(r(n.name),1)]),_:2},1032,["to"])],2))),128))])])}}}),I=h(w,[["__scopeId","data-v-deff1c07"]]);export{I as default};
