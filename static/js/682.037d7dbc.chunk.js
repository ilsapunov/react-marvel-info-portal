"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[682],{3957:(e,t,c)=>{c.d(t,{Z:()=>n});const s=c.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",a=c.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var i=c(184);const n=()=>(0,i.jsxs)("div",{className:"app__banner",children:[(0,i.jsx)("img",{src:s,alt:"Avengers"}),(0,i.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,i.jsx)("br",{}),"Stay tuned!"]}),(0,i.jsx)("img",{src:a,alt:"Avengers logo"})]})},9613:(e,t,c)=>{c.d(t,{Z:()=>i});const s=c.p+"static/media/error.42292aa12b6bc303ce99.gif";var a=c(184);const i=()=>(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:s,alt:"error"})},1748:(e,t,c)=>{c.r(t),c.d(t,{default:()=>p});var s=c(4270),a=c(3957),i=c(2791),n=c(1523),r=c(4304),o=c(3394),l=c(9613),d=c(184);const m=(e,t,c)=>{switch(e){case"waiting":return(0,d.jsx)(o.Z,{});case"loading":return c?(0,d.jsx)(t,{}):(0,d.jsx)(o.Z,{});case"confirmed":return(0,d.jsx)(t,{});case"error":return(0,d.jsx)(l.Z,{});default:throw new Error("Unexpected process state")}},u=()=>{const[e,t]=(0,i.useState)([]),[c,s]=(0,i.useState)(!1),[a,o]=(0,i.useState)(0),[l,u]=(0,i.useState)(!1),{getAllComics:p,process:h,setProcess:g}=(0,r.Z)();(0,i.useEffect)((()=>{b(a,!0)}),[]);const b=(e,t)=>{s(!t),p(e).then(x).then((()=>g("confirmed")))},x=c=>{let i=!1;c.length<8&&(i=!0),t([...e,...c]),s(!1),o(a+8),u(i)};return(0,d.jsxs)("div",{className:"comics__list",children:[m(h,(()=>function(e){const t=e.map(((e,t)=>(0,d.jsx)("li",{className:"comics__item",children:(0,d.jsxs)(n.rU,{to:"/comics/".concat(e.id),children:[(0,d.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,d.jsx)("div",{className:"comics__item-name",children:e.title}),(0,d.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)));return(0,d.jsx)("ul",{className:"comics__grid",children:t})}(e)),c),(0,d.jsx)("button",{disabled:c,style:{display:l?"none":"block"},className:"button button__main button__long",onClick:()=>b(a),children:(0,d.jsx)("div",{className:"inner",children:"load more"})})]})},p=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.q,{children:[(0,d.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,d.jsx)("title",{children:"Comics page"})]}),(0,d.jsx)(a.Z,{}),(0,d.jsx)(u,{})]})},4304:(e,t,c)=>{c.d(t,{Z:()=>a});var s=c(2791);const a=()=>{const{request:e,clearError:t,process:c,setProcess:a}=(()=>{const[e,t]=(0,s.useState)("waiting");return{request:(0,s.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t("loading");try{const t=await fetch(e,{method:c,body:s,headers:a});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(t.status));return await t.json()}catch(i){throw t("error"),i}}),[]),clearError:(0,s.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})(),i="https://gateway.marvel.com:443/v1/public/",n="0f8b6f36b644387fb02a919657af13b2",r=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",fullDescription:e.description?e.description:"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),o=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:t,process:c,setProcess:a,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(i,"characters?limit=9&offset=").concat(t,"&apikey=").concat(n))).data.results.map(r)},getCharacter:async t=>{const c=await e("".concat(i,"characters/").concat(t,"?apikey=").concat(n));return r(c.data.results[0])},getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(i,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&apikey=").concat(n))).data.results.map(o)},getComic:async t=>{const c=await e("".concat(i,"comics/").concat(t,"?apikey=").concat(n));return o(c.data.results[0])},getCharacterByName:async t=>(await e("".concat(i,"characters?name=").concat(t,"&apikey=").concat(n))).data.results.map(r)}}}}]);
//# sourceMappingURL=682.037d7dbc.chunk.js.map