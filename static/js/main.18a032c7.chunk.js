(this.webpackJsonpdeploytest1=this.webpackJsonpdeploytest1||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i,n,s,r,a=c(0),l=c.n(a),o=c(9),d=c.n(o),u=(c(17),c(2)),j=(c.p,c(18),[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}]),m=c.p+"static/media/image-jeremy.71cd41f1.png",p=c(1),b=function(e){var t=e.setSelectTime,c=e.selectTime;return Object(p.jsxs)("div",{className:"profile-container",children:[Object(p.jsxs)("div",{className:"top",children:[Object(p.jsx)("div",{className:"img-wrap",children:Object(p.jsx)("img",{src:m,alt:""})}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)("div",{className:"for",children:"Report for"}),Object(p.jsx)("div",{className:"name",children:"Jeremy Robson"})]})]}),Object(p.jsx)("div",{className:"bottom",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{onClick:function(){return t("daily")},className:"daily"===c?"selected":"not-selected",children:"Daily"}),Object(p.jsx)("li",{onClick:function(){return t("weekly")},className:"weekly"===c?"selected":"not-selected",children:"Weekly"}),Object(p.jsx)("li",{onClick:function(){return t("monthly")},className:"monthly"===c?"selected":"not-selected",children:"Monthly"})]})})]})},v=c(3),h=c.p+"static/media/icon-ellipsis.a57a4ac8.svg",O=c.p+"static/media/icon-work.a3f124e5.svg",f=c.p+"static/media/icon-play.e8d4e569.svg",x=c.p+"static/media/icon-study.1f0a65e4.svg",y=c.p+"static/media/icon-exercise.3e7b0282.svg",g=c.p+"static/media/icon-social.64be0c18.svg",k=c.p+"static/media/icon-self-care.a161aff5.svg",N=c(4),w=N.a.div(i||(i=Object(v.a)(["\n     background-color: ",";\n     /* margin: 20px 0; */\n     border-radius: 10px;\n     color: white;\n"])),(function(e){return e.colorMe})),S=(N.a.div(n||(n=Object(v.a)([""]))),N.a.div(s||(s=Object(v.a)(["\n     display: flex;\n     width: 50px;\n     height: 50px;\n     background-image: url(",");\n     background-position: center;\n     background-size: contain;\n     background-repeat: no-repeat;\n     margin-left: auto;\n     margin-right: 20px;\n"])),(function(e){return e.iconMe}))),C=(N.a.img(r||(r=Object(v.a)(["\n     width: 40px;\n     z-index: -1;\n     display: flex;\n     /* margin-left: 50px; */\n"]))),function(e){var t=e.data,c=e.selectTime,i=e.index,n=t.title,s=t.timeframes,r=s.daily,l=s.weekly,o=s.monthly,d=Object(a.useState)(null),j=Object(u.a)(d,2),m=j[0],b=j[1],v=Object(a.useState)(""),N=Object(u.a)(v,2),C=N[0],T=N[1],M=Object(a.useState)("hsl(348, 100%, 68%)"),E=Object(u.a)(M,2),F=E[0],L=E[1],P=Object(a.useState)(f),W=Object(u.a)(P,2),J=W[0],z=W[1],B=Object(a.useState)(null),D=Object(u.a)(B,2);D[0],D[1];return Object(a.useEffect)((function(){return"daily"===c?(b(r),T("Yesterday - ")):"weekly"===c?(b(l),T("Last Week - ")):(b(o),T("Last Month - ")),function(){}}),[c,m,r,l,o]),Object(a.useEffect)((function(){return"Work"===n&&(L("hsl(15, 100%, 70%)"),z(O)),"Play"===n&&(L("hsl(195, 74%, 62%)"),z(f)),"Study"===n&&(L("hsl(348, 100%, 68%)"),z(x)),"Exercise"===n&&(L("hsl(145, 58%, 55%)"),z(y)),"Social"===n&&(L("hsl(264, 64%, 52%)"),z(g)),"Self Care"===n&&(L("hsl(43, 84%, 65%)"),z(k)),function(){}}),[n]),Object(p.jsx)("div",{className:"card-container index-".concat(i),children:Object(p.jsxs)(w,{colorMe:F,children:[Object(p.jsx)("div",{className:"top-bar",children:Object(p.jsx)(S,{iconMe:J})}),Object(p.jsxs)("div",{className:"info-wrap",children:[Object(p.jsxs)("div",{className:"top",children:[Object(p.jsx)("div",{className:"title",children:n}),Object(p.jsx)("div",{className:"more",children:Object(p.jsx)("img",{src:h,alt:""})})]}),Object(p.jsxs)("div",{className:"bottom",children:[Object(p.jsxs)("div",{className:"current-time",children:[null===m||void 0===m?void 0:m.current," hrs"]}),Object(p.jsxs)("div",{className:"previous-time",children:[" ",C+(null===m||void 0===m?void 0:m.previous)," hrs"]})]})]})]})})});var T=function(){var e=Object(a.useState)("weekly"),t=Object(u.a)(e,2),c=t[0],i=t[1];return Object(p.jsx)("div",{className:"app-container",children:Object(p.jsxs)("div",{className:"grid-wrap",children:[Object(p.jsx)("div",{className:"app-profile-wrap",children:Object(p.jsx)(b,{setSelectTime:i,selectTime:c})}),j.map((function(e,t){return Object(p.jsx)(C,{data:e,selectTime:c,index:t},t)}))]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),s(e),r(e)}))};d.a.render(Object(p.jsx)(l.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),M()}},[[22,1,2]]]);
//# sourceMappingURL=main.18a032c7.chunk.js.map