/*! For license information please see 13.dfbf12e8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkperi=self.webpackChunkperi||[]).push([[13,5892,4012,8527,2950,6555,903],{5892:function(t,e,r){r.r(e),r.d(e,{g:function(){return o}});var i=r(3023),o=function(){if(void 0!==i.w)return i.w.Capacitor}},4012:function(t,e,r){r.r(e),r.d(e,{I:function(){return s},a:function(){return p},b:function(){return a},c:function(){return f},d:function(){return b},f:function(){return h},g:function(){return c},i:function(){return l},p:function(){return m},r:function(){return v},s:function(){return u}});var i=r(5971),o=r(4852),n=r(8827),a="ion-content",s=".ion-content-scroll-host",d="".concat(a,", ").concat(s),l=function(t){return"ION-CONTENT"===t.tagName},c=function(t){return(0,i.mG)(void 0,void 0,void 0,(function(){return(0,i.Jh)(this,(function(e){switch(e.label){case 0:return l(t)?[4,new Promise((function(e){return(0,o.c)(t,e)}))]:[3,2];case 1:return e.sent(),[2,t.getScrollElement()];case 2:return[2,t]}}))}))},p=function(t){var e=t.querySelector(s);return e||t.querySelector(d)},h=function(t){return t.closest(d)},u=function(t,e){return l(t)?t.scrollToTop(e):Promise.resolve(t.scrollTo({top:0,left:0,behavior:e>0?"smooth":"auto"}))},f=function(t,e,r,i){return l(t)?t.scrollByPoint(e,r,i):Promise.resolve(t.scrollBy({top:r,left:e,behavior:i>0?"smooth":"auto"}))},m=function(t){return(0,n.b)(t,a)},b=function(t){if(l(t)){var e=t,r=e.scrollY;return e.scrollY=!1,r}return t.style.setProperty("overflow","hidden"),!0},v=function(t,e){l(t)?t.scrollY=e:t.style.removeProperty("overflow")}},13:function(t,e,r){r.r(e),r.d(e,{ion_modal:function(){return K}});var i,o,n=r(5971),a=r(2387),s=r(4012),d=r(341),l=r(4852),c=r(6555),p=r(8827),h=r(5892),u=r(1969),f=r(4364),m=r(6445),b=r(9764),v=r(903),g=r(1143),y=r(7937),k=r(3722),w=r(3023);r(8527),r(6283);(o=i||(i={})).Dark="DARK",o.Light="LIGHT",o.Default="DEFAULT";var x={getEngine:function(){var t=(0,h.g)();if(null===t||void 0===t?void 0:t.isPluginAvailable("StatusBar"))return t.Plugins.StatusBar},supportsDefaultStatusBarStyle:function(){var t=(0,h.g)();return!!(null===t||void 0===t?void 0:t.PluginHeaders)},setStyle:function(t){var e=this.getEngine();e&&e.setStyle(t)},getStyle:function(){return(0,n.mG)(this,void 0,void 0,(function(){var t;return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return(t=this.getEngine())?[4,t.getInfo()]:[2,i.Default];case 1:return[2,e.sent().style]}}))}))}},D=function(t,e){if(1===e)return 0;var r=1/(1-e);return t*r+-e*r},S=function(){!w.w||w.w.innerWidth>=768||!x.supportsDefaultStatusBarStyle()||x.setStyle({style:i.Dark})},E=function(t){void 0===t&&(t=i.Default),!w.w||w.w.innerWidth>=768||!x.supportsDefaultStatusBarStyle()||x.setStyle({style:t})},A=function(t,e){return(0,n.mG)(void 0,void 0,void 0,(function(){return(0,n.Jh)(this,(function(r){switch(r.label){case 0:return"function"!==typeof t.canDismiss?[2]:[4,t.canDismiss(void 0,u.G)];case 1:return r.sent()?(e.isRunning()?e.onFinish((function(){t.dismiss(void 0,"handler")}),{oneTimeCallback:!0}):t.dismiss(void 0,"handler"),[2]):[2]}}))}))},B=function(t){return.00255275*Math.pow(2.71828,-14.9619*t)-1.00255*Math.pow(2.71828,-.0380968*t)+1},C=.93,Y=function(t,e,r,i){var o=.5,n=t.offsetHeight,a=!1,d=!1,c=null,p=null,h=!0,u=0,f=(0,k.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:function(t){var e=t.event.target;if(null===e||!e.closest)return!0;if(c=(0,s.f)(e)){if((0,s.i)(c)){var r=(0,l.g)(c);p=r.querySelector(".inner-scroll")}else p=c;return!!!c.querySelector("ion-refresher")&&0===p.scrollTop}return null===e.closest("ion-footer")},onStart:function(r){var i=r.deltaY;h=!c||!(0,s.i)(c)||c.scrollY,d=void 0!==t.canDismiss&&!0!==t.canDismiss,i>0&&c&&(0,s.d)(c),e.progressStart(!0,a?1:0)},onMove:function(t){t.deltaY>0&&c&&(0,s.d)(c);var i=t.deltaY/n,a=i>=0&&d,p=a?.2:.9999,h=a?B(i/p):i,f=(0,l.l)(1e-4,h,p);e.progressStep(f),f>=o&&u<o?E(r):f<o&&u>=o&&S(),u=f},onEnd:function(r){var p=r.velocityY,u=r.deltaY/n,m=u>=0&&d,b=m?.2:.9999,v=m?B(u/b):u,g=(0,l.l)(1e-4,v,b),k=(r.deltaY+1e3*p)/n,w=!m&&k>=o,x=w?-.001:.001;w?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),x+=(0,y.g)([0,0],[.32,.72],[0,1],[1,1],g)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),x+=(0,y.g)([0,0],[1,0],[.68,.28],[1,1],g)[0]);var D=P(w?u*n:(1-g)*n,p);a=w,f.enable(!1),c&&(0,s.r)(c,h),e.onFinish((function(){w||f.enable(!0)})).progressEnd(w?1:0,x,D),m&&g>b/4?A(t,e):w&&i()}});return f},P=function(t,e){return(0,l.l)(400,t/Math.abs(1.1*e),500)},M=function(t){var e=t.currentBreakpoint,r=t.backdropBreakpoint,i=void 0===r||r<e,o=i?"calc(var(--backdrop-opacity) * ".concat(e,")"):"0",n=(0,g.c)("backdropAnimation").fromTo("opacity",0,o);return i&&n.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,g.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:"translateY(".concat(100-100*e,"%)")}]),backdropAnimation:n}},O=function(t){var e=t.currentBreakpoint,r=t.backdropBreakpoint,i="calc(var(--backdrop-opacity) * ".concat(D(e,r),")"),o=[{offset:0,opacity:i},{offset:1,opacity:0}],n=[{offset:0,opacity:i},{offset:r,opacity:0},{offset:1,opacity:0}],a=(0,g.c)("backdropAnimation").keyframes(0!==r?n:o);return{wrapperAnimation:(0,g.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(".concat(100-100*e,"%)")},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},T=function(t,e){var r=e.presentingEl,i=e.currentBreakpoint,o=(0,l.g)(t),n=void 0!==i?M(e):{backdropAnimation:(0,g.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,g.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")},a=n.wrapperAnimation,s=n.backdropAnimation;s.addElement(o.querySelector("ion-backdrop")),a.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var d=(0,g.c)("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(r){var c=window.innerWidth<768,p="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,h=(0,l.g)(r),u=(0,g.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),f=document.body;if(c){var m=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",b=C,v="translateY(".concat(p?"-10px":m,") scale(").concat(b,")");u.afterStyles({transform:v}).beforeAddWrite((function(){return f.style.setProperty("background-color","black")})).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:v,borderRadius:"10px 10px 0 0"}]),d.addAnimation(u)}else if(d.addAnimation(s),p){v="translateY(-10px) scale(".concat(b=p?C:1,")");u.afterStyles({transform:v}).addElement(h.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:v}]);var y=(0,g.c)().afterStyles({transform:v}).addElement(h.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:v}]);d.addAnimation([u,y])}else a.fromTo("opacity","0","1")}else d.addAnimation(s);return d},L=function(t,e,r){void 0===r&&(r=500);var i=e.presentingEl,o=e.currentBreakpoint,n=(0,l.g)(t),a=void 0!==o?O(e):{backdropAnimation:(0,g.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,g.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")},s=a.wrapperAnimation,d=a.backdropAnimation;d.addElement(n.querySelector("ion-backdrop")),s.addElement(n.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var c=(0,g.c)("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(i){var p=window.innerWidth<768,h="ION-MODAL"===i.tagName&&void 0!==i.presentingElement,u=(0,l.g)(i),f=(0,g.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(t){if(1===t){i.style.setProperty("overflow","");var e=Array.from(m.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter((function(t){return void 0!==t.presentingElement})).length;e<=1&&m.style.setProperty("background-color","")}})),m=document.body;if(p){var b=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",v=C,y="translateY(".concat(h?"-10px":b,") scale(").concat(v,")");f.addElement(i).keyframes([{offset:0,filter:"contrast(0.85)",transform:y,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),c.addAnimation(f)}else if(c.addAnimation(d),h){y="translateY(-10px) scale(".concat(v=h?C:1,")");f.addElement(u.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:y},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var k=(0,g.c)().addElement(u.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:y},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);c.addAnimation([f,k])}else s.fromTo("opacity","1","0")}else c.addAnimation(d);return c},R=function(t,e){var r=e.currentBreakpoint,i=(0,l.g)(t),o=void 0!==r?M(e):{backdropAnimation:(0,g.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,g.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])},n=o.wrapperAnimation,a=o.backdropAnimation;return a.addElement(i.querySelector("ion-backdrop")),n.addElement(i.querySelector(".modal-wrapper")),(0,g.c)().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,n])},I=function(t,e){var r=e.currentBreakpoint,i=(0,l.g)(t),o=void 0!==r?O(e):{backdropAnimation:(0,g.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,g.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])},n=o.wrapperAnimation,a=o.backdropAnimation;return a.addElement(i.querySelector("ion-backdrop")),n.addElement(i.querySelector(".modal-wrapper")),(0,g.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,n])},K=function(){function t(t){var e=this;(0,a.r)(this,t),this.didPresent=(0,a.d)(this,"ionModalDidPresent",7),this.willPresent=(0,a.d)(this,"ionModalWillPresent",7),this.willDismiss=(0,a.d)(this,"ionModalWillDismiss",7),this.didDismiss=(0,a.d)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,a.d)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,a.d)(this,"didPresent",7),this.willPresentShorthand=(0,a.d)(this,"willPresent",7),this.willDismissShorthand=(0,a.d)(this,"willDismiss",7),this.didDismissShorthand=(0,a.d)(this,"didDismiss",7),this.ionMount=(0,a.d)(this,"ionMount",7),this.lockController=(0,c.c)(),this.triggerController=(0,u.e)(),this.coreDelegate=(0,d.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=function(){var t=e,r=t.sheetTransition;"cycle"===t.handleBehavior&&void 0===r&&e.moveToNextBreakpoint()},this.onBackdropTap=function(){void 0===e.sheetTransition&&e.dismiss(void 0,u.B)},this.onLifecycle=function(t){var r=e.usersElement,i=G[t.type];if(r&&i){var o=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:t.detail});r.dispatchEvent(o)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}return t.prototype.onIsOpenChange=function(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()},t.prototype.triggerChanged=function(){var t=this,e=t.trigger,r=t.el,i=t.triggerController;e&&i.addClickListener(r,e)},t.prototype.breakpointsChanged=function(t){void 0!==t&&(this.sortedBreakpoints=t.sort((function(t,e){return t-e})))},t.prototype.connectedCallback=function(){var t=this.el;(0,u.j)(t),this.triggerChanged()},t.prototype.disconnectedCallback=function(){this.triggerController.removeClickListener()},t.prototype.componentWillLoad=function(){var t=this,e=t.breakpoints,r=t.initialBreakpoint,i=t.el,o=this.isSheetModal=void 0!==e&&void 0!==r;this.inheritedAttributes=(0,l.k)(i,["aria-label","role"]),o&&(this.currentBreakpoint=this.initialBreakpoint),void 0===e||void 0===r||e.includes(r)||(0,p.p)("Your breakpoints array must include the initialBreakpoint value."),(0,u.k)(i)},t.prototype.componentDidLoad=function(){var t=this;!0===this.isOpen&&(0,l.r)((function(){return t.present()})),this.breakpointsChanged(this.breakpoints)},t.prototype.getDelegate=function(t){if(void 0===t&&(t=!1),this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};var e=this.el.parentNode,r=this.inline=null!==e&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}},t.prototype.checkCanDismiss=function(t,e){return(0,n.mG)(this,void 0,void 0,(function(){var r;return(0,n.Jh)(this,(function(i){return"function"===typeof(r=this.canDismiss)?[2,r(t,e)]:[2,r]}))}))},t.prototype.present=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t,e,r,i,o,s,c,p,h,f,g=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return[4,this.lockController.lock()];case 1:return t=n.sent(),this.presented?(t(),[2]):(r=(e=this).presentingElement,i=e.el,this.currentBreakpoint=this.initialBreakpoint,o=this.getDelegate(!0),s=o.inline,c=o.delegate,this.ionMount.emit(),p=this,[4,(0,d.a)(c,i,this.component,["ion-page"],this.componentProps,s)]);case 2:return p.usersElement=n.sent(),(0,l.m)(i)?[4,(0,m.e)(this.usersElement)]:[3,4];case 3:return n.sent(),[3,6];case 4:return this.keepContentsMounted?[3,6]:[4,(0,m.w)()];case 5:n.sent(),n.label=6;case 6:return(0,a.w)((function(){return g.el.classList.add("show-modal")})),(h=void 0!==r)&&"ios"===(0,b.b)(this)?(f=this,[4,x.getStyle()]):[3,8];case 7:f.statusBarStyle=n.sent(),S(),n.label=8;case 8:return[4,(0,u.f)(this,"modalEnter",T,R,{presentingEl:r,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint})];case 9:return n.sent(),"undefined"!==typeof window&&(this.keyboardOpenCallback=function(){g.gesture&&(g.gesture.enable(!1),(0,l.r)((function(){g.gesture&&g.gesture.enable(!0)})))},window.addEventListener(v.KEYBOARD_DID_OPEN,this.keyboardOpenCallback)),this.isSheetModal?this.initSheetGesture():h&&this.initSwipeToClose(),t(),[2]}}))}))},t.prototype.initSwipeToClose=function(){var t,e=this;if("ios"===(0,b.b)(this)){var r=this.el,o=this.leaveAnimation||b.c.get("modalLeave",L),a=this.animation=o(r,{presentingEl:this.presentingElement});if((0,s.a)(r)){var d=null!==(t=this.statusBarStyle)&&void 0!==t?t:i.Default;this.gesture=Y(r,a,d,(function(){e.gestureAnimationDismissing=!0,E(e.statusBarStyle),e.animation.onFinish((function(){return(0,n.mG)(e,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.dismiss(void 0,u.G)];case 1:return t.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))})),this.gesture.enable(!0)}else(0,s.p)(r)}},t.prototype.initSheetGesture=function(){var t=this,e=this,r=e.wrapperEl,i=e.initialBreakpoint,o=e.backdropBreakpoint;if(r&&void 0!==i){var a=this.enterAnimation||b.c.get("modalEnter",T),s=this.animation=a(this.el,{presentingEl:this.presentingElement,currentBreakpoint:i,backdropBreakpoint:o});s.progressStart(!0,1);var d=function(t,e,r,i,o,a,s,d,c,p){void 0===s&&(s=[]);var h={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==o?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-o,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},u=t.querySelector("ion-content"),f=r.clientHeight,m=i,b=0,v=!1,g=a.childAnimations.find((function(t){return"wrapperAnimation"===t.id})),y=a.childAnimations.find((function(t){return"backdropAnimation"===t.id})),w=s[s.length-1],x=s[0],S=function(){t.style.setProperty("pointer-events","auto"),e.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},E=function(){t.style.setProperty("pointer-events","none"),e.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};g&&y&&(g.keyframes((0,n.ev)([],h.WRAPPER_KEYFRAMES,!0)),y.keyframes((0,n.ev)([],h.BACKDROP_KEYFRAMES,!0)),a.progressStart(!0,1-m),m>o?S():E()),u&&m!==w&&(u.scrollY=!1);var C=function(e){var r=e.breakpoint,i=e.canDismiss,d=e.breakpointOffset,f=e.animated,b=i&&0===r,v=b?m:r,k=0!==v;return m=0,g&&y&&(g.keyframes([{offset:0,transform:"translateY(".concat(100*d,"%)")},{offset:1,transform:"translateY(".concat(100*(1-v),"%)")}]),y.keyframes([{offset:0,opacity:"calc(var(--backdrop-opacity) * ".concat(D(1-d,o),")")},{offset:1,opacity:"calc(var(--backdrop-opacity) * ".concat(D(v,o),")")}]),a.progressStep(0)),Y.enable(!1),b?A(t,a):k||c(),new Promise((function(t){a.onFinish((function(){k?g&&y?(0,l.r)((function(){g.keyframes((0,n.ev)([],h.WRAPPER_KEYFRAMES,!0)),y.keyframes((0,n.ev)([],h.BACKDROP_KEYFRAMES,!0)),a.progressStart(!0,1-v),p(m=v),u&&m===s[s.length-1]&&(u.scrollY=!0),m>o?S():E(),Y.enable(!0),t()})):(Y.enable(!0),t()):t()}),{oneTimeCallback:!0}).progressEnd(1,0,f?500:0)}))},Y=(0,k.createGesture)({el:r,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:function(t){var e=t.event.target.closest("ion-content");return 1!==(m=d())||!e},onStart:function(){v=void 0!==t.canDismiss&&!0!==t.canDismiss&&0===x,u&&(u.scrollY=!1),(0,l.r)((function(){t.focus()})),a.progressStart(!0,1-m)},onMove:function(t){var e=1-m,r=s.length>1?1-s[1]:void 0,i=e+t.deltaY/f,o=void 0!==r&&i>=r&&v,n=o?.95:.9999,d=o&&void 0!==r?r+B((i-r)/(n-r)):i;b=(0,l.l)(1e-4,d,n),a.progressStep(b)},onEnd:function(t){var e=t.velocityY,r=(t.deltaY+350*e)/f,i=m-r,o=s.reduce((function(t,e){return Math.abs(e-i)<Math.abs(t-i)?e:t}));C({breakpoint:o,breakpointOffset:b,canDismiss:v,animated:!0})}});return{gesture:Y,moveSheetToBreakpoint:C}}(this.el,this.backdropEl,r,i,o,s,this.sortedBreakpoints,(function(){var e;return null!==(e=t.currentBreakpoint)&&void 0!==e?e:0}),(function(){return t.sheetOnDismiss()}),(function(e){t.currentBreakpoint!==e&&(t.currentBreakpoint=e,t.ionBreakpointDidChange.emit({breakpoint:e}))})),c=d.gesture,p=d.moveSheetToBreakpoint;this.gesture=c,this.moveSheetToBreakpoint=p,this.gesture.enable(!0)}},t.prototype.sheetOnDismiss=function(){var t=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((function(){return(0,n.mG)(t,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),[4,this.dismiss(void 0,u.G)];case 1:return t.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))},t.prototype.dismiss=function(t,e){return(0,n.mG)(this,void 0,void 0,(function(){var r,i,o,s,l,c,p,h=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.gestureAnimationDismissing&&e!==u.G?[2,!1]:[4,this.lockController.lock()];case 1:return i=n.sent(),(o="handler"!==e)?[4,this.checkCanDismiss(t,e)]:[3,3];case 2:o=!n.sent(),n.label=3;case 3:return o?(i(),[2,!1]):(s=this.presentingElement,void 0!==s&&"ios"===(0,b.b)(this)&&E(this.statusBarStyle),"undefined"!==typeof window&&this.keyboardOpenCallback&&(window.removeEventListener(v.KEYBOARD_DID_OPEN,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0),l=u.n.get(this)||[],[4,(0,u.g)(this,t,e,"modalLeave",L,I,{presentingEl:s,currentBreakpoint:null!==(r=this.currentBreakpoint)&&void 0!==r?r:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint})]);case 4:return(c=n.sent())?(p=this.getDelegate().delegate,[4,(0,d.d)(p,this.usersElement)]):[3,6];case 5:n.sent(),(0,a.w)((function(){return h.el.classList.remove("show-modal")})),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),l.forEach((function(t){return t.destroy()})),n.label=6;case 6:return this.currentBreakpoint=void 0,this.animation=void 0,i(),[2,c]}}))}))},t.prototype.onDidDismiss=function(){return(0,u.h)(this.el,"ionModalDidDismiss")},t.prototype.onWillDismiss=function(){return(0,u.h)(this.el,"ionModalWillDismiss")},t.prototype.setCurrentBreakpoint=function(t){return(0,n.mG)(this,void 0,void 0,(function(){var e,r,i,o,a,s;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.isSheetModal?this.breakpoints.includes(t)?(r=(e=this).currentBreakpoint,i=e.moveSheetToBreakpoint,o=e.canDismiss,a=e.breakpoints,s=e.animated,r===t?[2]:i?(this.sheetTransition=i({breakpoint:t,breakpointOffset:1-r,canDismiss:void 0!==o&&!0!==o&&0===a[0],animated:s}),[4,this.sheetTransition]):[3,2]):((0,p.p)("Attempted to set invalid breakpoint value ".concat(t,". Please double check that the breakpoint value is part of your defined breakpoints.")),[2]):((0,p.p)("setCurrentBreakpoint is only supported on sheet modals."),[2]);case 1:n.sent(),this.sheetTransition=void 0,n.label=2;case 2:return[2]}}))}))},t.prototype.getCurrentBreakpoint=function(){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){return[2,this.currentBreakpoint]}))}))},t.prototype.moveToNextBreakpoint=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t,e,r,i,o,a,s;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return e=(t=this).breakpoints,r=t.currentBreakpoint,e&&null!=r?(i=e.filter((function(t){return 0!==t})),o=i.indexOf(r),a=(o+1)%i.length,s=i[a],[4,this.setCurrentBreakpoint(s)]):[2,!1];case 1:return n.sent(),[2,!0]}}))}))},t.prototype.render=function(){var t,e=this,r=this,i=r.handle,o=r.isSheetModal,n=r.presentingElement,s=r.htmlAttributes,d=r.handleBehavior,l=r.inheritedAttributes,c=!1!==i&&o,p=(0,b.b)(this),h=void 0!==n&&"ios"===p,u="cycle"===d;return(0,a.h)(a.H,Object.assign({"no-router":!0,tabindex:"-1"},s,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign((t={},t[p]=!0,t["modal-default"]=!h&&!o,t["modal-card"]=h,t["modal-sheet"]=o,t["overlay-hidden"]=!0,t),(0,f.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,a.h)("ion-backdrop",{ref:function(t){return e.backdropEl=t},visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===p&&(0,a.h)("div",{class:"modal-shadow"}),(0,a.h)("div",Object.assign({role:"dialog"},l,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:function(t){return e.wrapperEl=t}}),c&&(0,a.h)("button",{class:"modal-handle",tabIndex:u?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:u?this.onHandleClick:void 0,part:"handle"}),(0,a.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.f)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:!1,configurable:!0}),t}(),G={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};K.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},8527:function(t,e,r){r.r(e),r.d(e,{K:function(){return s},a:function(){return n}});var i,o,n,a=r(5892);(o=i||(i={})).Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",function(t){t.Body="body",t.Ionic="ionic",t.Native="native",t.None="none"}(n||(n={}));var s={getEngine:function(){var t=(0,a.g)();if(null===t||void 0===t?void 0:t.isPluginAvailable("Keyboard"))return t.Plugins.Keyboard},getResizeMode:function(){var t=this.getEngine();return(null===t||void 0===t?void 0:t.getResizeMode)?t.getResizeMode().catch((function(t){if(t.code!==i.Unimplemented)throw t})):Promise.resolve(void 0)}}},903:function(t,e,r){r.r(e),r.d(e,{KEYBOARD_DID_CLOSE:function(){return n},KEYBOARD_DID_OPEN:function(){return o},copyVisualViewport:function(){return k},keyboardDidClose:function(){return b},keyboardDidOpen:function(){return f},keyboardDidResize:function(){return m},resetKeyboardAssist:function(){return l},setKeyboardClose:function(){return u},setKeyboardOpen:function(){return h},startKeyboardAssist:function(){return c},trackViewportChanges:function(){return y}});var i=r(8527),o=(r(5892),r(3023),"ionKeyboardDidShow"),n="ionKeyboardDidHide",a={},s={},d=!1,l=function(){a={},s={},d=!1},c=function(t){if(i.K.getEngine())p(t);else{if(!t.visualViewport)return;s=k(t.visualViewport),t.visualViewport.onresize=function(){y(t),f()||m(t)?h(t):b(t)&&u(t)}}},p=function(t){t.addEventListener("keyboardDidShow",(function(e){return h(t,e)})),t.addEventListener("keyboardDidHide",(function(){return u(t)}))},h=function(t,e){v(t,e),d=!0},u=function(t){g(t),d=!1},f=function(){var t=(a.height-s.height)*s.scale;return!d&&a.width===s.width&&t>150},m=function(t){return d&&!b(t)},b=function(t){return d&&s.height===t.innerHeight},v=function(t,e){var r=e?e.keyboardHeight:t.innerHeight-s.height,i=new CustomEvent(o,{detail:{keyboardHeight:r}});t.dispatchEvent(i)},g=function(t){var e=new CustomEvent(n);t.dispatchEvent(e)},y=function(t){a=Object.assign({},s),s=k(t.visualViewport)},k=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}},6555:function(t,e,r){r.r(e),r.d(e,{c:function(){return o}});var i=r(5971),o=function(){var t;return{lock:function(){return(0,i.mG)(void 0,void 0,void 0,(function(){var e,r;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return e=t,t=new Promise((function(t){return r=t})),void 0===e?[3,2]:[4,e];case 1:i.sent(),i.label=2;case 2:return[2,r]}}))}))}}}}}]);
//# sourceMappingURL=13.dfbf12e8.chunk.js.map