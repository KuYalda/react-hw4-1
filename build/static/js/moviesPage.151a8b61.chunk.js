(this["webpackJsonpReact_homework_4.1"]=this["webpackJsonpReact_homework_4.1"]||[]).push([[5],{34:function(t,e,n){"use strict";n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return s}));var r=n(37),c=n.n(r),a="?api_key=94fb68635853dc276658cb1ea38dd975",o="https://api.themoviedb.org/3",u=function(){return c.a.get("".concat(o,"/trending/movie/day").concat(a))},i=function(t){return c.a.get("".concat(o,"/search/movie").concat(a,"&query=").concat(t))},f=function(t){return c.a.get("".concat(o,"/movie/").concat(t).concat(a))},b=function(t){return c.a.get("".concat(o,"/movie/").concat(t,"/credits").concat(a))},s=function(t){return c.a.get("".concat(o,"/movie/").concat(t,"/reviews").concat(a))}},35:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return r}))},38:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return a}))},70:function(t,e,n){"use strict";n.r(e);var r=n(35),c=n(36),a=n(0),o=n.n(a),u=n(5),i=n(38),f=n(7),b=Object(u.j)((function(t){var e=t.onSubmit,n=t.value,r=t.onChange,c=t.movies,a=Object(u.h)();return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:e},o.a.createElement("input",{type:"text",value:n,onChange:r}),o.a.createElement("button",{type:"submit"},"search movie")),c&&o.a.createElement("ul",null,c.map((function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(f.b,{to:{pathname:"/movie/".concat(t.id),state:{from:Object(i.a)({},a)}}},t.title))}))))})),s=n(34);e.default=function(){var t=Object(a.useState)(""),e=Object(c.a)(t,2),n=e[0],i=e[1],f=Object(a.useState)([]),l=Object(c.a)(f,2),m=l[0],p=l[1],O=Object(u.g)(),v=Object(u.h)();return Object(a.useEffect)((function(){var t=new URLSearchParams(v.search).get("query");t&&s.d(t).then((function(t){var e=t.data;return p(Object(r.a)(e.results))}))}),[v]),o.a.createElement(b,{onSubmit:function(t){t.preventDefault(),O.push("?query=".concat(n)),i("")},value:n,onChange:function(t){var e=t.target;i(e.value)},movies:m})}}}]);
//# sourceMappingURL=moviesPage.151a8b61.chunk.js.map