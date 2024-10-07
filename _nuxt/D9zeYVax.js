import{u as y,e as g,r as u,g as P,o as m,c as v,a as e,t as c,h as f,n as h,_ as k,i as x,b,d,j as T,F as C}from"./C0Ql20qu.js";import{u as w}from"./D3Pvfd34.js";import $ from"./DV8CH_HA.js";import{t as M}from"./8EHUotG8.js";import"./8lDBAVLV.js";function L(l,i){const{title:s,titleTemplate:t,...a}=l;return w({title:s,titleTemplate:t,_flatMeta:a},{...i,transform(o){const p=y({...o._flatMeta});return delete o._flatMeta,{...o,meta:p}}})}const N={class:"pop-wrap"},I={class:"pop-content"},E={key:0,class:"title"},O=["innerHTML"],S={class:"btn-wrap"},V=g({__name:"basicPopup",props:{title:{},description:{},checkText:{}},setup(l,{expose:i}){const s=l,t=u(!1),a=()=>{t.value=!0,console.log("openPopup",t.value)},o=()=>{t.value=!1};return P(t,p=>{document.body.style.overflow=p?"hidden":""}),i({openPopup:a,closePopup:o}),(p,r)=>t.value?(m(),v("div",{key:0,class:h(["pop-layer",{"is-visible":t.value}])},[e("div",{class:"dim",onClick:o}),e("div",N,[e("div",I,[s.title?(m(),v("strong",E,c(s.title),1)):f("",!0),e("p",{innerHTML:s.description},null,8,O)]),e("div",S,[e("button",{onClick:o,class:"btn-type5"},c(s.checkText),1)])])],2)):f("",!0)}}),A=k(V,[["__scopeId","data-v-f86d0a9f"]]),D={class:"pop-wrap"},H={class:"pop-content"},F={class:"title"},B=["innerHTML"],G={class:"btn-wrap"},z=g({__name:"buttonPopup",props:{title:{},description:{},leftText:{},rightText:{}},setup(l,{expose:i}){const s=l,t=u(!1),a=()=>{t.value=!0},o=()=>{t.value=!1};return P(t,p=>{document.body.style.overflow=p?"hidden":""}),i({openPopup:a,closePopup:o}),(p,r)=>t.value?(m(),v("div",{key:0,class:h(["pop-layer",{"is-visible":t.value}])},[e("div",{class:"dim",onClick:o}),e("div",D,[e("div",H,[e("strong",F,c(s.title),1),e("p",{innerHTML:s.description},null,8,B)]),e("div",G,[e("button",{onClick:o,class:"btn-type5"},c(s.leftText),1),e("button",{onClick:o,class:"btn-type5 v2"},c(s.rightText),1)])])],2)):f("",!0)}}),R={class:"pop-wrap"},U={class:"pop-content v2"},j={key:0,class:"skeleton"},W=["src","alt"],Y={class:"btn-wrap"},q=g({__name:"imgPopup",props:{imgSrc:{},imgAlt:{},leftText:{},rightText:{}},setup(l,{expose:i}){const s=l,t=u(!1),a=u(!1),o=()=>{a.value=!0},p=()=>{console.error("이미지 로드 실패:",s.imgSrc)},r=()=>{a.value=!1,t.value=!0},n=()=>{t.value=!1};return P(t,_=>{document.body.style.overflow=_?"hidden":""}),i({openPopup:r,closePopup:n}),(_,ee)=>t.value?(m(),v("div",{key:0,class:h(["pop-layer",{"is-visible":t.value}])},[e("div",{class:"dim",onClick:n}),e("div",R,[e("div",U,[e("div",null,[a.value?f("",!0):(m(),v("div",j)),e("img",{src:s.imgSrc,alt:s.imgAlt,onLoad:o,onError:p},null,40,W)])]),e("div",Y,[e("a",{onClick:n,class:"btn-type5"},c(s.leftText),1),e("a",{onClick:n,class:"btn-type5 v2"},c(s.rightText),1)])])],2)):f("",!0)}}),J=k(q,[["__scopeId","data-v-d9697062"]]),K=g({__name:"toastPopup",props:{duration:{},title:{}},setup(l,{expose:i}){const s=l,t=u(!1),a=()=>{setTimeout(()=>{t.value=!0},100),setTimeout(()=>{t.value=!1},s.duration)},o=()=>{t.value=!1};return i({showPopup:a,hidePopup:o}),(p,r)=>(m(),v("div",{class:h(["toast-box",{active:t.value}]),onClick:o},c(s.title),3))}}),Q={class:"page-guide-content"},X={class:"page-guide-box"},Z={class:"btn-wrap"},ie=g({__name:"index",setup(l){L({title:"HDEzwel PC Guide",meta:[{name:"viewport",content:"width=1460"}]});const i=u(null),s=u(null),t=u(null),a=u(null),o=r=>{switch(r){case"basicPopup":i.value&&i.value.openPopup();break;case"buttonPopup":s.value&&s.value.openPopup();break;case"imgPopup":t.value&&t.value.openPopup();break}},p=()=>{a.value&&a.value.showPopup()};return x(()=>{p()}),(r,n)=>(m(),v(C,null,[b($,{title:"PC Guide",version:"2024.12",menuItems:[{name:"colors",path:"/guide/desktop/colors"},{name:"fonts",path:"/guide/desktop/fonts"},{name:"texts",path:"/guide/desktop/texts"},{name:"buttons",path:"/guide/desktop/buttons"},{name:"forms",path:"/guide/desktop/forms"},{name:"components",path:"/guide/desktop/components"},{name:"icons",path:"/guide/desktop/icons"},{name:"tables",path:"/guide/desktop/tables"},{name:"swipers",path:"/guide/desktop/swipers"},{name:"layerpops",path:"/guide/desktop/layerpops"},{name:"videos",path:"/guide/desktop/videos"}]}),e("div",Q,[n[4]||(n[4]=e("h2",{class:"page-guide-title"},"Layer PopUp",-1)),n[5]||(n[5]=e("h3",{class:"page-guide-title2"},"basic popup",-1)),e("div",X,[n[3]||(n[3]=e("div",{class:"text"},[d(" @click openPopup 이벤트 메소드"),e("br"),d(` 예시 @click="openPopup('basicPopup')" `)],-1)),e("div",Z,[e("button",{onClick:n[0]||(n[0]=_=>o("basicPopup")),class:"btn-type"},"basic"),e("button",{onClick:n[1]||(n[1]=_=>o("buttonPopup")),class:"btn-type"},"button"),e("button",{onClick:n[2]||(n[2]=_=>o("imgPopup")),class:"btn-type"},"img")])]),n[6]||(n[6]=e("h3",{class:"page-guide-title2"},"toast",-1)),n[7]||(n[7]=e("div",{class:"page-guide-box"},[e("div",{class:"text"},[d(" toastPopupLayer컴포넌트"),e("br"),d(" title은 string값이고,"),e("br"),d(" :duration값은 토스트 팝업에 유지 시간 타입은 number, 이벤트 함수"),e("br"),d(" 초기값: showToastPopup함수 실행이후"),e("br"),d(" onMounte 이후 이벤트 실행 ")])],-1))]),b(A,{ref_key:"basicPopup",ref:i,title:"Notice of delivery delay",description:"Delivery may be delayed in some areas",checkText:"CONFIRM"},null,512),b(z,{ref_key:"buttonPopup",ref:s,title:"WCONCEPT NOTICE",description:"The latest version has been released. Please<br/>use it after updating to the new version.",leftText:"CONFIRM",rightText:"UPDATE"},null,512),b(J,{ref_key:"imgPopup",ref:t,imgSrc:T(M),imgAlt:"테스트 이미지",leftText:"DO NOT OPEN TODAY",rightText:"CLOSE"},null,8,["imgSrc"]),b(K,{ref_key:"toastPopup",ref:a,title:" The status has been changed to consent.",duration:3e3},null,512)],64))}});export{ie as default};
