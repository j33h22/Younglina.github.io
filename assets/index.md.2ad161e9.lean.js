import{u as y,_ as k}from"./chunks/docList.9e36a937.js";import{g as F,G as w,o as e,c as s,a as t,f as h,t as o,u as n,F as d,b as _,e as u,h as S}from"./app.06eb71f5.js";const C="/littlear.jpg",D="/github.svg",N="/leetcode.svg",j="/juejin.svg";const x={class:"home-page"},A=t("div",{class:"home-top"},[t("h1",{class:"name"},"littlear"),t("p",{class:"tagline"},"littlear是一只聪明可爱的猫.")],-1),B={class:"docs-wrap"},E={class:"docs info-wrapper"},M={class:"info-person"},T=t("img",{class:"info-avatar",src:C},null,-1),V=t("div",{class:"info-name"},"littlear",-1),I={class:"info-num"},Y=t("h6",null,"文章",-1),$=t("h6",null,"标签",-1),G=S("",1),O=t("h3",{class:"docs-types"},"分类",-1),P=["href"],L=t("h3",{class:"docs-types"},"标签",-1),R=["href"],z={__name:"home",setup(g){const c=["#FFB3B3","#FFDBA4","#FFE9AE","#C1EFFF"],{docData:m,categories:p,tags:f,docNum:v,tagNum:b}=y();return F(()=>{if(typeof window!==void 0){console.log(window,"window"),console.log(document,"document");var l=document.createElement("div");l.setAttribute("id","gitalk-container"),document.body.appendChild(l);var r=new w({id:location.pathname,owner:"Younglina",repo:"Younglina.github.io",clientID:"91a579be5a403288bdb7",admin:["Younglina"],labels:["Gitalk"],proxy:"https://cors-server-ecru.vercel.app/github_access_token",createIssueManually:!0,clientSecret:"6af31ca2f5dfc7bc7feed23a8642d23993dcc9c3"});r.render("gitalk-container")}}),(l,r)=>(e(),s("div",x,[A,t("div",B,[h(k),t("div",E,[t("div",M,[T,V,t("div",I,[t("div",null,[t("h3",null,o(n(v)),1),Y]),t("div",null,[t("h3",null,o(n(b)),1),$])]),G]),t("div",null,[O,(e(!0),s(d,null,_(n(p),(a,i)=>(e(),s("a",{key:i,class:"docs-categor docs",href:`/categories?cat=${i}&type=cat`,target:"_blank"},[t("span",null,o(i),1),t("span",{class:"docs-categor-num",style:u({backgroundColor:c[Math.floor(Math.random()*4)]})},o(a),5)],8,P))),128))]),t("div",null,[L,(e(!0),s(d,null,_(n(f),a=>(e(),s("a",{key:a,class:"docs-tags",style:u({backgroundColor:c[Math.floor(Math.random()*4)]}),href:`/categories?tag=${a}&type=tag`,target:"_blank"},[t("div",null,o(a),1)],12,R))),128))])])])]))}},H=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md","lastUpdated":1662613821000}'),J={name:"index.md"},K=Object.assign(J,{setup(g){return(c,m)=>(e(),s("div",null,[h(z)]))}});export{H as __pageData,K as default};