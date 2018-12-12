(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(172),l=t(6),o=t.n(l),s=(t(206),t(211)),c=t(263),m=t(265),u=t(165),d="undefined"!=typeof window,p=64,g=new c.a({createFramebuffer:!0,onInitialize:function(e){var a=e.gl;return Object(c.k)(a,{clearColor:[0,0,0,1],clearDepth:1,depthTest:!0,depthFunc:a.LEQUAL}),{cube:b(a)}},onFinalize:function(e){e.gl;e.cube.delete()},onRender:function(e){var a=e.gl,t=e.tick,n=e.aspect,r=e.cube;e.framebuffer;r.setUniforms({uTime:.1*t,uProjection:(new m.a).perspective({fov:Object(u.e)(60),aspect:n,near:1,far:2048}),uView:(new m.a).lookAt({center:[0,0,0],eye:[0,Math.sin(.006*t)*p/2,32]}),uLightDirection:[Math.cos(.001*t)*p/2,Math.sin(.001*t)*p/2,128],uModel:(new m.a).rotateX(.01*t).rotateY(.013*t)}),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),r.render()}});function b(e){for(var a=[],t=0;t<p;t++)for(var n=3*(1-p)/2+3*t,r=0;r<p;r++){var i=3*(1-p)/2+3*r;a.push(n,i)}a=new Float32Array(a);var l=new Float32Array(p*p*3).map(function(e){return[.06640625,.04296875,.1640625][e%3]}),o="attribute vec3 positions;\nattribute vec3 normals;\nattribute vec2 instanceOffsets;\nattribute vec3 instanceColors;\n\nuniform mat4 uModel;\nuniform mat4 uView;\nuniform mat4 uProjection;\nuniform float uTime;\n\nuniform vec3 uLightDirection;\n\nvarying vec3 color;\n\nvoid main(void) {\n  vec3 normal = vec3(uModel * vec4(normals, 1.0));\n\n  // Set up data for modules\n  color = instanceColors;\n  project_setNormal(normal);\n\n  // Vertex position (z coordinate undulates with time), and model rotates around center\n  float delta = length(instanceOffsets);\n  vec4 offset = vec4(instanceOffsets, sin((uTime + delta) * 0.1) * 16.0, 0);\n  gl_Position = uProjection * uView * (uModel * vec4(positions, 1.0) + offset);\n}\n",s="#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec3 color;\n\nvoid main(void) {\n  gl_FragColor = vec4(color, 0.9);\n  gl_FragColor = dirlight_filterColor(gl_FragColor);\n}\n";return new c.b(e,{vs:o,fs:s,modules:[c.j],isInstanced:1,instanceCount:p*p,attributes:{instanceOffsets:{value:a,size:2,instanced:1},instanceColors:{value:l,size:3,instanced:1}}})}var v=function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentWillUnmount=function(){this._animationStop()},t._animationStart=function(){g.start({canvas:"lumagl-canvas"})},t._animationStop=function(){g.stop({canvas:"lumagl-canvas"})},t.render=function(){return r.a.createElement("div",{id:"hero"},d?r.a.createElement(s.a,{onEnter:this._animationStart,onLeave:this._animationStop},r.a.createElement("canvas",{id:"lumagl-canvas",style:{position:"absolute",height:"100%",top:0,width:"100vw",zIndex:-1}})):null,r.a.createElement("div",{className:"main"},"Cutting edge ",r.a.createElement("em",null,"technology")," meets beautiful ",r.a.createElement("em",null,"data visualization.")),r.a.createElement("div",{className:"secondary"},"Industrial-grade frameworks to supercharge your next big idea."))},a}(n.Component),f=(t(29),t(257)),h=t(145),E=(t(171),t(4)),w=t.n(E),y=t(157),R=t.n(y),k=t(258),M=t.n(k),N=t(264),D="undefined"!=typeof window,O=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={active:!1},a.open=function(e){var t=a.props.url;window.open(e||"https://github.com/"+t,"_blank")},a.stopPropa=function(e){e.stopPropagation()},a.onEnter=function(){return a.props.setActive(a.props.name)},a.onLeave=function(){return a.props.setActive(null)},a}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.badges,n=a.description,i=a.image,l=a.name,o=a.page,s=a.stars,c=a.type,m=a.url,u=this.state.active;return"FRAMEWORK"===c?r.a.createElement("div",{className:R()("Repo",{big:!0,opaque:!u})},r.a.createElement("div",{className:"Repo-img",style:{background:"url("+i+") top center / cover no-repeat"},onClick:function(){return e.open(o)}}),r.a.createElement("div",{className:"Repo-github"},r.a.createElement("div",null,r.a.createElement("h1",null,l),t.map(function(e){var a=e.badge;return r.a.createElement("div",{className:"badge",key:a},a)}),r.a.createElement("div",{className:"Repo-get-started"},r.a.createElement("a",{href:o,className:"link"},"Get Started")),r.a.createElement("div",{className:"Repo-border"},r.a.createElement("a",{href:"https://github.com/"+m,className:"link"},"Github"),r.a.createElement("div",{className:"Stars",onClick:function(){return e.open()}},r.a.createElement(N.a,null),D?r.a.createElement(M.a,{value:s,options:{format:""}}):r.a.createElement("span",null,s)))),r.a.createElement("div",{className:"Repo-desc"},n))):r.a.createElement("div",{className:"Repo-github Repo small"},r.a.createElement("h1",null,this.props.displayName||l),t.map(function(e){var a=e.badge;return r.a.createElement("div",{className:"badge",key:a},a)}),r.a.createElement("div",{className:"Repo-desc"},n),r.a.createElement("div",{className:"Repo-get-started"},r.a.createElement("a",{href:o,className:"link"},"Get Started")))},a}(n.Component);O.defaultProps={img:null,contentStyle:{bottom:"1rem",left:"1rem",right:"1rem"},titleStyle:{fontSize:"1rem"},contribs:null},O.propTypes={url:w.a.string};var A=function(e){var a=e.starResolver,t=e.imageResolver;return r.a.createElement(h.StaticQuery,{query:"2676167266",render:function(e){return r.a.createElement("div",{id:"repos"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"Our Frameworks"),r.a.createElement("p",null,"A suite of open-source visualization frameworks")),e.allReposYaml.edges.map(function(e,n){var i=e.node;return r.a.createElement(O,Object.assign({key:n},i,{image:t[i.img],stars:a[i.ID]||0}))}))},data:f})},j=t(260),z=t(158);function S(e){var a=e.description,t=e.image,n=e.label,i=e.name,l=e.url;return r.a.createElement("div",{className:"case"},r.a.createElement("div",{className:"frame"},r.a.createElement("div",{className:"browser-bar"},r.a.createElement("div",{className:"browser-bar-button"}),r.a.createElement("div",{className:"browser-bar-button"}),r.a.createElement("div",{className:"browser-bar-button"})),r.a.createElement("div",{className:"case-image",style:{backgroundImage:"url("+t+")"}})),r.a.createElement("h1",null,i),r.a.createElement("p",{className:"description"},a),r.a.createElement(z.a,{url:l,label:n}))}var L=function(e){var a=e.imageResolver;return r.a.createElement(h.StaticQuery,{query:"3667610931",render:function(e){return r.a.createElement("div",{id:"showcase"},r.a.createElement("div",{className:"section-title section-title--no-logo"},r.a.createElement("h3",null,"Application Showcase"),r.a.createElement("p",null,"Our frameworks work together to enable world-class user experiences.")),r.a.createElement("div",{className:"cases"},e.allShowcaseYaml.edges.map(function(e){var t=e.node;return r.a.createElement(S,Object.assign({key:t.name},t,{image:a[t.image]}))})))},data:j})};function F(){return r.a.createElement("div",{id:"academy"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"Vis Academy"),r.a.createElement("p",{style:{marginBottom:"3rem"}},"Learn from the experts and get started quickly."),r.a.createElement("div",{className:"big-link",style:{margin:0}},r.a.createElement(z.a,{label:"Get started!",url:"http://vis.academy"}))))}var C=t(261),_=function(){return r.a.createElement(h.StaticQuery,{query:"1865777102",render:function(e){return r.a.createElement("div",{id:"repos"},r.a.createElement("div",{className:"section-title section-title--no-logo"},r.a.createElement("h2",null,"Our Components"),r.a.createElement("p",null,"Smaller projects that have been created to solve everyday tasks.")),r.a.createElement("div",{className:"modules"},e.allReposYaml.edges.map(function(e,a){var t=e.node;return r.a.createElement(O,Object.assign({key:a},t))})))},data:C})};var G=function(e){var a=e.starResolver,t=e.imageResolver;return r.a.createElement("div",{id:"home"},r.a.createElement(v,null),r.a.createElement(A,{starResolver:a,imageResolver:t}),r.a.createElement(L,{imageResolver:t}),r.a.createElement(F,null),r.a.createElement(_,null))};t.d(a,"query",function(){return U});a.default=function(e){var a=e.data,t=a.allFile.edges.reduce(function(e,a){return e[a.node.relativePath]=a.node.publicURL,e},{}),n=a.github.nodes.reduce(function(e,a){return e[a.id]=a.stargazers.totalCount,e},{});return r.a.createElement(i.a,{page:"home"},r.a.createElement(G,{imageResolver:t,starResolver:n}))};var U="976114189"},158:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(0),r=t.n(n),i=t(157),l=t.n(i);function o(e){var a=e.label,t=e.url,n=e.className;return r.a.createElement("a",{className:l()("link-with-arrow",n),href:t},r.a.createElement("span",{className:"label"},a),r.a.createElement(s,null))}function s(){return r.a.createElement("svg",{className:"arrow",width:"21",height:"13",viewBox:"0 0 21 13",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M16.8 5.143H0v1.714h17.14l-4.283 4.283 1.2 1.2 5.998-5.997-.173-.172.173-.172L14.058 0l-1.2 1.2 3.94 3.943z",fill:"currentColor",fillRule:"evenodd"}))}},216:function(e,a){},218:function(e,a){},219:function(e,a){},257:function(e){e.exports={data:{allReposYaml:{edges:[{node:{badges:[{badge:"react first"}],description:"A high-performance WebGL 2 rendering framework for big data visualizations that integrates perfectly with reactive applications.",ID:"MDEwOlJlcG9zaXRvcnk0ODAzMDIwNA==",img:"deck.png",name:"deck.gl",page:"http://uber.github.io/deck.gl/#/",type:"FRAMEWORK",url:"uber/deck.gl"}},{node:{badges:[{badge:"pure javascript"}],description:"A comprehensive set of WebGL 2 components targeting high-performance rendering and GPGPU computing.",ID:"MDEwOlJlcG9zaXRvcnk1MDM0MDkyOA==",img:"luma.png",name:"luma.gl",page:"http://uber.github.io/luma.gl/#/",type:"FRAMEWORK",url:"uber/luma.gl"}},{node:{badges:[{badge:"react only"}],description:"A comprehensive React wrapper for mapbox-gl. Designed to work seamlessly as a basemap for geospatial visualizations.",ID:"MDEwOlJlcG9zaXRvcnk0MzkwMzg4Mg==",img:"react-map-gl.png",name:"react-map-gl",page:"https://uber.github.io/react-map-gl/#/",type:"FRAMEWORK",url:"uber/react-map-gl"}},{node:{badges:[{badge:"react only"}],description:"A composable, deeply customizable charting library",ID:"MDEwOlJlcG9zaXRvcnk1MjMwNDM2Mg==",img:"react-vis.png",name:"react-vis",page:"https://uber.github.io/react-vis/",type:"FRAMEWORK",url:"uber/react-vis"}}]}}}},260:function(e){e.exports={data:{allShowcaseYaml:{edges:[{node:{name:"Kepler.gl",label:"Visit Site",description:"Kepler.gl is a powerful web-based geospatial data analysis tool. Built on a high performance rendering engine and designed for large-scale data sets.",image:"kepler-gl-contours.png",url:"http://kepler.gl"}},{node:{name:"Movement",label:"Visit Site",description:"A free tool that shares dynamic insights about traffic and mobility in cities where Uber operates.",image:"movement.png",url:"https://movement.uber.com"}},{node:{name:"Uber Advanced Technologies Group",label:"Read more",description:"A platform that enables engineers and across ATG to quickly inspect, debug, and explore data collected by our self driving cars.",image:"atg.png",url:"https://techcrunch.com/2017/08/28/uber-shows-off-its-autonomous-driving-programs-snazzy-visualization-tool"}}]}}}},261:function(e){e.exports={data:{allReposYaml:{edges:[{node:{badges:[{badge:"react-first"}],description:"A compact, modern, and well documented library targeting the needs of 3D graphics.",id:"8d6e7aee-2302-5912-a13f-e4cabddbcebf",img:null,name:"math.gl",page:"https://uber-web.github.io/math.gl/#/",type:"MODULE",url:"uber-web/math.gl"}},{node:{badges:[{badge:"javascript"}],description:"Management of browser events and gestures in a portable, modern way.",id:"MDEwOlJlcG9zaXRvcnkxMDQ1MDMyMjA=",img:null,name:"mjolnir.js",page:"https://uber-web.github.io/mjolnir.js/#/",type:"MODULE",url:"uber-web/mjolnir.js"}},{node:{badges:[{badge:"javascript"}],description:"A library that collects 3D enabled web mercator projection math and tests.",id:"18c10ba2-43aa-5a55-9b94-285746882ef1",img:null,name:"viewport-mercator-project",page:"https://uber-common.github.io/viewport-mercator-project/#/",type:"MODULE",url:"uber-common/viewport-mercator-project"}},{node:{badges:[{badge:"javascript"}],description:"JavaScript console instrumentation and benchmarking for browser and node.js",id:"7839fb59-9b60-5eb5-8153-8c64ce5cc2e9",img:null,name:"probe.gl",page:"https://uber-web.github.io/probe.gl/#/",type:"MODULE",url:"uber-web/probe.gl"}},{node:{badges:[{badge:"c"},{badge:"javascript"}],description:"A hexagonal hierarchical geospatial indexing system",id:"14e837a5-9f1b-5893-9df3-c449c38a3ce5",img:null,name:"h3",page:"https://uber.github.io/h3/#/",type:"MODULE",url:"uber/h3"}},{node:{badges:[{badge:"javascript"}],description:"A suite of 3D-enabled data editing overlays, suitable for deck.gl",id:"a8e53835-d1fd-5479-b7d3-74829ce7ee63",img:null,name:"nebula.gl",page:"https://neb.gl/#/",type:"MODULE",url:"uber/nebula.gl"}},{node:{badges:[{badge:"javascript"}],description:"A suite of framework-independent loaders (i.e. parsers) for 3D geometries and assets, as well as geospatial formats.",id:"34abb1a8-8b42-54be-904d-f7eb225363ed",img:null,name:"loaders.gl",page:"https://uber-web.github.io/loaders.gl/#/",type:"MODULE",url:"uber-web/loaders.gl"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-f02941d03b6e57808979.js.map