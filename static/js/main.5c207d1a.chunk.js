(this.webpackJsonpreaktor=this.webpackJsonpreaktor||[]).push([[0],{76:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n(0),a=n.n(c),s=n(16),i=n.n(s),o=n(14),u=n(93),l=n(95),d=n(96),f=function(t){var e=t.selectedProductGroup,n=t.setSelectedProductGroup;return Object(r.jsx)("div",{children:Object(r.jsx)(d.a,{value:e,exclusive:!0,onChange:function(t,e){n(e)},children:["jackets","shirts","accessories"].map((function(t){return Object(r.jsx)(l.a,{value:t,children:Object(r.jsx)(u.a,{children:t})},t)}))})})},j=n(23),p=n.n(j),x=n(24),b=n.n(x),h=n(22),O=n.n(h),v=n(94),m=Object(v.a)({app:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",margin:10},iconInfoContainer:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"left",marginTop:10,padding:3},infoRow:{display:"flex",flexDirection:"row",justifyContent:"flex-start"},inStock:{color:"green"},outOfStock:{color:"red"},productRow:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",backgroundColor:"#e7e7e4",borderRadius:6,marginBottom:3,padding:3},productDetailsBox:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"left",marginLeft:3},productDetailsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},dotsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-start",marginLeft:10}}),w=function(t){var e=t.dotColor;return Object(r.jsx)("div",{style:{width:10,height:10,borderRadius:5,backgroundColor:e,marginLeft:3}})},g=function(t){var e=[];return t.color&&t.color.length>0&&t.color.forEach((function(n){e.push(Object(r.jsx)(w,{dotColor:n},n+t.id))})),e},y=function(t){var e=t.product,n=m();return Object(r.jsx)("div",{className:n.dotsContainer,children:g(e)})},k=function(t){var e=t.product,n=t.stockStatus,c=m(),a="";return e.price&&(a=a.concat(e.price,"\u20ac   ")),e.manufacturer&&(a=a.concat("(",e.manufacturer,")")),Object(r.jsxs)("div",{className:c.productRow,children:[null===n?Object(r.jsx)(O.a,{}):n?Object(r.jsx)(p.a,{className:c.inStock}):Object(r.jsx)(b.a,{className:c.outOfStock}),Object(r.jsxs)("div",{className:c.productDetailsBox,children:[Object(r.jsx)("div",{children:e.name}),Object(r.jsxs)("div",{className:c.productDetailsContainer,children:[a,Object(r.jsx)(y,{product:e})]})]})]})},C=n(41),S=function(t){var e=t.products,n=t.availabilities,c=Math.min(.9*window.innerWidth,300),a=.55*window.innerHeight;if(e.error)return Object(r.jsx)(u.a,{children:e.error});return Object(r.jsx)("div",{style:{margin:5},children:Object(r.jsx)(C.a,{className:"List",height:a,itemCount:e.length,itemSize:46,width:c,children:function(t){var c=t.index,a=t.style,s=e[c],i=null===n||void 0===n[s.id]?null:n[s.id];return Object(r.jsx)("div",{style:a,children:Object(r.jsx)(k,{product:s,stockStatus:i},s.id)})}})})},N=function(){var t=m();return Object(r.jsxs)("div",{className:t.iconInfoContainer,children:[Object(r.jsxs)("div",{className:t.infoRow,children:[Object(r.jsx)(O.a,{}),Object(r.jsx)(u.a,{children:"Waiting or data not available"})]}),Object(r.jsxs)("div",{className:t.infoRow,children:[Object(r.jsx)(b.a,{className:t.outOfStock}),Object(r.jsx)(u.a,{children:"Not in stock"})]}),Object(r.jsxs)("div",{className:t.infoRow,children:[Object(r.jsx)(p.a,{className:t.inStock}),Object(r.jsx)(u.a,{children:"In stock"})]})]})},D=n(5),I=n.n(D),E=n(11),R=n(30),L=n.n(R),P="https://bad-api-assignment.reaktor.com",T=function(){var t=Object(E.a)(I.a.mark((function t(e){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("".concat(P,"/products/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(E.a)(I.a.mark((function t(e){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("".concat(P,"/availability/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function B(t){return G.apply(this,arguments)}function G(){return(G=Object(E.a)(I.a.mark((function t(e){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:return n=t.sent,r=n.sort((function(t,e){return t.name.localeCompare(e.name)})),t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{error:"Error in downloading ".concat(e," data.")});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function W(t){return H.apply(this,arguments)}function H(){return(H=Object(E.a)(I.a.mark((function t(e){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:if("[]"!==(n=t.sent).response){t.next=6;break}return t.abrupt("return",[]);case 6:return t.abrupt("return",n.response);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function J(t){var e=new Set;return t.forEach((function(t){t.forEach((function(t){t.error||e.add(t.manufacturer)}))})),e}function K(t){return M.apply(this,arguments)}function M(){return(M=Object(E.a)(I.a.mark((function t(e){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],e.forEach((function(t){n.push(W(t))})),r={},t.next=5,Promise.all(n);case 5:return t.sent.forEach((function(t){t.forEach((function(t){r[t.id.toLowerCase()]=-1!==t.DATAPAYLOAD.toString().indexOf(">INSTOCK<")}))})),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(){return(z=Object(E.a)(I.a.mark((function t(e,n,r,c){var a,s,i,o,u;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B("jackets");case 2:return a=t.sent,e(a),t.next=6,B("shirts");case 6:return s=t.sent,n(s),t.next=10,B("accessories");case 10:return i=t.sent,r(i),o=J([a,s,i]),t.next=15,K(o);case 15:u=t.sent,c(u);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){return(F=Object(E.a)(I.a.mark((function t(e,n,r,c){var a,s,i,o,u;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B("jackets");case 2:return a=t.sent,t.next=5,B("shirts");case 5:return s=t.sent,t.next=8,B("accessories");case 8:return i=t.sent,o=J([a,s,i]),t.next=12,K(o);case 12:u=t.sent,e(a),n(s),r(i),c(u);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Y=function(){var t=Object(c.useState)(null),e=Object(o.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),l=i[0],d=i[1],j=Object(c.useState)(null),p=Object(o.a)(j,2),x=p[0],b=p[1],h=Object(c.useState)(null),O=Object(o.a)(h,2),v=O[0],w=O[1],g=Object(c.useState)(null),y=Object(o.a)(g,2),k=y[0],C=y[1],D=m(),I=3e5;return Object(c.useEffect)((function(){!function(t,e,n,r){z.apply(this,arguments)}(a,d,b,w)}),[]),Object(c.useEffect)((function(){var t=setInterval((function(){!function(t,e,n,r){F.apply(this,arguments)}(a,d,b,w)}),I);return function(){return clearInterval(t)}}),[I]),Object(r.jsxs)("div",{className:D.app,children:[Object(r.jsx)(u.a,{variant:"h5",children:"WHAT'S IN STOCK?"}),Object(r.jsx)(u.a,{children:"Toggle to select a product group"}),Object(r.jsx)(f,{selectedProductGroup:k,setSelectedProductGroup:C}),"jackets"===k&&null!==n&&Object(r.jsx)(S,{products:n,availabilities:v}),"shirts"===k&&null!==l&&Object(r.jsx)(S,{products:l,availabilities:v}),"accessories"===k&&null!==x&&Object(r.jsx)(S,{products:x,availabilities:v}),null!==k&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u.a,{children:"Scroll down to view more items"}),Object(r.jsx)(N,{})]})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Y,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.5c207d1a.chunk.js.map