(this["webpackJsonpnow-movies"]=this["webpackJsonpnow-movies"]||[]).push([[0],{13:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n="https://api.themoviedb.org/3",a={apiURI:n,imgURL:"https://image.tmdb.org/t/p/original",token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGI1YTM0M2U3N2Q0NzdlNmQwM2JlN2RkZjhhYTU0NSIsInN1YiI6IjVlNjg3NGQwMmYzYjE3MDAxOTNkZjFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KSpR_FInQJhwYWBiNSUQNSA-Ly7Sm5_beNFp2137kVQ",trendingUrl:n+"/trending",genreUrl:n+"/genre/movie/list"}},24:function(e,t,r){"use strict";var n=r(3),a=r.n(n),c=r(10),s=r(53),o=r.n(s),i=r(13),u=o.a.create({baseURL:i.a.apiURI,headers:{"Content-Type":"application/json"}});u.interceptors.request.use((function(e){var t=i.a.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e}));var l=u;function h(e,t){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(a.a.mark((function e(t,r){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i.a.trendingUrl,"/").concat(t,"/").concat(r),e.next=3,l.get(n);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.a.genreUrl,e.next=3,l.get(t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t,r){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i.a.apiURI,"/").concat(r,"/").concat(t,"/external_ids"),e.next=3,l.get(n);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.d(t,"c",(function(){return h})),r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return v}))},48:function(e,t,r){"use strict";var n=r(46),a=r(3),c=r.n(a),s=r(10),o=r(36),i=r(37),u=r(49),l=r(47),h=r(1),m=r.n(h),p=r(107),f=r(94),v=r(110),d=r(106),b=m.a.lazy((function(){return Promise.all([r.e(3),r.e(4)]).then(r.bind(null,128))})),w=function(){var e=Object(d.a)((function(){return{root:{backgroundColor:"#353940",marginBottom:10},wrapper:{margin:"5px 10px"}}}))();return m.a.createElement(v.a,{classes:{root:e.wrapper}},m.a.createElement(p.a,{variant:"text",width:200,height:25,classes:{root:e.root}}),m.a.createElement(p.a,{variant:"text",width:70,height:20,classes:{root:e.root}}),m.a.createElement(p.a,{variant:"text",width:200,height:50,classes:{root:e.root}}),m.a.createElement(p.a,{variant:"rect",width:864,height:240,classes:{root:e.root}}),m.a.createElement(v.a,{style:{display:"flex"}},m.a.createElement(p.a,{variant:"rect",width:170,height:35,classes:{root:e.root},style:{marginRight:20}}),m.a.createElement(p.a,{variant:"rect",width:170,height:35,classes:{root:e.root}})))},g=function(e){var t=e.results,r=e.title;return m.a.createElement("div",{className:"bar"},m.a.createElement(f.a,{variant:"h4",className:"heading"},r),m.a.createElement("div",{className:"row"},t.map((function(e,t){return m.a.createElement(h.Suspense,{fallback:m.a.createElement(w,null),key:t},m.a.createElement(b,{info:e,key:t}))}))))},k=r(24),x=r(108);r.d(t,"a",(function(){return y}));var y=m.a.createContext(),E=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).fetchMovies=Object(s.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k.c)("movie",n.state.timeWindow);case 3:if(t=e.sent,!(r=t.data)||!r.results){e.next=7;break}return e.abrupt("return",r.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.fetchShows=Object(s.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k.c)("tv",n.state.timeWindow);case 3:if(t=e.sent,!(r=t.data)||!r.results){e.next=7;break}return e.abrupt("return",r.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.storeGenres=Object(s.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k.b)();case 3:if(t=e.sent,!(r=t.data)){e.next=7;break}return e.abrupt("return",r.genres);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.state={timeWindow:"day",movies:[],shows:[],genres:[]},n}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t,r,a,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.fetchMovies(),this.fetchShows(),this.storeGenres()]);case 2:t=e.sent,r=Object(n.a)(t,3),a=r[0],s=r[1],o=r[2],this.setState({movies:a,shows:s,genres:o});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return m.a.createElement(x.a,{container:!0,justify:"center",alignItems:"center",style:{overflowY:"hidden"}},m.a.createElement(y.Provider,{value:this.state.genres},m.a.createElement(x.a,{item:!0,md:6},this.state.movies&&m.a.createElement(g,{results:this.state.movies,title:"Trending Movies"})),m.a.createElement(x.a,{item:!0,md:6},this.state.shows&&m.a.createElement(g,{results:this.state.shows,title:"Trending TV Shows"}))))}}]),r}(h.Component);t.b=E},62:function(e,t,r){e.exports=r(92)},67:function(e,t,r){},68:function(e,t,r){},92:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(19),s=r.n(c),o=(r(67),r(68),r(48)),i=r(110),u=r(109),l=r(54),h=r.n(l),m=r(55),p=r.n(m);var f=function(){return a.a.createElement(i.a,null,a.a.createElement(i.a,{className:"container-wrap"},a.a.createElement(o.b,null)),a.a.createElement("footer",{className:"page-footer"},a.a.createElement(u.a,{href:"https://github.com/sbimochan/nowmovies",target:"_blank",rel:"noopener noreferrer",variant:"body2",style:{marginRight:16,color:"#0e0e0c"}},a.a.createElement(h.a,{fontSize:"large"})),a.a.createElement(u.a,{href:"https://instagram.com/sbimochan",target:"_blank",rel:"noopener noreferrer",variant:"body2",style:{color:"#0e0e0c"}},a.a.createElement(p.a,{fontSize:"large"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.579d6c46.chunk.js.map