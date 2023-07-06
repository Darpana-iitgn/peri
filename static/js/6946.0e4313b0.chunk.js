"use strict";(self.webpackChunkperi=self.webpackChunkperi||[]).push([[6946],{1683:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return w}});var o=n(5971),r=n(4037),i=n(300),a=new WeakMap,u=function(e,t,n,o,r){void 0===o&&(o=0),void 0===r&&(r=!1),a.has(e)!==n&&(n?d(e,t,o,r):l(e,t))},c=function(e){return e===e.getRootNode().activeElement},d=function(e,t,n,o){void 0===o&&(o=!1);var r=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o&&(i.disabled=!0),r.appendChild(i),a.set(e,i);var u="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(u,"px,").concat(n,"px,0) scale(0)")},l=function(e,t){var n=a.get(e);n&&(a.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},s="input, textarea, [no-blur], [contenteditable]",f=function(e,t,n,o){var r=e.top,i=e.bottom,a=t.top,u=a+15,c=.75*Math.min(t.bottom,o-n)-i,d=u-r,l=Math.round(c<0?-c:d>0?-d:0),s=Math.min(l,r-a),f=Math.abs(s)/.3;return{scrollAmount:s,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-u)}},v=function(e,t,n,a,c,d){return void 0===d&&(d=!1),(0,o.mG)(void 0,void 0,void 0,(function(){var l,s,v,m,p,h;return(0,o.Jh)(this,(function(w){switch(w.label){case 0:return n||a?(l=function(e,t,n){var o,r=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return f(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(e,n||a,c),n&&Math.abs(l.scrollAmount)<4?(t.focus(),[2]):(u(e,t,!0,l.inputSafeY,d),t.focus(),(0,i.r)((function(){return e.click()})),"undefined"===typeof window?[3,3]:(v=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return void 0!==s&&clearTimeout(s),window.removeEventListener("ionKeyboardDidShow",m),window.removeEventListener("ionKeyboardDidShow",v),n?[4,(0,r.c)(n,0,l.scrollAmount,l.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return u(e,t,!1,l.inputSafeY),t.focus(),[2]}}))}))},m=function(){window.removeEventListener("ionKeyboardDidShow",m),window.addEventListener("ionKeyboardDidShow",v)},n?[4,(0,r.g)(n)]:[3,2]))):[2];case 1:if(p=w.sent(),h=p.scrollHeight-p.clientHeight,l.scrollAmount>h-p.scrollTop)return"password"===t.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",m)):window.addEventListener("ionKeyboardDidShow",v),s=setTimeout(v,1e3),[2];w.label=2;case 2:v(),w.label=3;case 3:return[2]}}))}))},m=function(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},p="$ionPaddingTimer",h=function(e,t){var n,o;if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&"ION-SEARCHBAR"!==(null===(o=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===o?void 0:o.tagName)){var i=(0,r.f)(e);if(null!==i){var a=i[p];a&&clearTimeout(a),t>0?i.style.setProperty("--keyboard-offset","".concat(t,"px")):i[p]=setTimeout((function(){i.style.setProperty("--keyboard-offset","0px")}),120)}}},w=function(e,t){var n=document,a="ios"===t,d="android"===t,l=e.getNumber("keyboardHeight",290),f=e.getBoolean("scrollAssist",!0),p=e.getBoolean("hideCaretOnScroll",a),w=e.getBoolean("inputBlurring",a),b=e.getBoolean("scrollPadding",!0),g=Array.from(n.querySelectorAll("ion-input, ion-textarea")),E=new WeakMap,y=new WeakMap,S=function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){var t,n,a,s,h;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,new Promise((function(t){return(0,i.c)(e,t)}))];case 1:return o.sent(),t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),a=(0,r.f)(e),s=a?null:e.closest("ion-footer"),n?(a&&p&&!E.has(e)&&(h=function(e,t,n){if(!n||!t)return function(){};var o=function(n){c(t)&&u(e,t,n)},r=function(){return u(e,t,!1)},a=function(){return o(!0)},d=function(){return o(!1)};return(0,i.a)(n,"ionScrollStart",a),(0,i.a)(n,"ionScrollEnd",d),t.addEventListener("blur",r),function(){(0,i.b)(n,"ionScrollStart",a),(0,i.b)(n,"ionScrollEnd",d),t.removeEventListener("blur",r)}}(e,n,a),E.set(e,h)),"date"===n.type||"datetime-local"===n.type||!a&&!s||!f||y.has(e)||(h=function(e,t,n,o,r,a){var u;void 0===a&&(a=!1);var d=function(e){u=(0,i.p)(e)},l=function(d){if(u){var l=(0,i.p)(d);m(6,u,l)||c(t)||v(e,t,n,o,r,a)}};return e.addEventListener("touchstart",d,{capture:!0,passive:!0}),e.addEventListener("touchend",l,!0),function(){e.removeEventListener("touchstart",d,!0),e.removeEventListener("touchend",l,!0)}}(e,n,a,s,l,d),y.set(e,h)),[2]):[2]}}))}))};w&&function(){var e=!0,t=!1,n=document,o=function(){t=!0},r=function(){e=!0},a=function(o){if(t)t=!1;else{var r=n.activeElement;if(r&&!r.matches(s)){var i=o.target;i!==r&&(i.matches(s)||i.closest(s)||(e=!1,setTimeout((function(){e||r.blur()}),50)))}}};(0,i.a)(n,"ionScrollStart",o),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",a,!1)}(),b&&function(e){var t=document,n=function(t){h(t.target,e)},o=function(e){h(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)}(l);for(var L=0,D=g;L<D.length;L++){var k=D[L];S(k)}n.addEventListener("ionInputDidLoad",(function(e){S(e.detail)})),n.addEventListener("ionInputDidUnload",(function(e){!function(e){var t;p&&((t=E.get(e))&&t(),E.delete(e)),f&&((t=y.get(e))&&t(),y.delete(e))}(e.detail)}))}}}]);
//# sourceMappingURL=6946.0e4313b0.chunk.js.map