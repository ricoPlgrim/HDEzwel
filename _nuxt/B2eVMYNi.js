import{Z as t}from"./C0Ql20qu.js";const s=t("device",{state:()=>({device:"desktop"}),actions:{detectDevice(){const e=navigator.userAgent;this.device=/mobile/i.test(e)?"mobile":"desktop"},setDevice(e){this.device=e}}});export{s as u};
