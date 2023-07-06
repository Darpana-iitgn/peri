/*! For license information please see 1683.57b6c396.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkperi=self.webpackChunkperi||[]).push([[1683,369,4037,6946],{369:function(n,t,e){e.r(t),e.d(t,{a:function(){return u},b:function(){return i},p:function(){return r}});var o=e(5971),r=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return console.warn.apply(console,(0,o.ev)(["[Ionic Warning]: ".concat(n)],t,!1))},i=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return console.error.apply(console,(0,o.ev)(["[Ionic Error]: ".concat(n)],t,!1))},u=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return console.error("<".concat(n.tagName.toLowerCase(),"> must be used inside ").concat(t.join(" or "),"."))}},4037:function(n,t,e){e.r(t),e.d(t,{I:function(){return u},a:function(){return d},b:function(){return c},c:function(){return m},d:function(){return h},f:function(){return f},g:function(){return s},i:function(){return l},p:function(){return p},r:function(){return w},s:function(){return v}});var o=e(5971),r=e(300),i=e(369),u="ion-content",c=".ion-content-scroll-host",a="".concat(u,", ").concat(c),l=function(n){return"ION-CONTENT"===n.tagName},s=function(n){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){switch(t.label){case 0:return l(n)?[4,new Promise((function(t){return(0,r.c)(n,t)}))]:[3,2];case 1:return t.sent(),[2,n.getScrollElement()];case 2:return[2,n]}}))}))},d=function(n){var t=n.querySelector(c);return t||n.querySelector(a)},f=function(n){return n.closest(a)},v=function(n,t){return l(n)?n.scrollToTop(t):Promise.resolve(n.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"}))},m=function(n,t,e,o){return l(n)?n.scrollByPoint(t,e,o):Promise.resolve(n.scrollBy({top:e,left:t,behavior:o>0?"smooth":"auto"}))},p=function(n){return(0,i.a)(n,u)},h=function(n){if(l(n)){var t=n,e=t.scrollY;return t.scrollY=!1,e}return n.style.setProperty("overflow","hidden"),!0},w=function(n,t){l(n)?n.scrollY=t:n.style.removeProperty("overflow")}},1683:function(n,t,e){e.r(t),e.d(t,{startInputShims:function(){return w}});var o=e(5971),r=e(4037),i=e(300),u=new WeakMap,c=function(n,t,e,o,r){void 0===o&&(o=0),void 0===r&&(r=!1),u.has(n)!==e&&(e?l(n,t,o,r):s(n,t))},a=function(n){return n===n.getRootNode().activeElement},l=function(n,t,e,o){void 0===o&&(o=!1);var r=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o&&(i.disabled=!0),r.appendChild(i),u.set(n,i);var c="rtl"===n.ownerDocument.dir?9999:-9999;n.style.pointerEvents="none",t.style.transform="translate3d(".concat(c,"px,").concat(e,"px,0) scale(0)")},s=function(n,t){var e=u.get(n);e&&(u.delete(n),e.remove()),n.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur], [contenteditable]",f=function(n,t,e,o){var r=n.top,i=n.bottom,u=t.top,c=u+15,a=.75*Math.min(t.bottom,o-e)-i,l=c-r,s=Math.round(a<0?-a:l>0?-l:0),d=Math.min(s,r-u),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:e,inputSafeY:4-(r-c)}},v=function(n,t,e,u,a,l){return void 0===l&&(l=!1),(0,o.mG)(void 0,void 0,void 0,(function(){var s,d,v,m,p,h;return(0,o.Jh)(this,(function(w){switch(w.label){case 0:return e||u?(s=function(n,t,e){var o,r=null!==(o=n.closest("ion-item,[ion-item]"))&&void 0!==o?o:n;return f(r.getBoundingClientRect(),t.getBoundingClientRect(),e,n.ownerDocument.defaultView.innerHeight)}(n,e||u,a),e&&Math.abs(s.scrollAmount)<4?(t.focus(),[2]):(c(n,t,!0,s.inputSafeY,l),t.focus(),(0,i.r)((function(){return n.click()})),"undefined"===typeof window?[3,3]:(v=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",m),window.removeEventListener("ionKeyboardDidShow",v),e?[4,(0,r.c)(e,0,s.scrollAmount,s.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return c(n,t,!1,s.inputSafeY),t.focus(),[2]}}))}))},m=function(){window.removeEventListener("ionKeyboardDidShow",m),window.addEventListener("ionKeyboardDidShow",v)},e?[4,(0,r.g)(e)]:[3,2]))):[2];case 1:if(p=w.sent(),h=p.scrollHeight-p.clientHeight,s.scrollAmount>h-p.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",m)):window.addEventListener("ionKeyboardDidShow",v),d=setTimeout(v,1e3),[2];w.label=2;case 2:v(),w.label=3;case 3:return[2]}}))}))},m=function(n,t,e){if(t&&e){var o=t.x-e.x,r=t.y-e.y;return o*o+r*r>n*n}return!1},p="$ionPaddingTimer",h=function(n,t){var e,o;if("INPUT"===n.tagName&&(!n.parentElement||"ION-INPUT"!==n.parentElement.tagName)&&"ION-SEARCHBAR"!==(null===(o=null===(e=n.parentElement)||void 0===e?void 0:e.parentElement)||void 0===o?void 0:o.tagName)){var i=(0,r.f)(n);if(null!==i){var u=i[p];u&&clearTimeout(u),t>0?i.style.setProperty("--keyboard-offset","".concat(t,"px")):i[p]=setTimeout((function(){i.style.setProperty("--keyboard-offset","0px")}),120)}}},w=function(n,t){var e=document,u="ios"===t,l="android"===t,s=n.getNumber("keyboardHeight",290),f=n.getBoolean("scrollAssist",!0),p=n.getBoolean("hideCaretOnScroll",u),w=n.getBoolean("inputBlurring",u),b=n.getBoolean("scrollPadding",!0),g=Array.from(e.querySelectorAll("ion-input, ion-textarea")),y=new WeakMap,E=new WeakMap,S=function(n){return(0,o.mG)(void 0,void 0,void 0,(function(){var t,e,u,d,h;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,new Promise((function(t){return(0,i.c)(n,t)}))];case 1:return o.sent(),t=n.shadowRoot||n,e=t.querySelector("input")||t.querySelector("textarea"),u=(0,r.f)(n),d=u?null:n.closest("ion-footer"),e?(u&&p&&!y.has(n)&&(h=function(n,t,e){if(!e||!t)return function(){};var o=function(e){a(t)&&c(n,t,e)},r=function(){return c(n,t,!1)},u=function(){return o(!0)},l=function(){return o(!1)};return(0,i.a)(e,"ionScrollStart",u),(0,i.a)(e,"ionScrollEnd",l),t.addEventListener("blur",r),function(){(0,i.b)(e,"ionScrollStart",u),(0,i.b)(e,"ionScrollEnd",l),t.removeEventListener("blur",r)}}(n,e,u),y.set(n,h)),"date"===e.type||"datetime-local"===e.type||!u&&!d||!f||E.has(n)||(h=function(n,t,e,o,r,u){var c;void 0===u&&(u=!1);var l=function(n){c=(0,i.p)(n)},s=function(l){if(c){var s=(0,i.p)(l);m(6,c,s)||a(t)||v(n,t,e,o,r,u)}};return n.addEventListener("touchstart",l,{capture:!0,passive:!0}),n.addEventListener("touchend",s,!0),function(){n.removeEventListener("touchstart",l,!0),n.removeEventListener("touchend",s,!0)}}(n,e,u,d,s,l),E.set(n,h)),[2]):[2]}}))}))};w&&function(){var n=!0,t=!1,e=document,o=function(){t=!0},r=function(){n=!0},u=function(o){if(t)t=!1;else{var r=e.activeElement;if(r&&!r.matches(d)){var i=o.target;i!==r&&(i.matches(d)||i.closest(d)||(n=!1,setTimeout((function(){n||r.blur()}),50)))}}};(0,i.a)(e,"ionScrollStart",o),e.addEventListener("focusin",r,!0),e.addEventListener("touchend",u,!1)}(),b&&function(n){var t=document,e=function(t){h(t.target,n)},o=function(n){h(n.target,0)};t.addEventListener("focusin",e),t.addEventListener("focusout",o)}(s);for(var L=0,N=g;L<N.length;L++){var P=N[L];S(P)}e.addEventListener("ionInputDidLoad",(function(n){S(n.detail)})),e.addEventListener("ionInputDidUnload",(function(n){!function(n){var t;p&&((t=y.get(n))&&t(),y.delete(n)),f&&((t=E.get(n))&&t(),E.delete(n))}(n.detail)}))}}}]);
//# sourceMappingURL=1683.57b6c396.chunk.js.map