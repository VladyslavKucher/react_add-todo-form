(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),c=a(5),s=a(2),o=(a(13),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=t.completed,n=t.title,i=t.user,r=t.id;return Object(d.jsxs)("article",{"data-id":r,className:"TodoInfo ".concat(a?"TodoInfo--completed":""),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(d.jsx)(m,{user:i})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})},h=function(){var e=Object(o.useState)(Object(c.a)(u)),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),m=Object(s.a)(i,2),j=m[0],h=m[1],f=Object(o.useState)(""),O=Object(s.a)(f,2),p=O[0],x=O[1],v=Object(o.useState)(!1),y=Object(s.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(!1),C=Object(s.a)(I,2),g=C[0],_=C[1],k=Math.max.apply(Math,Object(c.a)(u.map((function(e){return e.id})))),T=function(){var e,t=(e=j,l.find((function(t){return t.name===e}))||null);if(t&&p){var a={id:k,title:p,completed:!1,userId:t.id};n((function(e){return[].concat(Object(c.a)(e),[a])})),x(""),h("")}},D=function(e){e.preventDefault(),p||N(!0),j||_(!0),T()},w=a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:l.find((function(t){return e.userId===t.id}))})}));return Object(o.useEffect)((function(){p&&N(!1),j&&_(!1)}),[p,j]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["Title:",Object(d.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:p,onChange:function(e){x(e.currentTarget.value)}})]}),S&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["User:",Object(d.jsxs)("select",{"data-cy":"userSelect",onChange:function(e){return h(e.target.value)},value:"0",children:[!j&&Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name},e.name)}))]})]}),g&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){return D(e)},children:"Add"})]}),Object(d.jsx)(b,{todos:w})]})};i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b3901300.chunk.js.map