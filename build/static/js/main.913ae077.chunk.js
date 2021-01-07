(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(6),c=t(3),u=t(1),o=t(15),i=t.n(o),l=(t(21),function(e){return Object(r.jsxs)("form",{onSubmit:e.addPerson,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(r.jsx)("input",{name:"name",value:e.newName,onChange:e.handleName})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"phone",children:"Phone number: "}),Object(r.jsx)("input",{name:"phone",type:"tel",value:e.newNum,onChange:e.handleNum})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})}),d=function(e){var n=e.id,t=e.handleClick;return Object(r.jsx)("button",{onClick:function(){return t(n)},children:"delete"})},s=function(e){var n=e.name,t=e.number,a=e.id,c=e.handleDelete;return Object(r.jsxs)("li",{children:[n," ",t," ",Object(r.jsx)(d,{name:n,id:a,handleClick:c})]})},j=function(e){var n=e.persons,t=e.handleDelete;return Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)(s,{name:e.name,number:e.number,id:e._id,handleDelete:t},e.id)}))})},b=function(e){return Object(r.jsxs)("form",{children:["Filter results by",Object(r.jsx)("input",{value:e.filter,onChange:e.filterHandler})]})},h=function(e){var n=e.text;return null===n?null:Object(r.jsx)("div",{className:"message",children:n})},f=function(e){var n=e.text;return null===n?null:Object(r.jsx)("div",{className:"error",children:n})},m=t(4),O=t.n(m),p="http://localhost:3001/api/persons";var x={getAll:function(){return O.a.get(p).then((function(e){return e.data}))},addP:function(e){return O.a.post(p,e).then((function(e){return e.data}))},deleteP:function(e){return O.a.delete(p+"/"+e).then((function(e){return e.data}))},replace:function(e,n){return O.a.put(p+"/"+e,n).then((function(e){return e.data}))}},v=function(){Object(u.useEffect)((function(){x.getAll().then((function(e){o(e)}))}),[]);var e=Object(u.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],i=Object(u.useState)(""),d=Object(c.a)(i,2),s=d[0],m=d[1],O=Object(u.useState)("000-000-0000"),p=Object(c.a)(O,2),v=p[0],g=p[1],w=Object(u.useState)(""),N=Object(c.a)(w,2),k=N[0],S=N[1],C=Object(u.useState)(!1),D=Object(c.a)(C,2),P=D[0],y=D[1],A=Object(u.useState)(null),_=Object(c.a)(A,2),E=_[0],F=_[1],T=Object(u.useState)(null),H=Object(c.a)(T,2),I=H[0],J=H[1],B=function(e,n){x.replace(e,n).then((function(n){console.log(n),o(t.map((function(t){return t._id!==e?t:n}))),F("Updated "+n.name)})).catch((function(r){console.log(r),J("Cannot update, information of ".concat(n.name," has already been removed from server ")),setTimeout((function(){J(null)}),5e3),o(t.filter((function(n){return n.id!==e})))}))},R=new RegExp(k,"i");return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(h,{text:E}),Object(r.jsx)(f,{text:I}),Object(r.jsx)(b,{filter:k,filterHandler:function(e){S(e.target.value),y(!0)}}),Object(r.jsx)("h2",{children:"Add a new entry"}),Object(r.jsx)(l,{addPerson:function(e){if(e.preventDefault(),""!==s)if(t.some((function(e){return e.name===s}))){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with the new one?"))){var n=t.find((function(e){return e.name===s})),r=Object(a.a)(Object(a.a)({},n),{},{number:v});B(n._id,r)}}else{t.some((function(e){return e.number===v}))&&(J("Cannot have duplicate phone numbers, either update the existing person or change the number "),setTimeout((function(){J(null)}),5e3));var c={name:s.trim(),date:(new Date).toISOString,number:v};x.addP(c).then((function(e){o(t.concat(e)),m(""),F("Added "+e.name),setTimeout((function(){F(null)}),5e3)}))}else window.alert("Cannot have a blank name")},handleName:function(e){m(e.target.value)},handleNum:function(e){g(e.target.value)},newName:s,newNum:v}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(j,{persons:P?t.filter((function(e){return e.name.match(R)||e.number.match(R)})):t,handleDelete:function(e){var n=t.find((function(n){return n._id===e}));console.log(n),window.confirm("Delete ".concat(n.name,"?"))&&x.deleteP(e).then((function(){o(t.filter((function(e){return e!==n}))),F("Deleted ".concat(n.name))}))}})]})};i.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.913ae077.chunk.js.map