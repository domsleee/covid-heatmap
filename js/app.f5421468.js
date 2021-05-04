(function(e){function t(t){for(var o,c,s=t[0],i=t[1],l=t[2],p=0,d=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/covid-heatmap/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"38ae":function(e,t,n){},"3c3f":function(e,t,n){},"48a4":function(e,t,n){"use strict";var o=n("3c3f"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hello-world")},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Legend"),n("div",{staticClass:"map",attrs:{id:"map"}})],1)},s=[],i=(n("96cf"),n("1da1")),l=(n("99af"),document.createElement("div"));l.classList.add("floatingEl"),l.style.display="none",document.body.appendChild(l);var u={mapMouseDown:!1,temporarilyOff:!1};function p(e){document.body.addEventListener("mousemove",(function(e){var t=e.clientY,n=e.clientX;l.style.top=t+5+"px",l.style.left=n+5+"px"})),e.data.addListener("mousemove",(function(e){var t=e.feature;l.style.display="block",d()&&(l.innerHTML="Postcode: ".concat(t.getProperty("postCode"),"<br />Cases: ").concat(t.getProperty("cases"),"<br />Suburbs: ").concat(t.getProperty("suburb")))})),e.data.addListener("mouseout",(function(){d()&&(l.innerHTML="")})),e.data.addListener("mousedown",(function(){u.mapMouseDown=!0})),e.data.addListener("mouseup",(function(){u.mapMouseDown=!1,u.temporarilyOff=!0,setTimeout((function(){return u.temporarilyOff=!1}),50)}))}function d(){return!u.mapMouseDown&&!u.temporarilyOff}var f="/covid-heatmap",m=!1,b="https://domsleee.github.io/covid-heatmap-data",v=(m?f+"/proc":b)+"/suburb-10-nsw-proc.geojson",g=n("d4ec"),h=n("ade3"),y=function e(){Object(g["a"])(this,e)};function _(e){e/y.MAX_CASES>1&&console.log("WARNING: exceeds max gradient ".concat(e));Math.min(1,e/y.MAX_CASES);var t=y.LEGEND_GRADIENT,n=Math.min(Math.floor(t.length*e/y.MAX_CASES),t.length-1);return t[n]}function E(){var e=new google.maps.Map(document.getElementById("map"),{zoom:12,center:new google.maps.LatLng(-33.8688,151.2093)});return e.data.loadGeoJson(v),e.data.setStyle((function(e){var t=e.getProperty("cases"),n=_(t);return{fillColor:n,strokeWeight:1,fillOpacity:.5}})),e}Object(h["a"])(y,"MAX_CASES",60),Object(h["a"])(y,"LEGEND_GRADIENT",["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]);var w=n("2909"),S=n("93b6");function x(){var e=Object({VUE_APP_BASEPATH:"/home/dom/git/covid-heatmap",VUE_APP_KEY_OVERRIDE:"AIzaSyCt8F381G5MhGW5HP0ojgrHdz4dZ4_guKA",NODE_ENV:"production",BASE_URL:"/covid-heatmap/"}).VUE_APP_MAPBOX_API;e||(e="pk.eyJ1IjoiZG9tc2xlZSIsImEiOiJja281dHIzamMwdWN5MnByd2U2dHh2dHN3In0.HsDJnEgqjq_Gewlzt6NGew"),mapboxgl.accessToken=e;var t=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[151.21,-33.86],zoom:11.5});t.on("load",(function(){window.mapbox=t,t.scrollZoom.setWheelZoomRate(.5),t.addSource("suburbs",{type:"geojson",data:"https://domsleee.github.io/covid-heatmap-data/suburb-10-nsw-proc.geojson"}),t.addLayer({id:"cases-layer",type:"fill",source:"suburbs",paint:{"fill-color":["interpolate",["linear"],["get","cases"]].concat(Object(w["a"])(A())),"fill-opacity":.5}}),t.addLayer({id:"line-layer",type:"line",source:"suburbs",paint:{"line-color":"#000000","line-width":1}})})),O(t),mapboxgl.supported({failIfMajorPerformanceCaveat:!0})?console.log("HARDWARE MODE"):console.log("SOFTWARE MODE")}function A(){for(var e=y.LEGEND_GRADIENT.length,t=[],n=0;n<e;++n)t.push(Math.floor(n*y.MAX_CASES/e)),t.push(y.LEGEND_GRADIENT[n]);return t}function O(e){var t=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1,className:"myFloatingEl"}).trackPointer().setHTML("<h1>Hello World!</h1>").addTo(e);e.on("mousemove",(function(n){var o=e.queryRenderedFeatures(n.point);if(o.length){var a=o[0].properties,r="cases"in a?"Postcode: ".concat(a.postCode,"<br />Cases: ").concat(a.cases,"<br />Suburbs: ").concat(S(a.suburb,200,{truncate:!1,ellipse:" ..."})):"unknown";t.setHTML(r)}}))}var M="mapbox";function j(){return C.apply(this,arguments)}function C(){return C=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"gmaps"==M||"true"===localStorage.useGoogleMaps?(t=E(),p(t)):x();case 1:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"legend"},[n("p",{staticStyle:{margin:"0.75em 0"}},[e._v("Legend")]),n("ColorStepper",{attrs:{colors:e.gradient,maxValue:e.maxValue}}),e._m(0),e._m(1)],1)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"linkcont"},[n("a",{attrs:{href:"https://data.nsw.gov.au/data/dataset/covid-19-cases-by-location/resource/21304414-1ff1-4243-a5d2-f52778048b29",target:"_blank"}},[e._v("Data source (Data.NSW)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"linkcont"},[n("a",{attrs:{href:"https://github.com/domsleee/covid-heatmap",target:"_blank"}},[e._v("github repo")])])}],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"stepper"},e._l(e.colors,(function(e){return n("div",{key:e,staticClass:"step",style:{background:e,opacity:.6}})})),0),n("div",{staticClass:"stepper",staticStyle:{padding:"0 4px","box-sizing":"border-box"}},[n("div",{staticClass:"step",staticStyle:{"text-align":"left"}},[e._v("0")]),n("div",{staticClass:"step",staticStyle:{"text-align":"right"}},[e._v(e._s(e.maxValue)+"+")])])])},G=[],N=(n("a9e3"),{name:"ColorStepper",props:{colors:Array,maxValue:Number},mounted:function(){}}),k=N,R=(n("b5fe"),n("2877")),H=Object(R["a"])(k,D,G,!1,null,"1ccdfd5c",null),I=H.exports,T={name:"Legend",components:{ColorStepper:I},props:{},data:function(){return{gradient:y.LEGEND_GRADIENT,maxValue:y.MAX_CASES}},mounted:function(){}},W=T,V=(n("48a4"),Object(R["a"])(W,P,L,!1,null,"587c2f2c",null)),z=V.exports,X={name:"HelloWorld",components:{Legend:z},props:{msg:String},mounted:function(){var e=document.createElement("script"),t="AIzaSyCt8F381G5MhGW5HP0ojgrHdz4dZ4_guKA";function n(){return o.apply(this,arguments)}function o(){return o=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}e.setAttribute("src","https://maps.googleapis.com/maps/api/js?v=3.44.12&key=".concat(t)),document.head.appendChild(e),window.onload=n}},$=X,B=(n("7907"),Object(R["a"])($,c,s,!1,null,"9fad146c",null)),J=B.exports,Z={name:"App",components:{HelloWorld:J}},F=Z,U=(n("034f"),Object(R["a"])(F,a,r,!1,null,null,null)),q=U.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(q)}}).$mount("#app")},7907:function(e,t,n){"use strict";var o=n("8e09"),a=n.n(o);a.a},"85ec":function(e,t,n){},"8e09":function(e,t,n){},b5fe:function(e,t,n){"use strict";var o=n("38ae"),a=n.n(o);a.a}});
//# sourceMappingURL=app.f5421468.js.map