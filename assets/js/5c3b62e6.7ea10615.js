"use strict";(self.webpackChunkpan_documentation=self.webpackChunkpan_documentation||[]).push([[664],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6776:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Token Wrapping Mechanism",sidebar_position:3},s=void 0,p={unversionedId:"tokeconomics/wrapping",id:"tokeconomics/wrapping",title:"Token Wrapping Mechanism",description:"The wrap function is a method used to convert PAN tokens into another token and vice-versa. To mint PAN tokens, the platform must burn SCB tokens, whereas burning PAN tokens leads the system to mint StableColb (SCB).",source:"@site/docs/tokeconomics/wrapping.md",sourceDirName:"tokeconomics",slug:"/tokeconomics/wrapping",permalink:"/pan-documentation/tokeconomics/wrapping",editUrl:"https://github.com/bft-pan/pan-documentation/docs/tokeconomics/wrapping.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Token Wrapping Mechanism",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Stablecoin",permalink:"/pan-documentation/tokeconomics/stablecoin"},next:{title:"NFT Supply Governance Price Stability Mechanisms",permalink:"/pan-documentation/tokeconomics/supply-governance"}},u={},l=[],m={toc:l};function f(e){var t=e.components,c=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The wrap function is a method used to convert PAN tokens into another token and vice-versa. To mint PAN tokens, the platform must burn SCB tokens, whereas burning PAN tokens leads the system to mint StableColb (SCB)."),(0,i.kt)("p",null,"When doing the wrap mint, PAN\u2019s system will show the availability of SCB that can be \u201cconverted\u201d into PAN tokens. The minter selects the amount to be processed and chooses the transaction fee. This process can only be carried out in case the backoffice wallet has a balance in MATIC."),(0,i.kt)("p",null,"When doing the unwrap burn, PAN\u2019s system will show the availability of PAN tokens that can be \u201cconverted\u201d into SCB. The burner selects the amount to be processed and chooses the transaction fee. Likewise, this process can only be carried out in case the backoffice wallet has a balance in MATIC. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PAN",src:n(9899).Z,width:"1280",height:"720"})))}f.isMDXComponent=!0},9899:function(e,t,n){t.Z=n.p+"assets/images/colb-1c483fa9dff4f54242d0a21726988468.png"}}]);