(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t){t.exports=JSON.parse('{"items":[{"name":"github","id":"profile-github","url":"https://github.com/BenLeong0/","path":"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{"name":"linkedin","id":"profile-linkedin","url":"https://www.linkedin.com/in/benleong0/","path":"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"},{"name":"email","id":"profile-email","url":"mailto:benleong0@gmail.com","path":"M19 9.062s-5.188-.333-7 1.938c2-4.896 7-5.938 7-5.938v-2l5 4-5 4.019v-2.019zm-18.974 14.938h23.947l-11.973-11.607-11.974 11.607zm1.673-14l10.291-7.488 3.053 2.218c.712-.459 1.391-.805 1.953-1.054l-5.006-3.637-11.99 8.725v12.476l7.352-7.127-5.653-4.113zm15.753 4.892l6.548 6.348v-11.612l-6.548 5.264z"}]}')},34:function(t,e,n){},54:function(t){t.exports=JSON.parse('{"items":[{"name":"Project Euler","id":"project-projecteuler","github_owner":"BenLeong0","github_repo":"ProjectEuler","description":"wow so many problems","tags":["Python","Algorithms"]},{"name":"Algorithms Visualisations","id":"project-algorithmsvisualisations","github_owner":"BenLeong0","github_repo":"AlgorithmVisualisations","description":"wow so many algorithms","tags":["JavaScript","Algorithms"]},{"name":"Portfolio","id":"project-portfolio","github_owner":"BenLeong0","github_repo":"portfolio","description":"wow so many boxes","tags":["JavaScript","ReactJS","HTML","CSS"]}]}')},55:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),r=n.n(i),a=n(18),o=n.n(a),s=(n(30),n(31),n(32),n(3)),l=function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"profile-col",children:Object(c.jsx)("a",{className:"profile-link",id:t.id,href:t.url,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:t.path})})})})})};var h=function(){var t=n(33).items;return Object(c.jsx)("div",{id:"heading-links",children:t.map((function(t){return Object(c.jsx)(l,Object(s.a)({},t),t.id)}))})};var j=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{id:"heading-card",children:Object(c.jsxs)("div",{id:"heading-title",children:[Object(c.jsx)("div",{style:{fontSize:"50px"},children:"Coding Portfolio"}),Object(c.jsx)("div",{style:{fontSize:"30px"},children:"Ben Leong"})]})}),Object(c.jsx)(h,{})]})},u=(n(34),n(19)),p=n(20),d=n(24),m=n(23),b=n(7),g=n.n(b),v=n(21),f=n(8),O=n(9),x=n(22);var w=function(t){var e="none",n=380/t.graphPoints.length,i=t.graphPoints[t.graphPoints.length-1],r=-n/2,a=t.graphPoints.map((function(t){return[r+=n,240/i*(i-t)]})).join(" ")+"";return Object(c.jsx)("svg",{viewBox:"0 0 ".concat(380," ").concat(240),children:Object(c.jsx)("polyline",{points:a,fill:e,stroke:"black",strokeWidth:2})})};var k=function(t){var e=Object(i.useState)([0,0]),n=Object(O.a)(e,2),r=n[0],a=n[1],o=Object(i.useState)([0]),s=Object(O.a)(o,2),l=s[0],h=s[1],j=function(t){return Math.abs(t)/864e5-18500},u=function(t){var e=new Date(t[0].commit.author.date.slice(0,10)),n=new Date(t[t.length-1].commit.author.date.slice(0,10));a([n,e]);var c=t.map((function(t){return new Date(t.commit.author.date.slice(0,10))})),i=j(n)-1,r=[],o=0;c.slice().reverse().forEach((function(t){var e=j(t);e===i||(r=[].concat(Object(f.a)(r),Object(f.a)(Array(e-i).fill(o)))),o++,i=e})),r.push(o),h(r)};function p(t){var e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),n=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(t),c=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return"".concat(e,"/").concat(n,"/").concat(c)}return Object(i.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{accept:"application/vnd.github.v3+json"},params:{per_page:100}},e.next=3,x.get("https://api.github.com/repos/".concat(t.github_owner,"/").concat(t.github_repo,"/commits"),n);case 3:c=e.sent,u(c.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsxs)("div",{className:"project-graph",children:[Object(c.jsx)(w,{graphPoints:l}),Object(c.jsxs)("div",{className:"project-graph-label",children:["Commits from ",p(r[0])," to ",p(r[1])]})]})},N=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this.props;return Object(c.jsxs)("div",{className:"project-card",children:[Object(c.jsxs)("div",{className:"project-text col-9",children:[Object(c.jsx)("div",{className:"project-title",children:t.name}),Object(c.jsx)("div",{className:"project-description",children:t.description}),Object(c.jsx)("div",{className:"project-gh-link",children:Object(c.jsx)("a",{href:"https://github.com/".concat(t.github_owner,"/").concat(t.github_repo),target:"_blank",rel:"noreferrer",children:"https://github.com/".concat(t.github_owner,"/").concat(t.github_repo)})})]}),Object(c.jsx)("div",{className:"col-3",children:Object(c.jsx)(k,Object(s.a)({},t))}),Object(c.jsx)("div",{className:"project-tags col-12",children:t.tags.map((function(t){return Object(c.jsxs)("span",{className:"project-tag",children:[t," "]},t)}))})]})}}]),n}(r.a.Component);var _=function(){var t=n(54).items;return Object(c.jsx)(c.Fragment,{children:t.map((function(t){return Object(c.jsx)(N,Object(s.a)({},t),t.id)}))})};var y=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsx)(_,{})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),S()}},[[55,1,2]]]);
//# sourceMappingURL=main.dc6b9f25.chunk.js.map