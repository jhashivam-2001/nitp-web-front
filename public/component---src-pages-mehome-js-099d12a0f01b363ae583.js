(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{PFAz:function(e,a,i){"use strict";var t=i("nKUr"),n=(i("q1tI"),i("wVjY"),i("tbj1")),s=i.n(n);a.a=function(e){return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"depnoticecard",children:[Object(t.jsx)("p",{className:"depcarddetail",children:e.detail}),Object(t.jsxs)("div",{id:"depnotdate",children:[Object(t.jsx)("div",{children:Object(t.jsx)("p",{className:"dept",children:e.time})}),Object(t.jsx)("div",{children:e.attachments.map((function(e){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("img",{id:"depdownimg",src:s.a,alt:"c"}),Object(t.jsx)("a",{className:"depdown",href:e.url,target:"blank",children:e.caption})]})}))})]})]})})}},oXOu:function(e,a,i){"use strict";i.r(a);var t=i("nKUr"),n=i("q1tI"),s=i.n(n),c=i("xVFz"),o=i("vrFN"),r=i("dI71"),d=i("VOqC"),l=i.n(d),j=i("Ed9y"),h=i.n(j),m=i("fA/B"),b=i.n(m),g=i("fuX5"),x=i.n(g),O=(i("vhkn"),i("s9OA")),u=i("PFAz"),v=i("vDqi"),p=i.n(v),w=i("yWb0"),N=i.n(w),f=function(e){function a(a){var i;return(i=e.call(this,a)||this).state={notices:[]},i}Object(r.a)(a,e);var i=a.prototype;return i.componentDidMount=function(){var e=this;p.a.get("http://beta.nitp.ac.in:3000/api/notice").then((function(a){var i=a.data;e.setState({notices:i})})).catch((function(e){console.log(e)}))},i.render=function(){return Object(t.jsxs)("div",{className:"depsection",children:[Object(t.jsx)(O.a,{}),Object(t.jsxs)("div",{className:"dmainrow dmainrowmain",id:"home",children:[Object(t.jsxs)("div",{className:"col-6",children:[Object(t.jsx)("div",{className:"row rowmarl3",children:Object(t.jsx)("h1",{"data-aos":"zoom-in-right",children:"Mechanical Engineering"})}),Object(t.jsx)("div",{className:"row rowmarl3",children:Object(t.jsx)("h2",{"data-aos":"zoom-in-right",children:"“The computer was born to solve problems that did not exist before.”"})}),Object(t.jsx)("div",{className:"row rowmarl3",children:Object(t.jsx)("h2",{"data-aos":"zoom-in-right",id:"aut",children:"— Bill Gates"})})]}),Object(t.jsx)("div",{className:"col-6 imgcolstyle",children:Object(t.jsx)("img",{"data-aos":"zoom-in",src:l.a,className:"img-fluid",loading:"lazy"})})]}),Object(t.jsx)("div",{className:"dmainrow",id:"about",children:Object(t.jsxs)("div",{className:"depabout",children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("h1",{"data-aos":"zoom-in",children:"About"})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("p",{"data-aos":"zoom-in",children:["Bihar College of Engineering (BCE) was established in 1924 and it is the sixth oldest Engineering College in India. The Department of Mechanical Engineering was established in 1952 and the M.Tech Program was started in 1978. BCE was converted to National Institute of Technology Patna in 2004 Initially B.Tech. Program in Mechanical Engineering started with intake of 20, which has now become 125. Presently, the department is also having PhD programmes with total of more than 100 students."," "]})})]})})," ",Object(t.jsxs)("div",{className:"dmainrow",id:"happening",children:[Object(t.jsxs)("div",{className:"col-6",children:[Object(t.jsx)("div",{className:"row rowmarl3",children:Object(t.jsx)("h1",{"data-aos":"zoom-in-right",children:"Happenings"})}),Object(t.jsx)("div",{className:"row rowmarl3",children:Object(t.jsx)("div",{id:"depnoticewrap",children:this.state.notices.map((function(e){var a=(new Date).getTime(),i=Math.round((a-e.timestamp)/36e5);if(i>24?i=Math.round(i/24)+" days ago":i<1?i="Just now":i+=i<2?" hour ago":" hours ago",""!=e.title)return Object(t.jsx)(u.a,{detail:e.title,time:i,attachments:e.attachments})}))})})]}),Object(t.jsx)("div",{className:"col-6 imgcolstyle",children:Object(t.jsx)("img",{"data-aos":"zoom-in",src:N.a,className:"img-fluid",loading:"lazy"})})]}),Object(t.jsxs)("div",{className:"dmainrow dmainrow1",id:"mission",children:[Object(t.jsx)("div",{className:"col-6 imgcolstyle",children:Object(t.jsx)("img",{"data-aos":"zoom-in",src:h.a,className:"img-fluid",loading:"lazy"})}),Object(t.jsxs)("div",{className:"col-6",children:[Object(t.jsx)("div",{className:"row rowmarr3",children:Object(t.jsx)("h1",{"data-aos":"zoom-in-left",children:"Mission"})}),Object(t.jsx)("div",{className:"row rowmarr3",children:Object(t.jsxs)("p",{"data-aos":"zoom-in-left",children:["To provide a high-quality educational experience for undergraduate and graduate students that enables them to become leaders in their chosen professions and to make them globally competitive mechanical engineers.",Object(t.jsx)("br",{}),"To create, explore, and develop innovations in engineering and science through undergraduate and graduate research. To develop linkages with world class R&D organizations and educational institutions in India and abroad for excellence in teaching, research and consultancy practices."]})})]})]}),Object(t.jsxs)("div",{className:"dmainrow",id:"vision",children:[Object(t.jsxs)("div",{className:"col-6",children:[Object(t.jsx)("div",{className:"row rowmarl3",children:Object(t.jsx)("h1",{"data-aos":"zoom-in-right",children:"Vision"})}),Object(t.jsx)("div",{className:"row rowmarl3",children:Object(t.jsxs)("p",{"data-aos":"zoom-in-right",children:["To contribute to the society through excellence in scientific and technical education and research",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),"To contribute the country by providing globally competent Mechanical Engineers capable of working in an inter-disciplinary environment which foster spirits of innovation, entrepreneurship and leadership.",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),"To support industry for growth, being the valuable resource for them, and remain a role model for others in the field of Mechanical Engineering."]})})]}),Object(t.jsx)("div",{className:"col-6 imgcolstyle",children:Object(t.jsx)("img",{"data-aos":"zoom-in",src:x.a,className:"img-fluid",loading:"lazy"})})]}),Object(t.jsxs)("div",{className:"dmainrow dmainrow1",id:"contact",children:[Object(t.jsx)("div",{className:"col-6 imgcolstyle",children:Object(t.jsx)("img",{"data-aos":"zoom-in",src:b.a,className:"img-fluid",loading:"lazy"})}),Object(t.jsxs)("div",{className:"col-6",children:[Object(t.jsx)("div",{className:"row rowmarr3",children:Object(t.jsx)("h1",{"data-aos":"zoom-in-left",children:"Contact"})}),Object(t.jsx)("div",{className:"row rowmarr3",children:Object(t.jsxs)("p",{"data-aos":"zoom-in-left",children:["Department of Mechanical Engg.,",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),"National Institute Of Technology Patna,",Object(t.jsx)("br",{}),"Ashok Rajpath, Patna - 800005.",Object(t.jsx)("br",{}),"Email: head.me@nitp.ac.in",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),"Extn: +91-612-(2371715/2715/2371929/",Object(t.jsx)("br",{}),"2370419/2370843/2371930) * 441"]})})]})]})]})},a}(s.a.Component);a.default=function(){return Object(t.jsxs)(c.a,{children:[Object(t.jsx)(o.a,{title:"ME"}),Object(t.jsx)(f,{})]})}},tbj1:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOCA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTQgMVY2LjVNNCA2LjVMMiA0LjVNNCA2LjVMNiA0LjUiIHN0cm9rZT0iI0U0N0Y0MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8bGluZSB4MT0iMC41IiB5MT0iOC41IiB4Mj0iNy41IiB5Mj0iOC41IiBzdHJva2U9IiNFNDdGNDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPC9zdmc+DQo="},wVjY:function(e,a,i){}}]);
//# sourceMappingURL=component---src-pages-mehome-js-099d12a0f01b363ae583.js.map