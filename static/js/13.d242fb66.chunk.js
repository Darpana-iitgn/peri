/*! For license information please see 13.d242fb66.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkperi=self.webpackChunkperi||[]).push([[13,3636,369,4037,4738,9383],{3636:function(t,e,r){r.r(e),r.d(e,{C:function(){return s},a:function(){return o},d:function(){return a}});var n=r(5971),i=r(300),o=function(t,e,r,o,a,s){return(0,n.mG)(void 0,void 0,void 0,(function(){var d,l;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:if(t)return[2,t.attachViewToDom(e,r,a,o)];if(!s&&"string"!==typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");return l="string"===typeof r?null===(d=e.ownerDocument)||void 0===d?void 0:d.createElement(r):r,o&&o.forEach((function(t){return l.classList.add(t)})),a&&Object.assign(l,a),e.appendChild(l),[4,new Promise((function(t){return(0,i.c)(l,t)}))];case 1:return n.sent(),[2,l]}}))}))},a=function(t,e){if(e){if(t){var r=e.parentElement;return t.removeViewFromDom(r,e)}e.remove()}return Promise.resolve()},s=function(){var t,e;return{attachViewToDom:function(r,o,a,s){return void 0===a&&(a={}),void 0===s&&(s=[]),(0,n.mG)(void 0,void 0,void 0,(function(){var d,l,c,u,p;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return t=r,o?(c="string"===typeof o?null===(d=t.ownerDocument)||void 0===d?void 0:d.createElement(o):o,s.forEach((function(t){return c.classList.add(t)})),Object.assign(c,a),t.appendChild(c),[4,new Promise((function(t){return(0,i.c)(c,t)}))]):[3,2];case 1:return n.sent(),[3,3];case 2:t.children.length>0&&(t.children[0].classList.contains("ion-delegate-host")||((u=null===(l=t.ownerDocument)||void 0===l?void 0:l.createElement("div")).classList.add("ion-delegate-host"),s.forEach((function(t){return u.classList.add(t)})),u.append.apply(u,t.children),t.appendChild(u))),n.label=3;case 3:return p=document.querySelector("ion-app")||document.body,e=document.createComment("ionic teleport"),t.parentNode.insertBefore(e,t),p.appendChild(t),[2,t]}}))}))},removeViewFromDom:function(){return t&&e&&(e.parentNode.insertBefore(t,e),e.remove()),Promise.resolve()}}}},369:function(t,e,r){r.r(e),r.d(e,{a:function(){return a},b:function(){return o},p:function(){return i}});var n=r(5971),i=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return console.warn.apply(console,(0,n.ev)(["[Ionic Warning]: ".concat(t)],e,!1))},o=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return console.error.apply(console,(0,n.ev)(["[Ionic Error]: ".concat(t)],e,!1))},a=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return console.error("<".concat(t.tagName.toLowerCase(),"> must be used inside ").concat(e.join(" or "),"."))}},4037:function(t,e,r){r.r(e),r.d(e,{I:function(){return a},a:function(){return u},b:function(){return s},c:function(){return f},d:function(){return b},f:function(){return p},g:function(){return c},i:function(){return l},p:function(){return m},r:function(){return v},s:function(){return h}});var n=r(5971),i=r(300),o=r(369),a="ion-content",s=".ion-content-scroll-host",d="".concat(a,", ").concat(s),l=function(t){return"ION-CONTENT"===t.tagName},c=function(t){return(0,n.mG)(void 0,void 0,void 0,(function(){return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return l(t)?[4,new Promise((function(e){return(0,i.c)(t,e)}))]:[3,2];case 1:return e.sent(),[2,t.getScrollElement()];case 2:return[2,t]}}))}))},u=function(t){var e=t.querySelector(s);return e||t.querySelector(d)},p=function(t){return t.closest(d)},h=function(t,e){return l(t)?t.scrollToTop(e):Promise.resolve(t.scrollTo({top:0,left:0,behavior:e>0?"smooth":"auto"}))},f=function(t,e,r,n){return l(t)?t.scrollByPoint(e,r,n):Promise.resolve(t.scrollBy({top:r,left:e,behavior:n>0?"smooth":"auto"}))},m=function(t){return(0,o.a)(t,a)},b=function(t){if(l(t)){var e=t,r=e.scrollY;return e.scrollY=!1,r}return t.style.setProperty("overflow","hidden"),!0},v=function(t,e){l(t)?t.scrollY=e:t.style.removeProperty("overflow")}},13:function(t,e,r){r.r(e),r.d(e,{ion_modal:function(){return I}});var n,i,o=r(5971),a=r(1205),s=r(3878),d=r(4037),l=r(3636),c=r(300),u=r(4738),p=r(369),h=r(6835),f=r(3405),m=r(9383),b=r(5827),v=r(899),g=r(6260),w=r(7169);r(6005);(i=n||(n={})).Dark="DARK",i.Light="LIGHT",i.Default="DEFAULT";var y={getEngine:function(){var t;return(null===(t=null===h.w||void 0===h.w?void 0:h.w.Capacitor)||void 0===t?void 0:t.isPluginAvailable("StatusBar"))&&(null===h.w||void 0===h.w?void 0:h.w.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle:function(){var t;return!!(null===(t=null===h.w||void 0===h.w?void 0:h.w.Capacitor)||void 0===t?void 0:t.PluginHeaders)},setStyle:function(t){var e=this.getEngine();e&&e.setStyle(t)},getStyle:function(){return(0,o.mG)(this,void 0,void 0,(function(){var t;return(0,o.Jh)(this,(function(e){switch(e.label){case 0:return(t=this.getEngine())?[4,t.getInfo()]:[2,n.Default];case 1:return[2,e.sent().style]}}))}))}},k=function(t,e){if(1===e)return 0;var r=1/(1-e);return t*r+-e*r},x=function(){!h.w||h.w.innerWidth>=768||!y.supportsDefaultStatusBarStyle()||y.setStyle({style:n.Dark})},D=function(t){void 0===t&&(t=n.Default),!h.w||h.w.innerWidth>=768||!y.supportsDefaultStatusBarStyle()||y.setStyle({style:t})},E=function(t,e){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(r){switch(r.label){case 0:return"function"!==typeof t.canDismiss?[2]:[4,t.canDismiss(void 0,f.G)];case 1:return r.sent()?(e.isRunning()?e.onFinish((function(){t.dismiss(void 0,"handler")}),{oneTimeCallback:!0}):t.dismiss(void 0,"handler"),[2]):[2]}}))}))},S=function(t){return.00255275*Math.pow(2.71828,-14.9619*t)-1.00255*Math.pow(2.71828,-.0380968*t)+1},A=.93,B=function(t,e,r,n){var i=.5,o=t.offsetHeight,a=!1,s=!1,l=null,u=null,p=!0,h=0,f=(0,w.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:function(t){var e=t.event.target;if(null===e||!e.closest)return!0;if(l=(0,d.f)(e)){if((0,d.i)(l)){var r=(0,c.g)(l);u=r.querySelector(".inner-scroll")}else u=l;return!!!l.querySelector("ion-refresher")&&0===u.scrollTop}return null===e.closest("ion-footer")},onStart:function(r){var n=r.deltaY;p=!l||!(0,d.i)(l)||l.scrollY,s=void 0!==t.canDismiss&&!0!==t.canDismiss,n>0&&l&&(0,d.d)(l),e.progressStart(!0,a?1:0)},onMove:function(t){t.deltaY>0&&l&&(0,d.d)(l);var n=t.deltaY/o,a=n>=0&&s,u=a?.2:.9999,p=a?S(n/u):n,f=(0,c.l)(1e-4,p,u);e.progressStep(f),f>=i&&h<i?D(r):f<i&&h>=i&&x(),h=f},onEnd:function(r){var u=r.velocityY,h=r.deltaY/o,m=h>=0&&s,b=m?.2:.9999,v=m?S(h/b):h,w=(0,c.l)(1e-4,v,b),y=(r.deltaY+1e3*u)/o,k=!m&&y>=i,x=k?-.001:.001;k?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),x+=(0,g.g)([0,0],[.32,.72],[0,1],[1,1],w)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),x+=(0,g.g)([0,0],[1,0],[.68,.28],[1,1],w)[0]);var D=C(k?h*o:(1-w)*o,u);a=k,f.enable(!1),l&&(0,d.r)(l,p),e.onFinish((function(){k||f.enable(!0)})).progressEnd(k?1:0,x,D),m&&w>b/4?E(t,e):k&&n()}});return f},C=function(t,e){return(0,c.l)(400,t/Math.abs(1.1*e),500)},T=function(t){var e=t.currentBreakpoint,r=t.backdropBreakpoint,n=void 0===r||r<e,i=n?"calc(var(--backdrop-opacity) * ".concat(e,")"):"0",o=(0,v.c)("backdropAnimation").fromTo("opacity",0,i);return n&&o.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,v.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:"translateY(".concat(100-100*e,"%)")}]),backdropAnimation:o}},Y=function(t){var e=t.currentBreakpoint,r=t.backdropBreakpoint,n="calc(var(--backdrop-opacity) * ".concat(k(e,r),")"),i=[{offset:0,opacity:n},{offset:1,opacity:0}],o=[{offset:0,opacity:n},{offset:r,opacity:0},{offset:1,opacity:0}],a=(0,v.c)("backdropAnimation").keyframes(0!==r?o:i);return{wrapperAnimation:(0,v.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(".concat(100-100*e,"%)")},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},P=function(t,e){var r=e.presentingEl,n=e.currentBreakpoint,i=(0,c.g)(t),o=void 0!==n?T(e):{backdropAnimation:(0,v.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,v.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")},a=o.wrapperAnimation,s=o.backdropAnimation;s.addElement(i.querySelector("ion-backdrop")),a.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var d=(0,v.c)("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(r){var l=window.innerWidth<768,u="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,p=(0,c.g)(r),h=(0,v.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),f=document.body;if(l){var m=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",b=A,g="translateY(".concat(u?"-10px":m,") scale(").concat(b,")");h.afterStyles({transform:g}).beforeAddWrite((function(){return f.style.setProperty("background-color","black")})).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:g,borderRadius:"10px 10px 0 0"}]),d.addAnimation(h)}else if(d.addAnimation(s),u){g="translateY(-10px) scale(".concat(b=u?A:1,")");h.afterStyles({transform:g}).addElement(p.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:g}]);var w=(0,v.c)().afterStyles({transform:g}).addElement(p.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:g}]);d.addAnimation([h,w])}else a.fromTo("opacity","0","1")}else d.addAnimation(s);return d},O=function(t,e,r){void 0===r&&(r=500);var n=e.presentingEl,i=e.currentBreakpoint,o=(0,c.g)(t),a=void 0!==i?Y(e):{backdropAnimation:(0,v.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,v.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")},s=a.wrapperAnimation,d=a.backdropAnimation;d.addElement(o.querySelector("ion-backdrop")),s.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var l=(0,v.c)("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(n){var u=window.innerWidth<768,p="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,h=(0,c.g)(n),f=(0,v.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(t){if(1===t){n.style.setProperty("overflow","");var e=Array.from(m.querySelectorAll("ion-modal")).filter((function(t){return void 0!==t.presentingElement})).length;e<=1&&m.style.setProperty("background-color","")}})),m=document.body;if(u){var b=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",g=A,w="translateY(".concat(p?"-10px":b,") scale(").concat(g,")");f.addElement(n).keyframes([{offset:0,filter:"contrast(0.85)",transform:w,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),l.addAnimation(f)}else if(l.addAnimation(d),p){w="translateY(-10px) scale(".concat(g=p?A:1,")");f.addElement(h.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:w},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var y=(0,v.c)().addElement(h.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:w},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([f,y])}else s.fromTo("opacity","1","0")}else l.addAnimation(d);return l},M=function(t,e){var r=e.currentBreakpoint,n=(0,c.g)(t),i=void 0!==r?T(e):{backdropAnimation:(0,v.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,v.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])},o=i.wrapperAnimation,a=i.backdropAnimation;return a.addElement(n.querySelector("ion-backdrop")),o.addElement(n.querySelector(".modal-wrapper")),(0,v.c)().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,o])},L=function(t,e){var r=e.currentBreakpoint,n=(0,c.g)(t),i=void 0!==r?Y(e):{backdropAnimation:(0,v.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,v.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])},o=i.wrapperAnimation,a=i.backdropAnimation;return a.addElement(n.querySelector("ion-backdrop")),o.addElement(n.querySelector(".modal-wrapper")),(0,v.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,o])},I=function(){function t(t){var e=this;(0,a.r)(this,t),this.didPresent=(0,a.e)(this,"ionModalDidPresent",7),this.willPresent=(0,a.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,a.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,a.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,a.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,a.e)(this,"didPresent",7),this.willPresentShorthand=(0,a.e)(this,"willPresent",7),this.willDismissShorthand=(0,a.e)(this,"willDismiss",7),this.didDismissShorthand=(0,a.e)(this,"didDismiss",7),this.modalIndex=G++,this.coreDelegate=(0,l.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.handleBehavior="none",this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.keepContentsMounted=!1,this.configureTriggerInteraction=function(){var t=e,r=t.trigger,n=t.el,i=t.destroyTriggerInteraction;if(i&&i(),void 0!==r){var o=void 0!==r?document.getElementById(r):null;if(o){e.destroyTriggerInteraction=function(t,e){var r=function(){e.present()};return t.addEventListener("click",r),function(){t.removeEventListener("click",r)}}(o,n)}else(0,p.p)('A trigger element with the ID "'.concat(r,'" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-modal.'),e.el)}},this.onHandleClick=function(){var t=e,r=t.sheetTransition;"cycle"===t.handleBehavior&&void 0===r&&e.moveToNextBreakpoint()},this.onBackdropTap=function(){void 0===e.sheetTransition&&e.dismiss(void 0,f.B)},this.onLifecycle=function(t){var r=e.usersElement,n=R[t.type];if(r&&n){var i=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:t.detail});r.dispatchEvent(i)}}}return t.prototype.onIsOpenChange=function(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()},t.prototype.onTriggerChange=function(){this.configureTriggerInteraction()},t.prototype.swipeToCloseChanged=function(t){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(e){return this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose(),[2]}))}))},t.prototype.breakpointsChanged=function(t){void 0!==t&&(this.sortedBreakpoints=t.sort((function(t,e){return t-e})))},t.prototype.connectedCallback=function(){var t=this.configureTriggerInteraction,e=this.el;(0,f.e)(e),t()},t.prototype.disconnectedCallback=function(){var t=this.destroyTriggerInteraction;t&&t()},t.prototype.componentWillLoad=function(){var t=this,e=t.breakpoints,r=t.initialBreakpoint,n=t.swipeToClose,i=t.el;this.inheritedAttributes=(0,c.j)(i,["aria-label","role"]),this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-modal-".concat(this.modalIndex),(this.isSheetModal=void 0!==e&&void 0!==r)&&(this.currentBreakpoint=this.initialBreakpoint),void 0===e||void 0===r||e.includes(r)||(0,p.p)("Your breakpoints array must include the initialBreakpoint value."),n&&(0,p.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")},t.prototype.componentDidLoad=function(){var t=this;!0===this.isOpen&&(0,c.r)((function(){return t.present()})),this.breakpointsChanged(this.breakpoints)},t.prototype.getDelegate=function(t){if(void 0===t&&(t=!1),this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};var e=this.el.parentNode,r=this.inline=null!==e&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}},t.prototype.checkCanDismiss=function(t,e){return(0,o.mG)(this,void 0,void 0,(function(){var r;return(0,o.Jh)(this,(function(n){return void 0===(r=this.canDismiss)?[2,!0]:"function"===typeof r?[2,r(t,e)]:[2,r]}))}))},t.prototype.present=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,e,r,n,i,d,p=this;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return this.presented?[2]:void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:o.sent(),o.label=2;case 2:return this.currentBreakpoint=this.initialBreakpoint,t=this.getDelegate(!0),e=t.inline,r=t.delegate,n=this,[4,(0,l.a)(r,this.el,this.component,["ion-page"],this.componentProps,e)];case 3:return n.usersElement=o.sent(),[4,(0,b.e)(this.usersElement)];case 4:return o.sent(),(0,a.c)((function(){return p.el.classList.add("show-modal")})),this.currentTransition=(0,f.d)(this,"modalEnter",P,M,{presentingEl:this.presentingElement,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),"undefined"!==typeof window&&(this.keyboardOpenCallback=function(){p.gesture&&(p.gesture.enable(!1),(0,c.r)((function(){p.gesture&&p.gesture.enable(!0)})))},window.addEventListener(u.KEYBOARD_DID_OPEN,this.keyboardOpenCallback)),(i=void 0!==this.presentingElement&&(this.swipeToClose||void 0!==this.canDismiss))&&"ios"===(0,s.b)(this)?(d=this,[4,y.getStyle()]):[3,6];case 5:d.statusBarStyle=o.sent(),x(),o.label=6;case 6:return[4,this.currentTransition];case 7:return o.sent(),this.isSheetModal?this.initSheetGesture():i&&this.initSwipeToClose(),this.currentTransition=void 0,[2]}}))}))},t.prototype.initSwipeToClose=function(){var t,e=this;if("ios"===(0,s.b)(this)){var r=this.el,i=this.leaveAnimation||s.c.get("modalLeave",O),a=this.animation=i(r,{presentingEl:this.presentingElement});if((0,d.a)(r)){var l=null!==(t=this.statusBarStyle)&&void 0!==t?t:n.Default;this.gesture=B(r,a,l,(function(){e.gestureAnimationDismissing=!0,e.animation.onFinish((function(){return(0,o.mG)(e,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.dismiss(void 0,f.G)];case 1:return t.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))})),this.gesture.enable(!0)}else(0,d.p)(r)}},t.prototype.initSheetGesture=function(){var t=this,e=this,r=e.wrapperEl,n=e.initialBreakpoint,i=e.backdropBreakpoint;if(r&&void 0!==n){var a=this.enterAnimation||s.c.get("modalEnter",P),d=this.animation=a(this.el,{presentingEl:this.presentingElement,currentBreakpoint:n,backdropBreakpoint:i});d.progressStart(!0,1);var l=function(t,e,r,n,i,a,s,d,l,u){void 0===s&&(s=[]);var p={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},h=t.querySelector("ion-content"),f=r.clientHeight,m=n,b=0,v=!1,g=a.childAnimations.find((function(t){return"wrapperAnimation"===t.id})),y=a.childAnimations.find((function(t){return"backdropAnimation"===t.id})),x=s[s.length-1],D=s[0],A=function(){t.style.setProperty("pointer-events","auto"),e.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},B=function(){t.style.setProperty("pointer-events","none"),e.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};g&&y&&(g.keyframes((0,o.ev)([],p.WRAPPER_KEYFRAMES,!0)),y.keyframes((0,o.ev)([],p.BACKDROP_KEYFRAMES,!0)),a.progressStart(!0,1-m),m>i?A():B()),h&&m!==x&&(h.scrollY=!1);var C=function(e){var r=e.breakpoint,n=e.canDismiss,d=e.breakpointOffset,f=n&&0===r,b=f?m:r,v=0!==b;return m=0,g&&y&&(g.keyframes([{offset:0,transform:"translateY(".concat(100*d,"%)")},{offset:1,transform:"translateY(".concat(100*(1-b),"%)")}]),y.keyframes([{offset:0,opacity:"calc(var(--backdrop-opacity) * ".concat(k(1-d,i),")")},{offset:1,opacity:"calc(var(--backdrop-opacity) * ".concat(k(b,i),")")}]),a.progressStep(0)),T.enable(!1),f?E(t,a):v||l(),new Promise((function(t){a.onFinish((function(){v?g&&y?(0,c.r)((function(){g.keyframes((0,o.ev)([],p.WRAPPER_KEYFRAMES,!0)),y.keyframes((0,o.ev)([],p.BACKDROP_KEYFRAMES,!0)),a.progressStart(!0,1-b),u(m=b),h&&m===s[s.length-1]&&(h.scrollY=!0),m>i?A():B(),T.enable(!0),t()})):(T.enable(!0),t()):t()}),{oneTimeCallback:!0}).progressEnd(1,0,500)}))},T=(0,w.createGesture)({el:r,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:function(t){var e=t.event.target.closest("ion-content");return 1!==(m=d())||!e},onStart:function(){v=void 0!==t.canDismiss&&!0!==t.canDismiss&&0===D,h&&(h.scrollY=!1),(0,c.r)((function(){t.focus()})),a.progressStart(!0,1-m)},onMove:function(t){var e=1-m,r=s.length>1?1-s[1]:void 0,n=e+t.deltaY/f,i=void 0!==r&&n>=r&&v,o=i?.95:.9999,d=i&&void 0!==r?r+S((n-r)/(o-r)):n;b=(0,c.l)(1e-4,d,o),a.progressStep(b)},onEnd:function(t){var e=t.velocityY,r=(t.deltaY+350*e)/f,n=m-r,i=s.reduce((function(t,e){return Math.abs(e-n)<Math.abs(t-n)?e:t}));C({breakpoint:i,breakpointOffset:b,canDismiss:v})}});return{gesture:T,moveSheetToBreakpoint:C}}(this.el,this.backdropEl,r,n,i,d,this.sortedBreakpoints,(function(){var e;return null!==(e=t.currentBreakpoint)&&void 0!==e?e:0}),(function(){return t.sheetOnDismiss()}),(function(e){t.currentBreakpoint!==e&&(t.currentBreakpoint=e,t.ionBreakpointDidChange.emit({breakpoint:e}))})),u=l.gesture,p=l.moveSheetToBreakpoint;this.gesture=u,this.moveSheetToBreakpoint=p,this.gesture.enable(!0)}},t.prototype.sheetOnDismiss=function(){var t=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((function(){return(0,o.mG)(t,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){switch(t.label){case 0:return this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),[4,this.dismiss(void 0,f.G)];case 1:return t.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))},t.prototype.dismiss=function(t,e){return(0,o.mG)(this,void 0,void 0,(function(){var r,n,i,d,c,p=this;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return this.gestureAnimationDismissing&&e!==f.G?[2,!1]:(n="handler"!==e)?[4,this.checkCanDismiss(t,e)]:[3,2];case 1:n=!o.sent(),o.label=2;case 2:return n?[2,!1]:(void 0!==this.presentingElement&&(this.swipeToClose||void 0!==this.canDismiss)&&"ios"===(0,s.b)(this)&&D(this.statusBarStyle),"undefined"!==typeof window&&this.keyboardOpenCallback&&(window.removeEventListener(u.KEYBOARD_DID_OPEN,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0),void 0===this.currentTransition?[3,4]:[4,this.currentTransition]);case 3:o.sent(),o.label=4;case 4:return i=f.h.get(this)||[],this.currentTransition=(0,f.f)(this,t,e,"modalLeave",O,L,{presentingEl:this.presentingElement,currentBreakpoint:null!==(r=this.currentBreakpoint)&&void 0!==r?r:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),[4,this.currentTransition];case 5:return(d=o.sent())?(c=this.getDelegate().delegate,[4,(0,l.d)(c,this.usersElement)]):[3,7];case 6:o.sent(),(0,a.c)((function(){return p.el.classList.remove("show-modal")})),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),i.forEach((function(t){return t.destroy()})),o.label=7;case 7:return this.currentBreakpoint=void 0,this.currentTransition=void 0,this.animation=void 0,[2,d]}}))}))},t.prototype.onDidDismiss=function(){return(0,f.g)(this.el,"ionModalDidDismiss")},t.prototype.onWillDismiss=function(){return(0,f.g)(this.el,"ionModalWillDismiss")},t.prototype.setCurrentBreakpoint=function(t){return(0,o.mG)(this,void 0,void 0,(function(){var e,r,n,i,a;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return this.isSheetModal?this.breakpoints.includes(t)?(r=(e=this).currentBreakpoint,n=e.moveSheetToBreakpoint,i=e.canDismiss,a=e.breakpoints,r===t?[2]:n?(this.sheetTransition=n({breakpoint:t,breakpointOffset:1-r,canDismiss:void 0!==i&&!0!==i&&0===a[0]}),[4,this.sheetTransition]):[3,2]):((0,p.p)("Attempted to set invalid breakpoint value ".concat(t,". Please double check that the breakpoint value is part of your defined breakpoints.")),[2]):((0,p.p)("setCurrentBreakpoint is only supported on sheet modals."),[2]);case 1:o.sent(),this.sheetTransition=void 0,o.label=2;case 2:return[2]}}))}))},t.prototype.getCurrentBreakpoint=function(){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){return[2,this.currentBreakpoint]}))}))},t.prototype.moveToNextBreakpoint=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,e,r,n,i,a,s;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return e=(t=this).breakpoints,r=t.currentBreakpoint,e&&null!=r?(n=e.filter((function(t){return 0!==t})),i=n.indexOf(r),a=(i+1)%n.length,s=n[a],[4,this.setCurrentBreakpoint(s)]):[2,!1];case 1:return o.sent(),[2,!0]}}))}))},t.prototype.render=function(){var t,e=this,r=this,n=r.handle,i=r.isSheetModal,o=r.presentingElement,d=r.htmlAttributes,l=r.handleBehavior,c=r.inheritedAttributes,u=!1!==n&&i,p=(0,s.b)(this),h=this.modalId,f=void 0!==o&&"ios"===p,b="cycle"===l;return(0,a.h)(a.H,Object.assign({"no-router":!0,tabindex:"-1"},d,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign((t={},t[p]=!0,t["modal-default"]=!f&&!i,t["modal-card"]=f,t["modal-sheet"]=i,t["overlay-hidden"]=!0,t),(0,m.g)(this.cssClass)),id:h,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,a.h)("ion-backdrop",{ref:function(t){return e.backdropEl=t},visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===p&&(0,a.h)("div",{class:"modal-shadow"}),(0,a.h)("div",Object.assign({role:"dialog"},c,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:function(t){return e.wrapperEl=t}}),u&&(0,a.h)("button",{class:"modal-handle",tabIndex:b?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:b?this.onHandleClick:void 0,part:"handle"}),(0,a.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}},enumerable:!1,configurable:!0}),t}(),R={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"},G=0;I.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},4738:function(t,e,r){r.r(e),r.d(e,{KEYBOARD_DID_CLOSE:function(){return i},KEYBOARD_DID_OPEN:function(){return n},copyVisualViewport:function(){return w},keyboardDidClose:function(){return m},keyboardDidOpen:function(){return h},keyboardDidResize:function(){return f},resetKeyboardAssist:function(){return d},setKeyboardClose:function(){return p},setKeyboardOpen:function(){return u},startKeyboardAssist:function(){return l},trackViewportChanges:function(){return g}});var n="ionKeyboardDidShow",i="ionKeyboardDidHide",o={},a={},s=!1,d=function(){o={},a={},s=!1},l=function(t){c(t),t.visualViewport&&(a=w(t.visualViewport),t.visualViewport.onresize=function(){g(t),h()||f(t)?u(t):m(t)&&p(t)})},c=function(t){t.addEventListener("keyboardDidShow",(function(e){return u(t,e)})),t.addEventListener("keyboardDidHide",(function(){return p(t)}))},u=function(t,e){b(t,e),s=!0},p=function(t){v(t),s=!1},h=function(){var t=(o.height-a.height)*a.scale;return!s&&o.width===a.width&&t>150},f=function(t){return s&&!m(t)},m=function(t){return s&&a.height===t.innerHeight},b=function(t,e){var r=e?e.keyboardHeight:t.innerHeight-a.height,i=new CustomEvent(n,{detail:{keyboardHeight:r}});t.dispatchEvent(i)},v=function(t){var e=new CustomEvent(i);t.dispatchEvent(e)},g=function(t){o=Object.assign({},a),a=w(t.visualViewport)},w=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}},9383:function(t,e,r){r.r(e),r.d(e,{c:function(){return o},g:function(){return a},h:function(){return i},o:function(){return d}});var n=r(5971),i=function(t,e){return null!==e.closest(t)},o=function(t,e){var r;return"string"===typeof t&&t.length>0?Object.assign(((r={"ion-color":!0})["ion-color-".concat(t)]=!0,r),e):e},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,d=function(t,e,r,i){return(0,n.mG)(void 0,void 0,void 0,(function(){var o;return(0,n.Jh)(this,(function(n){return null!=t&&"#"!==t[0]&&!s.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,r,i)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=13.d242fb66.chunk.js.map