/*! For license information please see 5726.474ed42d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkperi=self.webpackChunkperi||[]).push([[5726,6269,1394,369,4037,2164],{6269:function(e,r,t){t.r(r),t.d(r,{a:function(){return o},b:function(){return a},c:function(){return s},d:function(){return c},h:function(){return l}});var n={getEngine:function(){var e,r=window;return r.TapticEngine||(null===(e=r.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&r.Capacitor.Plugins.Haptics},available:function(){var e,r=window;return!!this.getEngine()&&("web"!==(null===(e=r.Capacitor)||void 0===e?void 0:e.getPlatform())||"undefined"!==typeof navigator&&void 0!==navigator.vibrate)},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.impact({style:t})}},notification:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.notification({style:t})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=function(){return n.available()},s=function(){i()&&n.selection()},o=function(){i()&&n.selectionStart()},a=function(){i()&&n.selectionChanged()},l=function(){i()&&n.selectionEnd()},c=function(e){i()&&n.impact(e)}},1394:function(e,r,t){t.r(r),t.d(r,{a:function(){return n},b:function(){return d},c:function(){return c},d:function(){return p},e:function(){return E},f:function(){return l},g:function(){return m},h:function(){return s},i:function(){return i},j:function(){return b},k:function(){return k},l:function(){return f},m:function(){return u},n:function(){return v},o:function(){return h},p:function(){return a},q:function(){return o},r:function(){return x},s:function(){return S},t:function(){return g},u:function(){return w},v:function(){return y}});var n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",k="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",S="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},369:function(e,r,t){t.r(r),t.d(r,{a:function(){return o},b:function(){return s},p:function(){return i}});var n=t(5971),i=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return console.warn.apply(console,(0,n.ev)(["[Ionic Warning]: ".concat(e)],r,!1))},s=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return console.error.apply(console,(0,n.ev)(["[Ionic Error]: ".concat(e)],r,!1))},o=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return console.error("<".concat(e.tagName.toLowerCase(),"> must be used inside ").concat(r.join(" or "),"."))}},4037:function(e,r,t){t.r(r),t.d(r,{I:function(){return o},a:function(){return h},b:function(){return a},c:function(){return d},d:function(){return m},f:function(){return u},g:function(){return f},i:function(){return c},p:function(){return p},r:function(){return v},s:function(){return g}});var n=t(5971),i=t(300),s=t(369),o="ion-content",a=".ion-content-scroll-host",l="".concat(o,", ").concat(a),c=function(e){return"ION-CONTENT"===e.tagName},f=function(e){return(0,n.mG)(void 0,void 0,void 0,(function(){return(0,n.Jh)(this,(function(r){switch(r.label){case 0:return c(e)?[4,new Promise((function(r){return(0,i.c)(e,r)}))]:[3,2];case 1:return r.sent(),[2,e.getScrollElement()];case 2:return[2,e]}}))}))},h=function(e){var r=e.querySelector(a);return r||e.querySelector(l)},u=function(e){return e.closest(l)},g=function(e,r){return c(e)?e.scrollToTop(r):Promise.resolve(e.scrollTo({top:0,left:0,behavior:r>0?"smooth":"auto"}))},d=function(e,r,t,n){return c(e)?e.scrollByPoint(r,t,n):Promise.resolve(e.scrollBy({top:t,left:r,behavior:n>0?"smooth":"auto"}))},p=function(e){return(0,s.a)(e,o)},m=function(e){if(c(e)){var r=e,t=r.scrollY;return r.scrollY=!1,t}return e.style.setProperty("overflow","hidden"),!0},v=function(e,r){c(e)?e.scrollY=r:e.style.removeProperty("overflow")}},5726:function(e,r,t){t.r(r),t.d(r,{ion_refresher:function(){return y},ion_refresher_content:function(){return x}});var n=t(5971),i=t(1205),s=t(3878),o=t(6260),a=t(4037),l=t(300),c=t(6269),f=t(899),h=t(1394),u=t(1547),g=t(2164),d=(t(6835),function(e){var r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,o=(0,f.c)().duration(1e3).easing("ease-out"),a=(0,f.c)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=(0,f.c)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),c=(0,f.c)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var h=(0,f.c)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),u=(0,f.c)().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([h,u])}return o.addAnimation([a,l,c])}),p=function(e,r){var t=r.clientHeight,n=(0,f.c)().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-".concat(t,"px)")},{offset:1,transform:"scale(1) translateY(100px)"}]);return d(e).addAnimation([n])},m=function(e,r){var t=r.clientHeight,n=(0,f.c)().addElement(e).keyframes([{offset:0,transform:"translateY(-".concat(t,"px)")},{offset:1,transform:"translateY(100px)"}]);return d(e).addAnimation([n])},v=function(e,r,t){if(void 0===t&&(t=200),!e)return Promise.resolve();var n=(0,l.t)(e,t);return(0,i.c)((function(){e.style.setProperty("transition","".concat(t,"ms all ease-out")),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform","translate3d(0px, ".concat(r,", 0px)"))})),n},w=function(e,r){return(0,n.mG)(void 0,void 0,void 0,(function(){var t,i,o;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return(t=e.querySelector("ion-refresher-content"))?[4,new Promise((function(e){return(0,l.c)(t,e)}))]:[2,Promise.resolve(!1)];case 1:return n.sent(),i=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),o=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),[2,null!==i&&null!==o&&("ios"===r&&(0,s.a)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)]}}))}))},y=function(){function e(e){(0,i.r)(this,e),this.ionRefresh=(0,i.e)(this,"ionRefresh",7),this.ionPull=(0,i.e)(this,"ionPull",7),this.ionStart=(0,i.e)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.enable(!this.disabled)},e.prototype.checkNativeRefresher=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e,r;return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return[4,w(this.el,(0,s.b)(this))];case 1:return(e=t.sent())&&!this.nativeRefresher?(r=this.el.closest("ion-content"),this.setupNativeRefresher(r)):e||this.destroyNativeRefresher(),[2]}}))}))},e.prototype.destroyNativeRefresher=function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1},e.prototype.resetNativeRefresher=function(e,r){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return this.state=r,"ios"!==(0,s.b)(this)?[3,2]:[4,v(e,void 0,300)];case 1:return t.sent(),[3,4];case 2:return[4,(0,l.t)(this.el.querySelector(".refresher-refreshing-icon"),200)];case 3:t.sent(),t.label=4;case 4:return this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach((function(e){return e.destroy()})),this.animations=[],this.progress=0,this.state=1,[2]}}))}))},e.prototype.setupiOSNativeRefresher=function(e,r){return(0,n.mG)(this,void 0,void 0,(function(){var s,o,a,f,h=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.elementToTransform=this.scrollEl,s=e.shadowRoot.querySelectorAll("svg"),o=.16*this.scrollEl.clientHeight,a=s.length,(0,i.c)((function(){return s.forEach((function(e){return e.style.setProperty("animation","none")}))})),this.scrollListenerCallback=function(){(h.pointerDown||1!==h.state)&&(0,i.f)((function(){var e=h.scrollEl.scrollTop,t=h.el.clientHeight;if(e>0){if(8===h.state){var n=(0,l.l)(0,e/(.5*t),1);return void(0,i.c)((function(){return function(e,r){e.style.setProperty("opacity",r.toString())}(r,1-n)}))}}else{h.pointerDown&&(h.didStart||(h.didStart=!0,h.ionStart.emit()),h.pointerDown&&h.ionPull.emit());var f=h.didStart?30:0,u=h.progress=(0,l.l)(0,(Math.abs(e)-f)/o,1);8===h.state||1===u?(h.pointerDown&&function(e,r){(0,i.c)((function(){e.style.setProperty("--refreshing-rotation-duration",r>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")}))}(r,h.lastVelocityY),h.didRefresh||(h.beginRefresh(),h.didRefresh=!0,(0,c.d)({style:"light"}),h.pointerDown||v(h.elementToTransform,"".concat(t,"px")))):(h.state=2,function(e,r,t){(0,i.c)((function(){e.forEach((function(e,n){var i=n*(1/r),s=1-i,o=t-i,a=(0,l.l)(0,o/s,1);e.style.setProperty("opacity",a.toString())}))}))}(s,a,u))}}))},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),f=this,[4,Promise.resolve().then(t.bind(t,7169))];case 1:return f.gesture=n.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){h.pointerDown=!0,h.didRefresh||v(h.elementToTransform,"0px"),0===o&&(o=.16*h.scrollEl.clientHeight)},onMove:function(e){h.lastVelocityY=e.velocityY},onEnd:function(){h.pointerDown=!1,h.didStart=!1,h.needsCompletion?(h.resetNativeRefresher(h.elementToTransform,32),h.needsCompletion=!1):h.didRefresh&&(0,i.f)((function(){return v(h.elementToTransform,"".concat(h.el.clientHeight,"px"))}))}}),this.disabledChanged(),[2]}}))}))},e.prototype.setupMDNativeRefresher=function(e,r,s){return(0,n.mG)(this,void 0,void 0,(function(){var a,c,h,u,g=this;return(0,n.Jh)(this,(function(d){switch(d.label){case 0:return a=(0,l.g)(r).querySelector("circle"),c=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),h=(0,l.g)(s).querySelector("circle"),null!==a&&null!==h&&(0,i.c)((function(){a.style.setProperty("animation","none"),s.style.setProperty("animation-delay","-655ms"),h.style.setProperty("animation-delay","-655ms")})),u=this,[4,Promise.resolve().then(t.bind(t,7169))];case 1:return u.gesture=d.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return 8!==g.state&&32!==g.state&&0===g.scrollEl.scrollTop},onStart:function(e){g.progress=0,e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(r){if(r.velocityY<0&&0===g.progress&&!r.data.didStart||r.data.cancelled)r.data.cancelled=!0;else{if(!r.data.didStart){r.data.didStart=!0,g.state=2,(0,i.c)((function(){return g.scrollEl.style.setProperty("--overflow","hidden")}));var t=function(e){var r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"}(e),n=function(e,r,t){return"scale"===e?p(r,t):m(r,t)}(t,c,g.el);return r.data.animation=n,n.progressStart(!1,0),g.ionStart.emit(),void g.animations.push(n)}g.progress=(0,l.l)(0,r.deltaY/180*.5,1),r.data.animation.progressStep(g.progress),g.ionPull.emit()}},onEnd:function(e){if(e.data.didStart)if(g.gesture.enable(!1),(0,i.c)((function(){return g.scrollEl.style.removeProperty("--overflow")})),g.progress<=.4)e.data.animation.progressEnd(0,g.progress,500).onFinish((function(){g.animations.forEach((function(e){return e.destroy()})),g.animations=[],g.gesture.enable(!0),g.state=1}));else{var r=(0,o.g)([0,0],[0,0],[1,1],[1,1],g.progress)[0],t=function(e){return(0,f.c)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")}(c);g.animations.push(t),(0,i.c)((function(){return(0,n.mG)(g,void 0,void 0,(function(){return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return c.style.setProperty("--ion-pulling-refresher-translate","".concat(100*r,"px")),e.data.animation.progressEnd(),[4,t.play()];case 1:return n.sent(),this.beginRefresh(),e.data.animation.destroy(),this.gesture.enable(!0),[2]}}))}))}))}}}),this.disabledChanged(),[2]}}))}))},e.prototype.setupNativeRefresher=function(e){return(0,n.mG)(this,void 0,void 0,(function(){var r,t;return(0,n.Jh)(this,(function(n){return this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl||(this.setCss(0,"",!1,""),this.nativeRefresher=!0,r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===(0,s.b)(this)?this.setupiOSNativeRefresher(r,t):this.setupMDNativeRefresher(e,r,t)),[2]}))}))},e.prototype.componentDidUpdate=function(){this.checkNativeRefresher()},e.prototype.connectedCallback=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e,r=this;return(0,n.Jh)(this,(function(i){return"fixed"!==this.el.getAttribute("slot")?(console.error('Make sure you use: <ion-refresher slot="fixed">'),[2]):(e=this.el.closest(a.I))?((0,l.c)(e,(function(){return(0,n.mG)(r,void 0,void 0,(function(){var r,i,o,l,c=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return r=e.querySelector(a.b),i=this,[4,(0,a.g)(null!==r&&void 0!==r?r:e)];case 1:return i.scrollEl=n.sent(),o=this,[4,e.getBackgroundElement()];case 2:return o.backgroundContentEl=n.sent(),[4,w(this.el,(0,s.b)(this))];case 3:return n.sent()?(this.setupNativeRefresher(e),[3,6]):[3,4];case 4:return l=this,[4,Promise.resolve().then(t.bind(t,7169))];case 5:l.gesture=n.sent().createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:function(){return c.canStart()},onStart:function(){return c.onStart()},onMove:function(e){return c.onMove(e)},onEnd:function(){return c.onEnd()}}),this.disabledChanged(),n.label=6;case 6:return[2]}}))}))})),[2]):((0,a.p)(this.el),[2])}))}))},e.prototype.disconnectedCallback=function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.prototype.complete=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e=this;return(0,n.Jh)(this,(function(r){return this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||(0,l.r)((function(){return(0,l.r)((function(){return e.resetNativeRefresher(e.elementToTransform,32)}))}))):this.close(32,"120ms"),[2]}))}))},e.prototype.cancel=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e=this;return(0,n.Jh)(this,(function(r){return this.nativeRefresher?this.pointerDown||(0,l.r)((function(){return(0,l.r)((function(){return e.resetNativeRefresher(e.elementToTransform,16)}))})):this.close(16,""),[2]}))}))},e.prototype.getProgress=function(){return Promise.resolve(this.progress)},e.prototype.canStart=function(){return!!this.scrollEl&&(1===this.state&&!(this.scrollEl.scrollTop>0))},e.prototype.onStart=function(){this.progress=0,this.state=1,this.memoizeOverflowStyle()},e.prototype.onMove=function(e){if(this.scrollEl){var r=e.event;if(!(void 0!==r.touches&&r.touches.length>1)&&0===(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}},e.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state?this.cancel():1===this.state&&this.restoreOverflowStyle()},e.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})},e.prototype.close=function(e,r){var t=this;setTimeout((function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"",!0)}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)},e.prototype.setCss=function(e,r,t,n,s){var o=this;void 0===s&&(s=!1),this.nativeRefresher||(this.appliedStyles=e>0,(0,i.c)((function(){if(o.scrollEl&&o.backgroundContentEl){var i=o.scrollEl.style,a=o.backgroundContentEl.style;i.transform=a.transform=e>0?"translateY(".concat(e,"px) translateZ(0px)"):"",i.transitionDuration=a.transitionDuration=r,i.transitionDelay=a.transitionDelay=n,i.overflow=t?"hidden":""}s&&o.restoreOverflowStyle()})))},e.prototype.memoizeOverflowStyle=function(){if(this.scrollEl){var e=this.scrollEl.style,r=e.overflow,t=e.overflowX,n=e.overflowY;this.overflowStyles={overflow:null!==r&&void 0!==r?r:"",overflowX:null!==t&&void 0!==t?t:"",overflowY:null!==n&&void 0!==n?n:""}}},e.prototype.restoreOverflowStyle=function(){if(void 0!==this.overflowStyles&&void 0!==this.scrollEl){var e=this.overflowStyles,r=e.overflow,t=e.overflowX,n=e.overflowY;this.scrollEl.style.overflow=r,this.scrollEl.style.overflowX=t,this.scrollEl.style.overflowY=n,this.overflowStyles=void 0}},e.prototype.render=function(){var e,r=(0,s.b)(this);return(0,i.h)(i.H,{slot:"fixed",class:(e={},e[r]=!0,e["refresher-".concat(r)]=!0,e["refresher-native"]=this.nativeRefresher,e["refresher-active"]=1!==this.state,e["refresher-pulling"]=2===this.state,e["refresher-ready"]=4===this.state,e["refresher-refreshing"]=8===this.state,e["refresher-cancelling"]=16===this.state,e["refresher-completing"]=32===this.state,e)})},Object.defineProperty(e.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!1,configurable:!0}),e}();y.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};var x=function(){function e(e){(0,i.r)(this,e),this.customHTMLEnabled=s.c.get("innerHTMLTemplatesEnabled",u.E)}return e.prototype.componentWillLoad=function(){if(void 0===this.pullingIcon){var e=(0,s.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":h.i;this.pullingIcon=s.c.get("refreshingIcon","ios"===e&&(0,s.a)("mobile")?s.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){e=(0,s.b)(this);this.refreshingSpinner=s.c.get("refreshingSpinner",s.c.get("spinner","ios"===e?"lines":"circular"))}},e.prototype.renderPullingText=function(){var e=this.customHTMLEnabled,r=this.pullingText;return e?(0,i.h)("div",{class:"refresher-pulling-text",innerHTML:(0,u.a)(r)}):(0,i.h)("div",{class:"refresher-pulling-text"},r)},e.prototype.renderRefreshingText=function(){var e=this.customHTMLEnabled,r=this.refreshingText;return e?(0,i.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,u.a)(r)}):(0,i.h)("div",{class:"refresher-refreshing-text"},r)},e.prototype.render=function(){var e=this.pullingIcon,r=null!=e&&void 0!==g.S[e],t=(0,s.b)(this);return(0,i.h)(i.H,{class:t},(0,i.h)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&(0,i.h)("div",{class:"refresher-pulling-icon"},(0,i.h)("div",{class:"spinner-arrow-container"},(0,i.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&(0,i.h)("div",{class:"arrow-container"},(0,i.h)("ion-icon",{icon:h.h})))),this.pullingIcon&&!r&&(0,i.h)("div",{class:"refresher-pulling-icon"},(0,i.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),void 0!==this.pullingText&&this.renderPullingText()),(0,i.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,i.h)("div",{class:"refresher-refreshing-icon"},(0,i.h)("ion-spinner",{name:this.refreshingSpinner})),void 0!==this.refreshingText&&this.renderRefreshingText()))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),e}()},2164:function(e,r,t){t.r(r),t.d(r,{S:function(){return n}});var n={bubbles:{dur:1e3,circles:9,fn:function(e,r,t){var n="".concat(e*r/t-e,"ms"),i=2*Math.PI*r/t;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(e,r,t){var n=r/t,i="".concat(e*n-e,"ms"),s=2*Math.PI*n;return{r:5,style:{top:"".concat(9*Math.sin(s),"px"),left:"".concat(9*Math.cos(s),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,r){var t=-110*r+"ms";return{r:6,style:{left:"".concat(9-9*r,"px"),"animation-delay":t}}}},lines:{dur:1e3,lines:8,fn:function(e,r,t){return{y1:14,y2:26,style:{transform:"rotate(".concat(360/t*r+(r<t/2?180:-180),"deg)"),"animation-delay":"".concat(e*r/t-e,"ms")}}}},"lines-small":{dur:1e3,lines:8,fn:function(e,r,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(360/t*r+(r<t/2?180:-180),"deg)"),"animation-delay":"".concat(e*r/t-e,"ms")}}}},"lines-sharp":{dur:1e3,lines:12,fn:function(e,r,t){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*r+(r<6?180:-180),"deg)"),"animation-delay":"".concat(e*r/t-e,"ms")}}}},"lines-sharp-small":{dur:1e3,lines:12,fn:function(e,r,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*r+(r<6?180:-180),"deg)"),"animation-delay":"".concat(e*r/t-e,"ms")}}}}}}}]);
//# sourceMappingURL=5726.474ed42d.chunk.js.map