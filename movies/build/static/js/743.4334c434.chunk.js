"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[743],{3855:(e,t,a)=>{a.d(t,{$K:()=>m,HI:()=>s,Hg:()=>l,JZ:()=>n,XT:()=>r,ev:()=>d,gb:()=>u,on:()=>h,tx:()=>i,uV:()=>c,vB:()=>o});const r=()=>fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat("7c31daf1a981dec5e6082a488e5944d2","&language=en-US&include_adult=false&include_video=false&page=1")).then((e=>{if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((e=>{throw e})),s=e=>{console.log(e);const[,t]=e.queryKey,{id:a}=t;return fetch("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat("7c31daf1a981dec5e6082a488e5944d2")).then((e=>{if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((e=>{throw e}))},n=async()=>fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=7c31daf1a981dec5e6082a488e5944d2&language=en-US").then((e=>{if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((e=>{throw e})),o=e=>{let{queryKey:t}=e;const[,a]=t,{id:r}=a;return fetch("https://api.themoviedb.org/3/movie/".concat(r,"/images?api_key=").concat("7c31daf1a981dec5e6082a488e5944d2")).then((e=>{if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((e=>{throw e}))},i=e=>fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("7c31daf1a981dec5e6082a488e5944d2")).then((e=>e.json())).then((e=>e.results)),c=()=>fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("7c31daf1a981dec5e6082a488e5944d2","&language=en-US&page=1")).then((e=>{if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((e=>{throw e})),l=()=>fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat("7c31daf1a981dec5e6082a488e5944d2","&language=en-US&page=1")).then((e=>e.ok?e.json():e.json().then((e=>{throw new Error(e.message||"Failed to fetch latest movies")})))).catch((e=>{throw e})),d=()=>fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("7c31daf1a981dec5e6082a488e5944d2","&language=en-US&page=1")).then((e=>e.ok?e.json():e.json().then((e=>{throw new Error(e.message||"Failed to fetch latest movies")})))).catch((e=>{throw e})),h=()=>fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat("7c31daf1a981dec5e6082a488e5944d2","&language=en-US&page=1")).then((e=>e.ok?e.json():e.json().then((e=>{throw new Error(e.message||"Failed to fetch latest movies")})))).catch((e=>{throw e})),m=e=>{const[,t]=e.queryKey,{id:a}=t;return fetch("https://api.themoviedb.org/3/movie/".concat(a,"/recommendations?api_key=").concat("7c31daf1a981dec5e6082a488e5944d2","&page=1")).then((e=>{if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((e=>{throw e}))},u=e=>{const[,t]=e.queryKey,{id:a}=t;return fetch("https://api.themoviedb.org/3/movie/".concat(a,"/similar?api_key=").concat("7c31daf1a981dec5e6082a488e5944d2")).then((e=>{if(!e.ok)throw new Error(e.json().message);return e.json()})).catch((e=>{throw e}))}},998:(e,t,a)=>{a.d(t,{Z:()=>n});a(390);var r=a(8201),s=a(2559);function n(){return(0,s.jsxs)("div",{sx:{display:"flex",justifyContent:"center","& > * + *":{marginLeft:"2em"}},children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)(r.Z,{})]})}},4829:(e,t,a)=>{a.d(t,{Z:()=>J});var r=a(390),s=a(5557),n=a(2457),o=a(5478),i=a(6649),c=a(5477),l=a(5545),d=a(2559);const h=e=>{const t=e.title,a=(0,l.s0)();return(0,d.jsxs)(o.Z,{component:"div",sx:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginBottom:1.5},children:[(0,d.jsx)(i.Z,{"aria-label":"go back",onClick:()=>a(-1),children:(0,d.jsx)(s.Z,{color:"primary",fontSize:"large"})}),(0,d.jsx)(c.Z,{variant:"h4",component:"h3",children:t}),(0,d.jsx)(i.Z,{"aria-label":"go forward",onClick:()=>a(1),children:(0,d.jsx)(n.Z,{color:"primary",fontSize:"large"})})]})};var m=a(6356),u=a(8965),p=a(2818),g=a(4602),v=a(2016),x=a(2066),j=a(3752),f=a(7554),Z=a(2561);const b=a.p+"static/media/pexels-dziana-hasanbekava-5480827.6123c500508cea5447e7.jpg";var y=a(3855),w=a(4514),k=a(998);const _={margin:1,minWidth:220,backgroundColor:"rgb(255, 255, 255)"},S=[{value:"popularity.desc",label:"Popularity Desc"},{value:"popularity.asc",label:"Popularity Asc"},{value:"release_date.desc",label:"Release Date Desc"},{value:"release_date.asc",label:"Release Date Asc"}];function C(e){const{data:t,error:a,isLoading:r,isError:s}=(0,w.useQuery)("genres",y.JZ);if(r)return(0,d.jsx)(k.Z,{});if(s)return(0,d.jsx)("h1",{children:a.message});const n=t.genres;"All"!==n[0].name&&n.unshift({id:"0",name:"All"});const o=(t,a,r)=>{t.preventDefault(),e.onUserInput(a,r)};return(0,d.jsxs)(m.Z,{sx:{maxWidth:345,backgroundColor:"lightslategrey"},variant:"outlined",children:[(0,d.jsxs)(p.Z,{children:[(0,d.jsxs)(c.Z,{variant:"h5",component:"h1",children:[(0,d.jsx)(j.Z,{fontSize:"large"}),"Filter the movies."]}),(0,d.jsx)(x.Z,{sx:{..._},id:"filled-search",label:"Search field",type:"search",variant:"filled",value:e.titleFilter,onChange:(e,t)=>{o(e,"name",e.target.value)}}),(0,d.jsxs)(f.Z,{sx:{..._},children:[(0,d.jsx)(g.Z,{id:"genre-label",children:"Genre"}),(0,d.jsx)(Z.Z,{labelId:"genre-label",id:"genre-select",defaultValue:"",value:e.genreFilter,onChange:e=>{o(e,"genre",e.target.value)},children:n.map((e=>(0,d.jsx)(v.Z,{value:e.id,children:e.name},e.id)))})]}),(0,d.jsxs)(f.Z,{sx:{..._},children:[(0,d.jsx)(g.Z,{id:"sort-label",children:"Sort By"}),(0,d.jsx)(Z.Z,{labelId:"sort-label",id:"sort-select",defaultValue:"",onChange:e=>{o(e,"sort",e.target.value)},children:S.map((e=>(0,d.jsx)(v.Z,{value:e.value,children:e.label},e.value)))})]})]}),(0,d.jsx)(u.Z,{sx:{height:300},image:b,title:"Filter"}),(0,d.jsx)(p.Z,{children:(0,d.jsxs)(c.Z,{variant:"h5",component:"h1",children:[(0,d.jsx)(j.Z,{fontSize:"large"}),"Filter the movies.",(0,d.jsx)("br",{})]})})]})}var F=a(9284),E=a(6192),P=a(82),U=a(2340),z=a(7686),D=a(497),W=a(5594);const I=a.p+"static/media/film-poster-placeholder.9a8182eb4c8ae70fe602.png";var K=a(5400),L=a(720),q=a(3730);function A(e){let{movie:t,action:a}=e;const{favorites:s,addToFavorites:n,mustWatch:o,addToMustWatch:i}=(0,r.useContext)(q.m);s.find((e=>e===t.id))?t.favorite=!0:t.favorite=!1;o.find((e=>e===t.id))?t.mustWatch=!0:t.mustWatch=!1;return(0,d.jsxs)(m.Z,{sx:{maxWidth:345,backgroundColor:"beige"},children:[(0,d.jsx)(E.Z,{avatar:t.favorite?(0,d.jsx)(L.Z,{sx:{backgroundColor:"red"},children:(0,d.jsx)(U.Z,{})}):null,title:(0,d.jsxs)(c.Z,{variant:"h6",component:"p",children:[t.title," "]})}),(0,d.jsx)(u.Z,{sx:{height:500},image:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):I}),(0,d.jsx)(p.Z,{children:(0,d.jsxs)(W.ZP,{container:!0,children:[(0,d.jsx)(W.ZP,{item:!0,xs:6,children:(0,d.jsxs)(c.Z,{variant:"h6",component:"p",children:[(0,d.jsx)(z.Z,{fontSize:"small"}),t.release_date]})}),(0,d.jsx)(W.ZP,{item:!0,xs:6,children:(0,d.jsxs)(c.Z,{variant:"h6",component:"p",children:[(0,d.jsx)(D.Z,{fontSize:"small"}),"  "," ",t.vote_average," "]})})]})}),(0,d.jsxs)(F.Z,{disableSpacing:!0,children:[a(t),(0,d.jsx)(K.rU,{to:"/movies/".concat(t.id),children:(0,d.jsx)(P.Z,{variant:"outlined",size:"medium",color:"primary",children:"More Info ..."})})]})]})}const B=e=>{let{movies:t,action:a}=e;return t.map((e=>(0,d.jsx)(W.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:(0,d.jsx)(A,{movie:e,action:a},e.id)},e.id)))};const J=function(e){let{movies:t,title:a,action:s}=e;const[n,o]=(0,r.useState)(""),[i,c]=(0,r.useState)("0"),[l,m]=(0,r.useState)(""),u=Number(i);function p(e,t){return parseFloat(e.popularity)-parseFloat(t.popularity)}let g=t.filter((e=>-1!==e.title.toLowerCase().search(n.toLowerCase()))).filter((e=>!(u>0)||e.genre_ids.includes(u)));return"popularity.desc"===l?g=g.sort(p).reverse():"popularity.asc"===l?g=g.sort(p):"release_date.desc"===l?g=g.sort(((e,t)=>new Date(t.release_date)-new Date(e.release_date))):"release_date.asc"===l&&(g=g.sort(((e,t)=>new Date(e.release_date)-new Date(t.release_date)))),(0,d.jsxs)(W.ZP,{container:!0,sx:{padding:"20px",backgroundColor:"lightgrey"},children:[(0,d.jsx)(W.ZP,{item:!0,xs:12,children:(0,d.jsx)(h,{title:a})}),(0,d.jsxs)(W.ZP,{item:!0,container:!0,spacing:5,children:[(0,d.jsx)(W.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:(0,d.jsx)(C,{onUserInput:(e,t)=>{"name"===e?o(t):"genre"===e?c(t):"sort"===e&&m(t)},titleFilter:n,genreFilter:i})},"find"),(0,d.jsx)(B,{action:s,movies:g})]})]})}},8025:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(390),s=a(5545),n=a(4514),o=a(3855),i=a(998),c=a(4829),l=a(2559);const d=(0,r.lazy)((()=>a.e(428).then(a.bind(a,7428)))),h=e=>{const{id:t}=(0,s.UO)(),{data:a,error:h,isLoading:m,isError:u}=(0,n.useQuery)(["movie",{id:t},"recommendations"],o.gb);if(m)return(0,l.jsx)(i.Z,{});if(u)return(0,l.jsx)("h1",{children:h.message});const p=a.results,g=p.filter((e=>e.favorite));return localStorage.setItem("favorites",JSON.stringify(g)),(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)(i.Z,{}),children:(0,l.jsx)(c.Z,{title:"Similar Movies",movies:p,action:e=>(0,l.jsx)(d,{movie:e})})})}}}]);
//# sourceMappingURL=743.4334c434.chunk.js.map