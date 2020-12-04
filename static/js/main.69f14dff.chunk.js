(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{92:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),r=n.n(c),o=n(8),i=n.n(o),d=n(146),s=n(71),l=Object(s.a)({palette:{common:{black:"#222831",white:"#EEEEEE"},primary:{main:"#393E46"},secondary:{main:"#FFD369"}}}),u=n(17),b=n(29),j=n(19),m=n(132),h=n(134),p=n(147),O=n(138),x=n(139),f=Object(m.a)((function(e){return{textInput:{"& label":{color:e.palette.common.white},"& .MuiInputBase-input":{color:e.palette.common.white}}}})),g=Object(j.b)((function(e){return{lists:e.todolists}}),(function(e){return{addToDoList:function(t){return e({type:"ADD_TODO",payload:{text:t}})}}}))((function(e){var t=f(),n=(Object(c.useRef)(null),Object(c.useState)("")),r=Object(b.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("form",{style:{width:"100%"},children:Object(a.jsxs)(h.a,{container:!0,children:[Object(a.jsx)(h.a,{item:!0,sm:10,children:Object(a.jsx)(p.a,{type:"text",id:"standard-start-adornment",label:"What do you want to do?",color:"secondary",fullWidth:!0,classes:{root:t.textInput},InputLabelProps:{shrink:!0},onChange:function(e){i(e.target.value)},value:o})}),Object(a.jsx)(h.a,{item:!0,sm:2,style:{textAlign:"center"},children:Object(a.jsx)(O.a,{"aria-label":"add",type:"submit",onClick:function(t){t.preventDefault(),e.addToDoList(o),i("")},children:Object(a.jsx)(x.a,{color:"secondary",style:{fontSize:"3rem"},children:"add_circle"})})})]})})})),v=(n(92),n(140)),k=n(148),y=n(142),E=n(141),w=n(65),T=n.n(w),I=n(136),C=n(66),D=n.n(C),L=Object(m.a)((function(e){return{checkbox:{color:e.palette.secondary.main},deleteIcon:{color:e.palette.secondary.main},editIcon:{color:e.palette.secondary.main},input:{color:"#EEEEEE",borderColor:"#EEEEEE",width:"90%"}}})),S=Object(j.b)(null,(function(e){return{toggleChecked:function(t){return e(function(e){return{type:"TOGGLE_CHECK",payload:{id:e}}}(t))},deleteList:function(t){return e(function(e){return{type:"DELETE_LIST",payload:{id:e}}}(t))},editList:function(t,n){return e(function(e,t){return{type:"EDIT_LIST",payload:{id:e,text:t}}}(t,n))}}}))((function(e){var t=e.list,n=e.toggleChecked,r=e.deleteList,o=e.editList,i=L(),d=Object(c.useState)(t.checked),s=Object(b.a)(d,2),l=s[0],u=s[1],j=Object(c.useState)(!1),m=Object(b.a)(j,2),h=m[0],p=m[1],x=Object(c.useState)(t.text),f=Object(b.a)(x,2),g=f[0],w=f[1],C=Object(c.useState)(0),S=Object(b.a)(C,2),N=S[0],_=S[1],A=Object(c.useRef)(null);Object(c.useEffect)((function(){return document.addEventListener("mousedown",F),function(){document.removeEventListener("mousedown",F)}}),[]);var F=function(e){var t;(null===A||void 0===A||null===(t=A.current)||void 0===t?void 0:t.contains(e.target))||p(!1)};return Object(a.jsx)(v.a,{children:h?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(k.a,{edge:"start",checked:!!t.checked,disabled:!0,tabIndex:-1,disableRipple:!0,className:i.checkbox}),Object(a.jsxs)("form",{ref:A,onSubmit:function(e){return e.preventDefault()},style:{width:"100%"},children:[Object(a.jsx)(I.a,{className:i.input,color:"secondary",fullWidth:!0,defaultValue:g,onChange:function(e){w(e.target.value)},onFocus:function(e){return e.target.select()}}),Object(a.jsx)(y.a,{children:Object(a.jsx)(O.a,{edge:"end","aria-label":"edit",type:"submit",onClick:function(){o(N,g),p(!1)},children:Object(a.jsx)(D.a,{className:i.editIcon})})})]})]}):Object(a.jsxs)(a.Fragment,{children:[" ",Object(a.jsx)(k.a,{edge:"start",checked:!!t.checked,tabIndex:-1,disableRipple:!0,className:i.checkbox,onChange:function(){return e=t.id,n(e),void u(!l);var e}}),Object(a.jsx)(E.a,{style:{color:"#EEEEEE"},primary:t.text,className:l?"checked":"",onDoubleClick:function(){return e=t.id,t.text,p(!0),void _(e);var e}}),Object(a.jsx)(O.a,{edge:"end","aria-label":"delete",onClick:function(){return e=t.id,void r(e);var e},children:Object(a.jsx)(T.a,{className:i.deleteIcon})})]})})})),N=n(137),_=Object(j.b)((function(e){return{lists:e.lists}}))((function(e){var t=e.lists;return Object(a.jsx)(N.a,{children:t.map((function(e){return Object(a.jsx)(S,{list:e},e.id)}))})})),A=n(143),F=n(144),R=n(51),z=n(149),P=n(67),B=n.n(P),W=n(68),G=n.n(W),M=n(96),H=n(145),J=Object(m.a)((function(e){var t;return{"@global":{"*::-webkit-scrollbar":{width:"0.4em"},"*::-webkit-scrollbar-thumb":{backgroundColor:e.palette.secondary.main,borderRadius:"10px",outline:"none"}},cardParent:{background:"transparent",position:"relative",margin:"2rem auto"},cardChildren:{maxHeight:"12rem",overflow:"auto"},addItemCard:(t={backgroundColor:e.palette.primary.main,width:"100vh"},Object(u.a)(t,e.breakpoints.down("sm"),{width:"60vh"}),Object(u.a)(t,e.breakpoints.down("xs"),{width:"40vh"}),t),addItemAvatar:Object(u.a)({backgroundColor:e.palette.secondary.main,color:e.palette.primary.main,height:e.spacing(12),width:e.spacing(10),position:"absolute",top:"-3rem",left:"3rem"},e.breakpoints.down("xs"),{left:"1rem"}),dividerRoot:{backgroundColor:e.palette.common.white,opacity:.2},headerText:Object(u.a)({marginLeft:"8rem",fontSize:"1rem"},e.breakpoints.down("xs"),{marginLeft:"6rem"})}})),K=function(e){var t=e.icon,n=e.headText,c=e.children,r=J();return Object(a.jsxs)(M.a,{elevation:0,className:r.cardParent,children:[Object(a.jsx)(z.a,{variant:"rounded",className:r.addItemAvatar,children:"add"===t?Object(a.jsx)(B.a,{style:{fontSize:64}}):Object(a.jsx)(G.a,{style:{fontSize:64}})}),Object(a.jsxs)(A.a,{className:r.addItemCard,children:[Object(a.jsx)(F.a,{children:Object(a.jsx)(R.a,{component:"h6",variant:"h6",className:r.headerText,color:"secondary",children:n})}),Object(a.jsx)(H.a,{variant:"middle",classes:{root:r.dividerRoot}}),Object(a.jsx)(F.a,{children:Object(a.jsx)("div",{className:r.cardChildren,children:c})})]})]})},V=Object(m.a)((function(e){var t;return{root:{backgroundColor:e.palette.common.black},bg:Object(u.a)({backgroundImage:"url('/Wave2.svg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",width:"100%",backgroundColor:e.palette.common.black,transform:"rotate(180deg)",position:"absolute",zIndex:0},e.breakpoints.down("sm"),{backgroundPosition:"right"}),header:(t={marginTop:"3rem"},Object(u.a)(t,e.breakpoints.down("xs"),{marginTop:"2rem"}),Object(u.a)(t,"marginBottom","3rem"),Object(u.a)(t,"zIndex",1),t),todoapp:{backgroundColor:e.palette.primary.main,color:e.palette.secondary.main,width:"14rem",textAlign:"center",paddingTop:"0.35em"}}})),Y=function(){var e=V();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)("div",{className:e.bg}),Object(a.jsxs)(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(a.jsx)(h.a,{item:!0,className:e.header,children:Object(a.jsx)(A.a,{className:e.todoapp,children:Object(a.jsx)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"To-Do App"})})}),Object(a.jsx)(h.a,{item:!0,children:Object(a.jsx)(K,{icon:"add",headText:"ADD ITEM",children:Object(a.jsx)(g,{})})}),Object(a.jsx)(h.a,{item:!0,children:Object(a.jsx)(K,{icon:"",headText:"TO-DO LIST",children:Object(a.jsx)(_,{})})})]})]})},q=function(){return Object(a.jsx)(d.a,{theme:l,children:Object(a.jsx)(Y,{})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},U=n(18),X=n(69),Z=n.n(X),$=n(70),ee=n(72),te=[{id:Date.now(),text:"This is todo list",checked:!1},{id:Date.now()+1,text:"Double Click the text to edit",checked:!1}],ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_LISTS":return e;case"ADD_TODO":var n={id:Date.now(),text:t.payload.text,checked:!1};return[].concat(Object(ee.a)(e),[n]);case"TOGGLE_CHECK":var a=e.map((function(e){return e.id===t.payload.id&&(e.checked=!e.checked),e}));return a;case"DELETE_LIST":var c=e.filter((function(e){return e.id!==t.payload.id}));return c;case"EDIT_LIST":var r=e.map((function(e){return e.id===t.payload.id&&(e.text=t.payload.text),e}));return r;default:return e}},ae=Object(U.combineReducers)({lists:ne}),ce=[Z.a],re=Object(U.createStore)(ae,Object($.composeWithDevTools)(U.applyMiddleware.apply(void 0,ce)));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(j.a,{store:re,children:Object(a.jsx)(q,{})})}),document.getElementById("root")),Q()}},[[94,1,2]]]);
//# sourceMappingURL=main.69f14dff.chunk.js.map