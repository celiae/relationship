(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{6616:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/network",function(){return a(9822)}])},3047:function(e,r,a){"use strict";a.d(r,{_i:function(){return t}}),a(8100);let t=e=>fetch(e).then(e=>e.json())},9822:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return X}});var t=a(5893),i=a(9008),n=a.n(i),o=a(7294),l=a(4037),d=a(8419),s=a(3366),u=a(7462),f=a(6010),c=a(4780),m=a(917),b=a(1796),h=a(6622),p=a(2097),v=a(1719),g=a(8884),w=a(1588),y=a(4867);function x(e){return(0,y.Z)("MuiLinearProgress",e)}(0,w.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);let Z=["className","color","value","valueBuffer","variant"],k=e=>e,C,N,P,j,$,_,q=(0,m.F4)(C||(C=k`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),L=(0,m.F4)(N||(N=k`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),B=(0,m.F4)(P||(P=k`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),S=e=>{let{classes:r,variant:a,color:t}=e,i={root:["root",`color${(0,h.Z)(t)}`,a],dashed:["dashed",`dashedColor${(0,h.Z)(t)}`],bar1:["bar",`barColor${(0,h.Z)(t)}`,("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&`barColor${(0,h.Z)(t)}`,"buffer"===a&&`color${(0,h.Z)(t)}`,("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return(0,c.Z)(i,x,r)},I=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,b.$n)(e.palette[r].main,.62):(0,b._j)(e.palette[r].main,.5),M=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(e,r){let{ownerState:a}=e;return[r.root,r[`color${(0,h.Z)(a.color)}`],r[a.variant]]}})(({ownerState:e,theme:r})=>(0,u.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:I(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),F=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(e,r){let{ownerState:a}=e;return[r.dashed,r[`dashedColor${(0,h.Z)(a.color)}`]]}})(({ownerState:e,theme:r})=>{let a=I(r,e.color);return(0,u.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,m.iv)(j||(j=k`
    animation: ${0} 3s infinite linear;
  `),B)),R=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(e,r){let{ownerState:a}=e;return[r.bar,r[`barColor${(0,h.Z)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&r.bar1Indeterminate,"determinate"===a.variant&&r.bar1Determinate,"buffer"===a.variant&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>(0,u.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,m.iv)($||($=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),q)),z=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(e,r){let{ownerState:a}=e;return[r.bar,r[`barColor${(0,h.Z)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&r.bar2Indeterminate,"buffer"===a.variant&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>(0,u.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:I(r,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,m.iv)(_||(_=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),L)),E=o.forwardRef(function(e,r){let a=(0,g.Z)({props:e,name:"MuiLinearProgress"}),{className:i,color:n="primary",value:o,valueBuffer:l,variant:d="indeterminate"}=a,c=(0,s.Z)(a,Z),m=(0,u.Z)({},a,{color:n,variant:d}),b=S(m),h=(0,p.Z)(),v={},w={bar1:{},bar2:{}};if(("determinate"===d||"buffer"===d)&&void 0!==o){v["aria-valuenow"]=Math.round(o),v["aria-valuemin"]=0,v["aria-valuemax"]=100;let y=o-100;"rtl"===h.direction&&(y=-y),w.bar1.transform=`translateX(${y}%)`}if("buffer"===d&&void 0!==l){let x=(l||0)-100;"rtl"===h.direction&&(x=-x),w.bar2.transform=`translateX(${x}%)`}return(0,t.jsxs)(M,(0,u.Z)({className:(0,f.Z)(b.root,i),ownerState:m,role:"progressbar"},v,{ref:r},c,{children:["buffer"===d?(0,t.jsx)(F,{className:b.dashed,ownerState:m}):null,(0,t.jsx)(R,{className:b.bar1,ownerState:m,style:w.bar1}),"determinate"===d?null:(0,t.jsx)(z,{className:b.bar2,ownerState:m,style:w.bar2})]}))});function O(e){let{network:r}=e,[a,i]=o.useState(r);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{style:{height:400,width:"100%"},children:(0,t.jsx)(l._,{checkboxSelection:!0,rows:a,columns:[{field:"first_name",headerName:"First name",width:150},{field:"last_name",headerName:"Last name",width:150},{field:"gender",headerName:"gender",width:150},{field:"email",headerName:"email",width:150},{field:"birthday",headerName:"birthday",width:150},{field:"phone",headerName:"phone",width:150},{field:"address",headerName:"address",width:150},{field:"degree",headerName:"degree",width:150},{field:"qq",headerName:"qq",width:150},{field:"wechat",headerName:"wechat",width:150},{field:"relation",headerName:"relation",width:150}],components:{Toolbar:d.n,LoadingOverlay:E}})})})}var D=a(8100),T=a(3047);function X(){let{data:e,error:r}=(0,D.ZP)("/api/network",T._i);return r?(0,t.jsx)("div",{children:"Failed to load"}):e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:"Network | Relationship"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(O,{network:e})]}):(0,t.jsx)("div",{children:"Loading..."})}}},function(e){e.O(0,[970,52,774,888,179],function(){return e(e.s=6616)}),_N_E=e.O()}]);