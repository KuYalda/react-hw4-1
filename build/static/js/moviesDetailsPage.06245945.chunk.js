(this["webpackJsonpReact_homework_4.1"]=this["webpackJsonpReact_homework_4.1"]||[]).push([[4],{34:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return m}));var a=n(37),c=n.n(a),r="?api_key=94fb68635853dc276658cb1ea38dd975",o="https://api.themoviedb.org/3",i=function(){return c.a.get("".concat(o,"/trending/movie/day").concat(r))},l=function(e){return c.a.get("".concat(o,"/search/movie").concat(r,"&query=").concat(e))},u=function(e){return c.a.get("".concat(o,"/movie/").concat(e).concat(r))},s=function(e){return c.a.get("".concat(o,"/movie/").concat(e,"/credits").concat(r))},m=function(e){return c.a.get("".concat(o,"/movie/").concat(e,"/reviews").concat(r))}},38:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return r}))},64:function(e,t,n){e.exports={movie_section:"MovieDetails_movie_section__1ek08",img:"MovieDetails_img__1_hML",genres:"MovieDetails_genres__3QBJb",button_back:"MovieDetails_button_back__1jrfg",section_more:"MovieDetails_section_more__2cvec",header:"MovieDetails_header__35H6u",nav:"MovieDetails_nav__3EcwM"}},69:function(e,t,n){"use strict";n.r(t);var a=n(38),c=n(36),r=n(0),o=n.n(r),i=n(5),l=n(7),u=n(64),s=n.n(u),m=function(e){var t=e.img,n=e.title,a=e.date,c=e.overview,r=e.genres,i=e.id,u=e.onClick;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",className:s.a.button_back,onClick:u},"Go back"),o.a.createElement("section",{className:s.a.movie_section},o.a.createElement("div",null,o.a.createElement("img",{src:"http://image.tmdb.org/t/p/w780".concat(t),width:300,heigth:500,alt:"foto",className:s.a.img})),o.a.createElement("div",null,o.a.createElement("h3",null,n),o.a.createElement("p",null,"Release: ",a),o.a.createElement("p",null,c),r&&r.map((function(e){return o.a.createElement("span",{key:e.id,className:s.a.genres},e.name)})))),o.a.createElement("section",{className:s.a.section_more},o.a.createElement("h3",{className:s.a.header},"More Info"),o.a.createElement("ul",{className:s.a.nav},o.a.createElement("li",null,o.a.createElement(l.b,{to:"/movie/".concat(i,"/cast")},"Cast")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/movie/".concat(i,"/reviews")},"Reviews")))))};m.defaultProps={img:void 0,title:void 0,date:void 0,overview:void 0,genres:void 0,id:void 0};var v=m,b=n(34),f=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,66))})),d=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,67))}));t.default=function(e){var t=e.match,n=Object(r.useState)([]),l=Object(c.a)(n,2),u=l[0],s=l[1],m=Object(r.useState)(void 0),p=Object(c.a)(m,2),_=p[0],g=p[1],h=t.params.id,O=Object(i.h)().state,E=Object(i.g)();Object(r.useEffect)((function(){b.b(h).then((function(e){var t=e.data;return s(Object(a.a)({},t))})),O?g(O.from):2===E.length?g("/"):g((function(e){return e}))}),[h]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{img:u.poster_path,title:u.original_title,date:u.release_date,overview:u.overview,genres:u.genres,id:u.id,onClick:function(){E.push(_)}}),o.a.createElement(i.b,{path:"".concat(t.path,"/cast"),component:f}),o.a.createElement(i.b,{path:"".concat(t.path,"/reviews"),component:d}))}}}]);
//# sourceMappingURL=moviesDetailsPage.06245945.chunk.js.map